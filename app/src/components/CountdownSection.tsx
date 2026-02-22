import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Sparkle {
    x: number; y: number; vx: number; vy: number;
    life: number; size: number;
}

interface FloatingHeart {
    x: number; y: number; size: number; speed: number;
    drift: number; phase: number; alpha: number;
}

const LINES = [
    { text: 'February 23rd', size: 'large' },
    { text: 'the day everything beautiful began', size: 'normal' },
    { text: 'love found its most beautiful form.', size: 'normal' },
    { text: 'The world became softer, warmer, brighter.', size: 'normal' },
    { text: 'Because you were born.', size: 'normal' },
    { text: 'but it wasn\'t just a date.', size: 'normal' },
    { text: 'It was the moment the universe decided to be gentle.', size: 'normal' },
    { text: 'And it gave me you.', size: 'large' },
];

export default function CosmicCountdown() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        if (!section || !canvas) return;
        const ctx = canvas.getContext('2d')!;

        let w = window.innerWidth;
        let h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        let scrollProgress = 0;
        let isVisible = false;
        let animFrame: number;
        let time = 0;

        // --- Pre-render text lines on offscreen canvases ---
        interface LineData {
            canvas: HTMLCanvasElement;
            text: string;
            fontSize: number;
            textWidth: number;
            x: number; // draw x position on main canvas
            y: number; // draw y position on main canvas
            textLeft: number; // pixel left within offscreen canvas
            textRight: number; // pixel right within offscreen canvas
            penPathY: number[]; // vertical center per column (for sparkler path)
        }

        let lineData: LineData[] = [];

        function buildLines() {
            lineData = [];
            const totalLines = LINES.length;
            const lineHeight = Math.min(h * 0.08, 60);
            const startY = h * 0.18;
            const spacing = (h * 0.65) / totalLines;

            LINES.forEach((line, i) => {
                const fontSize = line.size === 'large'
                    ? Math.min(w * 0.055, 48)
                    : Math.min(w * 0.028, 24);

                // Offscreen canvas for this line
                const oc = document.createElement('canvas');
                oc.width = w;
                oc.height = Math.ceil(fontSize * 2.5);
                const octx = oc.getContext('2d')!;

                octx.clearRect(0, 0, oc.width, oc.height);
                octx.font = line.size === 'large'
                    ? `700 ${fontSize}px "Inter", sans-serif`
                    : `300 ${fontSize}px "Inter", sans-serif`;
                octx.textAlign = 'center';
                octx.textBaseline = 'middle';

                // White text with subtle glow
                octx.shadowColor = 'rgba(255, 255, 255, 0.4)';
                octx.shadowBlur = 8;
                octx.fillStyle = '#FFFFFF';
                octx.fillText(line.text, oc.width / 2, oc.height / 2);
                octx.shadowBlur = 0;

                // Measure text bounds
                const metrics = octx.measureText(line.text);
                const tLeft = Math.max(0, Math.floor(oc.width / 2 - metrics.actualBoundingBoxLeft - 5));
                const tRight = Math.min(oc.width, Math.ceil(oc.width / 2 + metrics.actualBoundingBoxRight + 5));

                // Build pen Y path (center of mass per column)
                const imgData = octx.getImageData(0, 0, oc.width, oc.height);
                const pixels = imgData.data;
                const penY: number[] = [];
                for (let x = tLeft; x <= tRight; x++) {
                    let sumY = 0, count = 0;
                    for (let y = 0; y < oc.height; y++) {
                        if (pixels[(y * oc.width + x) * 4 + 3] > 40) {
                            sumY += y; count++;
                        }
                    }
                    penY.push(count > 0 ? sumY / count : oc.height / 2);
                }

                const drawY = startY + i * spacing;
                lineData.push({
                    canvas: oc,
                    text: line.text,
                    fontSize,
                    textWidth: tRight - tLeft,
                    x: 0,
                    y: drawY - oc.height / 2,
                    textLeft: tLeft,
                    textRight: tRight,
                    penPathY: penY,
                });
            });
        }

        // --- Sparkle particles ---
        const sparkles: Sparkle[] = [];

        // --- Floating gold hearts ---
        const hearts: FloatingHeart[] = [];
        function initHearts() {
            hearts.length = 0;
            for (let i = 0; i < 20; i++) {
                const side = i < 10 ? 'left' : 'right';
                hearts.push({
                    x: side === 'left'
                        ? 15 + Math.random() * w * 0.1
                        : w * 0.9 + Math.random() * w * 0.1 - 15,
                    y: Math.random() * h,
                    size: 6 + Math.random() * 10,
                    speed: 0.3 + Math.random() * 0.5,
                    drift: (Math.random() - 0.5) * 0.4,
                    phase: Math.random() * Math.PI * 2,
                    alpha: 0.15 + Math.random() * 0.25,
                });
            }
        }

        function drawHeart(cx: number, cy: number, size: number, alpha: number) {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.scale(size / 30, size / 30);
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(0, -5);
            ctx.bezierCurveTo(-12, -20, -28, -5, 0, 15);
            ctx.bezierCurveTo(28, -5, 12, -20, 0, -5);
            ctx.closePath();
            ctx.fillStyle = '#FFD700';
            ctx.fill();
            ctx.restore();
        }

        // --- Draw sparkler/star shape ---
        function drawSparkler(x: number, y: number, t: number) {
            const flickerA = 0.8 + 0.2 * Math.sin(t * 0.3);
            const flickerB = 0.7 + 0.3 * Math.sin(t * 0.5 + 1);

            // Outer soft glow
            ctx.globalAlpha = 0.15 * flickerA;
            ctx.beginPath();
            ctx.arc(x, y, 35, 0, Math.PI * 2);
            ctx.fillStyle = '#FFE8B0';
            ctx.fill();

            // Main cross spikes (4 lines)
            for (let i = 0; i < 4; i++) {
                const angle = (i / 4) * Math.PI * 2 + t * 0.04;
                const len = 18 + 7 * Math.sin(t * 0.08 + i * 2);

                ctx.globalAlpha = 0.7 * flickerA;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // Diagonal spikes (4 smaller)
            for (let i = 0; i < 4; i++) {
                const angle = (i / 4) * Math.PI * 2 + Math.PI / 4 + t * 0.025;
                const len = 10 + 4 * Math.sin(t * 0.1 + i * 3);

                ctx.globalAlpha = 0.5 * flickerB;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
                ctx.strokeStyle = 'rgba(255, 240, 200, 0.9)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Tiny random micro-spikes
            for (let i = 0; i < 6; i++) {
                const angle = Math.sin(t * 0.07 + i * 7) * Math.PI * 2;
                const len = 5 + 8 * Math.abs(Math.sin(t * 0.12 + i * 4));

                ctx.globalAlpha = 0.3 * flickerB;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
                ctx.strokeStyle = 'rgba(255, 220, 150, 0.8)';
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            // Medium glow ring
            ctx.globalAlpha = 0.25 * flickerA;
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2);
            ctx.fillStyle = '#FFF8E0';
            ctx.fill();

            // Bright white core
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fill();

            // Inner glow
            ctx.globalAlpha = 0.9;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 240, 0.5)';
            ctx.fill();
        }

        // --- Ambient dust ---
        const dustCount = 30;
        const dust: { x: number; y: number; vy: number; size: number; phase: number }[] = [];
        for (let i = 0; i < dustCount; i++) {
            dust.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vy: -0.1 - Math.random() * 0.2,
                size: 0.5 + Math.random() * 1.2,
                phase: Math.random() * Math.PI * 2,
            });
        }

        // Wait for fonts then build
        document.fonts.ready.then(() => {
            buildLines();
            initHearts();
        });

        const animate = () => {
            if (!isVisible) { animFrame = requestAnimationFrame(animate); return; }

            time++;
            ctx.fillStyle = '#050208';
            ctx.fillRect(0, 0, w, h);

            if (lineData.length === 0) { animFrame = requestAnimationFrame(animate); return; }

            // --- Floating gold hearts ---
            hearts.forEach((ht) => {
                ht.phase += 0.015;
                ht.y -= ht.speed;
                ht.x += ht.drift + Math.sin(ht.phase) * 0.3;
                if (ht.y < -20) { ht.y = h + 20; }
                const pulse = 0.8 + 0.2 * Math.sin(ht.phase * 2);
                drawHeart(ht.x, ht.y, ht.size * pulse, ht.alpha);
            });
            ctx.globalAlpha = 1;

            // --- Ambient dust ---
            dust.forEach((d) => {
                d.phase += 0.01;
                d.y += d.vy;
                d.x += Math.sin(d.phase) * 0.2;
                if (d.y < -5) { d.y = h + 5; d.x = Math.random() * w; }
                ctx.globalAlpha = 0.12 + 0.08 * Math.sin(d.phase);
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 215, 100, 0.8)';
                ctx.fill();
            });
            ctx.globalAlpha = 1;

            // --- Write lines based on scroll ---
            const numLines = lineData.length;
            // Each line gets equal portion of scroll progress
            const lineProgress = scrollProgress * numLines;
            const currentLineIdx = Math.min(Math.floor(lineProgress), numLines - 1);
            const withinLine = lineProgress - currentLineIdx;

            // Draw all completed lines (fully revealed)
            for (let i = 0; i < currentLineIdx; i++) {
                const ld = lineData[i];
                ctx.globalAlpha = 1;
                ctx.drawImage(ld.canvas, 0, ld.y);
            }

            // Draw current line being written (partially revealed)
            if (currentLineIdx < numLines) {
                const ld = lineData[currentLineIdx];
                const revealFraction = Math.min(withinLine / 0.85, 1); // complete at 85% of line's time
                const revealX = ld.textLeft + ld.textWidth * revealFraction;

                // Clip and draw revealed portion
                ctx.save();
                ctx.beginPath();
                ctx.rect(0, ld.y, revealX, ld.canvas.height);
                ctx.clip();
                ctx.globalAlpha = 1;
                ctx.drawImage(ld.canvas, 0, ld.y);
                ctx.restore();

                // Sparkler position
                if (revealFraction < 1) {
                    const pathIdx = Math.min(
                        Math.floor(revealFraction * ld.penPathY.length),
                        ld.penPathY.length - 1
                    );
                    const penX = revealX;
                    const penY = ld.y + (ld.penPathY[pathIdx] || ld.canvas.height / 2);

                    // Draw sparkler
                    drawSparkler(penX, penY, time);

                    // Spawn sparkle particles
                    if (time % 2 === 0) {
                        for (let s = 0; s < 2; s++) {
                            const angle = Math.random() * Math.PI * 2;
                            const speed = 0.3 + Math.random() * 1.5;
                            sparkles.push({
                                x: penX + (Math.random() - 0.5) * 6,
                                y: penY + (Math.random() - 0.5) * 6,
                                vx: Math.cos(angle) * speed,
                                vy: Math.sin(angle) * speed + 0.3,
                                life: 1,
                                size: 0.4 + Math.random() * 2,
                            });
                        }
                    }
                }
            }

            // --- Sparkle particles ---
            for (let i = sparkles.length - 1; i >= 0; i--) {
                const s = sparkles[i];
                s.x += s.vx;
                s.y += s.vy;
                s.vy += 0.02;
                s.vx *= 0.99;
                s.life -= 0.015;

                if (s.life <= 0) { sparkles.splice(i, 1); continue; }

                ctx.globalAlpha = s.life * 0.7;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${42 + Math.random() * 10}, 100%, ${78 + s.life * 15}%)`;
                ctx.fill();
            }
            ctx.globalAlpha = 1;

            animFrame = requestAnimationFrame(animate);
        };

        animate();

        // Visibility
        const observer = new IntersectionObserver(
            ([entry]) => { isVisible = entry.isIntersecting; },
            { threshold: 0.05 }
        );
        observer.observe(section);

        // Scroll trigger — long scroll for 8 lines
        const scrollTrigger = ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: '+=700%',
            pin: true,
            scrub: 1.5,
            onUpdate: (self) => { scrollProgress = self.progress; },
        });

        const handleResize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            buildLines();
            initHearts();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animFrame);
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            scrollTrigger.kill();
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative w-full h-screen overflow-hidden"
            style={{ background: '#050208' }}
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
}
