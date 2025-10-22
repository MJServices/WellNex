import { motion } from "framer-motion";

export function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 mx-auto mb-4 rounded-full gradient-brand"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-semibold text-dark-heading font-heading"
        >
          Wellnex Systems
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-dark-text mt-2"
        >
          Loading wellness experience...
        </motion.p>
      </div>
    </div>
  );
}
