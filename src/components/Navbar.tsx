import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 md:py-6 px-4">
      <motion.div
        className={`flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-full shadow-2xl w-full max-w-5xl relative transition-all duration-300 ${
          scrolled
            ? "glass-dark border border-white/20"
            : "glass-dark border border-white/10"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          background: scrolled
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center group">
          <motion.div
            className="w-10 h-10 md:w-12 md:h-12 mr-3 flex items-center justify-center rounded-full gradient-brand relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-white relative z-10" />
          </motion.div>
          <div className="flex flex-col">
            <motion.span
              className="text-xl md:text-2xl font-bold text-white font-heading tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Wellnex
            </motion.span>
            <motion.span
              className="text-[10px] md:text-xs text-brand-cyan font-medium tracking-wider hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              SYSTEMS
            </motion.span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`relative inline-flex items-center gap-2 px-4 lg:px-6 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? "text-white bg-gradient-to-r from-brand-orange/20 to-brand-cyan/20 border border-brand-cyan/30"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* CTA Button - Desktop */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-brand-orange to-brand-cyan text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-brand-cyan/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center p-2.5 rounded-full glass-dark border border-white/10 hover:border-brand-cyan/50 transition-colors"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <Menu className="h-5 w-5 text-white" />
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-black via-neutral-900 to-black z-50 md:hidden shadow-2xl border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
              >
                <X className="h-5 w-5 text-white" />
              </motion.button>

              {/* Mobile Menu Content */}
              <div className="flex flex-col h-full pt-24 px-8 pb-8">
                {/* Logo */}
                <motion.div
                  className="flex items-center mb-12"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-12 h-12 mr-3 flex items-center justify-center rounded-full gradient-brand">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white font-heading">
                      Wellnex
                    </div>
                    <div className="text-xs text-brand-cyan font-medium tracking-wider">
                      SYSTEMS
                    </div>
                  </div>
                </motion.div>

                {/* Nav Items */}
                <div className="flex flex-col space-y-2 flex-1">
                  {navItems.map((item, i) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-brand-orange/20 to-brand-cyan/20 border border-brand-cyan/30 text-white"
                              : "text-neutral-300 hover:bg-white/5 hover:text-white"
                          }`}
                          onClick={toggleMenu}
                        >
                          <span className="text-xl font-medium">
                            {item.name}
                          </span>
                          {isActive && (
                            <Sparkles className="h-5 w-5 text-brand-cyan" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="/contact"
                    className="w-full px-6 py-4 bg-gradient-to-r from-brand-orange to-brand-cyan text-white text-base font-semibold rounded-2xl hover:shadow-lg hover:shadow-brand-cyan/50 transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={toggleMenu}
                  >
                    Get Started
                    <Sparkles className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar };
