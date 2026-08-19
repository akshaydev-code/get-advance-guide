"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
    CircleCheckBig,
    Search,
    SlidersHorizontal,
    ArrowUpDown,
} from 'lucide-react';

interface MentorItem {
    _id: string;
    name: string;
    role: string;
    company?: string;
    image: string;
    category?: string;
    skills: string[];
    rating: number;
    reviews: number;
    exp: string;
    experienceYears?: number;
    isPopular?: boolean;
}

const categories = [
    { name: "All Categories", icon: RiStarSLine },
    { name: "Web Development", icon: Code2 },
    { name: "Data Science", icon: Database },
    { name: "Design", icon: Palette },
    { name: "Marketing", icon: Megaphone },
    { name: "Business", icon: Briefcase },
    { name: "Career Guidance", icon: GraduationCap },
];

const fallbackMentors: MentorItem[] = [
    {
        _id: "1",
        name: "Anubhav Mittal",
        role: "Full Stack Developer",
        company: "Google",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059102/HomeMentorImage_9_c0qrmh.webp",
        category: "Web Development",
        skills: ["React", "Node.js", "MongoDB"],
        rating: 4.9,
        reviews: 111,
        exp: "5+ years",
    },
    {
        _id: "2",
        name: "Chitrakshi Verma",
        role: "Data Scientist",
        company: "Flipkart",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059110/HomeMentorImage_6_vmrjbo.webp",
        category: "Data Science",
        skills: ["Python", "ML", "AI"],
        rating: 4.8,
        reviews: 96,
        exp: "2+ years",
    },
    {
        _id: "3",
        name: "Gitakshi Sharma",
        role: "Product Designer",
        company: "Nvidia",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059105/HomeMentorImage_8_mgrhux.webp",
        category: "Design",
        skills: ["UI/UX", "Figma", "Adobe XD"],
        rating: 4.9,
        reviews: 143,
        exp: "6+ years",
    },
    {
        _id: "4",
        name: "Akshika G",
        role: "Career Coach",
        company: "Microsoft",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785059111/HomeMentorImage_2_qrjsff.webp",
        category: "Career Guidance",
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
        link: "/signup",
    },
    {
        title: "Find a Mentor",
        desc: "Search and connect with mentors that match your goals.",
        icon: SearchCheck,
        link: "/mentors",
    },
    {
        title: "Send Request",
        desc: "Send a mentorship request and start a conversation.",
        icon: Send,
        link: "/mentors",
    },
    {
        title: "Grow Together",
        desc: "Learn, get guidance, and achieve your goals.",
        icon: CircleCheckBig,
        link: "/how-it-works",
    },
];

const sortOptions = [
    { label: "Popular", value: "popular" },
    { label: "Highest Rated", value: "rating" },
    { label: "Most Reviews", value: "reviews" },
    { label: "Experience", value: "exp_desc" },
    { label: "Name (A-Z)", value: "name_asc" },
];

