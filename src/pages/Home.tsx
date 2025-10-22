import { Hero } from "@/components/Hero";
import { BlurLights } from "@/components/BlurLights";
import FlowingMenu from "../../@/components/FlowingMenu";
import ScrollVelocity from "../../@/components/ScrollVelocity";
import { WhyWellnex } from "@/components/WhyWellnex";
import { ComingNext } from "@/components/ComingNext";
import { UserReviews } from "@/components/UserReviews";
import { StayConnected } from "@/components/StayConnected";
import InfiniteGallery from "@/components/3d-scroll-gallery";

export function Home() {
  const wellnessMenuItems = [
    {
      link: "/apps",
      text: "SoulWhispers",
      image:
        "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "/apps",
      text: "GymKey",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "/about",
      text: "Our Vision",
      image:
        "https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "/contact",
      text: "Join Us",
      image:
        "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
      <BlurLights />
      <Hero />

      {/* Scroll Velocity Section */}
      <section className="relative pb-20 bg-black overflow-hidden">
        <ScrollVelocity
          texts={["WELLNESS • INNOVATION • TECHNOLOGY", "MIND • BODY • SOUL"]}
          velocity={12}
          velocityMapping={{ input: [0, 1000], output: [0, 30] }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan font-bold tracking-tight"
          parallaxStyle={{
            padding: "0 0 1rem 0",
          }}
          scrollerStyle={{
            fontSize: "clamp(2.5rem, 8vw, 8rem)",
            lineHeight: "0.9",
            fontWeight: 900,
            letterSpacing: "-0.05em",
          }}
        />
      </section>

      {/* Flowing Menu Section */}
      <section className="relative">
        <div style={{ height: "600px", position: "relative" }}>
          <FlowingMenu items={wellnessMenuItems} />
        </div>
      </section>

      {/* Why Wellnex Section */}
      <WhyWellnex />

      {/* 3D Gallery Section */}
      <section className="relative h-screen w-full bg-black">
        <InfiniteGallery
          images={[
            "https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1200",
          ]}
          className="h-full w-full"
          speed={8}
          visibleCount={10}
        />
      </section>

      {/* What's Coming Next Section */}
      <ComingNext />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Stay Connected Section */}
      <StayConnected />
    </>
  );
}
