import HeroSection from "@/components/home/HomeBanner";
import StatsCTA from "@/components/home/StatsCTA";
import HowItWorksSection from "@/components/home/HowItWorksSection";

const Home = () => {
    return (
        <>
            {/* HERO */}
            <HeroSection />

            {/* HOW IT WORKS */}
            <HowItWorksSection />

            {/* STATS CTA */}
            <StatsCTA />
        </>
    );
}

export default Home;