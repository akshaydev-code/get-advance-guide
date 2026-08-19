"use client";

import React, { useState } from 'react';
import {
  BookOpen, Plus, Eye, Heart, Download, Clock, Trash2, Edit3,
  Search, CheckCircle2, Sparkles, Share2
} from 'lucide-react';
import { MentorResourceItem } from '../types';

interface ResourcesTabProps {
  resources: MentorResourceItem[];
  onOpenCreateModal: () => void;
  onDeleteResource: (resourceId: string) => void;
}

export default function ResourcesTab({
  resources,
  onOpenCreateModal,
  onDeleteResource,
}: ResourcesTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredResources = resources.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === 'All' || res.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Create Button */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              My Published Roadmaps & Guides
            </h2>
            <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
              {resources.length} Guides
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Author and publish study materials, interview cheatsheets, and architecture blueprints for your students.
          </p>
        </div>

        <button
          onClick={onOpenCreateModal}
          className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          <Plus size={15} /> Publish New Resource
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Search by topic or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {['All', 'Guide', 'Roadmap', 'Cheatsheet'].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                selectedType === t
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Cards */}
      {filteredResources.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm space-y-3">
          <BookOpen size={36} className="mx-auto text-gray-300" />
          <h3 className="text-base font-bold text-gray-900">No resources found</h3>
          <p className="text-xs text-gray-500">Publish your first study guide to help your mentees excel.</p>
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
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100">
                    {res.type}
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold">{res.createdAt}</span>
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

              <div>
                {/* Engagement Stats */}
                <div className="flex items-center justify-between py-2 border-t border-gray-100 text-[11px] text-gray-400 font-semibold mb-3">
                  <span className="flex items-center gap-1"><Eye size={12} /> {res.views}</span>
                  <span className="flex items-center gap-1 text-rose-500"><Heart size={12} className="fill-rose-500" /> {res.likes}</span>
                  <span className="flex items-center gap-1"><Download size={12} /> {res.downloads}</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => alert(`Editing markdown for "${res.title}" simulated.`)}
                    className="flex-grow py-2 bg-gray-50 hover:bg-violet-50 text-gray-700 hover:text-violet-700 text-xs font-bold rounded-xl border border-gray-200 transition-colors"
                  >
                    Edit Content
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`Delete resource "${res.title}"?`)) {
                        onDeleteResource(res.id);
                      }
                    }}
                    className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                    title="Delete Resource"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
