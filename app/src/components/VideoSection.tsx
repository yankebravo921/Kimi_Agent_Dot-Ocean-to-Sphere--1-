import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showEndMessage, setShowEndMessage] = useState(false);

    // Heart confetti burst
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Fade in on scroll
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        end: 'top 20%',
                        scrub: 1,
                    },
                }
            );
        }
    }, []);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoEnd = () => {
        setShowEndMessage(true);
        triggerHeartBurst();
    };

    const handleReplay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setShowEndMessage(false);
        }
    };

    const triggerHeartBurst = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d')!;

        interface HeartParticle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
            hue: number;
            rotation: number;
            rotSpeed: number;
        }

        const hearts: HeartParticle[] = [];
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        for (let i = 0; i < 60; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 6;
            hearts.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                size: 8 + Math.random() * 16,
                opacity: 1,
                hue: 330 + Math.random() * 30,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.1,
            });
        }

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

        let frame: number;
        const animateHearts = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let alive = false;
            hearts.forEach((h) => {
                h.x += h.vx;
                h.y += h.vy;
                h.vy += 0.1; // gravity
                h.opacity -= 0.008;
                h.rotation += h.rotSpeed;

                if (h.opacity > 0) {
                    alive = true;
                    drawHeart(h.x, h.y, h.size, h.rotation, `hsla(${h.hue}, 80%, 65%, ${h.opacity})`);
                }
            });

            if (alive) {
                frame = requestAnimationFrame(animateHearts);
            }
        };
        animateHearts();
    };

    return (
        <div
            ref={sectionRef}
            className="relative w-full min-h-screen flex items-center justify-center"
            style={{
                background: 'radial-gradient(ellipse at 50% 50%, #0d0a08 0%, #050302 50%, #020101 100%)',
            }}
        >
            {/* Heart burst canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 30 }}
            />

            <div ref={contentRef} className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20">
                {!isPlaying && !showEndMessage && (
                    <div className="flex flex-col items-center gap-8">
                        <p
                            className="text-lg md:text-xl font-light text-center"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                color: 'rgba(245, 230, 200, 0.6)',
                            }}
                        >
                            I made this for you.
                        </p>

                        {/* Play button */}
                        <button
                            onClick={handlePlay}
                            className="group relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
                            style={{
                                background: 'rgba(255, 180, 80, 0.1)',
                                border: '2px solid rgba(255, 180, 80, 0.3)',
                                boxShadow: '0 0 40px rgba(255, 180, 80, 0.1)',
                            }}
                        >
                            {/* Pulsing ring */}
                            <span
                                className="absolute inset-0 rounded-full"
                                style={{
                                    border: '1px solid rgba(255, 180, 80, 0.2)',
                                    animation: 'pulse-ring 2s ease-in-out infinite',
                                }}
                            />

                            {/* Play triangle */}
                            <svg
                                width="28"
                                height="32"
                                viewBox="0 0 28 32"
                                fill="none"
                                className="ml-1 group-hover:scale-110 transition-transform duration-300"
                            >
                                <path d="M4 2L26 16L4 30V2Z" fill="rgba(255, 200, 130, 0.9)" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Video container */}
                <div
                    className={`relative w-full transition-all duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
                        }`}
                    style={{ aspectRatio: '16/9' }}
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full rounded-lg"
                        style={{ background: '#000' }}
                        onEnded={handleVideoEnd}
                        playsInline
                    >
                        {/* The user will add their video source here */}
                        <source src="/birthday-video.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* End message after video */}
                {showEndMessage && (
                    <div className="flex flex-col items-center gap-8 py-10">
                        <h2
                            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                background: 'linear-gradient(135deg, #ffd700 0%, #ff8866 50%, #ff6699 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'glow-text 3s ease-in-out infinite alternate',
                            }}
                        >
                            Happy Birthday ❤️
                        </h2>

                        <div className="flex gap-4 mt-4">
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
                                onClick={triggerHeartBurst}
                                className="px-8 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 hover:scale-105"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    background: 'rgba(255, 100, 130, 0.15)',
                                    border: '1px solid rgba(255, 100, 130, 0.3)',
                                    color: 'rgba(255, 150, 170, 0.9)',
                                }}
                            >
                                I Love You ❤️
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* CSS animations */}
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
