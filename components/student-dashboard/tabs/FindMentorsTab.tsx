"use client";

import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Heart, Calendar, MessageSquare, Briefcase, CheckCircle2, ChevronDown, ArrowRight, Sparkles, Send } from 'lucide-react';
import { MentorItem } from '../types';

interface FindMentorsTabProps {
  mentors: MentorItem[];
  onSendRequest: (mentor: MentorItem) => void;
  onBookSession: (mentor: MentorItem) => void;
  onViewMentorProfile: (mentor: MentorItem) => void;
  onToggleBookmark: (mentorId: string) => void;
}

const CATEGORIES = [
  'All Categories',
  'Web Development',
  'Data Science',
  'UI/UX Design',
  'AI & Machine Learning',
  'Cloud Computing',
  'Career Guidance',
];

const EXPERIENCE_OPTIONS = [
  'All Experience',
  '1 - 3 Years',
  '4 - 5 Years',
  '6+ Years',
];

export default function FindMentorsTab({
  mentors,
  onSendRequest,
  onBookSession,
  onViewMentorProfile,
  onToggleBookmark,
}: FindMentorsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedExperience, setSelectedExperience] = useState('All Experience');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'rating' | 'priceAsc' | 'priceDesc' | 'popular'>('popular');

  const filteredMentors = useMemo(() => {
    return mentors.filter((m) => {
      // Search
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category
      const matchesCategory =
        selectedCategory === 'All Categories' || m.category === selectedCategory;

      // Experience
      let matchesExperience = true;
      if (selectedExperience === '1 - 3 Years') matchesExperience = m.experienceYears <= 3;
      if (selectedExperience === '4 - 5 Years') matchesExperience = m.experienceYears >= 4 && m.experienceYears <= 5;
      if (selectedExperience === '6+ Years') matchesExperience = m.experienceYears >= 6;

      // Rating
      const matchesRating = m.rating >= minRating;

      return matchesSearch && matchesCategory && matchesExperience && matchesRating;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'priceAsc') return a.hourlyRate - b.hourlyRate;
      if (sortBy === 'priceDesc') return b.hourlyRate - a.hourlyRate;
      return b.reviews - a.reviews;
    });
  }, [mentors, searchQuery, selectedCategory, selectedExperience, minRating, sortBy]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header with Title & Search Bar */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                Find & Connect With Expert Mentors
              </h2>
              <span className="text-xs font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
                {filteredMentors.length} Available
              </span>
            </div>
            <p className="text-xs text-gray-500 font-medium mt-1">
              Browse top engineers, designers, and career coaches from Google, Microsoft, Flipkart, and Nvidia.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated (★ 5.0)</option>
              <option value="priceAsc">Rate: Low to High</option>
              <option value="priceDesc">Rate: High to Low</option>
            </select>
          </div>
        </div>

        {/* Search & Filter Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by mentor name, role, company, or skills (e.g. Next.js, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
            >
              {EXPERIENCE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
            >
              <option value={0}>All Ratings</option>
              <option value={4.8}>★ 4.8 & Above</option>
              <option value={4.9}>★ 4.9 & Above</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mentor Cards Grid */}
      {filteredMentors.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm space-y-3">
          <Search size={36} className="mx-auto text-gray-300" />
          <h3 className="text-base font-bold text-gray-900">No mentors found</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Try adjusting your search keywords, experience level, or categories to find matching mentors.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Categories');
              setSelectedExperience('All Experience');
              setMinRating(0);
            }}
            className="px-4 py-2 bg-violet-50 text-violet-700 rounded-xl text-xs font-bold hover:bg-violet-100 transition-colors cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all flex flex-col justify-between group relative"
            >
              {/* Top Row: Avatar & Bookmark */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-gray-100 shadow-sm"
                    />
                    {mentor.available && (
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" title="Available now" />
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-violet-700 bg-violet-50 px-2.5 py-1 rounded-xl border border-violet-100">
                      ${mentor.hourlyRate}/hr
                    </span>
                    <button
                      onClick={() => onToggleBookmark(mentor.id)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${
                        mentor.isBookmarked
                          ? 'bg-rose-50 text-rose-500'
                          : 'bg-gray-50 text-gray-400 hover:text-rose-500 hover:bg-gray-100'
                      }`}
                      title={mentor.isBookmarked ? 'Remove bookmark' : 'Bookmark mentor'}
                    >
                      <Heart size={16} className={mentor.isBookmarked ? 'fill-rose-500 text-rose-500' : ''} />
                    </button>
                  </div>
                </div>

                {/* Mentor Info */}
                <h3 className="font-extrabold text-gray-900 text-base group-hover:text-violet-600 transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium">{mentor.role}</p>
                <p className="text-xs text-violet-600 font-bold mb-3">@{mentor.company}</p>

                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                  {mentor.bio}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {mentor.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] bg-gray-50 text-gray-700 px-2.5 py-0.5 rounded-lg font-semibold border border-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                  {mentor.skills.length > 4 && (
                    <span className="text-[10px] text-gray-400 font-bold px-1 py-0.5">
                      +{mentor.skills.length - 4}
                    </span>
                  )}
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-3 text-xs font-bold text-gray-700 mb-5 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span>{mentor.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{mentor.reviews} reviews</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{mentor.exp}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onViewMentorProfile(mentor)}
                    className="w-full py-2.5 bg-gray-50 hover:bg-violet-50 text-violet-700 rounded-xl text-xs font-bold transition-all border border-gray-200 hover:border-violet-200 cursor-pointer"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => onBookSession(mentor)}
                    className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar size={13} /> Book 1-on-1
                  </button>
                </div>
                <button
                  onClick={() => onSendRequest(mentor)}
                  className="w-full py-2 bg-white hover:bg-gray-50 text-gray-600 hover:text-violet-700 rounded-xl text-[11px] font-bold border border-gray-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send size={11} /> Send Mentorship Request
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
