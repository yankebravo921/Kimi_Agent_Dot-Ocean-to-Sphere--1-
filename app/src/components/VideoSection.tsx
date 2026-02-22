import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type VideoSectionProps = {
    sectionRef?: RefObject<HTMLDivElement>;
};

export default function VideoSection({ sectionRef: externalSectionRef }: VideoSectionProps) {
    const internalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [showEndMessage, setShowEndMessage] = useState(false);
    const [heartsActive, setHeartsActive] = useState(false);
    const heartLoopRef = useRef<number | null>(null);

    // Merge internal ref with the external ref passed from App.tsx (needed for music pause)
    const handleSectionRef = useCallback((node: HTMLDivElement | null) => {
        (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (externalSectionRef) {
            (externalSectionRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
    }, [externalSectionRef]);

    useEffect(() => {
        const section = internalRef.current;
        if (!section || !contentRef.current) return;
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 60%', end: 'top 20%', scrub: 1,
                },
            }
        );
    }, []);

    const handlePlay = () => setIsPlaying(true);

    const handleShowEndScreen = () => {
        setShowEndMessage(true);
        triggerHeartBurst();
    };

    const handleReplay = () => {
        setShowEndMessage(false);
        stopHeartBurst();
        setHeartsActive(false);
        setIsPlaying(false);
        // Remount the iframe so Streamable restarts
        setTimeout(() => setIsPlaying(true), 150);
    };

    const triggerHeartBurst = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d')!;

        interface HeartParticle {
            x: number; y: number; vx: number; vy: number;
            size: number; opacity: number; hue: number;
            rotation: number; rotSpeed: number;
        }

        const hearts: HeartParticle[] = [];
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const spawnBurst = () => {
            for (let i = 0; i < 20; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 2 + Math.random() * 6;
                hearts.push({
                    x: centerX + (Math.random() - 0.5) * 100,
                    y: centerY + (Math.random() - 0.5) * 100,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed - 3,
                    size: 8 + Math.random() * 16,
                    opacity: 1,
                    hue: 330 + Math.random() * 30,
                    rotation: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.1,
                });
            }
        };

        const drawHeart = (x: number, y: number, size: number, rotation: number, color: string) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.scale(size / 30, size / 30);
            ctx.beginPath();
            ctx.moveTo(0, -8);
            ctx.bezierCurveTo(-15, -25, -30, -5, 0, 15);
            ctx.moveTo(0, -8);
            ctx.bezierCurveTo(15, -25, 30, -5, 0, 15);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();
        };

        spawnBurst();
        let frameCount = 0;

        const animateHearts = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frameCount++;
            if (frameCount % 15 === 0) spawnBurst();

            for (let i = hearts.length - 1; i >= 0; i--) {
                if (hearts[i].opacity <= 0) hearts.splice(i, 1);
            }

            hearts.forEach((h) => {
                h.x += h.vx; h.y += h.vy;
                h.vy += 0.08; h.opacity -= 0.006;
                h.rotation += h.rotSpeed;
                if (h.opacity > 0) {
                    drawHeart(h.x, h.y, h.size, h.rotation, `hsla(${h.hue}, 80%, 65%, ${h.opacity})`);
                }
            });

            heartLoopRef.current = requestAnimationFrame(animateHearts);
        };
        heartLoopRef.current = requestAnimationFrame(animateHearts);
    };

    const stopHeartBurst = () => {
        if (heartLoopRef.current) {
            cancelAnimationFrame(heartLoopRef.current);
            heartLoopRef.current = null;
        }
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    const toggleHearts = () => {
        if (heartsActive) {
            stopHeartBurst();
            setHeartsActive(false);
        } else {
            triggerHeartBurst();
            setHeartsActive(true);
        }
    };

    return (
        <div
            ref={handleSectionRef}
            className="relative w-full min-h-screen flex items-center justify-center"
            style={{
                background: 'radial-gradient(ellipse at 50% 50%, #0d0a08 0%, #050302 50%, #020101 100%)',
            }}
        >
            {/* Heart burst canvas — sits above everything */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 30 }}
            />

            {/* ── Initial play screen ── */}
            {!isPlaying && !showEndMessage && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-8">
                    <p
                        className="text-lg md:text-xl font-light text-center"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: 'rgba(245, 230, 200, 0.6)',
                        }}
                    >
                        I made this for you.
                    </p>

                    <button
                        onClick={handlePlay}
                        className="group relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
                        style={{
                            background: 'rgba(255, 180, 80, 0.1)',
                            border: '2px solid rgba(255, 180, 80, 0.3)',
                            boxShadow: '0 0 40px rgba(255, 180, 80, 0.1)',
                        }}
                    >
                        <span
                            className="absolute inset-0 rounded-full"
                            style={{
                                border: '1px solid rgba(255, 180, 80, 0.2)',
                                animation: 'pulse-ring 2s ease-in-out infinite',
                            }}
                        />
                        <svg width="28" height="32" viewBox="0 0 28 32" fill="none"
                            className="ml-1 group-hover:scale-110 transition-transform duration-300">
                            <path d="M4 2L26 16L4 30V2Z" fill="rgba(255, 200, 130, 0.9)" />
                        </svg>
                    </button>
                </div>
            )}

            <div ref={contentRef} className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20">

                {/* ── Streamable embed — shown while playing, before end screen ── */}
                {isPlaying && !showEndMessage && (
                    <div className="relative w-full pb-16" style={{ aspectRatio: '16/9' }}>
                        <iframe
                            key={`streamable-${isPlaying}`}
                            src="https://streamable.com/e/8o93nv?autoplay=1"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                            style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                width: '100%',
                                height: '100%',
                            }}
                            title="Birthday Video"
                        />

                        {/* "Finished watching?" button below the video */}
                        <div
                            className="absolute -bottom-2 left-0 right-0 flex justify-center"
                            style={{ zIndex: 5 }}
                        >
                            <button
                                onClick={handleShowEndScreen}
                                className="px-6 py-2 rounded-full text-xs font-light tracking-wide transition-all duration-300 hover:scale-105 whitespace-nowrap"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    background: 'rgba(255, 180, 80, 0.15)',
                                    border: '1px solid rgba(255, 180, 80, 0.3)',
                                    color: 'rgba(255, 200, 130, 0.85)',
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
                                ✨ Finished watching? Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* ── End message after video ── */}
                {showEndMessage && (
                    <div className="flex flex-col items-center gap-8 py-10">
                        <h2
                            className="text-4xl md:text-6xl lg:text-7xl font-light text-center tracking-wide"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                background: 'linear-gradient(135deg, #ffd700 0%, #ff8866 50%, #ff6699 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'glow-text 3s ease-in-out infinite alternate',
                            }}
                        >
                            Happy Birthday sweety ❤
                        </h2>

                        <div className="flex gap-4 mt-4 flex-wrap justify-center">
                            <button
                                onClick={handleReplay}
                                className="px-8 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 hover:scale-105"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    background: 'rgba(255, 180, 80, 0.1)',
                                    border: '1px solid rgba(255, 180, 80, 0.3)',
                                    color: 'rgba(255, 200, 130, 0.9)',
                                }}
                            >
                                Play Again
                            </button>

                            <button
                                onClick={toggleHearts}
                                className="px-8 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 hover:scale-105"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    background: heartsActive ? 'rgba(255, 100, 130, 0.3)' : 'rgba(255, 100, 130, 0.15)',
                                    border: `1px solid rgba(255, 100, 130, ${heartsActive ? '0.6' : '0.3'})`,
                                    color: 'rgba(255, 150, 170, 0.9)',
                                    boxShadow: heartsActive ? '0 0 20px rgba(255, 100, 130, 0.2)' : 'none',
                                }}
                            >
                                {heartsActive ? 'Stop Hearts 💕' : 'I Love You ❤️'}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes pulse-ring {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.15); opacity: 0.5; }
                }
                @keyframes glow-text {
                    0% { filter: brightness(1); }
                    100% { filter: brightness(1.3); }
                }
            `}</style>
        </div>
    );
}
