"use client";

import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  message: string;
  type: ToastType;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type,
  isOpen,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen || !message) return null;

  const bgStyles = {
    success: 'bg-emerald-600 text-white shadow-emerald-200',
    error: 'bg-rose-600 text-white shadow-rose-200',
    info: 'bg-violet-600 text-white shadow-violet-200',
  };

  const icons = {
    success: <CheckCircle2 size={18} className="text-white flex-shrink-0" />,
    error: <AlertCircle size={18} className="text-white flex-shrink-0" />,
    info: <Info size={18} className="text-white flex-shrink-0" />,
  };

  return (
    <div className="fixed top-6 right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border border-white/20 max-w-md ${bgStyles[type]}`}
      >
        {icons[type]}
        <p className="text-xs font-bold leading-snug flex-grow">{message}</p>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/20 transition-colors text-white cursor-pointer"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
