import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom shader for particles - matching the reference style
const vertexShader = `
  uniform float uTime;
  uniform float uProgress;
  uniform float uWaveAmplitude;
  uniform float uPointSize;
  
  attribute vec3 startPos;
  attribute vec3 endPos;
  attribute float aSize;
  attribute float aBrightness;
  
  varying float vAlpha;
  varying float vBrightness;
  varying float vDepth;
  
  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vBrightness = aBrightness;
    
    // Smooth easing for morph
    float t = uProgress;
    float easedT = t * t * (3.0 - 2.0 * t); // smoothstep
    
    // Wave noise for plane - more pronounced waves
    float waveFreq = 0.015;
    float waveSpeed = 0.3;
    float noiseVal = snoise(vec3(startPos.x * waveFreq, startPos.z * waveFreq, uTime * waveSpeed));
    float waveY = noiseVal * uWaveAmplitude * (1.0 - easedT);
    
    // Add secondary wave for more detail
    float noiseVal2 = snoise(vec3(startPos.x * waveFreq * 2.0, startPos.z * waveFreq * 2.0, uTime * waveSpeed * 1.5));
    waveY += noiseVal2 * uWaveAmplitude * 0.3 * (1.0 - easedT);
    
    // Current position with wave
    vec3 currentStartPos = startPos;
    currentStartPos.y += waveY;
    
    // Add micro-jitter for life
    float jitter = snoise(vec3(position * 0.05 + uTime * 0.1)) * 0.2 * (1.0 - easedT * 0.7);
    
    // Morph between positions
    vec3 finalPos = mix(currentStartPos, endPos, easedT);
    finalPos += vec3(jitter);
    
    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
    
    // Size attenuation - smaller dots like in reference
    float sizeAttenuation = uPointSize * aSize * (200.0 / -mvPosition.z);
    gl_PointSize = clamp(sizeAttenuation, 0.5, 4.0);
    
    // Alpha based on distance and fog - fade distant points
    float dist = length(mvPosition.xyz);
    vDepth = -mvPosition.z;
    
    // Fade based on distance from camera
    vAlpha = smoothstep(180.0, 20.0, dist);
    vAlpha *= (0.4 + 0.6 * aBrightness);
    
    // Additional fade for very distant particles
    vAlpha *= smoothstep(200.0, 100.0, dist);
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  
  varying float vAlpha;
  varying float vBrightness;
  varying float vDepth;
  
  void main() {
    // Circular particle with soft edge
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    if (dist > 0.5) discard;
    
    // Soft glow falloff - more subtle
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    glow = pow(glow, 2.0);
    
    // Brightness variation - subtle
    vec3 finalColor = uColor * (0.8 + 0.2 * vBrightness);
    
    // Fade alpha for depth
    float depthFade = smoothstep(150.0, 50.0, vDepth);
    
    gl_FragColor = vec4(finalColor, vAlpha * glow * depthFade);
  }
`;

/**
 * Rasterize text onto an offscreen canvas and return an array of {x, y} positions
 * where the text pixels are drawn.
 */
function getTextPositions(text: string, canvasWidth: number, canvasHeight: number, fontSize: number): { x: number; y: number }[] {
  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext('2d')!;

  // Clear
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Draw text
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${fontSize}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);

  // Read pixels
  const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  const pixels = imageData.data;
  const positions: { x: number; y: number }[] = [];

  // Sample every 2nd pixel for density
  for (let y = 0; y < canvasHeight; y += 2) {
    for (let x = 0; x < canvasWidth; x += 2) {
      const idx = (y * canvasWidth + x) * 4;
      // If the pixel is bright (part of the text)
      if (pixels[idx] > 128) {
        positions.push({ x, y });
      }
    }
  }

  return positions;
}

