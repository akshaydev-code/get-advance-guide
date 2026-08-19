"use client";

import React, { useState } from 'react';
import {
  MessageSquare, Clock, CheckCircle2, XCircle, Search, Filter,
  ArrowRight, Trash2, RotateCcw, AlertCircle, Plus, Send
} from 'lucide-react';
import { MentorshipRequest, DashboardTab } from '../types';

interface RequestsTabProps {
  requests: MentorshipRequest[];
  onCancelRequest: (requestId: string) => void;
  onResendRequest: (requestId: string) => void;
  onNavigateTab: (tab: DashboardTab) => void;
  onStartMessage: (mentorId: string) => void;
}

export default function RequestsTab({
  requests,
  onCancelRequest,
  onResendRequest,
  onNavigateTab,
  onStartMessage,
}: RequestsTabProps) {
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Accepted' | 'Rejected'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<MentorshipRequest | null>(null);

  const filteredRequests = requests.filter((r) => {
    const matchesStatus = filterStatus === 'All' || r.status === filterStatus;
    const matchesSearch =
      r.mentorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.mentorCompany.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: MentorshipRequest['status']) => {
    switch (status) {
      case 'Accepted':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 size={13} /> Accepted
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200">
            <Clock size={13} /> Pending Review
          </span>
        );
      case 'Rejected':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold bg-rose-50 text-rose-700 px-3 py-1 rounded-full border border-rose-200">
            <XCircle size={13} /> Declined
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Panel */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Mentorship Requests
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              Track status of requests sent to mentors and start discussions.
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('find-mentors')}
            className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md shadow-violet-200 transition-all cursor-pointer w-fit"
          >
            <Plus size={15} /> Find More Mentors
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-2">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl w-full md:w-auto">
            {(['All', 'Pending', 'Accepted', 'Rejected'] as const).map((status) => {
              const isSelected = filterStatus === status;
              const count = status === 'All' ? requests.length : requests.filter((r) => r.status === status).length;
              return (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-violet-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {status} ({count})
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search requests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-1.5 pl-9 pr-3 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>
      </div>

      {/* Requests List */}
      {filteredRequests.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm space-y-3">
          <MessageSquare size={36} className="mx-auto text-gray-300" />
          <h3 className="text-base font-bold text-gray-900">No mentorship requests found</h3>
          <p className="text-xs text-gray-500 max-w-xs mx-auto">
            {filterStatus === 'All'
              ? 'You have not sent any mentorship requests yet. Browse mentors to send your first one!'
              : `No requests with status "${filterStatus}".`}
          </p>
          <button
            onClick={() => onNavigateTab('find-mentors')}
            className="px-5 py-2.5 bg-violet-600 text-white rounded-xl text-xs font-bold hover:bg-violet-700 transition-colors cursor-pointer"
          >
            Find a Mentor
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:border-violet-200 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={req.mentorImage}
                    alt={req.mentorName}
                    className="w-14 h-14 rounded-2xl object-cover border border-gray-200 shadow-xs"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-extrabold text-gray-900">{req.mentorName}</h3>
                      <span className="text-xs text-violet-600 font-bold">@{req.mentorCompany}</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{req.mentorRole}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Sent: {req.createdAt}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusBadge(req.status)}
                </div>
              </div>

              {/* Topic & Message */}
              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Topic:</span>
                  <span className="text-xs font-bold text-gray-900">{req.topic}</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  &ldquo;{req.message}&rdquo;
                </p>
                {req.goals && (
                  <div className="pt-2 border-t border-gray-200/60 text-xs text-gray-500">
                    <strong className="text-gray-700">Goal:</strong> {req.goals}
                  </div>
                )}
                {req.responseNote && (
                  <div className="pt-2 border-t border-gray-200/60 text-xs text-violet-800 bg-violet-50/70 p-2.5 rounded-xl">
                    <strong>Mentor Note:</strong> {req.responseNote}
                  </div>
                )}
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-gray-400">
                  Request ID: <code className="font-mono">{req.id}</code>
                </span>

                <div className="flex items-center gap-2">
                  {req.status === 'Accepted' && (
                    <>
                      <button
                        onClick={() => onStartMessage(req.mentorId)}
                        className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                      >
                        <MessageSquare size={13} /> Chat with Mentor
                      </button>
                      <button
                        onClick={() => onNavigateTab('sessions')}
                        className="px-4 py-2 bg-white border border-violet-200 text-violet-700 hover:bg-violet-50 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                      >
                        Book Session
                      </button>
                    </>
                  )}

                  {req.status === 'Pending' && (
                    <button
                      onClick={() => onCancelRequest(req.id)}
                      className="px-3.5 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold border border-rose-100 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 size={13} /> Cancel Request
                    </button>
                  )}

                  {req.status === 'Rejected' && (
                    <button
                      onClick={() => onResendRequest(req.id)}
                      className="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw size={13} /> Resubmit
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
