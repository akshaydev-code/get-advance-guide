"use client";

import React from 'react';
import { X, Bell, Check, Trash2, Calendar, MessageSquare, BookOpen, UserCheck, ArrowRight } from 'lucide-react';
import { NotificationItem, DashboardTab } from '../types';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllRead: () => void;
  onClearAll: () => void;
  onNotificationClick: (notif: NotificationItem) => void;
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

  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'session':
        return <Calendar size={16} className="text-violet-600" />;
      case 'request':
        return <UserCheck size={16} className="text-emerald-600" />;
      case 'message':
        return <MessageSquare size={16} className="text-blue-600" />;
      default:
        return <BookOpen size={16} className="text-amber-600" />;
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
              <h3 className="font-bold text-gray-900 text-sm">Notifications</h3>
              <p className="text-[11px] text-gray-500 font-medium">
                {unreadCount > 0 ? `${unreadCount} unread alerts` : 'All caught up!'}
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

        {/* List */}
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
                  <div className="p-2 bg-white rounded-xl shadow-xs border border-gray-100 flex-shrink-0 mt-0.5">
                    {getIcon(n.type)}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h4 className={`text-xs font-bold truncate ${n.isRead ? 'text-gray-800' : 'text-violet-950'}`}>
                        {n.title}
                      </h4>
                      {!n.isRead && (
                        <span className="w-2 h-2 rounded-full bg-violet-600 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-gray-600 leading-snug line-clamp-2">
                      {n.message}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-black/5">
                      <span className="text-[10px] text-gray-400 font-medium">{n.time}</span>
                      <span className="text-[10px] font-bold text-violet-600 flex items-center gap-0.5">
                        View <ArrowRight size={10} />
                      </span>
                    </div>
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
