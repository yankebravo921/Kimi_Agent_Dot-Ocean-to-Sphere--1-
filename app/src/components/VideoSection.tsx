import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function VideoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [showEndMessage, setShowEndMessage] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [isSeeking, setIsSeeking] = useState(false);
    const [heartsActive, setHeartsActive] = useState(false);
    const hideControlsTimer = useRef<number | null>(null);
    const heartLoopRef = useRef<number | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%', end: 'top 20%', scrub: 1,
                    },
                }
            );
        }
    }, []);

    // Time update
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onTimeUpdate = () => setCurrentTime(video.currentTime);
        const onLoadedMetadata = () => setDuration(video.duration);
        const onDurationChange = () => setDuration(video.duration);

        video.addEventListener('timeupdate', onTimeUpdate);
        video.addEventListener('loadedmetadata', onLoadedMetadata);
        video.addEventListener('durationchange', onDurationChange);

        return () => {
            video.removeEventListener('timeupdate', onTimeUpdate);
            video.removeEventListener('loadedmetadata', onLoadedMetadata);
            video.removeEventListener('durationchange', onDurationChange);
        };
    }, []);

    // Auto-hide controls after 3s of no interaction
    const resetHideTimer = useCallback(() => {
        setShowControls(true);
        if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
        hideControlsTimer.current = window.setTimeout(() => {
            if (!isSeeking) setShowControls(false);
        }, 3000);
    }, [isSeeking]);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
            setIsPaused(false);
            resetHideTimer();
        }
    };

    const handleTogglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
            setIsPaused(false);
        } else {
            video.pause();
            setIsPaused(true);
            setShowControls(true);
        }
        resetHideTimer();
    };

    const handleVideoEnd = () => {
        setShowEndMessage(true);
        setIsPaused(false);
        triggerHeartBurst();
    };

    const handleReplay = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setShowEndMessage(false);
            setIsPaused(false);
            resetHideTimer();
        }
    };

    // Seek on progress bar click/drag
    const handleSeek = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        const bar = progressRef.current;
        const video = videoRef.current;
        if (!bar || !video || !duration) return;

        const rect = bar.getBoundingClientRect();
        let clientX: number;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }
        const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        video.currentTime = ratio * duration;
        setCurrentTime(video.currentTime);
        resetHideTimer();
    };

    const handleSeekStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setIsSeeking(true);
        handleSeek(e);
    };

    const handleSeekMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!isSeeking) return;
        handleSeek(e);
    };

    const handleSeekEnd = () => {
        setIsSeeking(false);
        resetHideTimer();
    };

    // Mouse move on video to show controls
    const handleMouseMove = () => {
        if (isPlaying && !showEndMessage) resetHideTimer();
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

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

            // Spawn new hearts every 15 frames
            if (frameCount % 15 === 0) spawnBurst();

            // Remove dead hearts to prevent memory buildup
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

            {/* Initial play screen — absolutely centered */}
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

                {/* Video container + controls */}
                <div
                    className={`relative w-full transition-all duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => !isPaused && setShowControls(false)}
                >
                    {/* Video */}
                    <div style={{ aspectRatio: '16/9' }} className="relative rounded-lg overflow-hidden">
                        <video
                            ref={videoRef}
                            className="w-full h-full cursor-pointer"
                            style={{ background: '#000' }}
                            onEnded={handleVideoEnd}
                            onClick={handleTogglePlay}
                            playsInline
                        >
                            <source src="/birthday-video.mp4" type="video/mp4" />
                        </video>

                        {/* Pause overlay icon */}
                        {isPaused && (
                            <div
                                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                onClick={handleTogglePlay}
                                style={{ animation: 'fadeInControls 0.3s ease-out' }}
                            >
                                <div
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                                    style={{
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        backdropFilter: 'blur(4px)',
                                    }}
                                >
                                    <svg width="24" height="28" viewBox="0 0 28 32" fill="none" className="ml-1">
                                        <path d="M4 2L26 16L4 30V2Z" fill="rgba(255, 255, 255, 0.9)" />
                                    </svg>
                                </div>
                            </div>
                        )}

                        {/* Bottom controls bar */}
                        {isPlaying && !showEndMessage && (
                            <div
                                className="absolute bottom-0 left-0 right-0 px-3 pb-2 pt-8"
                                style={{
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                    opacity: showControls || isPaused ? 1 : 0,
                                    transition: 'opacity 0.3s ease',
                                    pointerEvents: showControls || isPaused ? 'auto' : 'none',
                                }}
                            >
                                {/* Progress bar */}
                                <div
                                    ref={progressRef}
                                    className="relative w-full h-1 rounded-full cursor-pointer group mb-2"
                                    style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                                    onMouseDown={handleSeekStart}
                                    onMouseMove={handleSeekMove}
                                    onMouseUp={handleSeekEnd}
                                    onMouseLeave={handleSeekEnd}
                                    onTouchStart={handleSeekStart}
                                    onTouchMove={handleSeekMove}
                                    onTouchEnd={handleSeekEnd}
                                >
                                    {/* Filled progress */}
                                    <div
                                        className="absolute top-0 left-0 h-full rounded-full transition-all"
                                        style={{
                                            width: `${progress}%`,
                                            background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                                            transition: isSeeking ? 'none' : 'width 0.1s linear',
                                        }}
                                    />
                                    {/* Thumb dot */}
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{
                                            left: `${progress}%`,
                                            transform: `translateX(-50%) translateY(-50%)`,
                                            background: '#FFD700',
                                            boxShadow: '0 0 6px rgba(255, 215, 0, 0.5)',
                                        }}
                                    />
                                </div>

                                {/* Time + controls row */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {/* Play/Pause button */}
                                        <button
                                            onClick={handleTogglePlay}
                                            className="transition-transform duration-200 hover:scale-110"
                                        >
                                            {isPaused ? (
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                                                    <path d="M2 1L14 9L2 17V1Z" fill="rgba(255, 255, 255, 0.9)" />
                                                </svg>
                                            ) : (
                                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                                                    <rect x="1" y="1" width="4" height="14" rx="1" fill="rgba(255, 255, 255, 0.9)" />
                                                    <rect x="9" y="1" width="4" height="14" rx="1" fill="rgba(255, 255, 255, 0.9)" />
                                                </svg>
                                            )}
                                        </button>

                                        {/* Time display */}
                                        <span
                                            className="text-xs font-light"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                fontVariantNumeric: 'tabular-nums',
                                            }}
                                        >
                                            {formatTime(currentTime)} / {formatTime(duration)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* End message after video */}
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
                @keyframes fadeInControls {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
