import { useEffect, useRef, useState, useCallback } from 'react';

interface Firefly {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    glow: number;
    glowSpeed: number;
    phase: number;
    caught: boolean;
    catchAnim: number;
}

interface Sparkle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    hue: number;
    size: number;
}

export default function BeginningSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const firefliesRef = useRef<Firefly[]>([]);
    const sparklesRef = useRef<Sparkle[]>([]);
    const [caught, setCaught] = useState(0);
    const [jarFull, setJarFull] = useState(false);
    const caughtRef = useRef(0);
    const jarFullRef = useRef(false);
    const heartProgressRef = useRef(0);
    const isVisibleRef = useRef(false);
    const TOTAL = 15;

    const spawnFirefly = useCallback((w: number, h: number): Firefly => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: 3 + Math.random() * 4,
        glow: Math.random() * Math.PI * 2,
        glowSpeed: 0.03 + Math.random() * 0.04,
        phase: Math.random() * 100,
        caught: false,
        catchAnim: 0,
    }), []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const section = sectionRef.current;
        if (!canvas || !section) return;
        const ctx = canvas.getContext('2d')!;

        let w = window.innerWidth;
        let h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        const fireflies = firefliesRef.current;
        if (fireflies.length === 0) {
            for (let i = 0; i < 30; i++) fireflies.push(spawnFirefly(w, h));
        }
        const sparkles = sparklesRef.current;

        // Pre-generate background stars (static, drawn once)
        const bgStarCanvas = document.createElement('canvas');
        bgStarCanvas.width = w;
        bgStarCanvas.height = h;
        const bgCtx = bgStarCanvas.getContext('2d')!;
        bgCtx.fillStyle = '#020510';
        bgCtx.fillRect(0, 0, w, h);
        for (let i = 0; i < 120; i++) {
            const sx = Math.random() * w;
            const sy = Math.random() * h;
            const ss = 0.3 + Math.random() * 1.2;
            bgCtx.beginPath();
            bgCtx.arc(sx, sy, ss, 0, Math.PI * 2);
            bgCtx.fillStyle = `rgba(180, 200, 255, ${0.2 + Math.random() * 0.4})`;
            bgCtx.fill();
        }

        const jarX = w / 2;
        const jarY = h / 2;
        const jarW = 60;
        const jarH = 90;

        let animFrame: number;
        let time = 0;

        const animate = () => {
            if (!isVisibleRef.current) { animFrame = requestAnimationFrame(animate); return; }

            time++;
            // Draw pre-rendered background
            ctx.drawImage(bgStarCanvas, 0, 0);

            // Heart burst mode
            if (jarFullRef.current) {
                heartProgressRef.current = Math.min(heartProgressRef.current + 0.008, 1);
                const hp = heartProgressRef.current;
                const heartEased = hp * hp * (3 - 2 * hp);
                const heartSize = 120 * heartEased;

                for (let a = 0; a < Math.PI * 2; a += 0.06) {
                    const hx = 16 * Math.pow(Math.sin(a), 3);
                    const hy = -(13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a));
                    const px = jarX + (hx / 16) * heartSize;
                    const py = jarY + (hy / 16) * heartSize - 10;
                    const shimmer = 0.6 + 0.4 * Math.sin(time * 0.05 + a * 5);

                    ctx.globalAlpha = heartEased * shimmer * 0.4;
                    ctx.beginPath();
                    ctx.arc(px, py, 6, 0, Math.PI * 2);
                    ctx.fillStyle = `hsl(340, 90%, 65%)`;
                    ctx.fill();

                    ctx.globalAlpha = heartEased * shimmer;
                    ctx.beginPath();
                    ctx.arc(px, py, 2, 0, Math.PI * 2);
                    ctx.fillStyle = `hsl(350, 100%, 85%)`;
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
                animFrame = requestAnimationFrame(animate);
                return;
            }

            // Jar
            const fillRatio = caughtRef.current / TOTAL;
            ctx.strokeStyle = 'rgba(150, 200, 255, 0.2)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(jarX - jarW / 2, jarY - jarH / 2, jarW, jarH, 8);
            ctx.stroke();
            ctx.beginPath();
            ctx.roundRect(jarX - jarW / 2 - 4, jarY - jarH / 2 - 14, jarW + 8, 14, [6, 6, 0, 0]);
            ctx.strokeStyle = 'rgba(150, 200, 255, 0.3)';
            ctx.stroke();

            if (fillRatio > 0) {
                const fillH = jarH * fillRatio;
                const fillY = jarY + jarH / 2 - fillH;
                ctx.fillStyle = `rgba(100, 255, 200, ${0.1 + fillRatio * 0.25})`;
                ctx.beginPath();
                ctx.roundRect(jarX - jarW / 2 + 2, fillY, jarW - 4, fillH, [0, 0, 6, 6]);
                ctx.fill();
            }

            ctx.fillStyle = 'rgba(150, 200, 255, 0.5)';
            ctx.font = '14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(`${caughtRef.current} / ${TOTAL}`, jarX, jarY + jarH / 2 + 24);

            // Fireflies
            fireflies.forEach((f) => {
                if (f.caught) {
                    f.catchAnim = Math.min(f.catchAnim + 0.04, 1);
                    const t = f.catchAnim * f.catchAnim * (3 - 2 * f.catchAnim);
                    f.x += (jarX - f.x) * t * 0.15;
                    f.y += (jarY - f.y) * t * 0.15;
                    if (f.catchAnim >= 0.95) Object.assign(f, spawnFirefly(w, h));
                    return;
                }

                f.phase += 0.01;
                f.vx += Math.sin(f.phase * 1.3) * 0.1 + (Math.random() - 0.5) * 0.15;
                f.vy += Math.cos(f.phase * 0.9) * 0.1 + (Math.random() - 0.5) * 0.15;
                f.vx *= 0.96;
                f.vy *= 0.96;
                f.x += f.vx;
                f.y += f.vy;

                const djx = f.x - jarX;
                const djy = f.y - jarY;
                const dj = Math.sqrt(djx * djx + djy * djy);
                if (dj < 80) { f.vx += (djx / dj) * 0.5; f.vy += (djy / dj) * 0.5; }

                if (f.x < -20) f.x = w + 20;
                if (f.x > w + 20) f.x = -20;
                if (f.y < -20) f.y = h + 20;
                if (f.y > h + 20) f.y = -20;

                f.glow += f.glowSpeed;
                const glowAlpha = 0.4 + 0.6 * Math.abs(Math.sin(f.glow));

                // Simple glow (no gradient)
                ctx.globalAlpha = glowAlpha * 0.2;
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.size * 5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgb(120, 255, 200)';
                ctx.fill();

                ctx.globalAlpha = glowAlpha;
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgb(180, 255, 230)';
                ctx.fill();
            });
            ctx.globalAlpha = 1;

            // Sparkles
            for (let i = sparkles.length - 1; i >= 0; i--) {
                const s = sparkles[i];
                s.x += s.vx;
                s.y += s.vy;
                s.vy += 0.05;
                s.life -= 0.02;
                if (s.life <= 0) { sparkles.splice(i, 1); continue; }
                ctx.globalAlpha = s.life;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${s.hue}, 90%, 75%)`;
                ctx.fill();
            }
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

        // Click to catch
        const handleClick = (e: MouseEvent | TouchEvent) => {
            if (jarFullRef.current) return;
            const rect = canvas.getBoundingClientRect();
            let cx: number, cy: number;
            if ('touches' in e) { cx = e.touches[0].clientX - rect.left; cy = e.touches[0].clientY - rect.top; }
            else { cx = e.clientX - rect.left; cy = e.clientY - rect.top; }

            for (const f of fireflies) {
                if (f.caught) continue;
                const dx = cx - f.x, dy = cy - f.y;
                if (Math.sqrt(dx * dx + dy * dy) < 35) {
                    f.caught = true;
                    f.catchAnim = 0;
                    caughtRef.current++;
                    setCaught(caughtRef.current);
                    for (let s = 0; s < 10; s++) {
                        const angle = Math.random() * Math.PI * 2;
                        const speed = 1 + Math.random() * 3;
                        sparkles.push({ x: f.x, y: f.y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, hue: 140 + Math.random() * 40, size: 2 + Math.random() * 3 });
                    }
                    if (caughtRef.current >= TOTAL) { jarFullRef.current = true; setJarFull(true); }
                    break;
                }
            }
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
    }, [spawnFirefly]);

    return (
        <div ref={sectionRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#020510' }}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-pointer" />
            {!jarFull && (
                <div className="absolute top-8 left-0 right-0 z-10 text-center pointer-events-none" style={{ fontFamily: "'Inter', sans-serif", animation: 'fadeInDown 1s ease-out' }}>
                    <p className="text-sm md:text-base font-light tracking-wide" style={{ color: 'rgba(120, 255, 200, 0.6)' }}>✨ Tap the fireflies to catch them ✨</p>
                </div>
            )}
            {jarFull && (
                <div className="absolute inset-0 z-10 flex items-end justify-center pb-20 pointer-events-none">
                    <p className="text-2xl md:text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(255, 150, 180, 0.9)', animation: 'fadeInUp 2s ease-out' }}>You caught them all ❤️</p>
                </div>
            )}
            <style>{`
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
        </div>
    );
}
