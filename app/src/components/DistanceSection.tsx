import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TunnelStar {
    x: number;
    y: number;
    z: number;
    px: number;
    py: number;
    size: number;
    hue: number;
}

export default function DistanceSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')!;
        let w = window.innerWidth;
        let h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        let scrollProgress = 0;
        let mouseX = 0.5;
        let mouseY = 0.5;
        let animFrame: number;
        let isVisible = false;

        const STAR_COUNT = 600;
        const MAX_DEPTH = 1500;
        const stars: TunnelStar[] = [];

        const resetStar = (s: TunnelStar) => {
            const angle = Math.random() * Math.PI * 2;
            const dist = 50 + Math.random() * 400;
            s.x = Math.cos(angle) * dist;
            s.y = Math.sin(angle) * dist;
            s.z = MAX_DEPTH;
            s.px = 0;
            s.py = 0;
            s.size = 0.5 + Math.random() * 2;
            s.hue = 200 + Math.random() * 60;
        };

        for (let i = 0; i < STAR_COUNT; i++) {
            const s: TunnelStar = { x: 0, y: 0, z: 0, px: 0, py: 0, size: 1, hue: 220 };
            resetStar(s);
            s.z = Math.random() * MAX_DEPTH;
            stars.push(s);
        }

        const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX / w; mouseY = e.clientY / h; };
        const onTouchMove = (e: TouchEvent) => { mouseX = e.touches[0].clientX / w; mouseY = e.touches[0].clientY / h; };
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove);

        const animate = () => {
            if (!isVisible) { animFrame = requestAnimationFrame(animate); return; }

            // Motion trail clear
            ctx.fillStyle = 'rgba(2, 3, 12, 0.25)';
            ctx.fillRect(0, 0, w, h);

            const cx = w / 2;
            const cy = h / 2;
            const tiltX = (mouseX - 0.5) * 150;
            const tiltY = (mouseY - 0.5) * 150;
            const speedCurve = Math.sin(scrollProgress * Math.PI);
            const speed = 3 + speedCurve * 20;
            const hueShift = scrollProgress * 120;

            stars.forEach((s) => {
                s.z -= speed;
                if (s.z <= 1) resetStar(s);

                const fov = 400;
                const projX = (s.x / s.z) * fov + cx + tiltX * (1 - s.z / MAX_DEPTH);
                const projY = (s.y / s.z) * fov + cy + tiltY * (1 - s.z / MAX_DEPTH);
                const depth = 1 - s.z / MAX_DEPTH;
                const alpha = depth * 0.8;
                const hue = s.hue + hueShift;

                // Streak line (no gradient — just line)
                if (s.px !== 0 && s.py !== 0) {
                    ctx.globalAlpha = alpha * 0.6;
                    ctx.beginPath();
                    ctx.moveTo(s.px, s.py);
                    ctx.lineTo(projX, projY);
                    ctx.strokeStyle = `hsl(${hue}, 70%, 65%)`;
                    ctx.lineWidth = s.size * depth * 2;
                    ctx.stroke();
                }

                // Star point (simple circle, no gradient)
                const pointSize = s.size * depth * 3;
                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(projX, projY, Math.max(pointSize, 0.5), 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${hue}, 90%, 85%)`;
                ctx.fill();

                s.px = projX;
                s.py = projY;
            });

            ctx.globalAlpha = 1;
            animFrame = requestAnimationFrame(animate);
        };

        ctx.fillStyle = '#02030c';
        ctx.fillRect(0, 0, w, h);
        animate();

        // Visibility
        const observer = new IntersectionObserver(
            ([entry]) => { isVisible = entry.isIntersecting; },
            { threshold: 0.05 }
        );
        observer.observe(sectionRef.current);

        const scrollTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=350%',
            pin: true,
            scrub: 1,
            onUpdate: (self) => { scrollProgress = self.progress; },
        });

        const handleResize = () => { w = window.innerWidth; h = window.innerHeight; canvas.width = w; canvas.height = h; };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animFrame);
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            scrollTrigger.kill();
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#02030c' }}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
}
