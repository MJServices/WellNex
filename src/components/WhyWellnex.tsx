import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Network,
  Brain,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import VariableProximity from "../../@/components/VariableProximity";

export function WhyWellnex() {
  const containerRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: Network,
      title: "Integrated Wellness",
      description:
        "A unified ecosystem connecting physical fitness, mental health, and emotional wellbeing in one seamless platform.",
      color: "text-brand-cyan",
      bgColor: "bg-brand-cyan",
      gradient: "from-brand-cyan/20 via-brand-cyan/10 to-transparent",
    },
    {
      icon: Brain,
      title: "AI-Driven Personalization",
      description:
        "Advanced machine learning algorithms deliver hyper-personalized recommendations that evolve with your wellness journey.",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange",
      gradient: "from-brand-orange/20 via-brand-orange/10 to-transparent",
    },
    {
      icon: TrendingUp,
      title: "Scalable for Providers",
      description:
        "Built to grow with your business. From independent trainers to enterprise gym chains, our infrastructure scales seamlessly.",
      color: "text-brand-cyan",
      bgColor: "bg-brand-cyan",
      gradient: "from-brand-cyan/20 via-brand-cyan/10 to-transparent",
    },
    {
      icon: Shield,
      title: "Built for the Future",
      description:
        "Cloud-native architecture with mobile-first design. Your data is encrypted, secure, and always accessible.",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange",
      gradient: "from-brand-orange/20 via-brand-orange/10 to-transparent",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-cyan/20 to-brand-orange/20 border border-brand-cyan/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-brand-cyan animate-pulse" />
            <span className="text-sm font-semibold text-brand-cyan tracking-wide">
              THE WELLNEX ADVANTAGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-4"
          >
            <VariableProximity
              label="Why Choose Wellnex?"
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
              label="We're revolutionizing wellness technology with an integrated ecosystem that puts you first"
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 600, 'wdth' 120"
              radius={100}
              containerRef={containerRef}
              className="text-lg sm:text-xl md:text-2xl text-neutral-300"
            />
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={index}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  benefit,
  index,
  containerRef,
}: {
  benefit: any;
  index: number;
  containerRef: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      {/* Spotlight Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 246, 255, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Card */}
      <div
        className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${benefit.gradient} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-8 sm:p-10`}
      >
        {/* Icon */}
        <div className="mb-6">
          <div
            className={`inline-flex p-4 rounded-2xl ${benefit.bgColor}/20 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
          >
            <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          <VariableProximity
            label={benefit.title}
            fromFontVariationSettings="'wght' 700, 'wdth' 100"
            toFontVariationSettings="'wght' 900, 'wdth' 120"
            radius={100}
            containerRef={containerRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          />
        </h3>

        {/* Description */}
        <div className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
          <VariableProximity
            label={benefit.description}
            fromFontVariationSettings="'wght' 300, 'wdth' 100"
            toFontVariationSettings="'wght' 500, 'wdth' 110"
            radius={80}
            containerRef={containerRef}
            className="text-base sm:text-lg text-neutral-300"
          />
        </div>

        {/* Learn More Link */}
        <button
          className={`inline-flex items-center gap-2 text-sm sm:text-base font-semibold ${benefit.color} group-hover:gap-3 transition-all duration-300`}
        >
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Gradient Glow on Hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-3xl bg-gradient-to-br ${benefit.gradient} blur-2xl`}
        ></div>
      </div>
    </motion.div>
  );
}
