import Image from "next/image";
import {
    Star,
    Bookmark,
    ArrowRight,
} from "lucide-react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";

const mentors = [
    {
        name: "Rahul Mehta",
        role: "Senior Software Engineer",
        company: "Google",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
        rating: "4.9",
        reviews: "128",
        exp: "6+ years",
        skills: ["Python", "AI/ML", "System Design"],
    },
    {
        name: "Priya Verma",
        role: "Product Manager",
        company: "Microsoft",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
        rating: "4.8",
        reviews: "96",
        exp: "7+ years",
        skills: ["Product Strategy", "Agile", "Roadmap"],
    },
    {
        name: "Amit Sharma",
        role: "UI/UX Designer",
        company: "Adobe",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
        rating: "4.9",
        reviews: "110",
        exp: "5+ years",
        skills: ["UI Design", "Figma", "User Research"],
    },
    {
        name: "Neha Kapoor",
        role: "Data Scientist",
        company: "IBM",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
        rating: "4.8",
        reviews: "89",
        exp: "6+ years",
        skills: ["Python", "Machine Learning", "SQL"],
    },
    {
        name: "Vikram Singh",
        role: "Marketing Strategist",
        company: "HubSpot",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
        rating: "4.7",
        reviews: "75",
        exp: "8+ years",
        skills: ["Digital Marketing", "SEO", "Growth"],
    },
];

const MentorsList = () => {
    return (
        <div>
            <MaxWidthWrapper>
                <div className=" pb-16">
                    <div className="flex items-center justify-between mb-12">
                        <div className="text-center w-full">
                            <h2 className="text-5xl font-bold mb-4">
                                Top Mentors
                            </h2>

                            <p className="text-gray-500 text-lg">
                                Connect with verified mentors who can help you grow and succeed.
                            </p>
                        </div>

                        <button className="hidden lg:flex border border-violet-300 text-violet-700 px-6 py-3 rounded-xl font-semibold items-center gap-2">
                            View All Mentors
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
                        {mentors.map((mentor, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#ececf3] rounded-[28px] p-5 shadow-sm hover:shadow-xl transition-all"
                            >
                                {/* top */}
                                <div className="flex items-start justify-between mb-5">
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        width={70}
                                        height={70}
                                        className="rounded-full w-18 h-18 object-cover"
                                    />

                                    <div className="flex flex-col items-end gap-4">
                                        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold">
                                            ● Available
                                        </span>

                                        <Bookmark
                                            size={20}
                                            className="text-violet-600"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-1">
                                    {mentor.name}
                                </h3>

                                <p className="text-gray-500">{mentor.role}</p>

                                <p className="text-gray-400 mb-5">
                                    {mentor.company}
                                </p>

                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-5">
                                    <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                                        <Star size={14} fill="currentColor" />
                                        {mentor.rating}
                                    </span>

                                    <span>({mentor.reviews} reviews)</span>

                                    <span>|</span>

                                    <span>{mentor.exp}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {mentor.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-violet-100 text-violet-700 text-xs px-3 py-1 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="border border-violet-300 text-violet-700 py-3 rounded-xl font-semibold">
                                        View Profile
                                    </button>

                                    <button className="bg-violet-600 hover:bg-violet-700 transition-all text-white py-3 rounded-xl font-semibold">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MentorsList