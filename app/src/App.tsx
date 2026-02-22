import { useEffect, useRef, useState } from 'react';
import './App.css';
import ParticleOcean from './components/ParticleOcean';
import CosmicCountdown from './components/CountdownSection';
import FireflyCatch from './components/BeginningSection';
import WarpTunnel from './components/DistanceSection';
import LanternSky from './components/PromiseSection';
import SunriseSection from './components/SunriseSection';
import VideoSection from './components/VideoSection';

function App() {
  const [time, setTime] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [audioReady, setAudioReady] = useState(false);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = videoSectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Try to autoplay immediately; if blocked show tap-to-start overlay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.35;

    audio.play()
      .then(() => {
        setAudioReady(true);
        setNeedsTap(false);
      })
      .catch(() => {
        // Autoplay blocked — ask for a tap
        setNeedsTap(true);
      });
  }, []);

  // Pause/resume when video section comes into view
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioReady) return;

    if (isVideoInView) {
      audio.pause();
    } else {
      audio.play().catch(() => { });
    }
  }, [audioReady, isVideoInView]);

  // Mute toggle
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = muted;
  }, [muted]);

  const handleTap = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play()
      .then(() => {
        setAudioReady(true);
        setNeedsTap(false);
      })
      .catch(() => { });
  };

  return (
    <div className="relative">
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}bg-music.mp3`} preload="auto" />

      {/* Header overlay */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 pointer-events-none">
        <div className="flex items-center justify-between">
          <div
            className="text-white/70 text-sm font-light tracking-wide pointer-events-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            For You ❤️
          </div>
          <div className="flex items-center gap-3 pointer-events-auto">
            {/* Mute toggle */}
            <button
              onClick={() => setMuted(m => !m)}
              title={muted ? 'Unmute music' : 'Mute music'}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 16,
                opacity: 0.55,
                transition: 'opacity 0.2s',
                lineHeight: 1,
                padding: '2px 4px',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
            >
              {muted ? '🔇' : '🔊'}
            </button>
            {needsTap ? (
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  color: 'rgba(120,255,200,0.65)',
                  animation: 'clickHintBlink 2s ease-in-out infinite',
                }}
              >
                ♫ Click anywhere to enjoy
              </span>
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-[#35f0e0]/60"></div>
                <span
                  className="text-white/50 text-xs font-light tracking-wider"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {time}
                </span>
              </>
            )}
            <style>{`
              @keyframes clickHintBlink {
                0%, 100% { opacity: 0.65; }
                50%       { opacity: 0.2; }
              }
            `}</style>
          </div>
        </div>
      </header>

      {/* ====== SECTION 1 — Particle Ocean → "Hey sweety" ====== */}
      <ParticleOcean />

      {/* ====== SECTION 2 — "Written in Light" sparkler ====== */}
      <CosmicCountdown />

      {/* ====== SECTION 3 — Sunrise ====== */}
      <SunriseSection />

      {/* ====== SECTION 4 — Firefly Catch Mini-Game ====== */}
      <FireflyCatch />

      {/* ====== SECTION 5 — Warp Tunnel Hyperspace ====== */}
      <WarpTunnel />

      {/* ====== SECTION 6 — Lantern Sky → Heart Formation ====== */}
      <LanternSky />

      {/* ====== SECTION 7 — Video ====== */}
      <VideoSection sectionRef={videoSectionRef} />
    </div>
  );
}

export default App;
