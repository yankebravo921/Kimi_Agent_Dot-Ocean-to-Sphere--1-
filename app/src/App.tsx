import { useEffect, useState } from 'react';
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

  return (
    <div className="relative">
      {/* Header overlay */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 pointer-events-none">
        <div className="flex items-center justify-between">
          <div
            className="text-white/70 text-sm font-light tracking-wide pointer-events-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            For You ❤️
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <div className="w-2 h-2 rounded-full bg-[#35f0e0]/60"></div>
            <span
              className="text-white/50 text-xs font-light tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {time}
            </span>
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
      <VideoSection />
    </div>
  );
}

export default App;
