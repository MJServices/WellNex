"use client";

import Spline from "@splinetool/react-spline";

export const Boxes = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline
        style={{
          width: "100%",
          height: "100%",
        }}
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
      />
      {/* Brand color overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(255, 77, 0, 0.1), transparent 30%, transparent 70%, rgba(0, 246, 255, 0.1)),
            linear-gradient(to bottom, transparent 50%, rgba(11, 11, 12, 0.8))
          `,
        }}
      />
    </div>
  );
};
