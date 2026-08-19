"use client";

import React, { useState } from 'react';
import {
  BookOpen, Plus, Eye, Heart, Trash2, Edit3,
  Search, Star, CheckCircle2
} from 'lucide-react';
import { AdminResourceItem } from '../types';

interface ResourcesTabProps {
  resources: AdminResourceItem[];
  onOpenCreateModal: () => void;
  onToggleFeatured: (resourceId: string) => void;
  onDeleteResource: (resourceId: string) => void;
}

export default function ResourcesTab({
  resources,
  onOpenCreateModal,
  onToggleFeatured,
  onDeleteResource,
}: ResourcesTabProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = resources.filter((r) =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Platform Curations & Learning Guides
            </h2>
            <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
              {resources.length} Official Guides
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Author and manage official engineering roadmaps, interview guides, and cheatsheets.
          </p>
        </div>

        <button
          onClick={onOpenCreateModal}
          className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          <Plus size={15} /> Publish Official Resource
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:border-violet-200 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100">
                  {res.type}
                </span>
                <button
                  onClick={() => onToggleFeatured(res.id)}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full cursor-pointer transition-colors ${
                    res.isFeatured
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {res.isFeatured ? '★ Featured on Home' : 'Standard'}
                </button>
              </div>

              <h3 className="font-extrabold text-gray-900 text-base leading-snug mb-2">
                {res.title}
              </h3>

              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                {res.summary}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {res.tags.map((t) => (
                  <span key={t} className="text-[9px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md font-semibold">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3 text-[11px] text-gray-400 font-semibold">
                <span className="flex items-center gap-1"><Eye size={12} /> {res.views}</span>
                <span className="flex items-center gap-1"><Heart size={12} className="text-rose-500 fill-rose-500" /> {res.likes}</span>
              </div>

              <button
                onClick={() => {
                  if (confirm(`Delete resource "${res.title}"?`)) {
                    onDeleteResource(res.id);
                  }
                }}
                className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                title="Delete Resource"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
