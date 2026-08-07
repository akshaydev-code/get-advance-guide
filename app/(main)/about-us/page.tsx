import AboutBanner from "@/components/about-us/AboutBanner";
import AboutStats from "@/components/about-us/AboutStats";
import AboutCorePillars from "@/components/about-us/AboutCorePillars";
import AboutTeam from "@/components/about-us/AboutTeam";


export default function AboutPage() {
    return (
        <>
            {/* HERO */}
            <AboutBanner />

            {/* STATS */}
            <AboutStats />

            {/* MISSION VISION VALUES */}
            <AboutCorePillars />

            {/* TEAM */}
            <AboutTeam />
        </>
    );
}