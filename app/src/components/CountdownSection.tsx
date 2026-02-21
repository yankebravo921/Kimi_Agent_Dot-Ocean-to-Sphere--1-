import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalaxyParticle {
    angle: number;
    radius: number;
    armOffset: number;
    orbitSpeed: number;
    gx: number;
    gy: number;
    tx: number;
    ty: number;
    size: number;
    hue: number;
    brightness: number;
}

function sampleTextPositions(text: string, w: number, h: number, fontSize: number) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#fff';
    ctx.font = `900 ${fontSize}px "Playfair Display", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, w / 2, h / 2);
    const data = ctx.getImageData(0, 0, w, h).data;
    const pts: { x: number; y: number }[] = [];
    for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
            if (data[(y * w + x) * 4] > 128) pts.push({ x, y });
        }
    }
    return pts;
}

export default function CosmicCountdown() {
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
        let mouseX = w / 2;
        let mouseY = h / 2;
        let animFrame: number;
        let isVisible = false;

        const centerX = w / 2;
        const centerY = h / 2;

        // Reduced particle count for performance
        const COUNT = 3000;
        const ARMS = 4;
        const particles: GalaxyParticle[] = [];

        const textW = 512;
        const textH = 256;
        const textPts = sampleTextPositions('23', textW, textH, 220);

        for (let i = 0; i < COUNT; i++) {
            const arm = i % ARMS;
            const armAngle = (arm / ARMS) * Math.PI * 2;
            const dist = Math.pow(Math.random(), 0.6) * Math.min(w, h) * 0.42;
            const spiralAngle = armAngle + dist * 0.008 + (Math.random() - 0.5) * 0.6;
            const scatter = (Math.random() - 0.5) * (30 + dist * 0.15);

            const tp = textPts[i % textPts.length];
            const txNorm = (tp.x / textW - 0.5) * Math.min(w, h) * 0.7 + centerX;
            const tyNorm = (tp.y / textH - 0.5) * Math.min(w, h) * 0.35 + centerY;

            particles.push({
                angle: spiralAngle,
                radius: dist,
                armOffset: scatter,
                orbitSpeed: 0.0003 + Math.random() * 0.0005,
                gx: 0, gy: 0,
                tx: txNorm + (Math.random() - 0.5) * 3,
                ty: tyNorm + (Math.random() - 0.5) * 3,
                size: 0.8 + Math.random() * 2,
                hue: 260 + Math.random() * 80,
                brightness: 0.4 + Math.random() * 0.6,
            });
        }

        const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
        const onTouchMove = (e: TouchEvent) => { mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY; };
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove);

        let time = 0;

        const animate = () => {
            if (!isVisible) { animFrame = requestAnimationFrame(animate); return; }

            time += 1;
            ctx.fillStyle = 'rgba(3, 2, 8, 0.15)';
            ctx.fillRect(0, 0, w, h);

            const morphT = Math.min(scrollProgress / 0.6, 1);
            const eased = morphT * morphT * (3 - 2 * morphT);
            const gravStrength = 80 * (1 - eased);

            particles.forEach((p) => {
                p.angle += p.orbitSpeed;

                const gx = centerX + Math.cos(p.angle) * p.radius + Math.cos(p.angle + Math.PI / 2) * p.armOffset;
                const gy = centerY + Math.sin(p.angle) * p.radius + Math.sin(p.angle + Math.PI / 2) * p.armOffset;

                const dmx = mouseX - gx;
                const dmy = mouseY - gy;
                const distMouse = Math.sqrt(dmx * dmx + dmy * dmy) + 1;
                const grav = Math.min(gravStrength / distMouse, 5);
                p.gx = gx + (dmx / distMouse) * grav;
                p.gy = gy + (dmy / distMouse) * grav;

                const x = p.gx * (1 - eased) + p.tx * eased;
                const y = p.gy * (1 - eased) + p.ty * eased;

                const alpha = p.brightness * (0.5 + 0.5 * Math.sin(time * 0.01 + p.angle * 3));
                const sz = p.size * (1 + eased * 0.3);
                const hue = p.hue + eased * 30;

                // Simple circle draw (NO gradients — huge perf win)
                ctx.globalAlpha = alpha * 0.3;
                ctx.beginPath();
                ctx.arc(x, y, sz * 3, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
                ctx.fill();

                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(x, y, sz * 0.7, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${hue}, 90%, 85%)`;
                ctx.fill();
            });

            ctx.globalAlpha = 1;

            animFrame = requestAnimationFrame(animate);
        };

        ctx.fillStyle = '#030208';
        ctx.fillRect(0, 0, w, h);
        animate();

        // Visibility observer — pause when off-screen
        const observer = new IntersectionObserver(
            ([entry]) => { isVisible = entry.isIntersecting; },
            { threshold: 0.05 }
        );
        observer.observe(sectionRef.current);

        const scrollTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=300%',
            pin: true,
            scrub: 1.5,
            onUpdate: (self) => { scrollProgress = self.progress; },
        });

        const handleResize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
        };
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
        <div ref={sectionRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#030208' }}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
}
