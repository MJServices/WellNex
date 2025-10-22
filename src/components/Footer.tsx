import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Globe,
  Heart,
  ArrowUp,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import VariableProximity from "../../@/components/VariableProximity";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "text-brand-cyan" },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "text-brand-orange",
    },
    { icon: Github, href: "#", label: "GitHub", color: "text-brand-cyan" },
  ];

  return (
    <footer ref={containerRef} className="relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Animated top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-[2px] origin-center relative"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #00F6FF 20%, #FF4D00 50%, #00F6FF 80%, transparent 100%)",
        }}
      />

      <div className="relative container mx-auto max-w-7xl px-6 py-20">
        {/* Main Footer Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group mb-12"
        >
          {/* Spotlight Effect */}
          {isHovered && (
            <div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 246, 255, 0.1), transparent 40%)`,
              }}
            />
          )}

          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900/50 via-black/50 to-neutral-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-cyan flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="h-7 w-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-4xl font-bold text-white font-heading">
                      <VariableProximity
                        label="Wellnex"
                        fromFontVariationSettings="'wght' 700, 'wdth' 100"
                        toFontVariationSettings="'wght' 900, 'wdth' 120"
                        radius={80}
                        containerRef={containerRef}
                        className="text-4xl font-bold text-white"
                      />
                    </h3>
                    <p className="text-xs text-brand-cyan font-semibold tracking-widest">
                      SYSTEMS
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-neutral-300 mb-6 leading-relaxed"
                >
                  <VariableProximity
                    label="Empowering wellness through innovative technology. Where mind, body, and soul unite."
                    fromFontVariationSettings="'wght' 300, 'wdth' 100"
                    toFontVariationSettings="'wght' 500, 'wdth' 110"
                    radius={80}
                    containerRef={containerRef}
                    className="text-lg text-neutral-300"
                  />
                </motion.div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-brand-cyan/50 flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon
                        className={`h-5 w-5 ${social.color} group-hover:scale-110 transition-transform`}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-brand-cyan to-brand-orange rounded-full" />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {footerLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="text-neutral-400 hover:text-brand-cyan transition-colors duration-300 flex items-center gap-2 group text-base"
                      >
                        <span className="w-0 h-[2px] bg-brand-cyan group-hover:w-4 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-brand-orange to-brand-cyan rounded-full" />
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:info@wellnexsystems.com"
                    className="flex items-center gap-3 text-neutral-400 hover:text-brand-cyan transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center group-hover:bg-brand-cyan/20 transition-all">
                      <Mail className="h-5 w-5 text-brand-cyan" />
                    </div>
                    <span className="text-sm">info@wellnexsystems.com</span>
                  </motion.a>

                  <motion.a
                    href="https://www.wellnexsystems.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-400 hover:text-brand-orange transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange/20 transition-all">
                      <Globe className="h-5 w-5 text-brand-orange" />
                    </div>
                    <span className="text-sm">wellnexsystems.com</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Gradient Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-3xl bg-gradient-to-br from-brand-cyan/30 via-brand-orange/30 to-transparent blur-2xl"></div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span>© 2025 Wellnex Systems. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <Heart className="inline h-4 w-4 text-red-500 animate-pulse" />{" "}
              for wellness
            </span>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-orange/20 to-brand-cyan/20 border border-brand-cyan/30"
            >
              <Sparkles className="h-4 w-4 text-brand-cyan inline mr-2" />
              <span className="text-sm text-white font-medium">Est. 2023</span>
            </motion.div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-orange to-brand-cyan flex items-center justify-center hover:shadow-lg hover:shadow-brand-cyan/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-5 w-5 text-white group-hover:animate-bounce" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, #FF4D00 0%, #00F6FF 50%, #FF4D00 100%)",
          opacity: 0.3,
        }}
      />
    </footer>
  );
}
