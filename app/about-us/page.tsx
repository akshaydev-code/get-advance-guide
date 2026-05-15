import Image from "next/image";
import {
    Users,
    UserRoundPlus,
    CalendarCheck,
    Star,
    Target,
    Eye,
    Gem,
    Check,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";

const teamMembers = [
    {
        name: "Arjun Sharma",
        role: "CEO & Founder",
        desc: "Passionate about education and building meaningful connections.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        name: "Priya Verma",
        role: "Head of Operations",
        desc: "Ensures smooth operations and great user experiences.",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
        name: "Rahul Mehta",
        role: "Lead Developer",
        desc: "Loves turning ideas into powerful and scalable solutions.",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        name: "Neha Kapoor",
        role: "Community Manager",
        desc: "Builds and nurtures our amazing mentor and learner community.",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#f8f8fc] text-[#111827] overflow-hidden">
            {/* NAVBAR */}
            <nav className="w-full border-b border-[#ececf3] bg-white">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-blue-600 flex items-center justify-center text-white font-bold">
                            AG
                        </div>

                        <h1 className="text-2xl font-bold">
                            GetAdvance<span className="text-violet-600">Guide</span>
                        </h1>
                    </div>

                    <ul className="hidden lg:flex items-center gap-10 font-medium">
                        <li>Home</li>
                        <li>Mentors</li>
                        <li>How It Works</li>
                        <li>Resources</li>

                        <li className="text-violet-600 border-b-2 border-violet-600 pb-2">
                            About Us
                        </li>

                        <li>Contact</li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <button className="border border-violet-300 text-violet-700 px-7 py-3 rounded-xl font-semibold">
                            Log In
                        </button>

                        <button className="bg-violet-600 hover:bg-violet-700 transition-all text-white px-7 py-3 rounded-xl font-semibold">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 pt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-5 py-2 rounded-full text-sm font-semibold mb-8">
                            ✨ About Us
                        </div>

                        <h1 className="text-6xl leading-tight font-extrabold mb-8">
                            Empowering Growth
                            <br />
                            Through{" "}
                            <span className="text-violet-600">
                                Mentorship
                            </span>
                        </h1>

                        <p className="text-gray-500 text-xl leading-9 max-w-xl mb-10">
                            GetAdvanceGuide is a platform dedicated to connecting learners
                            with experienced mentors who can guide them towards their goals
                            and unlock their true potential.
                        </p>

                        <button className="bg-violet-600 hover:bg-violet-700 transition-all text-white px-10 py-5 rounded-2xl font-semibold flex items-center gap-3 shadow-lg shadow-violet-200">
                            Join Our Community
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center">
                        <div className="absolute w-[550px] h-[550px] bg-violet-200 rounded-full blur-3xl opacity-40" />

                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                            alt="team"
                            width={650}
                            height={550}
                            className="relative z-10 rounded-[40px] object-cover"
                        />

                        <div className="absolute top-0 left-10 w-32 h-32 border-[10px] border-violet-200 rounded-full opacity-50" />

                        <div className="absolute top-16 right-0 w-12 h-12 bg-violet-500 rounded-full" />
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="max-w-7xl mx-auto px-6 mt-14">
                <div className="bg-[#f3edff] border border-violet-200 rounded-[32px] grid md:grid-cols-4 overflow-hidden">
                    {[
                        {
                            icon: <Users size={34} />,
                            number: "10,000+",
                            text: "Active Users",
                        },
                        {
                            icon: <UserRoundPlus size={34} />,
                            number: "1,000+",
                            text: "Expert Mentors",
                        },
                        {
                            icon: <CalendarCheck size={34} />,
                            number: "5,000+",
                            text: "Sessions Completed",
                        },
                        {
                            icon: <Star size={34} />,
                            number: "95%",
                            text: "Success Rate",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-5 p-10 border-r border-violet-200 last:border-r-0"
                        >
                            <div className="w-20 h-20 rounded-full bg-white text-violet-600 flex items-center justify-center shadow-sm">
                                {item.icon}
                            </div>

                            <div>
                                <h2 className="text-5xl font-extrabold mb-2">
                                    {item.number}
                                </h2>

                                <p className="text-gray-500 text-lg">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MISSION VISION VALUES */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-white border border-[#ececf3] rounded-[32px] p-10 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-8">
                        <Target size={30} />
                    </div>

                    <h2 className="text-4xl font-bold mb-6">
                        Our Mission
                    </h2>

                    <p className="text-gray-500 text-lg leading-8">
                        To make quality mentorship accessible to everyone and help
                        individuals grow in their personal and professional lives.
                    </p>

                    <div className="w-12 h-1 bg-violet-600 rounded-full mt-8" />
                </div>

                {/* CARD 2 */}
                <div className="bg-white border border-[#ececf3] rounded-[32px] p-10 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-8">
                        <Eye size={30} />
                    </div>

                    <h2 className="text-4xl font-bold mb-6">
                        Our Vision
                    </h2>

                    <p className="text-gray-500 text-lg leading-8">
                        To build a world where every individual has the right guidance
                        to achieve their dreams and make an impact.
                    </p>

                    <div className="w-12 h-1 bg-violet-600 rounded-full mt-8" />
                </div>

                {/* CARD 3 */}
                <div className="bg-white border border-[#ececf3] rounded-[32px] p-10 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-8">
                        <Gem size={30} />
                    </div>

                    <h2 className="text-4xl font-bold mb-6">
                        Our Values
                    </h2>

                    <div className="space-y-5">
                        {[
                            "We believe in trust and transparency",
                            "We value inclusivity and diversity",
                            "We support continuous learning",
                            "We are committed to your success",
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mt-1">
                                    <Check size={14} />
                                </div>

                                <p className="text-gray-500 text-lg">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="text-center mb-14">
                    <div className="inline-flex bg-violet-100 text-violet-600 px-5 py-2 rounded-full text-sm font-semibold mb-5">
                        Our Team
                    </div>

                    <h2 className="text-5xl font-bold">
                        Meet The People Behind{" "}
                        <span className="text-violet-600">
                            GetAdvanceGuide
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#ececf3] rounded-[28px] p-8 shadow-sm"
                        >
                            <div className="flex items-start gap-5">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full w-20 h-20 object-cover"
                                />

                                <div>
                                    <h3 className="text-2xl font-bold mb-1">
                                        {member.name}
                                    </h3>

                                    <p className="text-violet-600 font-medium mb-4">
                                        {member.role}
                                    </p>

                                    <p className="text-gray-500 leading-7">
                                        {member.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center">
                                    <FaLinkedinIn size={18} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gradient-to-r from-violet-800 to-violet-500 text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            GetAdvanceGuide
                        </h2>

                        <p className="leading-8 text-violet-100">
                            Empowering students and professionals by connecting them
                            with the right mentors for guidance, growth, and success.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-violet-100">
                            <li>Home</li>
                            <li>Mentors</li>
                            <li>How It Works</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-5">
                            Resources
                        </h3>

                        <ul className="space-y-3 text-violet-100">
                            <li>Blog</li>
                            <li>Guides</li>
                            <li>FAQs</li>
                            <li>Help Center</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-5">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-violet-100">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-5">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-4">
                            {["F", "T", "in", "I"].map((item, index) => (
                                <div
                                    key={index}
                                    className="w-12 h-12 rounded-full bg-white text-violet-600 flex items-center justify-center font-bold"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-violet-400/30 py-6 text-center text-violet-100">
                    © 2024 GetAdvanceGuide. All rights reserved.
                </div>
            </footer>
        </main>
    );
}