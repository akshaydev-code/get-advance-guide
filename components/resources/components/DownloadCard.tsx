"use client";

import React, { useState } from 'react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { ResourceItem } from '../types';

interface DownloadCardProps {
  item: ResourceItem;
  onOpen: (item: ResourceItem) => void;
}

export default function DownloadCard({
  item,
  onOpen,
}: DownloadCardProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleQuickDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      alert(`Downloaded ${item.downloadFileName || item.title + '.pdf'} (${item.downloadFileSize || '1.8 MB'})`);
    }, 600);
  };

  return (
    <div
      onClick={() => onOpen(item)}
      className="p-4 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all flex items-center justify-between gap-3 cursor-pointer group"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-violet-50 group-hover:bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0 transition-colors">
          <FileText size={18} />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-xs text-gray-900 truncate group-hover:text-violet-600 transition-colors">
            {item.title}
          </h4>
          <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5">
            {item.downloadFileName || 'PDF / DOCX Document'} • {item.downloadFileSize || '1.8 MB'}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleQuickDownload}
        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ${
          downloaded
            ? 'bg-emerald-600 text-white'
            : 'bg-violet-50 group-hover:bg-violet-600 text-violet-600 group-hover:text-white'
        }`}
        title="Download file"
      >
        {downloaded ? <CheckCircle2 size={16} /> : <Download size={16} />}
      </button>
    </div>
  );
}
