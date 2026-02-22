import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Firefly {
    x: number; y: number; vx: number; vy: number;
    size: number; glow: number; glowSpeed: number;
    phase: number; caught: boolean; catchAnim: number;
}

interface Sparkle {
    x: number; y: number; vx: number; vy: number;
    life: number; hue: number; size: number;
}

const TOTAL = 5;

const BASE = import.meta.env.BASE_URL;

const CARDS = [
    {
        id: 1,
        image: `${BASE}card1.jpeg`,
        emoji: '👑',
        back: 'Because the way you love isn\'t something you learned. It\'s something you are. All the way through. No seasons. No limits. I just got lucky enough to be loved by one.',
    },
    {
        id: 2,
        image: `${BASE}card2.jpeg`,
        bgPos: 'center 20%',
        emoji: '🌸',
        back: 'Because your heart is clean. In a world that teaches people to protect themselves by becoming hard, you stayed soft. You stayed true. That\'s not weakness. That\'s the rarest kind of courage.',
    },
    {
        id: 3,
        image: `${BASE}card3.jpeg`,
        emoji: '✨',
        back: 'Because you never stopped believing in me. Not once. On the days I couldn\'t see myself clearly, you held the vision steady. And quietly, without knowing it, you helped me get there.',
    },
    {
        id: 4,
        image: `${BASE}card4.jpeg`,
        emoji: '🦋',
        back: 'Because you never let me down. Not in the small things. Not in the ones that mattered most. In a world full of almost, you are someone who actually shows up. Completely. Every time.',
    },
    {
        id: 5,
        image: `${BASE}card5.jpeg`,
        emoji: '🌷',
        back: 'Because you feel everything fully and you\'re not ashamed of it. Your tears are real. Your joy is real. Your love is real. You live honestly from the inside out. And that kind of honesty — it\'s contagious.',
    },
    {
        id: 6,
        image: `${BASE}card6.jpeg`,
        bgPos: 'center 20%',
        emoji: '💫',
        back: 'Because underneath everything you\'re still that little kid. Still pure. Still curious. Still feeling the world like it\'s the first time. That part of you is the most precious thing I know. Happy Birthday, my love. Every single reason leads back to you. Always.',
    },
];

