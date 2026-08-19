"use client";

import React, { useState, useMemo } from 'react';
import {
  BookOpen, Search, Bookmark, Heart, Clock, User, ArrowRight,
  Sparkles, CheckCircle2, Eye, Filter
} from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourcesTabProps {
  resources: ResourceItem[];
  onOpenResource: (resource: ResourceItem) => void;
  onToggleBookmark: (resourceId: string) => void;
}

const CATEGORIES = [
  'All',
  'Web Development',
  'Data Science',
  'UI/UX Design',
  'AI & Machine Learning',
  'Career & Interviews',
  'System Design',
];

const TYPES = ['All Types', 'Roadmap', 'Guide', 'Cheatsheet'];

export default function ResourcesTab({
  resources,
  onOpenResource,
  onToggleBookmark,
}: ResourcesTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All Types');
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);

  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      const matchesSearch =
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
      const matchesType = selectedType === 'All Types' || res.type === selectedType;
      const matchesBookmark = !showOnlyBookmarked || res.isBookmarked;

      return matchesSearch && matchesCategory && matchesType && matchesBookmark;
    });
  }, [resources, searchQuery, selectedCategory, selectedType, showOnlyBookmarked]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Controls */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                Curated Learning Resources & Roadmaps
              </h2>
              <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
                {resources.length} Guides
              </span>
            </div>
            <p className="text-xs text-gray-500 font-medium mt-1">
              Hand-crafted learning roadmaps, system design guides, and interview cheatsheets prepared by Google & Microsoft mentors.
            </p>
          </div>

          <button
            onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer w-fit ${
              showOnlyBookmarked
                ? 'bg-violet-600 text-white border-violet-600'
                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Bookmark size={13} className={showOnlyBookmarked ? 'fill-white' : ''} />
            {showOnlyBookmarked ? 'Showing Bookmarks' : 'My Bookmarks'}
          </button>
        </div>

        {/* Search & Type Filter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
            <input
              type="text"
              placeholder="Search by topic, tag, or author (e.g. Next.js, STAR, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="md:col-span-4">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
            >
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
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

      {/* Resources Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm space-y-3">
          <BookOpen size={36} className="mx-auto text-gray-300" />
          <h3 className="text-base font-bold text-gray-900">No resources found</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Try adjusting your search keywords or categories to find matching learning resources.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedType('All Types');
              setShowOnlyBookmarked(false);
            }}
            className="px-4 py-2 bg-violet-50 text-violet-700 rounded-xl text-xs font-bold hover:bg-violet-100 transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      res.type === 'Roadmap'
                        ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
                        : res.type === 'Guide'
                        ? 'bg-violet-50 text-violet-700 border-violet-100'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                    }`}
                  >
                    {res.type}
                  </span>

                  <button
                    onClick={() => onToggleBookmark(res.id)}
                    className={`p-2 rounded-xl transition-colors cursor-pointer ${
                      res.isBookmarked
                        ? 'bg-violet-50 text-violet-700'
                        : 'bg-gray-50 text-gray-400 hover:text-violet-600'
                    }`}
                    title={res.isBookmarked ? 'Remove bookmark' : 'Bookmark resource'}
                  >
                    <Bookmark size={15} className={res.isBookmarked ? 'fill-violet-700' : ''} />
                  </button>
                </div>

                <h3 className="font-extrabold text-gray-900 text-base group-hover:text-violet-600 transition-colors leading-snug mb-2">
                  {res.title}
                </h3>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                  {res.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {res.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md font-semibold border border-gray-100"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                  <Clock size={12} /> {res.readTime}
                </div>

                <button
                  onClick={() => onOpenResource(res)}
                  className="px-4 py-2 bg-violet-50 hover:bg-violet-600 text-violet-700 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  Read Guide <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
