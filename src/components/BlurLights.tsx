export function BlurLights() {
  return (
    <>
      {/* Left Orange Blur */}
      <div
        className="fixed top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 77, 0, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      {/* Right Cyan Blur */}
      <div
        className="fixed top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 246, 255, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      {/* Bottom Left Orange */}
      <div
        className="fixed bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 77, 0, 0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />

      {/* Bottom Right Cyan */}
      <div
        className="fixed bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 246, 255, 0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          zIndex: 1,
        }}
      />
    </>
  );
}
