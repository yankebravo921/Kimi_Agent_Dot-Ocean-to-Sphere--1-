import { useEffect, useRef, useState, useCallback } from 'react';

export default function SunriseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
    const [showYes, setShowYes] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [runCount, setRunCount] = useState(0);
    const answeredRef = useRef(false);
    const sectionVisibleRef = useRef(false);

    // Initialize No button position
    useEffect(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        setNoPos({ x: w / 2 - 70, y: h * 0.55 });
    }, []);

    // Show Yes button after 20 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!answeredRef.current) setShowYes(true);
        }, 20000);
        return () => clearTimeout(timer);
    }, []);

    // Lock scrolling when section is visible and not answered
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = () => {
            if (answeredRef.current) return;
            const rect = section.getBoundingClientRect();
            // Lock when the section's top has reached the viewport top
            if (rect.top <= 5 && rect.bottom >= window.innerHeight * 0.9) {
                // Snap to exact position so full section is visible
                window.scrollTo({ top: section.offsetTop, behavior: 'instant' as ScrollBehavior });
                document.body.style.overflow = 'hidden';
                sectionVisibleRef.current = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = '';
        };
    }, []);

    // Unlock scroll when answered
    useEffect(() => {
        if (answered) {
            document.body.style.overflow = '';
        }
    }, [answered]);

    // Flee function — moves the No button far from cursor
    const fleeFrom = useCallback(
        (mx: number, my: number) => {
            if (answered || !noPos) return;

            const btnW = 140;
            const btnH = 56;
            const padding = 30;
            const maxX = window.innerWidth - btnW - padding;
            const maxY = window.innerHeight - btnH - padding;
            const minY = 220; // stay below header + headline

            // Move to opposite side of screen from cursor with randomness
            let newX: number, newY: number;
            let attempts = 0;

            do {
                newX = padding + Math.random() * (maxX - padding);
                newY = minY + Math.random() * (maxY - minY);
                const dx = mx - (newX + btnW / 2);
                const dy = my - (newY + btnH / 2);
                const dist = Math.sqrt(dx * dx + dy * dy);
                attempts++;
                // Keep trying until we find a spot far enough from cursor
                if (dist > 250 || attempts > 20) break;
            } while (true);

            setNoPos({ x: newX, y: newY });
            setRunCount((c) => c + 1);
        },
        [noPos, answered]
    );

    // Mouse/touch move — flee when cursor approaches
    const handleMouseMove = useCallback(
        (e: React.MouseEvent | React.TouchEvent) => {
            if (answered || !noPos) return;

            let mx: number, my: number;
            if ('touches' in e) {
                mx = e.touches[0].clientX;
                my = e.touches[0].clientY;
            } else {
                mx = e.clientX;
                my = e.clientY;
            }

            const btnW = 140;
            const btnH = 56;
            const btnCX = noPos.x + btnW / 2;
            const btnCY = noPos.y + btnH / 2;
            const dx = mx - btnCX;
            const dy = my - btnCY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Flee when cursor gets within 180px
            if (dist < 180) {
                fleeFrom(mx, my);
            }
        },
        [noPos, answered, fleeFrom]
    );

    // Also flee if they somehow click/tap the No button
    const handleNoClick = useCallback(
        (e: React.MouseEvent | React.TouchEvent) => {
            e.preventDefault();
            e.stopPropagation();
            let mx: number, my: number;
            if ('touches' in e) {
                const touch = (e as React.TouchEvent).touches[0] || (e as React.TouchEvent).changedTouches[0];
                mx = touch.clientX;
                my = touch.clientY;
            } else {
                mx = (e as React.MouseEvent).clientX;
                my = (e as React.MouseEvent).clientY;
            }
            fleeFrom(mx, my);
        },
        [fleeFrom]
    );

    // Heart confetti on Yes click
    const triggerHearts = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        interface Heart {
            x: number; y: number; vx: number; vy: number;
            size: number; rotation: number; rotSpeed: number;
            hue: number; life: number;
        }

        const hearts: Heart[] = [];
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;

        for (let i = 0; i < 100; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 3 + Math.random() * 10;
            hearts.push({
                x: cx, y: cy,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 4,
                size: 8 + Math.random() * 20,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.12,
                hue: 330 + Math.random() * 40,
                life: 1,
            });
        }

        function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, alpha: number) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.scale(size / 30, size / 30);
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(0, -8);
            ctx.bezierCurveTo(-15, -25, -30, -5, 0, 15);
            ctx.bezierCurveTo(30, -5, 15, -25, 0, -8);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();
        }

        let frame: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;
            hearts.forEach((h) => {
                h.x += h.vx; h.y += h.vy;
                h.vy += 0.12; h.vx *= 0.99;
                h.rotation += h.rotSpeed;
                h.life -= 0.005;
                if (h.life > 0) {
                    alive = true;
                    drawHeart(ctx, h.x, h.y, h.size, h.rotation, `hsl(${h.hue}, 85%, 60%)`, h.life);
                }
            });
            if (alive) frame = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(frame);
    }, []);

    const handleYesClick = () => {
        if (answered) return;
        setAnswered(true);
        answeredRef.current = true;
        document.body.style.overflow = '';
        triggerHearts();
    };

    const getRunMessage = () => {
        if (runCount > 15) return "It's REALLY running from you 😂😂";
        if (runCount > 8) return "You can't catch it! 🏃‍♀️💨";
        if (runCount > 3) return 'Haha nice try! 😏';
        return '';
    };

    return (
        <div
            ref={sectionRef}
            className="relative w-full h-screen overflow-hidden"
            style={{ background: '#050210' }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
        >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-30 pointer-events-none" />

            {!answered ? (
                <>
                    {/* Headline */}
                    <div className="absolute top-[12%] left-0 right-0 text-center z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-wide" style={{
                            background: 'linear-gradient(135deg, #FFD700, #FF69B4, #FFD700)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Answer the question
                        </h1>
                    </div>

                    {/* Question */}
                    <div className="absolute top-[28%] left-0 right-0 text-center z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                        <p className="text-2xl md:text-4xl font-light italic" style={{ color: 'rgba(255, 255, 255, 0.9)', letterSpacing: '0.05em' }}>
                            Do You Love Me?
                        </p>
                    </div>

                    {/* Run message */}
                    {runCount > 3 && (
                        <div className="absolute top-[40%] left-0 right-0 text-center z-10 pointer-events-none" style={{ fontFamily: "'Inter', sans-serif", animation: 'fadeIn 0.5s ease-out' }}>
                            <p className="text-base md:text-lg" style={{ color: 'rgba(255, 150, 200, 0.7)' }}>{getRunMessage()}</p>
                        </div>
                    )}

                    {/* NO button (runaway — uncatchable) */}
                    {noPos && (
                        <button
                            onClick={handleNoClick}
                            onTouchStart={handleNoClick}
                            onMouseEnter={(e) => fleeFrom(e.clientX, e.clientY)}
                            className="absolute z-20 select-none"
                            style={{
                                left: noPos.x,
                                top: noPos.y,
                                width: 140,
                                height: 56,
                                border: '2px solid rgba(255, 100, 100, 0.6)',
                                borderRadius: 12,
                                background: 'rgba(255, 50, 50, 0.1)',
                                color: 'rgba(255, 150, 150, 0.9)',
                                fontSize: 18,
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                cursor: 'pointer',
                                backdropFilter: 'blur(8px)',
                                letterSpacing: '0.05em',
                                transition: 'none', // instant teleport, no smooth slide
                                userSelect: 'none',
                                WebkitUserSelect: 'none',
                            }}
                        >
                            No 😐
                        </button>
                    )}

                    {/* YES button (appears after 20s) */}
                    {showYes && (
                        <div className="absolute z-20 flex flex-col items-center gap-3" style={{
                            left: '50%', top: '55%', transform: 'translate(-50%, -50%)',
                            animation: 'popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}>
                            <p className="text-sm md:text-base font-light mb-2" style={{
                                fontFamily: "'Inter', sans-serif", color: 'rgba(255, 200, 150, 0.8)',
                            }}>
                                You have no choice 😤
                            </p>
                            <button
                                onClick={handleYesClick}
                                style={{
                                    width: 180, height: 64,
                                    border: '2px solid rgba(255, 180, 200, 0.6)',
                                    borderRadius: 16,
                                    background: 'linear-gradient(135deg, rgba(255, 100, 150, 0.2), rgba(255, 50, 100, 0.15))',
                                    color: '#FFB6C1', fontSize: 22,
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 600, cursor: 'pointer',
                                    backdropFilter: 'blur(8px)',
                                    letterSpacing: '0.08em',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    boxShadow: '0 0 30px rgba(255, 100, 150, 0.2)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.08)';
                                    e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 100, 150, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 100, 150, 0.2)';
                                }}
                            >
                                Yes ❤️
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4" style={{ animation: 'fadeIn 1s ease-out' }}>
                    <p className="text-3xl md:text-5xl font-bold" style={{
                        fontFamily: "'Playfair Display', serif",
                        background: 'linear-gradient(135deg, #FF69B4, #FFD700, #FF69B4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'pulseGlow 2s ease-in-out infinite',
                    }}>
                        I knew it! ❤️
                    </p>
                </div>
            )}

            <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes popIn { from { opacity: 0; transform: translate(-50%, -50%) scale(0.3); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
        @keyframes pulseGlow { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.3); } }
      `}</style>
        </div>
    );
}
