"use client";

import React, { useState } from 'react';
import {
  Mail, MessageSquare, Send, CheckCircle2,
  Clock, Trash2, Search
} from 'lucide-react';
import { AdminInquiryItem } from '../types';

interface InquiriesTabProps {
  inquiries: AdminInquiryItem[];
  onOpenReplyModal: (inquiry: AdminInquiryItem) => void;
  onMarkResolved: (inquiryId: string) => void;
  onDeleteInquiry: (inquiryId: string) => void;
}

export default function InquiriesTab({
  inquiries,
  onOpenReplyModal,
  onMarkResolved,
  onDeleteInquiry,
}: InquiriesTabProps) {
  const [filterStatus, setFilterStatus] = useState<'All' | 'New' | 'In Progress' | 'Resolved'>('All');

  const filtered = inquiries.filter((inq) => {
    if (filterStatus === 'All') return true;
    return inq.status === filterStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Contact Us & Support Inquiries
            </h2>
            <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
              {inquiries.filter((i) => i.status === 'New').length} New
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Messages and enterprise partnership requests submitted through the /contact page.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl">
          {(['All', 'New', 'In Progress', 'Resolved'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterStatus === st
                  ? 'bg-white text-violet-700 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {filtered.map((inq) => (
          <div
            key={inq.id}
            className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:border-violet-200 transition-all space-y-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-gray-900 text-base">{inq.name}</h3>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      inq.status === 'New'
                        ? 'bg-amber-100 text-amber-900'
                        : inq.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-emerald-100 text-emerald-900'
                    }`}
                  >
                    {inq.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  {inq.email} {inq.phone ? `• ${inq.phone}` : ''} • <span className="text-gray-400">{inq.date}</span>
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-1.5">
              <h4 className="text-xs font-bold text-gray-900">Subject: {inq.subject}</h4>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                {inq.message}
              </p>
            </div>

            {inq.adminReply && (
              <div className="p-3 bg-violet-50 rounded-xl border border-violet-100 text-xs">
                <span className="font-bold text-violet-900">Official Admin Reply:</span> {inq.adminReply}
              </div>
            )}

            <div className="flex items-center justify-between pt-1 border-t border-gray-100">
              <button
                onClick={() => onDeleteInquiry(inq.id)}
                className="text-xs font-bold text-gray-400 hover:text-rose-600 cursor-pointer"
              >
                Delete Inquiry
              </button>

              <div className="flex items-center gap-2">
                {inq.status !== 'Resolved' && (
                  <button
                    onClick={() => onMarkResolved(inq.id)}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Mark Resolved
                  </button>
                )}
                <button
                  onClick={() => onOpenReplyModal(inq)}
                  className="px-4 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Send size={12} /> Reply Email
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
