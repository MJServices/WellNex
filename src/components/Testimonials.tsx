import { motion } from "framer-motion";
import InfiniteGallery from "@/components/3d-scroll-gallery";

export function Testimonials() {
  // Using placeholder images that work
  const testimonialImages = [
    { src: "https://picsum.photos/600/600?random=1", alt: "User 1" },
    { src: "https://picsum.photos/600/600?random=2", alt: "User 2" },
    { src: "https://picsum.photos/600/600?random=3", alt: "User 3" },
    { src: "https://picsum.photos/600/600?random=4", alt: "User 4" },
    { src: "https://picsum.photos/600/600?random=5", alt: "User 5" },
    { src: "https://picsum.photos/600/600?random=6", alt: "User 6" },
  ];

  const testimonials = [
    {
      quote:
        "SoulWhispers helped me find calm in chaos. It's like therapy in my pocket.",
      author: "Ayesha R., Karachi",
    },
    {
      quote:
        "GymKey has transformed how I manage my gym. My members love the convenience.",
      author: "Imran M., Gym Owner, Lahore",
    },
    {
      quote: "The unified platform approach is exactly what healthcare needed.",
      author: "Dr. Sarah K., Wellness Practitioner",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-8 neon-heading font-heading"
        >
          What Our Users Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-neutral-300 text-lg mb-16 max-w-2xl mx-auto"
        >
          Real stories from real people transforming their wellness journey
        </motion.p>

        {/* 3D Scroll Gallery */}
        <div className="relative h-[600px] w-full mb-16">
          <InfiniteGallery
            images={testimonialImages}
            speed={1.0}
            visibleCount={6}
            falloff={{ near: 0.8, far: 14 }}
            className="h-full w-full rounded-lg overflow-hidden"
            fadeSettings={{
              fadeIn: { start: 0.05, end: 0.25 },
              fadeOut: { start: 0.75, end: 0.95 },
            }}
            blurSettings={{
              blurIn: { start: 0.0, end: 0.15 },
              blurOut: { start: 0.85, end: 1.0 },
              maxBlur: 5.0,
            }}
          />

          {/* Overlay text */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="glass-dark rounded-2xl p-8 backdrop-blur-md max-w-2xl mx-4">
              <p className="text-white text-xl md:text-2xl font-light text-center leading-relaxed">
                "Wellnex Systems has transformed how we approach wellness"
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-dark rounded-xl p-6 backdrop-blur-md"
            >
              <p className="text-neutral-200 text-base mb-4 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <p className="text-brand-cyan text-sm font-semibold">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-neutral-400">
          <p>Use mouse wheel, arrow keys, or touch to navigate the gallery</p>
        </div>
      </div>
    </section>
  );
}