export default function BeginningSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const catalogSectionRef = useRef<HTMLDivElement>(null);
    const catalogTrackRef = useRef<HTMLDivElement>(null);
    const firefliesRef = useRef<Firefly[]>([]);
    const sparklesRef = useRef<Sparkle[]>([]);
    const [caught, setCaught] = useState(0);
    const [jarFull, setJarFull] = useState(false);
    const [showCatalog, setShowCatalog] = useState(false);
    const [flipped, setFlipped] = useState<Record<number, boolean>>({});
    const caughtRef = useRef(0);
    const jarFullRef = useRef(false);
    const heartProgressRef = useRef(0);
    const isVisibleRef = useRef(false);
    const showCatalogRef = useRef(false);

    const toggleFlip = (id: number) => {
        setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
    };

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

    // Firefly game canvas
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
            for (let i = 0; i < 20; i++) fireflies.push(spawnFirefly(w, h));
        }
        const sparkles = sparklesRef.current;

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
            ctx.drawImage(bgStarCanvas, 0, 0);

            if (jarFullRef.current) {
                heartProgressRef.current = Math.min(heartProgressRef.current + 0.025, 1);
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
                    ctx.fillStyle = 'hsl(340, 90%, 65%)';
                    ctx.fill();

                    ctx.globalAlpha = heartEased * shimmer;
                    ctx.beginPath();
                    ctx.arc(px, py, 2, 0, Math.PI * 2);
                    ctx.fillStyle = 'hsl(350, 100%, 85%)';
                    ctx.fill();
                }
                ctx.globalAlpha = 1;

                if (hp >= 1 && !showCatalogRef.current) {
                    showCatalogRef.current = true;
                    setShowCatalog(true);
                }

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
                f.vx *= 0.96; f.vy *= 0.96;
                f.x += f.vx; f.y += f.vy;

                const djx = f.x - jarX, djy = f.y - jarY;
                const dj = Math.sqrt(djx * djx + djy * djy);
                if (dj < 80) { f.vx += (djx / dj) * 0.5; f.vy += (djy / dj) * 0.5; }

                if (f.x < -20) f.x = w + 20;
                if (f.x > w + 20) f.x = -20;
                if (f.y < -20) f.y = h + 20;
                if (f.y > h + 20) f.y = -20;

                f.glow += f.glowSpeed;
                const glowAlpha = 0.4 + 0.6 * Math.abs(Math.sin(f.glow));

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

            for (let i = sparkles.length - 1; i >= 0; i--) {
                const s = sparkles[i];
                s.x += s.vx; s.y += s.vy; s.vy += 0.05; s.life -= 0.02;
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

        const observer = new IntersectionObserver(
            ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
            { threshold: 0.05 }
        );
        observer.observe(section);

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

        const handleResize = () => {
            w = window.innerWidth; h = window.innerHeight;
            canvas.width = w; canvas.height = h;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animFrame);
            observer.disconnect();
            canvas.removeEventListener('click', handleClick);
            canvas.removeEventListener('touchstart', handleClick);
            window.removeEventListener('resize', handleResize);
        };
    }, [spawnFirefly]);

    // GSAP horizontal scroll for catalog
    useEffect(() => {
        if (!showCatalog) return;

        // Small delay to let DOM render
        const timeout = setTimeout(() => {
            const catalogSection = catalogSectionRef.current;
            const track = catalogTrackRef.current;
            if (!catalogSection || !track) return;

            const totalScrollWidth = track.scrollWidth - window.innerWidth;

            const st = ScrollTrigger.create({
                trigger: catalogSection,
                start: 'top top',
                end: () => `+=${totalScrollWidth}`,
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    gsap.set(track, { x: -self.progress * totalScrollWidth });
                },
            });

            return () => st.kill();
        }, 100);

        return () => clearTimeout(timeout);
    }, [showCatalog]);

    return (
        <>
            {/* ======= FIREFLY GAME SECTION ======= */}
            <div
                ref={sectionRef}
                className="relative w-full h-screen overflow-hidden"
                style={{
                    background: '#020510',
                    display: showCatalog ? 'none' : 'block',
                }}
            >
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-pointer" />

                {!jarFull && (
                    <div className="absolute top-8 left-0 right-0 z-10 text-center pointer-events-none" style={{ fontFamily: "'Inter', sans-serif", animation: 'fadeInDown 1s ease-out' }}>
                        <p className="text-sm md:text-base font-light tracking-wide" style={{ color: 'rgba(120, 255, 200, 0.6)' }}>
                            ✨ Tap the fireflies to catch them ✨
                        </p>
                    </div>
                )}

                {jarFull && !showCatalog && (
                    <div className="absolute inset-0 z-10 flex items-end justify-center pb-20 pointer-events-none">
                        <p className="text-2xl md:text-3xl font-light" style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(255, 150, 180, 0.9)', animation: 'fadeInUp 2s ease-out' }}>
                            You caught them all ❤️
                        </p>
                    </div>
                )}
            </div>

            {/* ======= CATALOG SECTION (scroll-driven horizontal) ======= */}
            {showCatalog && (
                <div
                    ref={catalogSectionRef}
                    className="relative w-full h-screen overflow-hidden"
                    style={{
                        background: 'linear-gradient(180deg, #0a0515 0%, #120820 30%, #1a0a2e 60%, #0a0515 100%)',
                        animation: 'catalogFadeIn 1.2s ease-out',
                    }}
                >
                    {/* Floating sparkles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    width: 2 + Math.random() * 4,
                                    height: 2 + Math.random() * 4,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    background: `rgba(255, 215, 0, ${0.15 + Math.random() * 0.25})`,
                                    animation: `sparkleFloat ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite alternate`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 pt-6 pb-3 md:pt-8 md:pb-4 text-center z-20">
                        <div className="flex items-center justify-center gap-3 mb-1">
                            <span className="text-xl">👑</span>
                            <h2
                                className="text-2xl md:text-4xl font-semibold tracking-wide"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                My Little Princess
                            </h2>
                            <span className="text-xl">👑</span>
                        </div>
                        <p
                            className="text-xs font-light tracking-widest uppercase"
                            style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 200, 255, 0.35)' }}
                        >
                            Scroll down to explore · Click a card to flip
                        </p>
                    </div>

                    {/* Horizontal track */}
                    <div
                        ref={catalogTrackRef}
                        className="absolute top-0 left-0 h-full flex items-center gap-8 md:gap-12 pl-8 md:pl-20 pr-[50vw]"
                        style={{ paddingTop: '60px' }}
                    >
                        {CARDS.map((card, idx) => (
                            <div
                                key={card.id}
                                className="flex-shrink-0 cursor-pointer"
                                style={{
                                    perspective: '1200px',
                                    animation: `cardSlideIn 0.8s ease-out ${idx * 0.12}s both`,
                                }}
                                onClick={() => toggleFlip(card.id)}
                            >
                                <div
                                    className="relative transition-transform duration-700"
                                    style={{
                                        width: 'clamp(250px, 35vw, 340px)',
                                        height: 'clamp(340px, 55vh, 460px)',
                                        transformStyle: 'preserve-3d',
                                        transform: flipped[card.id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                    }}
                                >
                                    {/* ===== FRONT ===== */}
                                    <div
                                        className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                        }}
                                    >
                                        {/* Gold frame */}
                                        <div
                                            className="absolute -inset-[3px] rounded-2xl"
                                            style={{
                                                background: 'linear-gradient(135deg, #FFD700, #B8860B, #FFD700, #DAA520, #FFD700)',
                                                boxShadow: '0 0 25px rgba(255, 215, 0, 0.15)',
                                            }}
                                        />
                                        <div className="absolute -inset-[1px] rounded-[14px]" style={{ background: '#1a0a2e' }} />

                                        {/* Content — image with overlay */}
                                        <div
                                            className="relative w-full h-full rounded-xl overflow-hidden flex flex-col items-center justify-end"
                                            style={{
                                                backgroundImage: `url(${card.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: card.bgPos || 'center',
                                            }}
                                        >
                                            {/* Bottom overlay with emoji + text */}
                                            <div
                                                className="w-full flex flex-col items-center gap-1 py-4 px-3"
                                                style={{
                                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.75))',
                                                }}
                                            >
                                                <span className="text-3xl md:text-4xl drop-shadow-lg">{card.emoji}</span>
                                                <p
                                                    className="text-xl md:text-2xl font-semibold italic"
                                                    style={{
                                                        fontFamily: "'Playfair Display', serif",
                                                        color: 'rgba(255, 255, 255, 0.9)',
                                                        textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                                    }}
                                                >
                                                    Because.
                                                </p>
                                                <p
                                                    className="text-[10px] font-light uppercase tracking-widest"
                                                    style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        color: 'rgba(255, 255, 255, 0.45)',
                                                    }}
                                                >
                                                    Tap to reveal
                                                </p>
                                            </div>
                                        </div>

                                        {/* Corner decorations */}
                                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: '#FFD700' }} />
                                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: '#FFD700' }} />
                                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: '#FFD700' }} />
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: '#FFD700' }} />
                                    </div>

                                    {/* ===== BACK ===== */}
                                    <div
                                        className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)',
                                        }}
                                    >
                                        {/* Gold frame */}
                                        <div
                                            className="absolute -inset-[3px] rounded-2xl"
                                            style={{
                                                background: 'linear-gradient(135deg, #FFD700, #B8860B, #FFD700, #DAA520, #FFD700)',
                                                boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)',
                                            }}
                                        />
                                        <div className="absolute -inset-[1px] rounded-[14px]" style={{ background: '#120820' }} />

                                        {/* Back content */}
                                        <div
                                            className="relative w-full h-full rounded-xl flex flex-col items-center justify-center px-6 md:px-8"
                                            style={{
                                                background: 'linear-gradient(180deg, #1a0d2e 0%, #0f0820 50%, #1a0d2e 100%)',
                                            }}
                                        >
                                            {/* Quote mark */}
                                            <span
                                                className="absolute top-4 left-5 text-4xl md:text-5xl leading-none"
                                                style={{ color: 'rgba(255, 215, 0, 0.15)', fontFamily: 'Georgia, serif' }}
                                            >
                                                "
                                            </span>

                                            <p
                                                className="text-sm md:text-base font-light leading-relaxed text-center italic"
                                                style={{
                                                    fontFamily: "'Playfair Display', serif",
                                                    color: 'rgba(255, 240, 220, 0.85)',
                                                    lineHeight: '1.8',
                                                }}
                                            >
                                                {card.back}
                                            </p>

                                            <span
                                                className="absolute bottom-4 right-5 text-4xl md:text-5xl leading-none"
                                                style={{ color: 'rgba(255, 215, 0, 0.15)', fontFamily: 'Georgia, serif' }}
                                            >
                                                "
                                            </span>

                                            <p
                                                className="absolute bottom-3 left-0 right-0 text-center text-xs font-light uppercase tracking-widest"
                                                style={{
                                                    fontFamily: "'Inter', sans-serif",
                                                    color: 'rgba(255, 215, 0, 0.25)',
                                                }}
                                            >
                                                Tap to close
                                            </p>
                                        </div>

                                        {/* Corner decorations */}
                                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: '#FFD700' }} />
                                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: '#FFD700' }} />
                                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: '#FFD700' }} />
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: '#FFD700' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes catalogFadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes cardSlideIn { from { opacity: 0; transform: translateY(40px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
                @keyframes sparkleFloat {
                    0% { opacity: 0.2; transform: translateY(0) scale(1); }
                    100% { opacity: 0.6; transform: translateY(-15px) scale(1.5); }
                }
            `}</style>
        </>
    );
}
