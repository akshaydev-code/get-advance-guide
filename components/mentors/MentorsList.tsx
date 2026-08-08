import Image from "next/image";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import {
    Star,
    Bookmark,
    ArrowRight,
} from "lucide-react";

const mentors = [
    {
        name: "Anubhav Mittal",
        role: "Full Stack Developer",
        company: "Google",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp",
        skills: ["React", "Node.js", "MongoDB"],
        rating: 4.9,
        reviews: 111,
        exp: "5+ years",
    },
    {
        name: "Chitrakshi Verma",
        role: "Data Scientist",
        company: "Flipkart",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059110/HomeMentorImage_6_vmrjbo.webp",
        skills: ["Python", "ML", "AI"],
        rating: 4.8,
        reviews: 96,
        exp: "2+ years",
    },
    {
        name: "Gitakshi Sharma",
        role: "Product Designer",
        company: "Nvidia",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059105/HomeMentorImage_8_mgrhux.webp",
        skills: ["UI/UX", "Figma", "Adobe XD"],
        rating: 4.9,
        reviews: 143,
        exp: "6+ years",
    },
    {
        name: "Akshika G",
        role: "Career Coach",
        company: "Microsoft",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059111/HomeMentorImage_2_qrjsff.webp",
        skills: ["Resume", "Interview", "Growth"],
        rating: 4.8,
        reviews: 79,
        exp: "6+ years",
    },
     {
        name: "Radhika",
        role: "Career Coach",
        company: "IBM",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059103/HomeMentorImage_4_k2nujc.webp",
        skills: ["Resume", "Interview", "Growth"],
        rating: 4.9,
        reviews: 11,
        exp: "1+ years",
    },
];

const MentorsList = () => {
    return (
        <div className="py-9">
            <MaxWidthWrapper>
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[22px] font-bold">
                        Top Mentors
                    </h2>
                    <p className="text-gray-600 text-[16px]">
                        Connect with verified mentors who can help you grow and succeed
                    </p>
                </div>

                <div>
                    {/* Button */}
                    <div className="flex ml-auto w-fit border border-violet-300 text-violet-600 px-4 py-2 rounded-[11px] font-semibold items-center gap-2 cursor-pointer active:scale-95 transition-all duration-100 mb-4 text-[14px]">
                        View All Mentors
                        <ArrowRight size={18} />
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {mentors.map((mentor, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-[18px] p-4"
                            >
                                {/* Top */}
                                <div className="flex items-start justify-between mb-1">
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full w-15 h-15 object-cover object-top"
                                    />

                                    <div className="flex flex-col items-end gap-4">
                                        <span className="bg-green-100 text-green-600 text-[9px] px-2 py-1 rounded-full font-semibold">
                                            ● Available
                                        </span>

                                        <Bookmark
                                            size={20}
                                            className="text-violet-600"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-[11px] font-semibold">
                                    {mentor.name}
                                </h3>

                                <p className="text-gray-600 text-[10px]">{mentor.role}</p>

                                <p className="text-gray-500 text-[10px] font-semibold mb-1">
                                    {mentor.company}
                                </p>

                                <div className="flex items-center gap-2 text-[11px] text-gray-600 mb-2">
                                    <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                                        <Star size={9} fill="currentColor" />
                                        {mentor.rating}
                                    </span>

                                    <span className="text-[9px] text-gray-600">({mentor.reviews} reviews)</span>

                                    <span>|</span>

                                    <span className="text-[9px] text-gray-600 font-semibold">{mentor.exp}</span>
                                </div>

                                <div className="flex flex-wrap gap-1 mb-3">
                                    {mentor.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-violet-100 text-violet-600 text-[7px] px-2 py-1 rounded-[5px]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <button className="border border-violet-300 text-violet-600 py-1 rounded-[7px] font-semibold text-[9px] cursor-pointer">
                                        View Profile
                                    </button>

                                    <button className="bg-violet-600 hover:bg-violet-600 transition-all text-white py-1 rounded-[7px] font-semibold text-[9px] cursor-pointer">
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

export default MentorsList;