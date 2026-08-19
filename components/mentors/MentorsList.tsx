"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import {
    Star,
    Bookmark,
    ArrowRight,
    Search,
    ChevronLeft,
    ChevronRight,
    SlidersHorizontal,
    RotateCcw,
} from "lucide-react";

interface MentorItem {
    _id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    category?: string;
    skills: string[];
    rating: number;
    reviews: number;
    exp: string;
    experienceYears?: number;
    hourlyRate?: number;
    available?: boolean;
}

const sortOptions = [
    { label: "Popular", value: "popular" },
    { label: "Highest Rated", value: "rating" },
    { label: "Most Reviews", value: "reviews" },
    { label: "Experience (High to Low)", value: "exp_desc" },
    { label: "Name (A-Z)", value: "name_asc" },
];

const ITEMS_PER_PAGE = 5;

const MentorsList = () => {
    const [mentors, setMentors] = useState<MentorItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

    // Filter, search, sort, pagination state
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedExp, setSelectedExp] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    
    // Pagination vs View All mode
    const [isViewAll, setIsViewAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalMentors, setTotalMentors] = useState(0);

    const fetchMentors = useCallback(async (
        pageToFetch = currentPage,
        viewAllMode = isViewAll,
        search = searchTerm,
        cat = selectedCategory,
        exp = selectedExp,
        sort = sortBy
    ) => {
        try {
            setLoading(true);
            const params = new URLSearchParams();

            if (search.trim()) params.append("search", search.trim());
            if (cat && cat !== "All Categories") params.append("category", cat);
            if (exp && exp !== "All Experience") params.append("exp", exp);
            if (sort) params.append("sortBy", sort);

            if (!viewAllMode) {
                params.append("page", String(pageToFetch));
                params.append("limit", String(ITEMS_PER_PAGE));
            } else {
                params.append("limit", "0"); // Fetch all
            }

            const res = await fetch(`/api/mentors?${params.toString()}`);
            const data = await res.json();

            if (data.success && Array.isArray(data.data)) {
                setMentors(data.data);
                setTotalMentors(data.total || data.data.length);
                setTotalPages(data.totalPages || 1);
            } else {
                setMentors([]);
                setTotalMentors(0);
                setTotalPages(1);
            }
        } catch (err) {
            console.error("Failed to load mentors:", err);
            setMentors([]);
        } finally {
            setLoading(false);
        }
    }, [currentPage, isViewAll, searchTerm, selectedCategory, selectedExp, sortBy]);

    // Initial fetch
    useEffect(() => {
        fetchMentors();
    }, [fetchMentors]);

    // Listen for filter changes dispatched by MentorsBanner or MentorsCategories
    useEffect(() => {
        const handleBannerFilter = (event: Event) => {
            const customEvent = event as CustomEvent<{ search?: string; category?: string; exp?: string }>;
            const { search, category, exp } = customEvent.detail || {};

            const newSearch = search !== undefined ? search : searchTerm;
            const newCat = category !== undefined ? category : selectedCategory;
            const newExp = exp !== undefined ? exp : selectedExp;

            if (search !== undefined) setSearchTerm(search);
            if (category !== undefined) setSelectedCategory(category);
            if (exp !== undefined) setSelectedExp(exp);

            setCurrentPage(1);
            fetchMentors(1, isViewAll, newSearch, newCat, newExp, sortBy);
        };

        window.addEventListener("mentorsFilterChange", handleBannerFilter);
        return () => window.removeEventListener("mentorsFilterChange", handleBannerFilter);
    }, [fetchMentors, isViewAll, searchTerm, selectedCategory, selectedExp, sortBy]);

    const toggleBookmark = (id: string) => {
        setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleToggleViewAll = () => {
        const nextViewAll = !isViewAll;
        setIsViewAll(nextViewAll);
        setCurrentPage(1);
        fetchMentors(1, nextViewAll, searchTerm, selectedCategory, selectedExp, sortBy);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            fetchMentors(newPage, false, searchTerm, selectedCategory, selectedExp, sortBy);
            const target = document.getElementById("mentors-list-section");
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1);
        fetchMentors(1, isViewAll, searchTerm, selectedCategory, selectedExp, sortBy);
    };

    const handleSortChange = (newSort: string) => {
        setSortBy(newSort);
        setCurrentPage(1);
        fetchMentors(1, isViewAll, searchTerm, selectedCategory, selectedExp, newSort);
    };

    const handleResetFilters = () => {
        setSearchTerm("");
        setSelectedCategory("");
        setSelectedExp("");
        setSortBy("popular");
        setCurrentPage(1);
        setIsViewAll(false);
        fetchMentors(1, false, "", "", "", "popular");
        
        // Reset categories component
        const event = new CustomEvent("mentorsFilterChange", {
            detail: { category: "", search: "", exp: "" },
        });
        window.dispatchEvent(event);
    };

    return (
        <div id="mentors-list-section" className="py-9 scroll-mt-10">
            <MaxWidthWrapper>
                {/* Heading */}
                <div className="text-center mb-4">
                    <h2 className="text-[22px] font-bold text-[#000000]">
                        Top Mentors
                    </h2>
                    <p className="text-gray-600 text-[16px]">
                        Connect with verified mentors who can help you grow and succeed
                    </p>
                </div>

                {/* Controls Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
                    {/* Search and Sort */}
                    <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                        <form onSubmit={handleSearchSubmit} className="relative flex items-center flex-1 sm:flex-none">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by name or skills..."
                                className="text-[12px] bg-white border border-violet-200 rounded-[11px] px-3.5 py-2 pr-8 text-gray-700 outline-none focus:border-violet-500 w-full sm:w-52 shadow-xs transition-all"
                            />
                            <button type="submit" className="absolute right-2.5 text-gray-400 hover:text-violet-600 cursor-pointer">
                                <Search size={14} />
                            </button>
                        </form>

                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => handleSortChange(e.target.value)}
                                className="text-[12px] bg-white border border-violet-200 text-gray-700 rounded-[11px] px-3 py-2 outline-none cursor-pointer focus:border-violet-500 font-medium shadow-xs"
                            >
                                {sortOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        Sort: {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* View All / Paginated Toggle Button */}
                    <button
                        onClick={handleToggleViewAll}
                        className={`flex items-center gap-2 border px-4 py-2 rounded-[11px] font-semibold text-[13px] lg:text-[14px] cursor-pointer active:scale-95 transition-all duration-200 shadow-xs ${
                            isViewAll
                                ? "bg-violet-600 text-white border-violet-600 hover:bg-violet-700"
                                : "border-violet-300 text-violet-600 hover:bg-violet-50"
                        }`}
                    >
                        <span>{isViewAll ? `Showing All ${totalMentors} Mentors` : "View All Mentors"}</span>
                        <ArrowRight size={16} className={isViewAll ? "rotate-90 transition-transform" : ""} />
                    </button>
                </div>

                {/* Active Filters Bar */}
                {(selectedCategory || searchTerm || selectedExp) && (
                    <div className="flex flex-wrap items-center gap-2 mb-4 bg-violet-50/50 p-2.5 rounded-[11px] border border-violet-100">
                        <span className="text-[11px] text-gray-500 font-medium">Active filters:</span>
                        {selectedCategory && (
                            <span className="inline-flex items-center gap-1 bg-white text-violet-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-violet-200 shadow-2xs">
                                Category: {selectedCategory}
                                <button
                                    onClick={() => {
                                        setSelectedCategory("");
                                        fetchMentors(1, isViewAll, searchTerm, "", selectedExp, sortBy);
                                    }}
                                    className="hover:text-violet-900 cursor-pointer ml-1"
                                >
                                    ✕
                                </button>
                            </span>
                        )}
                        {searchTerm && (
                            <span className="inline-flex items-center gap-1 bg-white text-violet-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-violet-200 shadow-2xs">
                                Search: &quot;{searchTerm}&quot;
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        fetchMentors(1, isViewAll, "", selectedCategory, selectedExp, sortBy);
                                    }}
                                    className="hover:text-violet-900 cursor-pointer ml-1"
                                >
                                    ✕
                                </button>
                            </span>
                        )}
                        {selectedExp && (
                            <span className="inline-flex items-center gap-1 bg-white text-violet-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-violet-200 shadow-2xs">
                                Exp: {selectedExp}
                                <button
                                    onClick={() => {
                                        setSelectedExp("");
                                        fetchMentors(1, isViewAll, searchTerm, selectedCategory, "", sortBy);
                                    }}
                                    className="hover:text-violet-900 cursor-pointer ml-1"
                                >
                                    ✕
                                </button>
                            </span>
                        )}
                        <button
                            onClick={handleResetFilters}
                            className="text-[11px] text-violet-600 hover:text-violet-800 font-semibold cursor-pointer ml-auto flex items-center gap-1"
                        >
                            <RotateCcw size={12} />
                            Reset filters
                        </button>
                    </div>
                )}

                {/* Loading Skeleton */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <div key={n} className="bg-white shadow-md rounded-[18px] p-4 animate-pulse h-80 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="w-15 h-15 rounded-full bg-violet-100"></div>
                                        <div className="w-14 h-4 bg-violet-100 rounded-full"></div>
                                    </div>
                                    <div className="h-3.5 bg-violet-100 rounded w-3/4 mb-2"></div>
                                    <div className="h-3 bg-violet-50 rounded w-1/2 mb-3"></div>
                                    <div className="h-3 bg-violet-50 rounded w-2/3 mb-3"></div>
                                    <div className="flex gap-1">
                                        <div className="h-3 w-8 bg-violet-100 rounded"></div>
                                        <div className="h-3 w-8 bg-violet-100 rounded"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    <div className="h-7 bg-violet-50 rounded-[7px]"></div>
                                    <div className="h-7 bg-violet-100 rounded-[7px]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && mentors.length === 0 && (
                    <div className="bg-white shadow-md rounded-[18px] p-10 text-center border border-violet-100 my-4 space-y-3">
                        <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mx-auto">
                            <Search size={22} />
                        </div>
                        <h3 className="text-base font-semibold text-gray-800">No mentors found</h3>
                        <p className="text-xs text-gray-500 max-w-sm mx-auto">
                            No mentors match your selected filters. Try changing your search keywords or resetting your category filters.
                        </p>
                        <button
                            onClick={handleResetFilters}
                            className="bg-violet-600 text-white text-xs px-5 py-2 rounded-[9px] font-semibold hover:bg-violet-700 transition-all cursor-pointer"
                        >
                            View All Mentors
                        </button>
                    </div>
                )}

                {/* Cards Grid */}
                {!loading && mentors.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {mentors.map((mentor, index) => (
                            <div
                                key={mentor._id || index}
                                className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-[18px] p-4 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Top */}
                                    <div className="flex items-start justify-between mb-1">
                                        <div className="relative w-15 h-15 rounded-full overflow-hidden shrink-0 border border-violet-100">
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                fill
                                                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        <div className="flex flex-col items-end gap-4">
                                            <span className="bg-green-100 text-green-600 text-[9px] px-2 py-1 rounded-full font-semibold">
                                                ● Available
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() => toggleBookmark(mentor._id || String(index))}
                                                className="cursor-pointer transition-transform active:scale-90"
                                                title="Save Mentor"
                                            >
                                                <Bookmark
                                                    size={18}
                                                    className={
                                                        bookmarked[mentor._id || String(index)]
                                                            ? "text-violet-600 fill-violet-600"
                                                            : "text-violet-600 hover:fill-violet-200"
                                                    }
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-[12px] font-semibold text-[#000000] truncate mt-1">
                                        {mentor.name}
                                    </h3>

                                    {/* Role */}
                                    <p className="text-gray-600 text-[10px] truncate">{mentor.role}</p>

                                    {/* Company */}
                                    <p className="text-gray-500 text-[10px] font-semibold mb-1 truncate">
                                        {mentor.company || "Independent"}
                                    </p>

                                    {/* Ratings & Exp */}
                                    <div className="flex items-center gap-1.5 text-[11px] text-gray-600 mb-2">
                                        <span className="flex items-center gap-1 text-yellow-400 font-semibold text-[10px]">
                                            <Star size={10} fill="currentColor" />
                                            {mentor.rating}
                                        </span>

                                        <span className="text-[9px] text-gray-500">({mentor.reviews} reviews)</span>

                                        <span className="text-gray-300">|</span>

                                        <span className="text-[9px] text-gray-600 font-semibold">{mentor.exp}</span>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {mentor.skills?.slice(0, 3).map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-violet-100 text-violet-600 text-[7px] px-2 py-1 rounded-[5px] font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Buttons */}
                                <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
                                    <Link href={`/mentors/${mentor._id}`}>
                                        <button className="w-full border border-violet-300 text-violet-600 hover:bg-violet-50 transition-all py-1 rounded-[7px] font-semibold text-[9px] cursor-pointer text-center active:scale-95">
                                            View Profile
                                        </button>
                                    </Link>

                                    <Link href={`/mentors/${mentor._id}`}>
                                        <button className="w-full bg-violet-600 hover:bg-violet-700 transition-all text-white py-1 rounded-[7px] font-semibold text-[9px] cursor-pointer text-center active:scale-95">
                                            Connect
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination Controls (Hidden when in View All mode or single page) */}
                {!isViewAll && totalPages > 1 && !loading && (
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-violet-100 pt-6">
                        {/* Page Count Info */}
                        <p className="text-[12px] text-gray-500 font-medium">
                            Showing{" "}
                            <span className="font-semibold text-violet-700">
                                {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold text-violet-700">
                                {Math.min(currentPage * ITEMS_PER_PAGE, totalMentors)}
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-violet-700">{totalMentors}</span> mentors
                        </p>

                        {/* Page Buttons */}
                        <div className="flex items-center gap-1.5">
                            {/* Prev Button */}
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-2.5 py-1.5 rounded-[9px] border text-[12px] font-semibold flex items-center gap-1 cursor-pointer transition-all ${
                                    currentPage === 1
                                        ? "opacity-40 cursor-not-allowed border-gray-200 text-gray-400"
                                        : "border-violet-200 text-violet-600 hover:bg-violet-50 active:scale-95"
                                }`}
                            >
                                <ChevronLeft size={14} />
                                Prev
                            </button>

                            {/* Numbered Page Buttons */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <button
                                    key={pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`w-8 h-8 rounded-[9px] text-[12px] font-semibold transition-all cursor-pointer ${
                                        currentPage === pageNum
                                            ? "bg-violet-600 text-white shadow-xs"
                                            : "border border-violet-100 text-gray-700 hover:bg-violet-50 hover:text-violet-600"
                                    }`}
                                >
                                    {pageNum}
                                </button>
                            ))}

                            {/* Next Button */}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-2.5 py-1.5 rounded-[9px] border text-[12px] font-semibold flex items-center gap-1 cursor-pointer transition-all ${
                                    currentPage === totalPages
                                        ? "opacity-40 cursor-not-allowed border-gray-200 text-gray-400"
                                        : "border-violet-200 text-violet-600 hover:bg-violet-50 active:scale-95"
                                }`}
                            >
                                Next
                                <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                )}
            </MaxWidthWrapper>
        </div>
    );
};

export default MentorsList;