export default function ParticleOcean() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    material: THREE.ShaderMaterial;
    noise3D: ReturnType<typeof createNoise3D>;
    scrollProgress: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Exponential fog for depth - matching reference
    scene.fog = new THREE.FogExp2(0x0a0515, 0.012);

    // Camera - positioned for perspective view like reference
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 500);
    camera.position.set(0, 35, 60);
    camera.lookAt(0, 0, -20);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setClearColor(0x0a0515, 1);
    container.appendChild(renderer.domElement);

    // Soft spotlight at top center - matching reference
    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(0, 80, 20);
    spotLight.angle = Math.PI / 3;
    spotLight.penumbra = 0.8;
    spotLight.decay = 2;
    spotLight.distance = 300;
    scene.add(spotLight);

    // Ambient light for base illumination
    const ambientLight = new THREE.AmbientLight(0x2a1540, 0.4);
    scene.add(ambientLight);

    // Particle count - more for denser field
    const particleCount = 100000;

    // Create geometry
    const geometry = new THREE.BufferGeometry();

    // Position arrays
    const startPositions = new Float32Array(particleCount * 3);
    const endPositions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const brightness = new Float32Array(particleCount);

    // Plane (ocean) distribution - large grid with perspective
    const planeWidth = 300;
    const planeDepth = 250;

    // Create a grid that extends into the distance
    for (let i = 0; i < particleCount; i++) {
      // Grid-based with some randomness
      const gridX = (Math.random() - 0.5) * planeWidth;
      const gridZ = (Math.random() - 0.5) * planeDepth - 30; // Offset to extend backward

      // Add some random scatter
      const x = gridX + (Math.random() - 0.5) * 3;
      const z = gridZ + (Math.random() - 0.5) * 3;
      const y = (Math.random() - 0.5) * 1;

      startPositions[i * 3] = x;
      startPositions[i * 3 + 1] = y;
      startPositions[i * 3 + 2] = z;

      // Random size - smaller dots
      sizes[i] = 0.3 + Math.random() * 0.5;
      brightness[i] = 0.3 + Math.random() * 0.7;
    }

    // -------------------------------------------------------
    // TEXT target positions instead of sphere
    // -------------------------------------------------------
    const textCanvasWidth = 1024;
    const textCanvasHeight = 256;
    const textFontSize = 70;
    const textPositions = getTextPositions('Happy birthday sweety ❤', textCanvasWidth, textCanvasHeight, textFontSize);

    // Scale factor: map canvas coordinates to 3D world coordinates
    // The text should be roughly 50 units wide
    const textWorldWidth = 50;
    const textWorldHeight = (textCanvasHeight / textCanvasWidth) * textWorldWidth;
    const textCenterY = 10; // vertical center of text in world

    if (textPositions.length > 0) {
      for (let i = 0; i < particleCount; i++) {
        // Pick a random text position (with replacement)
        const tp = textPositions[i % textPositions.length];

        // Map canvas coords to world coords, centered at origin
        const wx = (tp.x / textCanvasWidth - 0.5) * textWorldWidth;
        const wy = -(tp.y / textCanvasHeight - 0.5) * textWorldHeight + textCenterY;
        // Add slight random depth for a 3D feel
        const wz = (Math.random() - 0.5) * 1.5;

        // Add tiny jitter so particles don't stack on the exact same pixel
        const jitterX = (Math.random() - 0.5) * (textWorldWidth / textCanvasWidth) * 2;
        const jitterY = (Math.random() - 0.5) * (textWorldHeight / textCanvasHeight) * 2;

        endPositions[i * 3] = wx + jitterX;
        endPositions[i * 3 + 1] = wy + jitterY;
        endPositions[i * 3 + 2] = wz;
      }
    }

    // Set attributes
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(startPositions), 3));
    geometry.setAttribute('startPos', new THREE.BufferAttribute(startPositions, 3));
    geometry.setAttribute('endPos', new THREE.BufferAttribute(endPositions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aBrightness', new THREE.BufferAttribute(brightness, 1));

    // Shader material - white/light dots like reference
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uWaveAmplitude: { value: 6 },
        uPointSize: { value: 2.5 },
        uColor: { value: new THREE.Color(0xe0d0f5) } // Light lavender-purple
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    // Create particle system
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Store references
    const noise3D = createNoise3D();
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      material,
      noise3D,
      scrollProgress: 0
    };

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.008;

      if (sceneRef.current) {
        sceneRef.current.material.uniforms.uTime.value = time;

        // Remap scroll progress: morph completes at 50% of scroll,
        // then text holds fully visible for the remaining 50%
        const rawProgress = sceneRef.current.scrollProgress;
        const morphProgress = Math.min(rawProgress / 0.5, 1.0); // 0→1 over first half of scroll

        sceneRef.current.material.uniforms.uWaveAmplitude.value = 6 * (1.0 - morphProgress);
        sceneRef.current.material.uniforms.uProgress.value = morphProgress;
        const progress = morphProgress; // use remapped progress for camera too

        // Camera: transition from angled ocean view to front-facing text view
        const startCamPos = new THREE.Vector3(0, 35, 60);
        const endCamPos = new THREE.Vector3(0, textCenterY, 55);

        sceneRef.current.camera.position.lerpVectors(startCamPos, endCamPos, progress);
        // Subtle sway
        sceneRef.current.camera.position.x += Math.sin(time * 0.05) * 3 * (1.0 - progress * 0.8);

        // LookAt transitions from ocean horizon to text center
        const startLookAt = new THREE.Vector3(0, 0, -20);
        const endLookAt = new THREE.Vector3(0, textCenterY, 0);
        const currentLookAt = new THREE.Vector3().lerpVectors(startLookAt, endLookAt, progress);
        sceneRef.current.camera.lookAt(currentLookAt);
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Scroll trigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=400%',
      pin: true,
      scrub: 1.5,
      onUpdate: (self) => {
        if (sceneRef.current) {
          sceneRef.current.scrollProgress = self.progress;
        }
      }
    });

    // Resize handler
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scrollTrigger.kill();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #12081e 0%, #0a0514 30%, #060210 70%, #050208 100%)'
      }}
    />
  );
}
