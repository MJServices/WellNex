import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" };
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" };

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: rawMap },
        uDepthMap: { value: depthMap },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uOpacity: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform sampler2D uDepthMap;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uOpacity;
        varying vec2 vUv;

        void main() {
          // Get depth value
          float depth = texture2D(uDepthMap, vUv).r;
          
          // Animated progress
          float progress = sin(uTime * 0.5) * 0.5 + 0.5;
          
          // Create flowing effect
          float flow = smoothstep(0.0, 0.02, abs(depth - progress));
          flow = 1.0 - flow;
          
          // Parallax effect based on mouse
          vec2 parallax = uMouse * depth * 0.01;
          vec2 uv = vUv + parallax;
          
          // Sample texture
          vec4 texColor = texture2D(uTexture, uv);
          
          // Create dot pattern
          vec2 tiling = vUv * 120.0;
          vec2 tiledUv = fract(tiling) * 2.0 - 1.0;
          float dist = length(tiledUv);
          float dotPattern = smoothstep(0.5, 0.49, dist);
          
          // Brand colors: Orange and Cyan
          vec3 orangeColor = vec3(1.0, 0.3, 0.0);
          vec3 cyanColor = vec3(0.0, 0.96, 1.0);
          vec3 brandColor = mix(orangeColor, cyanColor, progress);
          
          // Combine effects
          vec3 mask = dotPattern * flow * brandColor * 0.5;
          vec3 finalColor = texColor.rgb + mask;
          
          // Add glow
          float glow = flow * 0.3;
          finalColor += brandColor * glow;
          
          gl_FragColor = vec4(finalColor, texColor.a * uOpacity);
        }
      `,
      transparent: true,
    });
  }, [rawMap, depthMap]);

  useFrame(({ clock, pointer }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uMouse.value.set(pointer.x, pointer.y);

      // Smooth fade in
      const targetOpacity = 1.0;
      materialRef.current.uniforms.uOpacity.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uOpacity.value,
        targetOpacity,
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef} scale={[4, 4, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <primitive object={material} ref={materialRef} attach="material" />
    </mesh>
  );
};

const HeroBackground = () => {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsWebGLSupported(false);
      }
    } catch (e) {
      setIsWebGLSupported(false);
    }
  }, []);

  if (!isWebGLSupported) {
    // Fallback gradient background
    return (
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <div
          className="absolute inset-0 opacity-30 animate-pulse"
          style={{
            background: "linear-gradient(135deg, #FF4D00 0%, #00F6FF 100%)",
            filter: "blur(100px)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>

      {/* Additional gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(11, 11, 12, 0.3) 100%)",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default HeroBackground;
