"use client";

import { useState } from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '../common/MaxWidthWrapper/MaxWidthWrapper';
import { BiSolidRightArrow } from "react-icons/bi";
import { RiStarSLine } from 'react-icons/ri';
import {
    Code2,
    Database,
    Palette,
    Megaphone,
    Briefcase,
    GraduationCap,
    ChevronRight,
    Star,
    UserPlus,
    SearchCheck,
    Send,
    CircleCheckBig
} from 'lucide-react';

const categories = [
    { name: "Web Development", icon: Code2 },
    { name: "Data Science", icon: Database },
    { name: "Design", icon: Palette },
    { name: "Marketing", icon: Megaphone },
    { name: "Business", icon: Briefcase },
    { name: "Career Guidance", icon: GraduationCap },
];

const mentorsData = [
    {
        name: "Anubhav Mittal",
        role: "Full Stack Developer",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp",
        skills: ["React", "Node.js", "MongoDB"],
        rating: 4.9,
        reviews: 111,
        exp: "5+ years",
    },
    {
        name: "Chitrakshi Verma",
        role: "Data Scientist",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059110/HomeMentorImage_6_vmrjbo.webp",
        skills: ["Python", "ML", "AI"],
        rating: 4.8,
        reviews: 96,
        exp: "2+ years",
    },
    {
        name: "Gitakshi Sharma",
        role: "Product Designer",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059105/HomeMentorImage_8_mgrhux.webp",
        skills: ["UI/UX", "Figma", "Adobe XD"],
        rating: 4.9,
        reviews: 143,
        exp: "6+ years",
    },
    {
        name: "Akshika G",
        role: "Career Coach",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059111/HomeMentorImage_2_qrjsff.webp",
        skills: ["Resume", "Interview", "Growth"],
        rating: 4.8,
        reviews: 79,
        exp: "6+ years",
    },
];

const steps = [
    {
        title: "Create Account",
        desc: "Sign up and create your profile in minutes.",
        icon: UserPlus,
    },
    {
        title: "Find a Mentor",
        desc: "Search and connect with mentors that match your goals.",
        icon: SearchCheck,
    },
    {
        title: "Send Request",
        desc: "Send a mentorship request and start a conversation.",
        icon: Send,
    },
    {
        title: "Grow Together",
        desc: "Learn, get guidance, and achieve your goals.",
        icon: CircleCheckBig,
    },
];

const HowItWorksSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <div id="Find-a-mentor" className="py-16 scroll-mt-6">
            <MaxWidthWrapper>
                {/* Heading & Label */}
                <div className="text-center mb-6">
                    {/* Label */}
                    <div className="flex items-center justify-center w-fit mx-auto gap-2 bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[11px] font-semibold uppercase">
                        <RiStarSLine size={16} />
                        Simple Process
                    </div>

                    {/* Heading */}
                    <h2 className="text-[27px] font-bold text-[#000000] mt-3">
                        How <span className="text-violet-600">GetAdvanceGuide</span> Works
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 mb-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div key={index} className="relative group flex flex-col items-center text-center">

                                {/* Arrow Dotted Line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute hidden md:flex items-center top-9 left-[calc(50%+79px)] w-[calc(50%-22px)] z-0">
                                        <div className="w-full border-t-2 border-dotted border-violet-200"></div>
                                        <ChevronRight className="w-4 h-4 stroke-[3.2] text-violet-600 -ml-1 shrink-0" />
                                    </div>
                                )}

                                {/* Step Circles */}
                                <div className="relative mb-5 z-10">
                                    <div className="w-22 h-22 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center">
                                        <Icon className="w-9 h-9 stroke-[2.2]" />
                                    </div>

                                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-6 bg-violet-600 text-white text-[11px] font-semibold rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[15px] font-semibold text-[#000000] mb-1">{step.title}</h3>

                                {/* Description */}
                                <p className="text-[#000000]/60 text-[11px] max-w-[155px]">
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Categories & Mentors */}
                <div  className="flex flex-col md:flex-row gap-12 items-start justify-start">
                    {/* LEFT */}
                    <div className="w-full md:w-[43%] lg:w-[31%]">
                        {/* Heading */}
                        <h2 className="text-[18px] lg:text-[22px] font-semibold text-[#000000] mb-4 text-center md:text-left">Top Categories</h2>

                        {/* Top Categories */}
                        <div className="space-y-2">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                const isActive = selectedCategory === index;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedCategory(index)}
                                        className={`group flex items-center justify-between px-4 py-3 rounded-[11px] cursor-pointer transition-all duration-100 ${isActive
                                            ? "bg-violet-50 text-violet-600 font-semibold border-l-4 border-violet-600"
                                            : "bg-white text-[#000000]/60 hover:text-[#000000]"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className={`w-4 h-4 ${isActive ? "text-violet-600" : "text-[#000000]/60 group-hover:text-[#000000]"}`} />
                                            <span className="text-[11px] lg:text-[12px]">{cat.name}</span>
                                        </div>

                                        <ChevronRight className={`w-4 h-4 ${isActive ? "text-violet-600" : "text-[#000000]/60 group-hover:text-[#000000]"}`} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* View All Button */}
                        <button className="mt-4 text-violet-600 hover:text-violet-800 text-[11px] lg:text-[12px] font-semibold flex items-center gap-1 hover:translate-x-2 transition-all duration-500 cursor-pointer mx-auto md:mx-0">
                            <span>View All Categories</span>
                            <BiSolidRightArrow size={9} />
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full">
                        {/* Heading */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[18px] lg:text-[22px] font-semibold text-[#000000]">Popular Mentors</h2>
                            <button className="text-violet-600 hover:text-violet-800 text-[11px] lg:text-[12px] font-semibold flex items-center gap-1 hover:translate-x-2 transition-all duration-500 cursor-pointer">
                                View All Mentors
                                <BiSolidRightArrow size={9} />
                            </button>
                        </div>

                        {/* Popular Mentors */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {mentorsData.map((mentor, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-[11px] overflow-hidden border border-violet-100 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div className='pb-4'>
                                        {/* Image */}
                                        <div className="relative w-full h-54 md:h-31">
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="pt-4 px-4">
                                            {/* Name */}
                                            <h3 className="text-[14px] lg:text-[16px] font-semibold text-[#00000] tracking-wide mb-1">{mentor.name}</h3>

                                            {/* Role */}
                                            <p className="text-[11px] lg:text-[12px] text-[#000000]/60 mb-3">{mentor.role}</p>

                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {mentor.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-violet-50 text-violet-600 text-[8px] px-2 py-1 rounded-[3px] font-medium"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Rating & Experience Info */}
                                            <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center md:justify-between text-[11px] mb-4">
                                                {/* Rating */}
                                                <div className="flex items-center gap-1 font-semibold text-[#000000]">
                                                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                                    <span>{mentor.rating}</span>
                                                    <span className="text-[#000000]/40 font-normal tracking-wide">({mentor.reviews})</span>
                                                </div>

                                                {/* Experience */}
                                                <div className="flex items-center gap-1">
                                                    <span className="text-violet-600 text-[15px]">•</span>
                                                    <span className="text-[#000000]/60 font-medium">{mentor.exp}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* View Profile Button */}
                                        <div className="px-4">
                                            <button className="w-full py-2 rounded-[11px] bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white font-medium text-[11px] lg:text-[12px] cursor-pointer transition-all duration-400">
                                                View Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default HowItWorksSection;