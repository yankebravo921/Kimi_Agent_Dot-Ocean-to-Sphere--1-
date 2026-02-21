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

export default function PromiseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const lanternsRef = useRef<Lantern[]>([]);
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const formingRef = useRef(false);
    const isVisibleRef = useRef(false);

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

        // Pre-render background (stars baked in)
        const bgCanvas = document.createElement('canvas');
        bgCanvas.width = w;
        bgCanvas.height = h;
        const bgCtx = bgCanvas.getContext('2d')!;
        // Sky gradient
        const skyGrad = bgCtx.createLinearGradient(0, 0, 0, h);
        skyGrad.addColorStop(0, '#050a19');
        skyGrad.addColorStop(0.6, '#030610');
        skyGrad.addColorStop(1, '#020408');
        bgCtx.fillStyle = skyGrad;
        bgCtx.fillRect(0, 0, w, h);
        // Stars
        for (let i = 0; i < 150; i++) {
            bgCtx.beginPath();
            bgCtx.arc(Math.random() * w, Math.random() * h, 0.3 + Math.random() * 1.2, 0, Math.PI * 2);
            bgCtx.fillStyle = `rgba(200, 210, 255, ${0.2 + Math.random() * 0.4})`;
            bgCtx.fill();
        }

        // Heart formation targets
        const heartPositions: { x: number; y: number }[] = [];
        const heartCX = w / 2;
        const heartCY = h * 0.4;
        const heartScale = Math.min(w, h) * 0.15;
        for (let a = 0; a < Math.PI * 2; a += 0.25) {
            const hx = 16 * Math.pow(Math.sin(a), 3);
            const hy = -(13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a));
            heartPositions.push({
                x: heartCX + (hx / 16) * heartScale,
                y: heartCY + (hy / 16) * heartScale,
            });
        }

        let animFrame: number;
        let time = 0;

        const animate = () => {
            if (!isVisibleRef.current) { animFrame = requestAnimationFrame(animate); return; }

            time++;
            ctx.drawImage(bgCanvas, 0, 0);

            // Start forming heart after 12 lanterns
            if (countRef.current >= 12 && !formingRef.current) {
                formingRef.current = true;
                lanterns.forEach((l, i) => {
                    l.forming = true;
                    const hp = heartPositions[i % heartPositions.length];
                    l.targetX = hp.x + (Math.random() - 0.5) * 10;
                    l.targetY = hp.y + (Math.random() - 0.5) * 10;
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

                // Outer glow (simple circle, no gradient)
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

        // Click to release lantern
        const handleClick = (e: MouseEvent | TouchEvent) => {
            let cx: number, cy: number;
            if ('touches' in e) { cx = e.touches[0].clientX; cy = e.touches[0].clientY; }
            else { cx = e.clientX; cy = e.clientY; }

            const lantern: Lantern = {
                x: cx, y: cy,
                targetX: cx, targetY: cy - 200,
                vx: (Math.random() - 0.5) * 0.5,
                vy: -0.5 - Math.random() * 0.5,
                size: 5 + Math.random() * 3,
                glow: Math.random() * Math.PI * 2,
                glowSpeed: 0.03 + Math.random() * 0.03,
                hue: 25 + Math.random() * 20,
                age: 0,
                forming: formingRef.current,
            };

            if (formingRef.current) {
                const hp = heartPositions[lanterns.length % heartPositions.length];
                lantern.targetX = hp.x + (Math.random() - 0.5) * 10;
                lantern.targetY = hp.y + (Math.random() - 0.5) * 10;
            }

            lanterns.push(lantern);
            countRef.current++;
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
            <div className="absolute bottom-10 left-0 right-0 z-10 text-center pointer-events-none">
                <p className="text-sm md:text-base font-light tracking-wide" style={{
                    fontFamily: "'Inter', sans-serif",
                    color: count >= 12 ? 'rgba(255, 180, 120, 0.7)' : 'rgba(200, 180, 150, 0.5)',
                    transition: 'color 1s ease',
                }}>
                    {count >= 12 ? '✨ Your wishes are forming something beautiful ✨' : `🏮 Tap anywhere to release a lantern — ${count} released`}
                </p>
            </div>
        </div>
    );
}
