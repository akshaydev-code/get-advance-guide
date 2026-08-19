"use client";

import React from 'react';
import { X, BookOpen, Bookmark, Heart, Clock, User, Share2, ArrowUpRight } from 'lucide-react';
import { ResourceItem } from '../types';

interface ReadResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: ResourceItem | null;
  onToggleBookmark: (id: string) => void;
}

export default function ReadResourceModal({
  isOpen,
  onClose,
  resource,
  onToggleBookmark,
}: ReadResourceModalProps) {
  if (!isOpen || !resource) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl border border-gray-100 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-700 via-indigo-700 to-purple-800 p-6 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full">
              {resource.type}
            </span>
            <span className="text-[10px] font-bold bg-violet-400/30 text-white px-2.5 py-0.5 rounded-full">
              {resource.category}
            </span>
            <span className="text-[10px] font-bold bg-emerald-400 text-emerald-950 px-2.5 py-0.5 rounded-full">
              {resource.level} Level
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-black text-white leading-snug">
            {resource.title}
          </h2>

          <div className="flex items-center gap-4 mt-3 text-xs text-violet-200 font-medium">
            <span className="flex items-center gap-1">
              <User size={13} /> {resource.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {resource.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={13} className="text-rose-400 fill-rose-400" /> {resource.likes} likes
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
          {/* Summary Box */}
          <div className="p-4 bg-violet-50/70 border border-violet-100 rounded-2xl">
            <h4 className="text-xs font-bold text-violet-900 uppercase tracking-wider mb-1">
              Overview & Key Objectives
            </h4>
            <p className="text-sm text-violet-950/80 leading-relaxed">
              {resource.summary}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-700 rounded-lg border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Formatted Guide Content */}
          <div className="prose max-w-none text-sm text-gray-800 leading-relaxed space-y-4">
            {resource.content.split('\n\n').map((block, idx) => {
              if (block.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-base font-bold text-gray-900 pt-2 border-b border-gray-100 pb-1">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={idx} className="text-gray-700 whitespace-pre-line">
                  {block}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => onToggleBookmark(resource.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
              resource.isBookmarked
                ? 'bg-violet-50 border-violet-200 text-violet-700'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Bookmark size={14} className={resource.isBookmarked ? 'fill-violet-700' : ''} />
            {resource.isBookmarked ? 'Saved to Bookmarks' : 'Bookmark Guide'}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Resource link copied to clipboard!');
                }
              }}
              className="p-2 text-gray-500 hover:text-violet-600 rounded-xl hover:bg-gray-200 transition-colors"
              title="Share Resource"
            >
              <Share2 size={16} />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl shadow-md shadow-violet-200 transition-all cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
