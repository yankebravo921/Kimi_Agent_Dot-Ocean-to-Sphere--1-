import { useEffect, useRef, useState } from 'react';

interface Lantern {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    vx: number;
    vy: number;
    size: number;
    glow: number;
    glowSpeed: number;
    hue: number;
    age: number;
    forming: boolean;
}

function getTextPositions(
    text: string,
    canvasW: number,
    canvasH: number,
    fontSize: number,
    spacing: number
): { x: number; y: number }[] {
    const canvas = document.createElement('canvas');
    canvas.width = canvasW;
    canvas.height = canvasH;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvasW, canvasH);

    ctx.fillStyle = '#fff';
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvasW / 2, canvasH / 2);

    const imageData = ctx.getImageData(0, 0, canvasW, canvasH);
    const pixels = imageData.data;
    const positions: { x: number; y: number }[] = [];

    for (let y = 0; y < canvasH; y += spacing) {
        for (let x = 0; x < canvasW; x += spacing) {
            const idx = (y * canvasW + x) * 4;
            if (pixels[idx] > 128) {
                positions.push({ x, y });
            }
        }
    }
    return positions;
}

export default function PromiseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const lanternsRef = useRef<Lantern[]>([]);
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const formingRef = useRef(false);
    const isVisibleRef = useRef(false);
    const textPosRef = useRef<{ x: number; y: number }[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const section = sectionRef.current;
        if (!canvas || !section) return;
        const ctx = canvas.getContext('2d')!;

        let w = window.innerWidth;
        let h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        const lanterns = lanternsRef.current;

        // Pre-render background (stars)
        const bgCanvas = document.createElement('canvas');
        bgCanvas.width = w;
        bgCanvas.height = h;
        const bgCtx = bgCanvas.getContext('2d')!;
        const skyGrad = bgCtx.createLinearGradient(0, 0, 0, h);
        skyGrad.addColorStop(0, '#050a19');
        skyGrad.addColorStop(0.6, '#030610');
        skyGrad.addColorStop(1, '#020408');
        bgCtx.fillStyle = skyGrad;
        bgCtx.fillRect(0, 0, w, h);
        for (let i = 0; i < 150; i++) {
            bgCtx.beginPath();
            bgCtx.arc(Math.random() * w, Math.random() * h, 0.3 + Math.random() * 1.2, 0, Math.PI * 2);
            bgCtx.fillStyle = `rgba(200, 210, 255, ${0.2 + Math.random() * 0.4})`;
            bgCtx.fill();
        }

        // "I ❤ YOU" text positions for formation — BIG
        const textCanvasW = 512;
        const textCanvasH = 160;
        const fontSize = 110;
        const rawPositions = getTextPositions('I ❤ YOU', textCanvasW, textCanvasH, fontSize, 10);

        // Scale to fill most of the screen
        const scaleX = (w * 0.85) / textCanvasW;
        const scaleY = (h * 0.5) / textCanvasH;
        const scale = Math.min(scaleX, scaleY);
        const offsetX = (w - textCanvasW * scale) / 2;
        const offsetY = (h * 0.45) - (textCanvasH * scale) / 2;

        textPosRef.current = rawPositions.map((p) => ({
            x: p.x * scale + offsetX,
            y: p.y * scale + offsetY,
        }));

        let animFrame: number;
        let time = 0;

        const animate = () => {
            if (!isVisibleRef.current) { animFrame = requestAnimationFrame(animate); return; }

            time++;
            ctx.drawImage(bgCanvas, 0, 0);

            // Start forming "I ❤ YOU" after 12 lanterns
            if (countRef.current >= 8 && !formingRef.current) {
                formingRef.current = true;
                lanterns.forEach((l, i) => {
                    l.forming = true;
                    const tp = textPosRef.current[i % textPosRef.current.length];
                    l.targetX = tp.x + (Math.random() - 0.5) * 6;
                    l.targetY = tp.y + (Math.random() - 0.5) * 6;
                });
            }

            // Draw lanterns
            lanterns.forEach((l) => {
                l.age++;
                l.glow += l.glowSpeed;

                if (l.forming) {
                    l.vx += (l.targetX - l.x) * 0.003;
                    l.vy += (l.targetY - l.y) * 0.003;
                    l.vx *= 0.96;
                    l.vy *= 0.96;
                } else {
                    l.vy -= 0.01;
                    l.vx += Math.sin(time * 0.005 + l.x * 0.01) * 0.02;
                    l.vx *= 0.99;
                    l.vy *= 0.99;
                }

                l.x += l.vx;
                l.y += l.vy;

                const flickerAlpha = 0.6 + 0.4 * Math.sin(l.glow);
                const lanternAlpha = Math.min(l.age / 30, 1) * flickerAlpha;

                // Outer glow
                ctx.globalAlpha = lanternAlpha * 0.08;
                ctx.beginPath();
                ctx.arc(l.x, l.y, l.size * 8, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${l.hue}, 90%, 60%)`;
                ctx.fill();

                // Lantern body
                const bw = l.size * 2.5;
                const bh = l.size * 3.5;
                ctx.globalAlpha = lanternAlpha * 0.8;
                ctx.fillStyle = `hsl(${l.hue}, 85%, 60%)`;
                ctx.beginPath();
                ctx.roundRect(l.x - bw / 2, l.y - bh / 2, bw, bh, 4);
                ctx.fill();

                // Inner core
                ctx.globalAlpha = lanternAlpha * 0.9;
                ctx.beginPath();
                ctx.arc(l.x, l.y, l.size * 0.8, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${l.hue - 10}, 100%, 88%)`;
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            animFrame = requestAnimationFrame(animate);
        };
        animate();

        // Visibility
        const observer = new IntersectionObserver(
            ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
            { threshold: 0.05 }
        );
        observer.observe(section);

        // Click to release lanterns — 5 per click for fast fill
        const LANTERNS_PER_CLICK = 5;
        const handleClick = (e: MouseEvent | TouchEvent) => {
            let cx: number, cy: number;
            if ('touches' in e) { cx = e.touches[0].clientX; cy = e.touches[0].clientY; }
            else { cx = e.clientX; cy = e.clientY; }

            for (let n = 0; n < LANTERNS_PER_CLICK; n++) {
                const spread = 30;
                const spawnX = cx + (Math.random() - 0.5) * spread;
                const spawnY = cy + (Math.random() - 0.5) * spread;

                const lantern: Lantern = {
                    x: spawnX, y: spawnY,
                    targetX: spawnX, targetY: spawnY - 200,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: -0.5 - Math.random() * 0.8,
                    size: 5 + Math.random() * 3,
                    glow: Math.random() * Math.PI * 2,
                    glowSpeed: 0.03 + Math.random() * 0.03,
                    hue: 25 + Math.random() * 20,
                    age: 0,
                    forming: formingRef.current,
                };

                if (formingRef.current) {
                    const tp = textPosRef.current[lanterns.length % textPosRef.current.length];
                    lantern.targetX = tp.x + (Math.random() - 0.5) * 6;
                    lantern.targetY = tp.y + (Math.random() - 0.5) * 6;
                }

                lanterns.push(lantern);
            }
            countRef.current += LANTERNS_PER_CLICK;
            setCount(countRef.current);
        };

        canvas.addEventListener('click', handleClick);
        canvas.addEventListener('touchstart', handleClick);

        const handleResize = () => { w = window.innerWidth; h = window.innerHeight; canvas.width = w; canvas.height = h; };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animFrame);
            observer.disconnect();
            canvas.removeEventListener('click', handleClick);
            canvas.removeEventListener('touchstart', handleClick);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#020408' }}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-pointer" />

            {/* Instruction — big, glowing, visible */}
            <div className="absolute bottom-10 left-0 right-0 z-10 text-center pointer-events-none">
                <p
                    className="text-base md:text-xl font-medium tracking-wide"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        color: count >= 40
                            ? 'rgba(255, 200, 120, 0.9)'
                            : 'rgba(255, 200, 120, 0.85)',
                        textShadow: '0 0 15px rgba(255, 180, 80, 0.4), 0 0 30px rgba(255, 150, 50, 0.2)',
                        transition: 'color 1s ease',
                    }}
                >
                    {count >= 40
                        ? '✨ Your lanterns are forming something beautiful ✨'
                        : `🏮 Tap anywhere to release a lantern — ${count} released`}
                </p>
            </div>
        </div>
    );
}
