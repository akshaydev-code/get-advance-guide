"use client";

import React from 'react';
import { Compass, Clock, CheckCircle2, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { ResourceItem } from '../types';

interface RoadmapCardProps {
  roadmap: ResourceItem;
  onOpen: (roadmap: ResourceItem) => void;
}

export default function RoadmapCard({
  roadmap,
  onOpen,
}: RoadmapCardProps) {
  const milestoneCount = roadmap.milestones?.length || 4;

  return (
    <div
      onClick={() => onOpen(roadmap)}
      className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all flex flex-col justify-between group cursor-pointer"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
            <Compass size={20} />
          </div>
          <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full">
            {roadmap.level}
          </span>
        </div>

        <h3 className="font-extrabold text-gray-900 text-lg group-hover:text-violet-600 transition-colors leading-tight">
          {roadmap.title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {roadmap.summary}
        </p>

        <div className="space-y-1.5 pt-1 text-xs text-gray-600 font-semibold">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-violet-600" />
            <span>Estimated: {roadmap.readTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Layers size={13} className="text-violet-600" />
            <span>{milestoneCount} Interactive Milestones</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-bold text-violet-600 group-hover:underline">
          Explore interactive roadmap
        </span>
        <div className="w-7 h-7 rounded-full bg-violet-50 group-hover:bg-violet-600 text-violet-600 group-hover:text-white flex items-center justify-center transition-colors">
          <ChevronRight size={14} />
        </div>
      </div>
    </div>
  );
}
