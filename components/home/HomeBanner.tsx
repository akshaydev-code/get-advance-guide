"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, Search } from "lucide-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import { RiStarSLine } from "react-icons/ri";
import { BiSolidRightArrow } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomeBannerData = {
    TestimonialPersons: [
        {
            Image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp",
        },
        {
            Image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985126/HomeBannerTestimonialPerson_2_vw8rwa.webp",
        },
        {
            Image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985126/HomeBannerTestimonialPerson_3_ps7s1s.webp",
        },
        {
            Image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985124/HomeBannerTestimonialPerson_4_xiafuw.webp",
        },
    ],
    Categories: [
        "All Categories",
        "Web Development",
        "App Development",
        "UI/UX Design",
        "Data Science",
        "AI & Machine Learning",
        "Cyber Security",
        "Cloud Computing",
        "Marketing",
        "Business",
        "Career Guidance",
    ],
    ExperienceLevels: [
        "All Experience",
        "Fresher",
        "0 - 1 Years",
        "1 - 3 Years",
        "3 - 5 Years",
        "6+ Years",
    ],
};

const HomeBanner = () => {
    const router = useRouter();
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [experienceOpen, setExperienceOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Select Category");
    const [selectedExperience, setSelectedExperience] = useState("Experience Level");

    const categoryRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
                setCategoryOpen(false);
            }
            if (experienceRef.current && !experienceRef.current.contains(event.target as Node)) {
                setExperienceOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        // Dispatch custom event so the Popular Mentors section on Home page reacts dynamically immediately
        const searchEvent = new CustomEvent("homeMentorSearch", {
            detail: {
                search: searchQuery.trim(),
                category: selectedCategory !== "Select Category" && selectedCategory !== "All Categories" ? selectedCategory : "",
                exp: selectedExperience !== "Experience Level" && selectedExperience !== "All Experience" ? selectedExperience : "",
            },
        });
        window.dispatchEvent(searchEvent);

        // Smooth scroll to the Popular Mentors section
        const target = document.getElementById("Find-a-mentor");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative bg-linear-to-b from-[#FFFFFF] to-[#EEE7FD] py-6">
            <svg
                width="160"
                height="260"
                viewBox="0 0 160 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4"
            >
                <g fill="#C7B8FF" opacity="0.4">
                    <circle cx="140" cy="20" r="2.8" />
                    <circle cx="155" cy="20" r="2.8" />

                    <circle cx="125" cy="40" r="2.8" />
                    <circle cx="140" cy="40" r="2.8" />
                    <circle cx="155" cy="40" r="2.8" />

                    <circle cx="110" cy="60" r="2.8" />
                    <circle cx="125" cy="60" r="2.8" />
                    <circle cx="140" cy="60" r="2.8" />
                    <circle cx="155" cy="60" r="2.8" />

                    <circle cx="110" cy="80" r="2.8" />
                    <circle cx="125" cy="80" r="2.8" />
                    <circle cx="140" cy="80" r="2.8" />
                    <circle cx="155" cy="80" r="2.8" />

                    <circle cx="110" cy="100" r="2.8" />
                    <circle cx="125" cy="100" r="2.8" />
                    <circle cx="140" cy="100" r="2.8" />
                    <circle cx="155" cy="100" r="2.8" />

                    <circle cx="110" cy="120" r="2.8" />
                    <circle cx="125" cy="120" r="2.8" />
                    <circle cx="140" cy="120" r="2.8" />
                    <circle cx="155" cy="120" r="2.8" />

                    <circle cx="125" cy="140" r="2.8" />
                    <circle cx="140" cy="140" r="2.8" />
                    <circle cx="155" cy="140" r="2.8" />

                    <circle cx="140" cy="160" r="2.8" />
                    <circle cx="155" cy="160" r="2.8" />
                </g>
            </svg>

            <MaxWidthWrapper className="flex flex-col items-center justify-center">
                {/* TOP */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-between md:gap-9 lg:gap-20">
                    {/* LEFT */}
                    <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                        {/* Label */}
                        <div className="flex items-center justify-center gap-2 bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[12px] font-semibold">
                            <RiStarSLine size={16} />
                            Mentorship That Shapes Your Future
                        </div>

                        {/* Heading */}
                        <h1 className="text-[36px] lg:text-[45px] leading-11 lg:leading-13 text-center lg:text-left font-bold text-[#000000]">
                            Find Mentor.<br />
                            Get Guidance.<br />
                            <span className="text-violet-600 text-[36px] lg:text-[45px]">Achieve More.</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-[14px] lg:text-[15px] w-full md:w-[65%] lg:w-full">
                            Connect with experienced mentors, gain valuable insights, and accelerate your growth in your career and life.
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 mb-8 text-[11px] lg:text-[14px]">
                            <button
                                onClick={() => {
                                    const target = document.getElementById("Find-a-mentor");
                                    if (target) {
                                        target.scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        router.push("/#Find-a-mentor");
                                    }
                                }}
                                className="group relative overflow-hidden rounded-[11px] bg-violet-600 px-6 py-3 font-semibold text-white cursor-pointer transition-all duration-100 active:scale-95">

                                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-700 ease-out group-hover:translate-x-0"></span>

                                {/* Content */}
                                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-violet-600">
                                    Find a Mentor
                                    <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
                                </span>
                            </button>

                            <Link
                                href="/how-it-works"
                                className="group relative overflow-hidden rounded-[11px] bg-white px-6 py-3 font-semibold text-violet-600 cursor-pointer transition-all duration-100 active:scale-95"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-violet-600 transition-transform duration-700 ease-out group-hover:translate-x-0 rounded-[10px]"></span>

                                {/* Content */}
                                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
                                    How It Works
                                    <BiSolidRightArrow className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                                </span>
                            </Link>
                        </div>

                        {/* Testimonial */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            {/* Images */}
                            <div className="flex -space-x-3">
                                {HomeBannerData.TestimonialPersons.map((person, index) => (
                                    <Image
                                        key={index}
                                        src={person.Image}
                                        alt={`Student ${index + 1}`}
                                        width={48}
                                        height={48}
                                        style={{
                                            animationDelay: `${index * 1.5}s`,
                                        }}
                                        className="rounded-full border-2 border-white object-cover shadow-sm animate-testimonial"
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-[#000000]/80 font-medium text-[14px]">
                                Trusted by <span className="font-bold text-[#000000]">9+ </span>
                                <br className="hidden sm:block" />
                                students & professionals
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-[60%] pt-16">
                        <Image
                            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785004553/HomeBannerFullImageStatic_bwuje8.webp"
                            alt="Mentorship Platform Banner"
                            width={620}
                            height={600}
                            priority
                            className="object-cover mx-auto lg:ml-auto"
                        />
                    </div>
                </div>

                {/* BOTTOM SEARCH FORM */}
                <form
                    onSubmit={handleSearch}
                    className="bg-linear-to-b from-violet-700 via-violet-500 to-violet-300 lg:bg-linear-to-r rounded-[15px] px-9 py-6 w-full mt-4"
                >
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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by skills or expertise..."
                                className="outline-none px-2 w-full text-gray-700 placeholder:text-gray-400"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    className="text-gray-400 hover:text-gray-600 text-xs px-1"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        {/* Select Category */}
                        <div ref={categoryRef} className="relative w-full lg:w-60">
                            <button
                                type="button"
                                onClick={() => {
                                    setCategoryOpen(!categoryOpen);
                                    setExperienceOpen(false);
                                }}
                                className="bg-white rounded-[9px] px-4 py-2.5 outline-none text-[12px] text-gray-700 cursor-pointer w-full flex items-center justify-between"
                            >
                                <span className="truncate">{selectedCategory}</span>
                                <MdOutlineKeyboardArrowDown className={`h-3 w-3 lg:h-4 lg:w-4 text-[#000000]/60 transition-all duration-300 ${categoryOpen ? "rotate-180" : "rotate-0"}`} />
                            </button>

                            {categoryOpen && (
                                <div className="absolute mt-2 w-full bg-white rounded-[9px] shadow-lg overflow-hidden z-50 max-h-56 overflow-y-auto border border-violet-100">
                                    {HomeBannerData.Categories.map((category) => (
                                        <div
                                            key={category}
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setCategoryOpen(false);
                                            }}
                                            className={`px-4 py-2.5 text-[12px] transition-colors cursor-pointer ${
                                                selectedCategory === category
                                                    ? "bg-violet-50 text-violet-600 font-semibold"
                                                    : "text-gray-600 hover:bg-violet-50 hover:text-violet-600"
                                            }`}
                                        >
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Experience Level */}
                        <div ref={experienceRef} className="relative w-full lg:w-60">
                            <button
                                type="button"
                                onClick={() => {
                                    setExperienceOpen(!experienceOpen);
                                    setCategoryOpen(false);
                                }}
                                className="bg-white rounded-[9px] px-4 py-2.5 outline-none text-[12px] text-gray-700 cursor-pointer w-full flex items-center justify-between"
                            >
                                <span className="truncate">{selectedExperience}</span>
                                <MdOutlineKeyboardArrowDown className={`h-3 w-3 lg:h-4 lg:w-4 text-[#000000]/60 transition-all duration-300 ${experienceOpen ? "rotate-180" : "rotate-0"}`} />
                            </button>

                            {experienceOpen && (
                                <div className="absolute mt-2 w-full bg-white rounded-[9px] shadow-lg overflow-hidden z-50 max-h-56 overflow-y-auto border border-violet-100">
                                    {HomeBannerData.ExperienceLevels.map((level) => (
                                        <div
                                            key={level}
                                            onClick={() => {
                                                setSelectedExperience(level);
                                                setExperienceOpen(false);
                                            }}
                                            className={`px-4 py-2.5 text-[12px] transition-colors cursor-pointer ${
                                                selectedExperience === level
                                                    ? "bg-violet-50 text-violet-600 font-semibold"
                                                    : "text-gray-600 hover:bg-violet-50 hover:text-violet-600"
                                            }`}
                                        >
                                            {level}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search Button */}
                        <button
                            type="submit"
                            className="bg-violet-700 hover:bg-violet-800 transition-all rounded-[9px] text-white font-semibold text-[12px] px-6 py-2.5 whitespace-nowrap w-full md:w-auto cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
                        >
                            <Search size={14} />
                            Search Mentors
                        </button>
                    </div>
                </form>
            </MaxWidthWrapper>
        </div>
    );
};

export default HomeBanner;