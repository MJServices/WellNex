import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden bg-black relative">
      <nav className="flex flex-col h-full justify-center">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} index={idx} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps & { index: number }> = ({
  link,
  text,
  image,
  index,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const defaultTextRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Theme colors - alternating cyan and orange
  const themeColors = ["#00f6ff", "#ff4d00"];
  const hoverColor = themeColors[index % 2];
  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered || !imageRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      // Calculate rotation
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(imageRef.current, {
        x: x - 175,
        y: y - 175,
        rotateX: rotateX,
        rotateY: rotateY,
        rotateZ: rotateY * 0.3,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);

    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    // Animate marquee background in
    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, {
      y: edge === "top" ? "-101%" : "101%",
      opacity: 1,
    })
      .set(marqueeInnerRef.current, {
        y: edge === "top" ? "101%" : "-101%",
        opacity: 1,
      })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });

    // Hide default text
    if (defaultTextRef.current) {
      gsap.to(defaultTextRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    // Show image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    // Animate marquee out
    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.to(marqueeRef.current, {
      y: edge === "top" ? "-101%" : "101%",
      opacity: 0,
    }).to(
      marqueeInnerRef.current,
      { y: edge === "top" ? "101%" : "-101%", opacity: 0 },
      "<"
    );

    // Show default text
    if (defaultTextRef.current) {
      gsap.to(defaultTextRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    // Kill all image animations and hide immediately
    if (imageRef.current) {
      gsap.killTweensOf(imageRef.current);
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.7,
      });
    }

    // Set isHovered false after cleanup
    setTimeout(() => setIsHovered(false), 50);
  };

  const marqueeContent = React.useMemo(() => {
    return (
      <h2
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none px-8 md:px-16 lg:px-24"
        style={{
          color: "#ffffff",
          fontFamily: "'Playfair Display', serif",
          letterSpacing: "-0.04em",
          fontWeight: 800,
        }}
      >
        {text}
      </h2>
    );
  }, [text]);

  return (
    <div
      className="flex-1 relative overflow-hidden shadow-[0_-1px_0_0_rgba(255,255,255,0.05)]"
      ref={itemRef}
    >
      <a
        href={link}
        className="flex items-center h-full px-8 md:px-16 lg:px-24 cursor-pointer relative z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Default heading - Montserrat */}
        <h2
          ref={defaultTextRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "-0.04em",
            fontWeight: 800,
          }}
        >
          {text}
        </h2>
      </a>

      {/* Marquee background with Playfair Display - Hidden by default */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          backgroundColor: hoverColor,
          zIndex: 5,
          transform: "translateY(101%)",
          opacity: 0,
        }}
        ref={marqueeRef}
      >
        <div
          className="h-full flex items-center"
          ref={marqueeInnerRef}
          style={{
            transform: "translateY(-101%)",
            opacity: 0,
          }}
        >
          {marqueeContent}
        </div>
      </div>

      {/* Cursor-following image */}
      <div
        ref={imageRef}
        className="fixed pointer-events-none"
        style={{
          width: "350px",
          height: "350px",
          opacity: 0,
          transform: "scale(0.7)",
          transformStyle: "preserve-3d",
          perspective: "1000px",
          left: 0,
          top: 0,
          zIndex: 9999,
          display: isHovered ? "block" : "none",
        }}
      >
        <div
          className="w-full h-full rounded-3xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: `0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px ${hoverColor}60`,
            border: `3px solid ${hoverColor}80`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${hoverColor}20, transparent 60%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
