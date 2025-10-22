import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Watch,
  Apple,
  Building2,
  Sparkles,
  Zap,
  ArrowRight,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import VariableProximity from "../../@/components/VariableProximity";

export function ComingNext() {
  const containerRef = useRef<HTMLDivElement>(null);

  const comingFeatures = [
    {
      icon: Watch,
      title: "Wearable Integration",
      description:
        "Seamless sync with your favorite fitness trackers and smartwatches. Real-time health metrics at your fingertips.",
      color: "text-brand-cyan",
      bgColor: "bg-brand-cyan",
      gradient: "from-brand-cyan/30 via-brand-cyan/10 to-transparent",
      status: "Q2 2025",
    },
    {
      icon: Apple,
      title: "Nutrition & Meal Planning",
      description:
        "AI-powered meal recommendations based on your health goals, dietary preferences, and nutritional needs.",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange",
      gradient: "from-brand-orange/30 via-brand-orange/10 to-transparent",
      status: "Q3 2025",
    },
    {
      icon: Building2,
      title: "Corporate Wellness Dashboards",
      description:
        "Enterprise solutions for employee health and wellness programs with advanced analytics and reporting.",
      color: "text-brand-cyan",
      bgColor: "bg-brand-cyan",
      gradient: "from-brand-cyan/30 via-brand-cyan/10 to-transparent",
      status: "Q4 2025",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange/20 to-brand-cyan/20 border border-brand-orange/30 mb-8 backdrop-blur-sm"
          >
            <Rocket className="h-4 w-4 text-brand-orange animate-pulse" />
            <span className="text-sm font-semibold text-brand-orange tracking-wide">
              COMING SOON
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-4"
          >
            <VariableProximity
              label="What's Coming Next"
              fromFontVariationSettings="'wght' 700, 'wdth' 100"
              toFontVariationSettings="'wght' 900, 'wdth' 125"
              radius={150}
              containerRef={containerRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, #ff4d00 0%, #00f6ff 50%, #ff4d00 100%)",
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
              label="We're building the unified Wellnex Platform that will revolutionize how wellness providers and individuals connect, track, and optimize their health journey"
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 600, 'wdth' 120"
              radius={100}
              containerRef={containerRef}
              className="text-lg sm:text-xl md:text-2xl text-neutral-300"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {comingFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-orange to-brand-cyan hover:shadow-lg hover:shadow-brand-orange/50 transition-all duration-300 group text-base sm:text-lg px-8 py-6"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-neutral-400">
              Join <span className="text-brand-cyan font-semibold">500+</span>{" "}
              early adopters
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
  containerRef,
}: {
  feature: any;
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
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
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 77, 0, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Card */}
      <div
        className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-8`}
      >
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
            <span className={`text-xs font-semibold ${feature.color}`}>
              {feature.status}
            </span>
          </div>
        </div>

        {/* Icon */}
        <div className="mb-6">
          <div
            className={`inline-flex p-4 rounded-2xl ${feature.bgColor}/20 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
          >
            <feature.icon className={`h-8 w-8 ${feature.color}`} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
          <VariableProximity
            label={feature.title}
            fromFontVariationSettings="'wght' 700, 'wdth' 100"
            toFontVariationSettings="'wght' 900, 'wdth' 120"
            radius={80}
            containerRef={containerRef}
            className="text-xl sm:text-2xl font-bold text-white"
          />
        </h3>

        {/* Description */}
        <div className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
          <VariableProximity
            label={feature.description}
            fromFontVariationSettings="'wght' 300, 'wdth' 100"
            toFontVariationSettings="'wght' 500, 'wdth' 110"
            radius={70}
            containerRef={containerRef}
            className="text-sm sm:text-base text-neutral-300"
          />
        </div>

        {/* Coming Soon Indicator */}
        <div className="flex items-center gap-2">
          <Zap className={`h-4 w-4 ${feature.color} animate-pulse`} />
          <span className={`text-sm font-semibold ${feature.color}`}>
            In Development
          </span>
        </div>

        {/* Gradient Glow on Hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-3xl bg-gradient-to-br ${feature.gradient} blur-2xl`}
        ></div>
      </div>
    </motion.div>
  );
}