const HowItWorksSection = () => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [mentors, setMentors] = useState<MentorItem[]>(fallbackMentors);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const [expFilter, setExpFilter] = useState("");

    const fetchMentors = useCallback(async (catName?: string, search?: string, sort?: string, exp?: string) => {
        try {
            setLoading(true);
            const activeCategory = catName !== undefined ? catName : categories[selectedCategory].name;
            const activeSearch = search !== undefined ? search : searchTerm;
            const activeSort = sort !== undefined ? sort : sortBy;
            const activeExp = exp !== undefined ? exp : expFilter;

            const params = new URLSearchParams();
            if (activeCategory && activeCategory !== "All Categories") {
                params.append("category", activeCategory);
            }
            if (activeSearch.trim()) {
                params.append("search", activeSearch.trim());
            }
            if (activeSort) {
                params.append("sortBy", activeSort);
            }
            if (activeExp && activeExp !== "All Experience") {
                params.append("exp", activeExp);
            }

            const res = await fetch(`/api/mentors?${params.toString()}`);
            const data = await res.json();

            if (data.success && Array.isArray(data.data) && data.data.length > 0) {
                setMentors(data.data);
            } else if (data.success && data.data.length === 0) {
                setMentors([]);
            } else {
                setMentors(fallbackMentors);
            }
        } catch (error) {
            console.error("Error fetching mentors:", error);
            setMentors(fallbackMentors);
        } finally {
            setLoading(false);
        }
    }, [selectedCategory, searchTerm, sortBy, expFilter]);

    // Initial fetch from MongoDB on mount
    useEffect(() => {
        fetchMentors();
    }, [fetchMentors]);

    // Listen for custom search event from HomeBanner
    useEffect(() => {
        const handleBannerSearch = (event: Event) => {
            const customEvent = event as CustomEvent<{ search: string; category: string; exp: string }>;
            const { search, category, exp } = customEvent.detail;
            
            if (search !== undefined) setSearchTerm(search);
            if (exp !== undefined) setExpFilter(exp);

            if (category) {
                const catIndex = categories.findIndex(
                    (c) => c.name.toLowerCase() === category.toLowerCase()
                );
                if (catIndex !== -1) {
                    setSelectedCategory(catIndex);
                    fetchMentors(categories[catIndex].name, search, undefined, exp);
                    return;
                }
            }
            fetchMentors(undefined, search, undefined, exp);
        };

        window.addEventListener("homeMentorSearch", handleBannerSearch);
        return () => window.removeEventListener("homeMentorSearch", handleBannerSearch);
    }, [fetchMentors]);

    // Handle category click
    const handleCategoryClick = (index: number) => {
        setSelectedCategory(index);
        const cat = categories[index];
        fetchMentors(cat.name, searchTerm, sortBy, expFilter);
    };

    // Handle sort change
    const handleSortChange = (newSort: string) => {
        setSortBy(newSort);
        fetchMentors(undefined, undefined, newSort, undefined);
    };

    // Handle search input
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchMentors(undefined, searchTerm, sortBy, expFilter);
    };

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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 mb-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <Link
                                href={step.link}
                                key={index}
                                className="relative group flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-1"
                            >
                                {/* Arrow Dotted Line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute hidden md:flex items-center top-9 left-[calc(50%+79px)] w-[calc(50%-22px)] z-0">
                                        <div className="w-full border-t-2 border-dotted border-violet-200"></div>
                                        <ChevronRight className="w-4 h-4 stroke-[3.2] text-violet-600 -ml-1 shrink-0" />
                                    </div>
                                )}

                                {/* Step Circles */}
                                <div className="relative mb-5 z-10">
                                    <div className="w-22 h-22 rounded-full bg-violet-50 group-hover:bg-violet-600 text-violet-600 group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm">
                                        <Icon className="w-9 h-9 stroke-[2.2]" />
                                    </div>

                                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-6 bg-violet-600 text-white text-[11px] font-semibold rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[15px] font-semibold text-[#000000] group-hover:text-violet-600 transition-colors mb-1">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#000000]/60 text-[11px] max-w-[155px]">
                                    {step.desc}
                                </p>
                            </Link>
                        );
                    })}
                </div>

                {/* Categories & Mentors Container */}
                <div className="flex flex-col md:flex-row gap-12 items-start justify-start">
                    {/* LEFT: Top Categories */}
                    <div className="w-full md:w-[43%] lg:w-[31%]">
                        {/* Heading */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[18px] lg:text-[22px] font-semibold text-[#000000] text-center md:text-left">
                                Top Categories
                            </h2>
                        </div>

                        {/* Top Categories List */}
                        <div className="space-y-2">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                const isActive = selectedCategory === index;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleCategoryClick(index)}
                                        className={`group flex items-center justify-between px-4 py-3 rounded-[11px] cursor-pointer transition-all duration-200 ${
                                            isActive
                                                ? "bg-violet-50 text-violet-600 font-semibold border-l-4 border-violet-600 shadow-xs"
                                                : "bg-white text-[#000000]/60 hover:text-violet-600 hover:bg-violet-50/50"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-violet-600" : "text-[#000000]/60 group-hover:text-violet-600"}`} />
                                            <span className="text-[11px] lg:text-[12px]">{cat.name}</span>
                                        </div>

                                        <ChevronRight className={`w-4 h-4 transition-colors ${isActive ? "text-violet-600" : "text-[#000000]/60 group-hover:text-violet-600"}`} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* View All Button */}
                        <Link
                            href="/mentors"
                            className="mt-4 text-violet-600 hover:text-violet-800 text-[11px] lg:text-[12px] font-semibold flex items-center gap-1 hover:translate-x-2 transition-all duration-500 cursor-pointer mx-auto md:mx-0 w-fit"
                        >
                            <span>View All Categories</span>
                            <BiSolidRightArrow size={9} />
                        </Link>
                    </div>

                    {/* RIGHT: Popular Mentors */}
                    <div className="w-full">
                        {/* Heading & Controls Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                            <div className="flex items-center gap-2">
                                <h2 className="text-[18px] lg:text-[22px] font-semibold text-[#000000]">
                                    Popular Mentors
                                </h2>
                                <span className="bg-violet-100 text-violet-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
                                    {mentors.length}
                                </span>
                            </div>

                            {/* Controls: Search, Sort & View All Mentors */}
                            <div className="flex flex-wrap items-center gap-2">
                                {/* Search in Mentors */}
                                <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search mentors..."
                                        className="text-[11px] bg-white border border-violet-100 rounded-[9px] px-3 py-1.5 pr-7 text-gray-700 outline-none focus:border-violet-400 w-32 sm:w-40 transition-all"
                                    />
                                    <button type="submit" className="absolute right-2 text-gray-400 hover:text-violet-600">
                                        <Search size={13} />
                                    </button>
                                </form>

                                {/* Sort Dropdown */}
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => handleSortChange(e.target.value)}
                                        className="text-[11px] bg-white border border-violet-100 text-gray-700 rounded-[9px] px-2.5 py-1.5 outline-none cursor-pointer focus:border-violet-400 font-medium"
                                    >
                                        {sortOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                Sort: {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* View All Mentors Link */}
                                <Link
                                    href="/mentors"
                                    className="text-violet-600 hover:text-violet-800 text-[11px] lg:text-[12px] font-semibold flex items-center gap-1 hover:translate-x-1.5 transition-all duration-300 cursor-pointer ml-1"
                                >
                                    View All
                                    <BiSolidRightArrow size={9} />
                                </Link>
                            </div>
                        </div>

                        {/* Active Filter Badges */}
                        {(selectedCategory !== 0 || searchTerm || expFilter) && (
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="text-[10px] text-gray-500 font-medium">Active filters:</span>
                                {selectedCategory !== 0 && (
                                    <span className="inline-flex items-center gap-1 bg-violet-50 text-violet-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                        {categories[selectedCategory].name}
                                        <button
                                            onClick={() => handleCategoryClick(0)}
                                            className="hover:text-violet-900 cursor-pointer"
                                        >
                                            ✕
                                        </button>
                                    </span>
                                )}
                                {searchTerm && (
                                    <span className="inline-flex items-center gap-1 bg-violet-50 text-violet-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                        &quot;{searchTerm}&quot;
                                        <button
                                            onClick={() => {
                                                setSearchTerm("");
                                                fetchMentors(undefined, "", sortBy, expFilter);
                                            }}
                                            className="hover:text-violet-900 cursor-pointer"
                                        >
                                            ✕
                                        </button>
                                    </span>
                                )}
                                {expFilter && (
                                    <span className="inline-flex items-center gap-1 bg-violet-50 text-violet-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                        Exp: {expFilter}
                                        <button
                                            onClick={() => {
                                                setExpFilter("");
                                                fetchMentors(undefined, searchTerm, sortBy, "");
                                            }}
                                            className="hover:text-violet-900 cursor-pointer"
                                        >
                                            ✕
                                        </button>
                                    </span>
                                )}
                                <button
                                    onClick={() => {
                                        setSelectedCategory(0);
                                        setSearchTerm("");
                                        setExpFilter("");
                                        fetchMentors("All Categories", "", "popular", "");
                                    }}
                                    className="text-[10px] text-violet-600 hover:underline cursor-pointer font-medium"
                                >
                                    Reset all
                                </button>
                            </div>
                        )}

                        {/* Loading State */}
                        {loading && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
                                {[1, 2, 3, 4].map((n) => (
                                    <div key={n} className="bg-white rounded-[11px] border border-violet-100 p-4 h-72">
                                        <div className="w-full h-32 bg-violet-100 rounded-md mb-3"></div>
                                        <div className="h-4 bg-violet-100 rounded w-3/4 mb-2"></div>
                                        <div className="h-3 bg-violet-50 rounded w-1/2 mb-4"></div>
                                        <div className="h-8 bg-violet-50 rounded mt-auto"></div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Empty Results State */}
                        {!loading && mentors.length === 0 && (
                            <div className="bg-white rounded-[11px] border border-violet-100 p-8 text-center space-y-3">
                                <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-base font-semibold text-gray-800">No mentors found</h3>
                                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                                    We couldn&apos;t find any mentors matching your selected filters. Try clearing your search or picking another category.
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory(0);
                                        setSearchTerm("");
                                        setExpFilter("");
                                        fetchMentors("All Categories", "", "popular", "");
                                    }}
                                    className="bg-violet-600 text-white text-xs px-4 py-2 rounded-[9px] font-semibold hover:bg-violet-700 transition-all cursor-pointer"
                                >
                                    View All Mentors
                                </button>
                            </div>
                        )}

                        {/* Popular Mentors Grid */}
                        {!loading && mentors.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {mentors.map((mentor, index) => (
                                    <div
                                        key={mentor._id || index}
                                        className="bg-white rounded-[11px] overflow-hidden border border-violet-100 transition-all duration-300 flex flex-col justify-between hover:shadow-md group"
                                    >
                                        <div className="pb-4">
                                            {/* Image */}
                                            <div className="relative w-full h-54 md:h-31 overflow-hidden">
                                                <Image
                                                    src={mentor.image}
                                                    alt={mentor.name}
                                                    fill
                                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="pt-4 px-4">
                                                {/* Name */}
                                                <h3 className="text-[14px] lg:text-[16px] font-semibold text-[#000000] tracking-wide mb-1 truncate">
                                                    {mentor.name}
                                                </h3>

                                                {/* Role */}
                                                <p className="text-[11px] lg:text-[12px] text-[#000000]/60 mb-3 truncate">
                                                    {mentor.role} {mentor.company && `• ${mentor.company}`}
                                                </p>

                                                {/* Skills */}
                                                <div className="flex flex-wrap gap-1 mb-4 h-6 overflow-hidden">
                                                    {mentor.skills?.slice(0, 3).map((skill, idx) => (
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
                                                        <span className="text-[#000000]/40 font-normal tracking-wide">
                                                            ({mentor.reviews})
                                                        </span>
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
                                                <Link href={`/mentors/${mentor._id}`}>
                                                    <button className="w-full py-2 rounded-[11px] bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white font-medium text-[11px] lg:text-[12px] cursor-pointer transition-all duration-300 active:scale-95">
                                                        View Profile
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default HowItWorksSection;