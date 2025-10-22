import { Boxes } from "@/components/3d-boxes-background";
import { Timeline } from "@/components/timeline";
import { BlurLights } from "@/components/BlurLights";
import VariableProximity from "../../@/components/VariableProximity";
import TargetCursor from "../../@/components/TargetCursor";
import { useRef } from "react";

export function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      title: "2024",
      content: (
        <div className="space-y-8">
          <div className="text-neutral-200 text-xl md:text-2xl font-body leading-relaxed font-light">
            <VariableProximity
              label="Launched Wellnex Systems with a bold vision to revolutionize wellness technology. We introduced SoulWhispers and GymKey as our flagship applications."
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 700, 'wdth' 125"
              radius={100}
              containerRef={containerRef}
              className="text-neutral-200 text-xl md:text-2xl"
            />
          </div>

          {/* 2 Images - Side by Side */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gym workout"
              className="rounded-xl w-full h-56 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fitness training"
              className="rounded-xl w-full h-56 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-8">
          <div className="text-neutral-200 text-xl md:text-2xl font-body leading-relaxed font-light">
            <VariableProximity
              label="Founded the company with a clear mission: create an integrated wellness ecosystem that bridges the gap between traditional healthcare and modern lifestyle."
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 700, 'wdth' 125"
              radius={100}
              containerRef={containerRef}
              className="text-neutral-200 text-xl md:text-2xl"
            />
          </div>

          {/* 2 Images - Side by Side */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <img
              src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gym interior"
              className="rounded-xl w-full h-56 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fitness class"
              className="rounded-xl w-full h-56 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Vision",
      content: (
        <div className="space-y-8">
          <div className="text-neutral-200 text-xl md:text-2xl font-body leading-relaxed font-light">
            <VariableProximity
              label="We envision a world where wellness is seamless, where physical, mental, and emotional health converge in one intelligent platform."
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 700, 'wdth' 125"
              radius={100}
              containerRef={containerRef}
              className="text-neutral-200 text-xl md:text-2xl"
            />
          </div>

          {/* 5 Images - Masonry Style */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <img
              src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Modern gym"
              className="rounded-xl w-full h-40 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fitness motivation"
              className="rounded-xl w-full h-40 object-cover shadow-lg hover:scale-105 transition-transform duration-300 col-span-2"
            />
            <img
              src="https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Gym atmosphere"
              className="rounded-xl w-full h-40 object-cover shadow-lg hover:scale-105 transition-transform duration-300 col-span-2"
            />
            <img
              src="https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fitness journey"
              className="rounded-xl w-full h-40 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <TargetCursor />

      {/* Animated Squares Background */}
      <div className="fixed inset-0 -z-10">
        <Boxes />
      </div>

      {/* Blur Lights Overlay */}
      <BlurLights />

      {/* Hero Section */}
      <div ref={containerRef} className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-brand-orange text-sm md:text-base font-semibold tracking-widest uppercase">
              Our Story
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight cursor-target">
            <span className="text-white">Redefining</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan">
              Wellness
            </span>
            <br />
            <span className="text-white">Together</span>
          </h1>

          <div className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
            <VariableProximity
              label="We're not just building apps—we're crafting an ecosystem that empowers millions to live healthier, happier, and more connected lives."
              fromFontVariationSettings="'wght' 300, 'wdth' 100"
              toFontVariationSettings="'wght' 700, 'wdth' 125"
              radius={100}
              containerRef={containerRef}
              className="text-xl md:text-2xl text-neutral-300"
            />
          </div>

          <div className="flex items-center justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-cyan">
                2023
              </div>
              <div className="text-sm md:text-base text-neutral-400 mt-2">
                Founded
              </div>
            </div>
            <div className="h-16 w-px bg-neutral-700"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-orange">
                2+
              </div>
              <div className="text-sm md:text-base text-neutral-400 mt-2">
                Flagship Apps
              </div>
            </div>
            <div className="h-16 w-px bg-neutral-700"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-cyan">
                ∞
              </div>
              <div className="text-sm md:text-base text-neutral-400 mt-2">
                Possibilities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative pt-12">
        <Timeline data={timelineData} />
      </div>
    </>
  );
}
