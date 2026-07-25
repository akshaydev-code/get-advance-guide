"use client";

import { useState } from 'react';
import { UserPlus, SearchCheck, Send, CircleCheckBig, MoveRight } from 'lucide-react';
import Image from 'next/image';

import {
    Code2,
    Database,
    Palette,
    Megaphone,
    Briefcase,
    GraduationCap,
    ChevronRight,
    ArrowRight,
    Star
} from 'lucide-react';
import MaxWidthWrapper from '../common/MaxWidthWrapper/MaxWidthWrapper';

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
        name: "Arjun Sharma",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500", // replace with actual photo
        skills: ["React", "Node.js", "MongoDB"],
        rating: 4.9,
        reviews: 120,
        exp: "5+ years",
    },
    {
        name: "Priya Verma",
        role: "Data Scientist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
        skills: ["Python", "ML", "AI"],
        rating: 4.8,
        reviews: 98,
        exp: "4+ years",
    },
    {
        name: "Rahul Mehta",
        role: "Product Designer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
        skills: ["UI/UX", "Figma", "Adobe XD"],
        rating: 4.9,
        reviews: 110,
        exp: "6+ years",
    },
    {
        name: "Neha Kapoor",
        role: "Career Coach",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
        skills: ["Resume", "Interview", "Growth"],
        rating: 4.8,
        reviews: 87,
        exp: "7+ years",
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
        <MaxWidthWrapper>
            <section className="py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="bg-[#f0ebff] text-[#635bff] px-4 py-1.5 rounded-full font-semibold text-[11px] tracking-wider uppercase">
                        Simple Process
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
                        How <span className="text-[#635bff]">GetAdvanceGuide</span> Works
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center relative group">

                                {/* Dotted Arrow Connector (Hidden on last item & mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:flex items-center absolute top-9 left-[calc(50%+40px)] w-[calc(100%-80px)] z-0">
                                        <div className="w-full border-t-2 border-dotted border-violet-200"></div>
                                        <MoveRight className="w-3.5 h-3.5 text-violet-300 -ml-1 shrink-0" />
                                    </div>
                                )}

                                {/* Icon Circle with Overlapping Badge */}
                                <div className="relative mb-5 z-10">
                                    <div className="w-20 h-20 rounded-full bg-[#f2efff] text-[#635bff] flex items-center justify-center shadow-sm">
                                        <Icon className="w-8 h-8 stroke-[1.8]" />
                                    </div>
                                    {/* Number Badge Overlapping */}
                                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#635bff] text-white text-[12px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">{step.title}</h3>
                                <p className="text-[#6c727f] text-[12px] leading-relaxed max-w-[210px]">
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Top Categories */}
                    <div className="lg:col-span-4 xl:col-span-3">
                        <h2 className="text-xl font-bold text-gray-900 mb-5">Top Categories</h2>

                        <div className="space-y-2">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                const isActive = selectedCategory === index;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedCategory(index)}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all ${isActive
                                            ? "bg-[#f2efff] text-[#635bff] font-semibold border-l-4 border-[#635bff]"
                                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className={`w-4 h-4 ${isActive ? "text-[#635bff]" : "text-gray-400"}`} />
                                            <span className="text-[13px]">{cat.name}</span>
                                        </div>
                                        <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#635bff]" : "text-gray-300"}`} />
                                    </div>
                                );
                            })}
                        </div>

                        <button className="mt-5 text-[#635bff] hover:text-violet-800 text-[13px] font-semibold flex items-center gap-2 transition-colors">
                            <span>View All Categories</span>
                            <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* RIGHT COLUMN: Popular Mentors */}
                    <div className="lg:col-span-8 xl:col-span-9">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-xl font-bold text-gray-900">Popular Mentors</h2>
                            <button className="text-[#635bff] hover:text-violet-800 text-[13px] font-semibold transition-colors">
                                View All Mentors
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                            {mentorsData.map((mentor, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Image Container */}
                                        <div className="relative w-full h-44 bg-gray-100">
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>

                                        {/* Body Content */}
                                        <div className="p-4">
                                            <h3 className="text-[14px] font-bold text-gray-900 leading-tight">{mentor.name}</h3>
                                            <p className="text-[11px] text-gray-500 mb-3">{mentor.role}</p>

                                            {/* Skill Badges */}
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {mentor.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-md font-medium"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Rating & Exp Info */}
                                            <div className="flex items-center justify-between text-[11px] text-gray-500 mb-4">
                                                <div className="flex items-center gap-1 font-semibold text-gray-900">
                                                    <Star size={12} className="fill-amber-400 text-amber-400" />
                                                    <span>{mentor.rating}</span>
                                                    <span className="text-gray-400 font-normal">({mentor.reviews})</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-gray-400">
                                                    <span>•</span>
                                                    <span>{mentor.exp}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* View Profile Button */}
                                    <div className="px-4 pb-4">
                                        <button className="w-full py-2 rounded-xl bg-[#f2efff] text-[#635bff] hover:bg-[#635bff] hover:text-white font-medium text-[12px] transition-all">
                                            View Profile
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </MaxWidthWrapper>
    );
};

export default HowItWorksSection;