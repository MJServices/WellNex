import { TestimonialCard } from "../../@/components/ui/testimonial-cards";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import VariableProximity from "../../@/components/VariableProximity";

const testimonials = [
  {
    id: 1,
    testimonial:
      "Wellnex transformed my wellness journey. The integration between SoulWhispers and GymKey is seamless. I've never felt more in control of my health.",
    author: "Sarah M. - Fitness Enthusiast",
  },
  {
    id: 2,
    testimonial:
      "As a gym owner, GymKey has revolutionized how we manage memberships. Our members love the convenience and we've seen a 40% increase in engagement.",
    author: "Marcus T. - Gym Owner @ FitLife Studios",
  },
  {
    id: 3,
    testimonial:
      "SoulWhispers helped me find balance in my hectic life. The AI-powered mood tracking and personalized meditation sessions are game-changers.",
    author: "Emily R. - Corporate Executive",
  },
];

export function UserReviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop()!);
    setPositions(newPositions);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-cyan/20 to-brand-orange/20 border border-brand-cyan/30 mb-8 backdrop-blur-sm"
          >
            <Star className="h-4 w-4 text-brand-cyan fill-brand-cyan animate-pulse" />
            <span className="text-sm font-semibold text-brand-cyan tracking-wide">
              USER TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-4"
          >
            <VariableProximity
              label="What Our Users Say"
              fromFontVariationSettings="'wght' 700, 'wdth' 100"
              toFontVariationSettings="'wght' 900, 'wdth' 125"
              radius={150}
              containerRef={containerRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, #00f6ff 0%, #ff4d00 50%, #00f6ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto px-4"
          >
            <VariableProximity
              label="Real stories from real people transforming their wellness journey"
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 600, 'wdth' 120"
              radius={100}
              containerRef={containerRef}
              className="text-lg sm:text-xl md:text-2xl text-neutral-300"
            />
          </motion.div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid place-content-center overflow-hidden px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px] mt-[10vh]"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </motion.div>

          {/* Instruction Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-neutral-400 mt-12 flex items-center justify-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-brand-cyan" />
            <span>Drag the front card to see more reviews</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
