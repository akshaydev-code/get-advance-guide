"use client";

import React from 'react';
import {
  BookOpen, Eye, Heart, Download, Clock, ArrowRight,
  FileText, Bookmark, Star, Sparkles
} from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourceCardProps {
  resource: ResourceItem;
  isLiked?: boolean;
  isBookmarked?: boolean;
  onOpen: (resource: ResourceItem) => void;
  onToggleLike: (resourceId: string) => void;
  onToggleBookmark: (resourceId: string) => void;
}

export default function ResourceCard({
  resource,
  isLiked = false,
  isBookmarked = false,
  onOpen,
  onToggleLike,
  onToggleBookmark,
}: ResourceCardProps) {
  const getBadgeColor = (type: ResourceItem['type']) => {
    switch (type) {
      case 'Guide':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Roadmap':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Cheatsheet':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Template':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Video':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div
      onClick={() => onOpen(resource)}
      className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getBadgeColor(resource.type)}`}>
              {resource.type}
            </span>
            <span className="text-[10px] font-bold text-gray-400">
              {resource.readTime}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(resource.id);
            }}
            className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
              isBookmarked ? 'bg-violet-50 text-violet-700' : 'text-gray-300 hover:text-gray-600'
            }`}
            title="Bookmark Resource"
          >
            <Bookmark size={15} className={isBookmarked ? 'fill-violet-700' : ''} />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-extrabold text-gray-900 text-base group-hover:text-violet-600 transition-colors leading-snug mb-2">
          {resource.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4 font-normal">
          {resource.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md font-semibold border border-gray-100"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        {/* Author Details & Engagement */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs">
          <div className="flex items-center gap-2">
            <img
              src={resource.author.avatar}
              alt={resource.author.name}
              className="w-6 h-6 rounded-full object-cover border border-violet-100"
            />
            <span className="text-[11px] font-bold text-gray-700 truncate max-w-[120px]">
              {resource.author.name}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-gray-400 font-semibold">
            <span className="flex items-center gap-1">
              <Eye size={12} /> {resource.views}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleLike(resource.id);
              }}
              className={`flex items-center gap-1 transition-colors cursor-pointer ${
                isLiked ? 'text-rose-600 font-bold' : 'hover:text-rose-500'
              }`}
            >
              <Heart size={12} className={isLiked ? 'fill-rose-600' : ''} />
              <span>{resource.likes + (isLiked ? 1 : 0)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
