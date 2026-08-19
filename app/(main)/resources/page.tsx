"use client";

import React, { useState, useEffect } from 'react';
import {
  Search, Filter, ArrowRight, ChevronRight, Download,
  Play, FileText, Compass, BookOpen, Video, Layers,
  Star, Heart, Bookmark, Sparkles, CheckCircle2,
  ExternalLink, Users, Eye, Clock, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper/MaxWidthWrapper';

// Types & Seed Data
import { ResourceItem, ResourceCategory, ResourceType, ResourceLevel } from '@/components/resources/types';
import { initialResourcesData } from '@/components/resources/data/resourcesData';

// Modular Cards
import ResourceCard from '@/components/resources/components/ResourceCard';
import RoadmapCard from '@/components/resources/components/RoadmapCard';
import DownloadCard from '@/components/resources/components/DownloadCard';
import VideoCard from '@/components/resources/components/VideoCard';

// Modals
import ReadResourceModal from '@/components/resources/modals/ReadResourceModal';
import VideoPlayerModal from '@/components/resources/modals/VideoPlayerModal';
import RoadmapDetailModal from '@/components/resources/modals/RoadmapDetailModal';

export default function ResourceHubPage() {
  const [resources, setResources] = useState<ResourceItem[]>(initialResourcesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('All');
  const [selectedType, setSelectedType] = useState<ResourceType | 'All'>('All');
  const [selectedLevel, setSelectedLevel] = useState<ResourceLevel>('All');

  // Bookmarks & Likes stored in localStorage
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  // Active Modals
  const [activeReadResource, setActiveReadResource] = useState<ResourceItem | null>(null);
  const [activeVideoResource, setActiveVideoResource] = useState<ResourceItem | null>(null);
  const [activeRoadmapResource, setActiveRoadmapResource] = useState<ResourceItem | null>(null);

  useEffect(() => {
    try {
      const savedLikes = localStorage.getItem('gag_resources_likes');
      if (savedLikes) setLikedIds(JSON.parse(savedLikes));

      const savedBookmarks = localStorage.getItem('gag_resources_bookmarks');
      if (savedBookmarks) setBookmarkedIds(JSON.parse(savedBookmarks));
    } catch {}
  }, []);

  const handleToggleLike = (resourceId: string) => {
    setLikedIds((prev) => {
      const updated = prev.includes(resourceId)
        ? prev.filter((id) => id !== resourceId)
        : [...prev, resourceId];
      try {
        localStorage.setItem('gag_resources_likes', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleToggleBookmark = (resourceId: string) => {
    setBookmarkedIds((prev) => {
      const updated = prev.includes(resourceId)
        ? prev.filter((id) => id !== resourceId)
        : [...prev, resourceId];
      try {
        localStorage.setItem('gag_resources_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleOpenResource = (item: ResourceItem) => {
    if (item.type === 'Video') {
      setActiveVideoResource(item);
    } else if (item.type === 'Roadmap' && item.milestones) {
      setActiveRoadmapResource(item);
    } else {
      setActiveReadResource(item);
    }
  };

  // Filtered Logic
  const filteredResources = resources.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      res.author.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesType = selectedType === 'All' || res.type === selectedType;
    const matchesLevel = selectedLevel === 'All' || res.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesType && matchesLevel;
  });

  const featuredResources = resources.filter((r) => r.isFeatured);
  const roadmaps = resources.filter((r) => r.type === 'Roadmap');
  const downloads = resources.filter((r) => r.type === 'Template' || r.type === 'Cheatsheet' || r.downloadFileName);
  const videoResources = resources.filter((r) => r.type === 'Video');

  const categoriesList: { name: ResourceCategory; icon: string; count: number }[] = [
    { name: 'All', icon: '🌟', count: resources.length },
    { name: 'Web Development', icon: '💻', count: resources.filter((r) => r.category === 'Web Development').length },
    { name: 'System Design', icon: '🏗️', count: resources.filter((r) => r.category === 'System Design').length },
    { name: 'Data Science', icon: '📊', count: resources.filter((r) => r.category === 'Data Science').length },
    { name: 'UI/UX Design', icon: '🎨', count: resources.filter((r) => r.category === 'UI/UX Design').length },
    { name: 'Career & Interviews', icon: '🎯', count: resources.filter((r) => r.category === 'Career & Interviews').length },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-purple-50/70 via-white to-[#F8FAFC]">
        <MaxWidthWrapper>
          <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-violet-200">
            <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-40 -top-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-violet-100 text-xs font-semibold mb-4 border border-white/20">
                <Sparkles size={14} className="text-amber-300" />
                <span>Curated by Google, Meta & Amazon Engineering Mentors</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                Engineering Roadmaps, Interview Guides & Cheatsheets
              </h1>

              <p className="text-violet-100 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-medium">
                Accelerate your technical career with verified system design blueprints, modern web roadmaps, and ATS resume templates prepared by industry leaders.
              </p>

              {/* Real-time Search Input */}
              <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-2 max-w-2xl">
                <div className="relative flex-grow w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search guides by title, technology (e.g. Next.js, Redis), or author..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent pl-11 pr-4 py-3 text-xs md:text-sm text-gray-800 font-medium focus:outline-none placeholder-gray-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as any)}
                    className="w-full sm:w-auto bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold py-3 px-3.5 rounded-xl focus:ring-2 focus:ring-violet-500 cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    <option value="Guide">Guides</option>
                    <option value="Roadmap">Roadmaps</option>
                    <option value="Cheatsheet">Cheatsheets</option>
                    <option value="Template">Templates</option>
                    <option value="Video">Videos</option>
                  </select>
                </div>
              </div>

              {/* Quick Stat Highlights */}
              <div className="flex flex-wrap items-center gap-4 pt-6 text-xs text-violet-100 font-semibold">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">
                  <BookOpen size={14} className="text-amber-300" /> {resources.length} Verified Resources
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">
                  <Download size={14} className="text-emerald-300" /> 20,000+ Downloads
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-xs">
                  <ShieldCheck size={14} className="text-sky-300" /> 100% Free & Open Access
                </span>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== CATEGORY PILLS BAR ===================== */}
      <section className="py-4 bg-white border-b border-gray-100 sticky top-16 z-10 shadow-xs">
        <MaxWidthWrapper>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {categoriesList.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 flex-shrink-0 ${
                    isSelected
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-100'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== MAIN FILTERED RESULTS GRID ===================== */}
      <section className="py-12">
        <MaxWidthWrapper>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                {selectedCategory === 'All' ? 'All Learning Resources' : `${selectedCategory} Guides`}
              </h2>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Showing {filteredResources.length} items • Click any card to read, watch, or download.
              </p>
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-gray-200/80 shadow-xs w-fit">
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedLevel === lvl
                      ? 'bg-violet-600 text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {filteredResources.length === 0 ? (
            <div className="bg-white rounded-[2.5rem] p-16 text-center border border-gray-100 shadow-sm space-y-3">
              <BookOpen size={48} className="mx-auto text-gray-300" />
              <h3 className="text-lg font-bold text-gray-900">No resources match your search</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try clearing your search terms or picking another category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedType('All');
                  setSelectedLevel('All');
                }}
                className="px-5 py-2.5 bg-violet-600 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer hover:bg-violet-700"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((res) => (
                <ResourceCard
                  key={res.id}
                  resource={res}
                  isLiked={likedIds.includes(res.id)}
                  isBookmarked={bookmarkedIds.includes(res.id)}
                  onOpen={handleOpenResource}
                  onToggleLike={handleToggleLike}
                  onToggleBookmark={handleToggleBookmark}
                />
              ))}
            </div>
          )}
        </MaxWidthWrapper>
      </section>

      {/* ===================== POPULAR CAREER ROADMAPS SPOTLIGHT ===================== */}
      {roadmaps.length > 0 && (
        <section className="py-16 bg-white border-y border-gray-100">
          <MaxWidthWrapper>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-violet-50 text-violet-700 px-3 py-1 rounded-full border border-violet-100">
                    Interactive Milestones 🗺️
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mt-2">
                  Popular Career <span className="text-violet-600">Roadmaps</span>
                </h2>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  Track your progression milestone by milestone with interactive checkboxes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmaps.map((r) => (
                <RoadmapCard
                  key={r.id}
                  roadmap={r}
                  onOpen={handleOpenResource}
                />
              ))}
            </div>
          </MaxWidthWrapper>
        </section>
      )}

      {/* ===================== TOP DOWNLOADS & VIDEO RESOURCES 2-COL ===================== */}
      <section className="py-16 bg-[#F8FAFC]">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Col (6 cols): Top Downloads */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-gray-900 text-xl">Top Downloads & Cheatsheets</h3>
                  <p className="text-xs text-gray-500 font-medium">1-click instant PDF and template downloads</p>
                </div>
              </div>

              <div className="space-y-3">
                {downloads.slice(0, 4).map((d) => (
                  <DownloadCard
                    key={d.id}
                    item={d}
                    onOpen={handleOpenResource}
                  />
                ))}
              </div>
            </div>

            {/* Right Col (6 cols): Video Masterclasses */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-gray-900 text-xl">Video Masterclasses</h3>
                  <p className="text-xs text-gray-500 font-medium">Recorded mock technical interviews and walkthroughs</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videoResources.map((v) => (
                  <VideoCard
                    key={v.id}
                    video={v}
                    onOpen={handleOpenResource}
                  />
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== MENTORSHIP COMMUNITY CTA ===================== */}
      <section className="py-16 bg-white border-t border-gray-100">
        <MaxWidthWrapper>
          <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-800 rounded-[2.5rem] p-8 md:p-12 text-white text-center relative overflow-hidden shadow-xl shadow-violet-200">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full">
                Accelerate Your Preparation
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                Want 1-on-1 Guidance on These Roadmaps?
              </h2>
              <p className="text-violet-100 text-xs md:text-sm font-medium leading-relaxed max-w-xl mx-auto">
                Connect directly with the engineers from Google, Nvidia, Meta, and Microsoft who authored these resources for mock interviews, resume critiques, and architecture deep dives.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/mentors"
                  className="px-6 py-3 bg-white text-violet-700 hover:bg-violet-50 rounded-2xl font-bold text-xs shadow-lg shadow-violet-950/20 transition-all hover:scale-105"
                >
                  Explore Verified Mentors
                </Link>
                <Link
                  href="/become-a-mentor"
                  className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white rounded-2xl font-bold text-xs border border-white/20 transition-all"
                >
                  Become a Mentor
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ===================== GLOBAL MODALS ===================== */}
      <ReadResourceModal
        isOpen={!!activeReadResource}
        resource={activeReadResource}
        isLiked={activeReadResource ? likedIds.includes(activeReadResource.id) : false}
        isBookmarked={activeReadResource ? bookmarkedIds.includes(activeReadResource.id) : false}
        onClose={() => setActiveReadResource(null)}
        onToggleLike={handleToggleLike}
        onToggleBookmark={handleToggleBookmark}
      />

      <VideoPlayerModal
        isOpen={!!activeVideoResource}
        resource={activeVideoResource}
        onClose={() => setActiveVideoResource(null)}
      />

      <RoadmapDetailModal
        isOpen={!!activeRoadmapResource}
        resource={activeRoadmapResource}
        onClose={() => setActiveRoadmapResource(null)}
      />
    </div>
  );
}