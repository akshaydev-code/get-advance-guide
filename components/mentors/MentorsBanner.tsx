"use client";

import {
    Users,
    GraduationCap,
    Star,
} from "lucide-react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import { RiStarSLine } from "react-icons/ri";

const MentorBannerData = {
    Categories: [
        "Web Development",
        "App Development",
        "UI/UX Design",
        "Data Science",
        "AI & Machine Learning",
        "Cyber Security",
        "Cloud Computing",
    ],
    ExperienceLevels: [
        "Fresher",
        "0 - 1 Years",
        "1 - 3 Years",
        "3 - 5 Years",
        "6+ Years",
    ],
    FloatingCards: [
        {
            number: 9,
            suffix: "+",
            title: "Expert Mentors",
            icon: Users,
            position: "top-24 left-9",
        },
        {
            number: 22,
            suffix: "+",
            title: "Sessions Completed",
            icon: Star,
            position: "top-12 -right-6",
        },
        {
            number: 31,
            suffix: "+",
            title: "Students Guided",
            icon: GraduationCap,
            position: "bottom-12 right-0",
        },
    ],
};

const Counter = ({
    target,
    suffix,
}: {
    target: number;
    suffix: string;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 3000;
        const startTime = performance.now();

        let animationFrame: number;

        const animate = (currentTime: number) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            setCount(Math.floor(progress * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [target]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
};

const MentorsBanner = () => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [experienceOpen, setExperienceOpen] = useState(false);

    return (
        <div className="relative bg-linear-to-b from-[#FFFFFF] to-[#EEE7FD] py-6">
            <MaxWidthWrapper className="flex flex-col items-center justify-center pb-13">
                {/* TOP */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-between">
                    {/* LEFT */}
                    <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                        {/* Label */}
                        <div className="flex items-center justify-center gap-2 bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[12px] font-semibold">
                            <RiStarSLine size={16} />
                            Learn from Experts. Grow with Guidance.
                        </div>

                        {/* Heading */}
                        <h1 className="text-[27px] lg:text-[36px] leading-11 lg:leading-13 text-center lg:text-left font-bold text-[#000000]">
                            Find the Right Mentor.<br />
                            <span className="text-violet-600 text-[27px] lg:text-[36px]">Achieve Your Goals.</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-[12px] lg:text-[14px] w-full md:w-[80%]">
                            Explore our expert mentors from various industries. Connect, learn, and grow with the right guidance.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="relative w-full lg:w-[60%]">
                        <Image
                            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1786190675/MentorBannerImage.webp"
                            alt="Mentorship Platform Banner"
                            width={620}
                            height={600}
                            priority
                            className="object-cover mx-auto lg:ml-auto"
                        />

                        {/* Floating Cards */}
                        {MentorBannerData.FloatingCards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={index}
                                    className={`absolute ${card.position} bg-white rounded-[15px] p-2 flex items-center gap-4 z-20 shadow-md animate-bounce`}
                                >
                                    <div className="w-12 h-12 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-[18px] font-bold">
                                            <Counter
                                                target={card.number}
                                                suffix={card.suffix}
                                            />
                                        </h3>

                                        <p className="text-gray-500 text-[12px]">
                                            {card.title}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="absolute -bottom-13 w-[85%] bg-linear-to-b from-violet-700 via-violet-500 to-violet-300 lg:bg-linear-to-r rounded-[15px] px-9 py-4">
                    {/* Heading */}
                    <p className="text-white text-[22px] text-center lg:text-left font-semibold mb-4">
                        Find the right mentor for you
                    </p>

                    {/* Search Options */}
                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2 w-full">
                        {/* Search Bar */}
                        <div className="bg-white rounded-[9px] flex items-center px-4 py-2.5 flex-1 text-[12px] w-full lg:w-60">
                            <Search className="text-gray-400 shrink-0" size={16} />
                            <input
                                placeholder="Search by skills or expertise..."
                                className="outline-none px-2 w-full text-gray-700 placeholder:text-gray-400"
                            />
                        </div>

                        {/* Select Category */}
                        <div className="relative w-full lg:w-60">
                            <button
                                type="button"
                                onClick={() => {
                                    setCategoryOpen(!categoryOpen);
                                    setExperienceOpen(false);
                                }}
                                className="bg-white rounded-[9px] px-4 py-2.5 outline-none text-[12px] text-gray-500 cursor-pointer w-full flex items-center justify-between"
                            >
                                <span>Select Category</span>
                                <MdOutlineKeyboardArrowDown className={`h-3 w-3 lg:h-4 lg:w-4 text-[#000000]/60 transition-all duration-500 ${categoryOpen ? "rotate-180" : "rotate-360"}`} />
                            </button>

                            {categoryOpen && (
                                <div className="absolute mt-2 w-full bg-white rounded-[9px] shadow-lg overflow-hidden z-50">
                                    {MentorBannerData.Categories.map((category) => (
                                        <div
                                            key={category}
                                            className="px-4 py-2.5 text-[12px] text-gray-600 hover:bg-violet-50 cursor-pointer"
                                        >
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Experience Level */}
                        <div className="relative w-full lg:w-60">
                            <button
                                type="button"
                                onClick={() => {
                                    setExperienceOpen(!experienceOpen);
                                    setCategoryOpen(false);
                                }}
                                className="bg-white rounded-[9px] px-4 py-2.5 outline-none text-[12px] text-gray-500 cursor-pointer w-full flex items-center justify-between"
                            >
                                <span>Experience Level</span>
                                <MdOutlineKeyboardArrowDown className={`h-3 w-3 lg:h-4 lg:w-4 text-[#000000]/60 transition-all duration-500 ${experienceOpen ? "rotate-180" : "rotate-360"}`} />
                            </button>

                            {experienceOpen && (
                                <div className="absolute mt-2 w-full bg-white rounded-[9px] shadow-lg overflow-hidden z-50">
                                    {MentorBannerData.ExperienceLevels.map((level) => (
                                        <div
                                            key={level}
                                            className="px-4 py-2.5 text-[12px] text-gray-600 hover:bg-violet-50 cursor-pointer"
                                        >
                                            {level}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search Button */}
                        <button className="bg-violet-700 hover:bg-violet-800 transition-all rounded-[9px] text-white font-semibold text-[12px] px-6 py-2.5 whitespace-nowrap w-full md:w-auto cursor-pointer active:scale-95">
                            Search Mentors
                        </button>
                    </div>
                </div>
            </MaxWidthWrapper >
        </div >
    )
}

export default MentorsBanner;