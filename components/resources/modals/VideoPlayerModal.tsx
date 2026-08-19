"use client";

import React, { useState } from 'react';
import {
  X, Play, Pause, Volume2, VolumeX, Maximize2,
  Share2, Heart, Clock, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { ResourceItem } from '../types';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: ResourceItem | null;
}

export default function VideoPlayerModal({
  isOpen,
  onClose,
  resource,
}: VideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen || !resource) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0f111a] rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl border border-gray-800 relative flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="bg-[#181a26] px-6 py-3.5 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <h3 className="text-xs md:text-sm font-bold text-white truncate max-w-md">
              {resource.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={resource.author.avatar}
            alt={resource.title}
            className="w-full h-full object-cover filter brightness-50 blur-xs"
          />

          {/* Overlay UI */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold bg-rose-600 text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                Video Lesson • {resource.videoDuration || '28:15'}
              </span>
            </div>

            {/* Big Play Button in Center */}
            <div className="self-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-violet-600/90 hover:bg-violet-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1 fill-white" />}
              </button>
            </div>

            {/* Video Progress & Bottom Controls */}
            <div className="space-y-2">
              <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
                <div className="w-1/3 h-full bg-violet-500 rounded-full" />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white cursor-pointer">
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white cursor-pointer">
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  <span className="font-mono text-[11px] text-gray-400">10:42 / {resource.videoDuration || '28:15'}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-violet-400 font-semibold">1080p HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Notes & Author */}
        <div className="p-6 bg-[#181a26] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-800">
          <div className="flex items-center gap-3.5">
            <img
              src={resource.author.avatar}
              alt={resource.author.name}
              className="w-12 h-12 rounded-2xl object-cover border border-gray-700"
            />
            <div>
              <p className="text-[10px] text-violet-400 font-bold uppercase tracking-wider">Instructor</p>
              <h4 className="text-sm font-bold text-white">{resource.author.name}</h4>
              <p className="text-xs text-gray-400">{resource.author.role} @ {resource.author.company}</p>
            </div>
          </div>

          <Link
            href="/mentors"
            onClick={onClose}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-violet-900/40 transition-all cursor-pointer whitespace-nowrap"
          >
            Book 1-on-1 Session with {resource.author.name.split(' ')[0]} <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
