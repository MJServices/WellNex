import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import VariableProximity from "../../@/components/VariableProximity";
import HeroBackground from "@/components/HeroBackground";
import SimpleHeroBackground from "@/components/SimpleHeroBackground";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {/* Hero Background - Full Screen */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {/* Canvas background with animated dots */}
        <HeroBackground />
        {/* Additional gradient effects */}
        <SimpleHeroBackground />
      </div>

      {/* Main Content */}
      <div
        ref={containerRef}
        className="container mx-auto px-6 pt-20 text-center relative"
        style={{ zIndex: 10 }}
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={textVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8  font-heading leading-tight"
          >
            <span className="neon-heading">Wellnex</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-orange">
              Systems
            </span>
          </motion.h1>

          <motion.h2
            variants={textVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-light mb-10 text-dark-text leading-snug"
          >
            Where{" "}
            <span className="text-brand-orange font-semibold italic">Mind</span>
            , <span className="text-brand-cyan font-semibold italic">Body</span>
            , and{" "}
            <span className="text-brand-orange font-semibold italic">Soul</span>{" "}
            Unite
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl mb-12 text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <VariableProximity
              label="Transform your wellness journey with an intelligent ecosystem that seamlessly connects telehealth, fitness, mental wellness, and lifestyle—all in one revolutionary platform."
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 700, 'wdth' 125"
              radius={100}
              containerRef={containerRef}
              className="text-xl md:text-2xl text-neutral-300"
            />
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="glow-orange hover:glow-orange group"
            >
              <Link
                to="/contact"
                aria-label="Join the Wellnex movement and get started"
              >
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:glow-cyan"
            >
              <Link to="/apps" aria-label="Explore our wellness applications">
                Explore Our Apps
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
