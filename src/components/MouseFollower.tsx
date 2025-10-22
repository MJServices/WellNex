import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function MouseFollower() {
  const mainGlassRef = useRef<HTMLDivElement>(null);
  const outerGlowRef = useRef<HTMLDivElement>(null);
  const centerPulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Animate main glass lens - fastest
      gsap.to(mainGlassRef.current, {
        x: x - 75,
        y: y - 75,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate outer glow - slightly delayed
      gsap.to(outerGlowRef.current, {
        x: x - 60,
        y: y - 60,
        duration: 0.4,
        ease: "power2.out",
      });

      // Animate center pulse - medium speed
      gsap.to(centerPulseRef.current, {
        x: x - 20,
        y: y - 20,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Pulse animation for center
    gsap.to(centerPulseRef.current, {
      opacity: 0.7,
      scale: 1.08,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 40 }}>
      {/* Single unified glass lens with soft edges */}
      <div
        ref={mainGlassRef}
        className="absolute"
        style={{
          width: "150px",
          height: "150px",
          left: 0,
          top: 0,
          borderRadius: "50%",
          background: "transparent",
          backdropFilter:
            "blur(28px) saturate(160%) contrast(112%) brightness(104%)",
          WebkitBackdropFilter:
            "blur(28px) saturate(160%) contrast(112%) brightness(104%)",
          boxShadow: `
            0 0 80px rgba(0, 246, 255, 0.04),
            0 0 120px rgba(255, 77, 0, 0.03)
          `,
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 80%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 80%, transparent 100%)",
          willChange: "transform",
        }}
      >
        {/* Glass highlight - top left */}
        <div
          className="absolute rounded-full"
          style={{
            width: "38px",
            height: "38px",
            top: "20px",
            left: "26px",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 50%, transparent 100%)",
            filter: "blur(15px)",
          }}
        />

        {/* Cyan shimmer - bottom right */}
        <div
          className="absolute rounded-full"
          style={{
            width: "28px",
            height: "28px",
            bottom: "26px",
            right: "30px",
            background:
              "radial-gradient(circle, rgba(0, 246, 255, 0.03) 0%, transparent 100%)",
            filter: "blur(12px)",
          }}
        />

        {/* Orange accent - left side */}
        <div
          className="absolute rounded-full"
          style={{
            width: "22px",
            height: "22px",
            top: "50%",
            left: "15px",
            background:
              "radial-gradient(circle, rgba(255, 77, 0, 0.025) 0%, transparent 100%)",
            filter: "blur(10px)",
          }}
        />

        {/* Subtle rotating shimmer */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(255, 255, 255, 0.015) 25%, transparent 50%, rgba(0, 246, 255, 0.015) 75%, transparent 100%)",
            animation: "cursorShimmer 4s linear infinite",
            maskImage:
              "radial-gradient(circle, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Outer soft glow - blends with main circle */}
      <div
        ref={outerGlowRef}
        className="absolute rounded-full"
        style={{
          width: "120px",
          height: "120px",
          left: 0,
          top: 0,
          background:
            "radial-gradient(circle, rgba(0, 246, 255, 0.012) 0%, rgba(255, 77, 0, 0.008) 40%, transparent 70%)",
          filter: "blur(50px)",
          willChange: "transform",
        }}
      />

      {/* Center subtle pulse - very soft */}
      <div
        ref={centerPulseRef}
        className="absolute rounded-full"
        style={{
          width: "40px",
          height: "40px",
          left: 0,
          top: 0,
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(0, 246, 255, 0.015) 50%, transparent 100%)",
          filter: "blur(20px)",
          opacity: 0.4,
          willChange: "transform, opacity",
        }}
      />

      <style>{`
        @keyframes cursorShimmer {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
