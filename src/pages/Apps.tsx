import { Boxes } from "@/components/3d-boxes-background";
import { BlurLights } from "@/components/BlurLights";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Dumbbell, ArrowRight, Sparkles } from "lucide-react";
import TargetCursor from "../../@/components/TargetCursor";

export function Apps() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <TargetCursor />

      {/* Animated Boxes Background */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <Boxes />
      </div>

      {/* Blur Lights */}
      <BlurLights />

      {/* Hero Section */}
      <div
        className="relative pt-32 pb-16 px-6 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/20 to-brand-orange/20 border border-brand-cyan/30 mb-8">
            <Sparkles className="h-4 w-4 text-brand-cyan" />
            <span className="text-sm font-semibold text-brand-cyan">
              Revolutionary Wellness Technology
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 cursor-target leading-tight">
            Our Flagship
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan">
              Applications
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of wellness with our cutting-edge apps
            designed to transform your health journey
          </p>
        </div>
      </div>

      {/* Apps Grid */}
      <div
        className="relative pb-20 px-6 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div className="container mx-auto max-w-7xl">
          {/* SoulWhispers Card */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            {/* Image */}
            <div className="order-2 lg:order-1 overflow-hidden rounded-3xl cursor-target group">
              <img
                src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SoulWhispers App"
                className="w-full h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ borderRadius: "inherit" }}
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 pointer-events-auto">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/30">
                <Heart className="h-5 w-5 text-brand-cyan" />
                <span className="text-sm font-semibold text-brand-cyan">
                  Mental Wellness
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white cursor-target leading-tight">
                SoulWhispers
              </h2>

              <p className="text-xl text-brand-cyan font-medium">
                Your Pocket-Sized Wellness Companion
              </p>

              <p className="text-lg text-neutral-300 leading-relaxed">
                SoulWhispers is a mindfulness and emotional wellness app
                designed to help users reconnect with their inner calm. Through
                guided meditations, reflective journaling, and AI-powered mood
                tracking, SoulWhispers nurtures mental clarity and emotional
                resilience.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-cyan" />
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Telehealth & diagnostics",
                    "AI mood insights",
                    "Personalized providers",
                    "Seamless booking",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-neutral-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-cyan to-brand-orange hover:shadow-lg hover:shadow-brand-cyan/50 transition-all duration-300 pointer-events-auto cursor-target group mt-6"
              >
                <a
                  href="#"
                  aria-label="Download SoulWhispers app"
                  className="cursor-target"
                >
                  Download SoulWhispers
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* GymKey Card */}
          <div className="grid lg:grid-cols-2 gap-12 items-center" id="gymkey">
            {/* Content */}
            <div className="space-y-6 pointer-events-auto">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30">
                <Dumbbell className="h-5 w-5 text-brand-orange" />
                <span className="text-sm font-semibold text-brand-orange">
                  Fitness & Gym Access
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white cursor-target leading-tight">
                GymKey
              </h2>

              <p className="text-xl text-brand-orange font-medium">
                Smart Access to Fitness, Anytime
              </p>

              <p className="text-lg text-neutral-300 leading-relaxed">
                GymKey is your digital passport to fitness freedom. Whether
                you're a gym owner or a fitness enthusiast, GymKey connects
                users with partner gyms, tracks workouts, and simplifies
                access—all from a single app.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-orange" />
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Seamless gym check-in",
                    "Workout analytics",
                    "Membership management",
                    "Class schedules",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-neutral-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-cyan hover:shadow-lg hover:shadow-brand-orange/50 transition-all duration-300 pointer-events-auto cursor-target group mt-6"
              >
                <Link
                  to="/apps#gymkey"
                  aria-label="Explore GymKey features"
                  className="cursor-target"
                >
                  Explore GymKey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-3xl cursor-target group">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="GymKey App"
                className="w-full h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ borderRadius: "inherit" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
