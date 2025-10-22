import { BlurLights } from "@/components/BlurLights";
import TargetCursor from "../../@/components/TargetCursor";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Heart,
  MessageCircle,
} from "lucide-react";
import VariableProximity from "../../@/components/VariableProximity";
import { Boxes } from "@/components/3d-boxes-background";
import { InteractiveCard } from "../../@/components/ui/interactive-card";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - no submission logic
    console.log("Form data:", formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "info@wellnexsystems.com",
      color: "text-brand-cyan",
      bgColor: "bg-brand-cyan",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello",
      value: "San Francisco, CA",
      color: "text-brand-cyan",
      bgColor: "bg-brand-cyan",
    },
  ];

  return (
    <>
      <TargetCursor />

      {/* Animated Boxes Background */}
      <div className="fixed inset-0 -z-10">
        <Boxes />
      </div>

      <BlurLights />

      <section
        ref={containerRef}
        className="relative py-32 px-4 sm:px-6 min-h-screen"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-cyan/20 to-brand-orange/20 border border-brand-cyan/30 mb-8 backdrop-blur-sm"
            >
              <MessageCircle className="h-4 w-4 text-brand-cyan animate-pulse" />
              <span className="text-sm font-semibold text-brand-cyan tracking-wide">
                GET IN TOUCH
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight px-4"
            >
              <VariableProximity
                label="Let's Transform Your Wellness Journey"
                fromFontVariationSettings="'wght' 700, 'wdth' 100"
                toFontVariationSettings="'wght' 900, 'wdth' 125"
                radius={150}
                containerRef={containerRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #00f6ff 0%, #ff4d00 50%, #00f6ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-neutral-300 max-w-3xl mx-auto px-4"
            >
              <VariableProximity
                label="Ready to revolutionize your health and fitness? Let's discuss how Wellnex can help you achieve your wellness goals."
                fromFontVariationSettings="'wght' 300, 'wdth' 100"
                toFontVariationSettings="'wght' 600, 'wdth' 120"
                radius={100}
                containerRef={containerRef}
                className="text-xl sm:text-2xl text-neutral-300"
              />
            </motion.div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${method.bgColor}/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-neutral-400 mb-3">{method.description}</p>
                  <p className={`${method.color} font-semibold text-lg`}>
                    {method.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <InteractiveCard
              InteractiveColor="#00f6ff"
              tailwindBgClass="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black backdrop-blur-xl"
              className="border border-white/10 p-8 md:p-12"
            >
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Send Us a Message
                </h3>
                <p className="text-neutral-400 text-lg">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-black/50 border-2 border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-cyan/50 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-black/50 border-2 border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-cyan/50 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-black/50 border-2 border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-cyan/50 transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 rounded-2xl bg-black/50 border-2 border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-cyan/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your wellness goals and how we can help..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-brand-orange to-brand-cyan hover:shadow-lg hover:shadow-brand-orange/50 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center gap-3 mx-auto"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </div>
              </form>

              {/* Footer Note */}
              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-neutral-400 flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4 text-brand-cyan" />
                  We typically respond within 24 hours
                  <Sparkles className="h-4 w-4 text-brand-orange" />
                </p>
              </div>
            </InteractiveCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
