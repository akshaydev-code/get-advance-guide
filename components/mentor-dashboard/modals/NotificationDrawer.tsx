"use client";

import React from 'react';
import { X, Bell, Check, Trash2, Calendar, MessageSquare, BookOpen, UserCheck, Wallet, Star } from 'lucide-react';
import { MentorNotification, MentorDashboardTab } from '../types';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: MentorNotification[];
  onMarkAllRead: () => void;
  onClearAll: () => void;
  onNotificationClick: (notif: MentorNotification) => void;
}

export default function NotificationDrawer({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead,
  onClearAll,
  onNotificationClick,
}: NotificationDrawerProps) {
  if (!isOpen) return null;

  const getIcon = (type: MentorNotification['type']) => {
    switch (type) {
      case 'session':
        return <Calendar size={16} className="text-violet-600" />;
      case 'request':
        return <UserCheck size={16} className="text-emerald-600" />;
      case 'earning':
        return <Wallet size={16} className="text-amber-600" />;
      case 'review':
        return <Star size={16} className="text-yellow-500" />;
      default:
        return <MessageSquare size={16} className="text-blue-600" />;
    }
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-gray-100 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-violet-50/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-violet-100 text-violet-700 rounded-xl">
              <Bell size={18} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">Mentor Alerts & Updates</h3>
              <p className="text-[11px] text-gray-500 font-medium">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-5 py-2.5 bg-gray-50/80 border-b border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
          <button
            onClick={onMarkAllRead}
            disabled={unreadCount === 0}
            className="flex items-center gap-1 hover:text-violet-700 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <Check size={13} /> Mark all read
          </button>
          <button
            onClick={onClearAll}
            disabled={notifications.length === 0}
            className="flex items-center gap-1 hover:text-red-600 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <Trash2 size={13} /> Clear all
          </button>
        </div>

        {/* Notification List */}
        <div className="flex-grow overflow-y-auto p-4 space-y-2.5">
          {notifications.length === 0 ? (
            <div className="text-center py-16 space-y-2 text-gray-400">
              <Bell size={32} className="mx-auto opacity-40" />
              <p className="text-xs font-medium">No notifications yet</p>
            </div>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                onClick={() => onNotificationClick(n)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  n.isRead
                    ? 'bg-white border-gray-100 hover:border-gray-200'
                    : 'bg-violet-50/70 border-violet-100 hover:bg-violet-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-xs border border-gray-100 flex-shrink-0">
                    {getIcon(n.type)}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-xs font-bold text-gray-900 truncate">{n.title}</h4>
                      <span className="text-[10px] text-gray-400 flex-shrink-0">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-1 leading-snug">{n.message}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
