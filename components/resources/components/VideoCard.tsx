"use client";

import React from 'react';
import { Play, Clock, Eye, Heart } from 'lucide-react';
import { ResourceItem } from '../types';

interface VideoCardProps {
  video: ResourceItem;
  onOpen: (video: ResourceItem) => void;
}

export default function VideoCard({
  video,
  onOpen,
}: VideoCardProps) {
  return (
    <div
      onClick={() => onOpen(video)}
      className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-violet-200 transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div>
        {/* Video Thumbnail Screen */}
        <div className="relative aspect-video bg-gray-900 overflow-hidden">
          <img
            src={video.author.avatar}
            alt={video.title}
            className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-violet-600 transition-all">
              <Play size={18} className="ml-0.5 fill-white" />
            </div>
          </div>

          <span className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
            {video.videoDuration || '24:15'}
          </span>
        </div>

        <div className="p-5 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
            {video.category}
          </span>
          <h4 className="font-extrabold text-gray-900 text-sm group-hover:text-violet-600 transition-colors leading-snug line-clamp-2">
            {video.title}
          </h4>
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {video.summary}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 flex items-center justify-between text-xs text-gray-400 font-semibold border-t border-gray-50 mt-2">
        <div className="flex items-center gap-1.5 text-gray-700 font-bold">
          <img src={video.author.avatar} alt={video.author.name} className="w-5 h-5 rounded-full object-cover" />
          <span className="text-[11px] truncate max-w-[120px]">{video.author.name}</span>
        </div>
        <span className="flex items-center gap-1 text-[11px]">
          <Eye size={12} /> {video.views}
        </span>
      </div>
    </div>
  );
}
