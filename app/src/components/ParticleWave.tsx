import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  waveOffset: number;
}

export default function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const scrollProgressRef = useRef(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Generate text pixel positions for "AFAF"
  const getTextPixels = useCallback((width: number, height: number) => {
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d')!;
    tempCanvas.width = width;
    tempCanvas.height = height;

    // Draw text with larger font
    tempCtx.fillStyle = 'white';
    tempCtx.font = 'bold 220px sans-serif';
    tempCtx.textAlign = 'center';
    tempCtx.textBaseline = 'middle';
    tempCtx.fillText('AFAF', width / 2, height / 2);

    // Get pixel data
    const imageData = tempCtx.getImageData(0, 0, width, height);
    const pixels: { x: number; y: number }[] = [];

    // Sample pixels (every 5th pixel for denser text)
    const step = 5;
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        if (imageData.data[index + 3] > 128) {
          pixels.push({ x, y });
        }
      }
    }

    return pixels;
  }, []);

  // Initialize particles in a wave pattern
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const textPixels = getTextPixels(canvas.width, canvas.height);
    
    // Create wave pattern - curved rows
    const cols = 80;
    const rows = 30;
    const spacingX = canvas.width / cols;
    const spacingY = (canvas.height * 0.6) / rows;
    const startY = canvas.height * 0.2;

    let pixelIndex = 0;
    for (let row = 0; row < rows; row++) {
      // Create curved wave rows
      const rowCurve = Math.sin((row / rows) * Math.PI * 2) * 30;
      
      for (let col = 0; col < cols; col++) {
        // Add wave curvature to x position
        const colCurve = Math.sin((col / cols) * Math.PI * 1.5) * 40;
        
        const x = col * spacingX + spacingX / 2 + colCurve + rowCurve * 0.3;
        const y = startY + row * spacingY + Math.sin((col / cols) * Math.PI) * 20;

        // Assign each particle a target from text pixels
        const targetPixel = textPixels[pixelIndex % textPixels.length];
        pixelIndex++;

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          targetX: targetPixel ? targetPixel.x : x,
          targetY: targetPixel ? targetPixel.y : y,
          size: Math.random() * 1.2 + 0.8,
          opacity: Math.random() * 0.4 + 0.6,
          waveOffset: (col * 0.2) + (row * 0.15),
        });
      }
    }

    return particles;
  }, [getTextPixels]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas);
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking for interactive effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.025;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const progress = scrollProgressRef.current;
      const mouse = mouseRef.current;

      // Draw connections first (behind particles)
      if (progress < 0.6) {
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];
          const waveY = Math.sin(time + particle.waveOffset) * 12;
          const waveX = Math.cos(time * 0.6 + particle.waveOffset) * 4;
          
          let currentX = particle.baseX + waveX * (1 - progress * 1.5);
          let currentY = particle.baseY + waveY * (1 - progress * 1.5);

          // Connect to nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j];
            const otherWaveY = Math.sin(time + other.waveOffset) * 12;
            const otherWaveX = Math.cos(time * 0.6 + other.waveOffset) * 4;
            const otherX = other.baseX + otherWaveX * (1 - progress * 1.5);
            const otherY = other.baseY + otherWaveY * (1 - progress * 1.5);

            const dist = Math.sqrt(Math.pow(currentX - otherX, 2) + Math.pow(currentY - otherY, 2));
            if (dist < 50) {
              ctx.beginPath();
              ctx.moveTo(currentX, currentY);
              ctx.lineTo(otherX, otherY);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 50) * (1 - progress)})`;
              ctx.stroke();
            }
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        // Wave motion
        const waveY = Math.sin(time + particle.waveOffset) * 12;
        const waveX = Math.cos(time * 0.6 + particle.waveOffset) * 4;

        // Calculate current position based on scroll progress
        let currentX, currentY;

        if (progress < 0.5) {
          // Wave phase (0 to 0.5)
          const waveProgress = progress * 2;
          currentX = particle.baseX + waveX * (1 - waveProgress);
          currentY = particle.baseY + waveY * (1 - waveProgress);
        } else {
          // Morph to text phase (0.5 to 1)
          const morphProgress = (progress - 0.5) * 2;
          const easeProgress = 1 - Math.pow(1 - morphProgress, 3);
          
          currentX = particle.baseX + (particle.targetX - particle.baseX) * easeProgress;
          currentY = particle.baseY + (particle.targetY - particle.baseY) * easeProgress;
        }

        // Mouse repulsion effect
        const dx = currentX - mouse.x;
        const dy = currentY - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          currentX += (dx / distance) * force * 40;
          currentY += (dy / distance) * force * 40;
        }

        // Draw particle with glow
        const glowSize = particle.size * 2;
        const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, glowSize);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(currentX, currentY, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core particle
        ctx.beginPath();
        ctx.arc(currentX, currentY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Scroll trigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: canvas,
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 0.8,
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
      },
    });

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
      scrollTrigger.kill();
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-crosshair"
      style={{ background: 'transparent' }}
    />
  );
}
