import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import VariableProximity from "../../@/components/VariableProximity";

export function StayConnected() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 md:py-40 px-4 sm:px-6 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-cyan/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange/20 to-brand-cyan/20 border border-brand-orange/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-brand-orange animate-pulse" />
            <span className="text-sm font-semibold text-brand-orange tracking-wide">
              JOIN THE MOVEMENT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight px-4"
          >
            <VariableProximity
              label="Stay Connected"
              fromFontVariationSettings="'wght' 700, 'wdth' 100"
              toFontVariationSettings="'wght' 900, 'wdth' 125"
              radius={150}
              containerRef={containerRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
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
            className="text-xl sm:text-2xl md:text-3xl text-neutral-300 max-w-4xl mx-auto px-4"
          >
            <VariableProximity
              label="Be the first to experience the full Wellnex platform. Join our community of wellness innovators."
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 600, 'wdth' 120"
              radius={100}
              containerRef={containerRef}
              className="text-xl sm:text-2xl md:text-3xl text-neutral-300"
            />
          </motion.div>
        </div>

        {/* Main CTA Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group max-w-3xl mx-auto"
        >
          {/* Spotlight Effect */}
          {isHovered && (
            <div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 77, 0, 0.15), transparent 40%)`,
              }}
            />
          )}

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black backdrop-blur-xl border-2 border-white/10 hover:border-brand-orange/30 transition-all duration-500 p-8 sm:p-12">
            {!isSubmitted ? (
              <>
                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      Join Our Waitlist
                    </h3>
                    <p className="text-neutral-400">
                      Get early access and exclusive updates
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-white/10 rounded-2xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-cyan/50 transition-all duration-300"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-brand-orange to-brand-cyan hover:shadow-lg hover:shadow-brand-orange/50 transition-all duration-300 group px-8 py-6 text-lg font-semibold"
                    >
                      Join Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-8 pt-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                      <span>No spam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                      <span>Exclusive updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                      <span>Early access</span>
                    </div>
                  </div>
                </form>

                {/* Contact Button */}
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-neutral-400 mb-4">
                    Have questions? We'd love to hear from you
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-brand-cyan/30 hover:bg-brand-cyan/10 hover:border-brand-cyan/50 transition-all duration-300"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-brand-cyan to-brand-orange mb-6"
                >
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Welcome to Wellnex!
                </h3>
                <p className="text-xl text-neutral-300">
                  Check your email for confirmation
                </p>
              </motion.div>
            )}

            {/* Gradient Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-3xl bg-gradient-to-br from-brand-orange/30 via-brand-cyan/30 to-transparent blur-2xl"></div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 text-center"
        >
          <div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-cyan to-brand-orange bg-clip-text text-transparent mb-2">
              10K+
            </div>
            <div className="text-sm text-neutral-400">Early Adopters</div>
          </div>
          <div className="h-12 w-px bg-neutral-700"></div>
          <div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-orange to-brand-cyan bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-sm text-neutral-400">Partner Gyms</div>
          </div>
          <div className="h-12 w-px bg-neutral-700"></div>
          <div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-cyan to-brand-orange bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-neutral-400">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
