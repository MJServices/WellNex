"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: string;
  id: number;
  author: string;
}

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  id,
  author,
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0",
        boxShadow: isFront
          ? "0 20px 60px rgba(0, 246, 255, 0.3), 0 0 80px rgba(255, 77, 0, 0.2)"
          : "0 10px 30px rgba(0, 0, 0, 0.5)",
      }}
      animate={{
        rotate:
          position === "front"
            ? "-6deg"
            : position === "middle"
            ? "0deg"
            : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={(e: any) => {
        dragRef.current = e.clientX || 0;
      }}
      onDragEnd={(e: any) => {
        const clientX = e.clientX || 0;
        if (dragRef.current - clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-3xl border-2 ${
        isFront
          ? "border-brand-cyan/40 cursor-grab active:cursor-grabbing top-0"
          : position === "middle"
          ? "border-brand-orange/30 top-4"
          : "border-white/20 top-8"
      } bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-8 shadow-2xl backdrop-blur-xl`}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-4 border-brand-cyan/30 bg-neutral-800 object-cover shadow-lg"
        style={{
          boxShadow: "0 0 30px rgba(0, 246, 255, 0.3)",
        }}
      />
      <span className="text-center text-lg italic text-neutral-200 leading-relaxed font-light">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-semibold bg-gradient-to-r from-brand-cyan to-brand-orange bg-clip-text text-transparent">
        {author}
      </span>
    </motion.div>
  );
}
