import HeroSection from "@/components/home/HeroSection";
import StatsCTA from "@/components/home/StatsCTA";
import HowItWorksSection from "@/components/home/HowItWorksSection";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* HERO */}
      <HeroSection />

      {/* HOW IT WORKS */}
      <HowItWorksSection />

      {/* STATS CTA */}
      <StatsCTA />
    </div>
  );
}

export default HomePage;