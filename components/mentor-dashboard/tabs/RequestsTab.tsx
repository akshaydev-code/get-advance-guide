"use client";

import React, { useState } from 'react';
import {
  MessageSquare, Clock, CheckCircle2, XCircle, Search, Filter,
  ArrowRight, Trash2, RotateCcw, AlertCircle, Plus, Send, Check, X
} from 'lucide-react';
import { MentorRequest, MentorDashboardTab } from '../types';

interface RequestsTabProps {
  requests: MentorRequest[];
  onAcceptRequest: (requestId: string) => void;
  onDeclineRequest: (requestId: string) => void;
  onStartMessage: (studentId: string) => void;
  onNavigateTab: (tab: MentorDashboardTab) => void;
}

export default function RequestsTab({
  requests,
  onAcceptRequest,
  onDeclineRequest,
  onStartMessage,
  onNavigateTab,
}: RequestsTabProps) {
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Accepted' | 'Declined'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRequests = requests.filter((r) => {
    const matchesStatus = filterStatus === 'All' || r.status === filterStatus;
    const matchesSearch =
      r.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.studentUniversity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: MentorRequest['status']) => {
    switch (status) {
      case 'Accepted':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 size={13} /> Accepted & Scheduled
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200">
            <Clock size={13} /> Pending Your Review
          </span>
        );
      case 'Declined':
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
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                Mentorship Inbound Requests
              </h2>
              <span className="px-2.5 py-0.5 bg-violet-100 text-violet-700 text-xs font-bold rounded-full">
                {requests.filter((r) => r.status === 'Pending').length} Pending
              </span>
            </div>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              Review requests from developers & students seeking your 1-on-1 career guidance.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-2">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl w-full md:w-auto">
            {(['All', 'Pending', 'Accepted', 'Declined'] as const).map((status) => {
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
              placeholder="Search by student or topic..."
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
              ? 'No requests have arrived yet. When students book or request guidance, they will appear here.'
              : `No requests with status "${filterStatus}".`}
          </p>
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
                    src={req.studentAvatar}
                    alt={req.studentName}
                    className="w-14 h-14 rounded-2xl object-cover border border-gray-200 shadow-xs"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-extrabold text-gray-900">{req.studentName}</h3>
                      <span className="text-xs text-violet-600 font-bold">@{req.studentUniversity}</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{req.studentRole}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Received: {req.createdAt}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusBadge(req.status)}
                </div>
              </div>

              {/* Topic & Detailed Message */}
              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Focus Topic:</span>
                  <span className="text-xs font-bold text-gray-900">{req.topic}</span>
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  &ldquo;{req.message}&rdquo;
                </p>
                {req.goals && (
                  <div className="pt-2 border-t border-gray-200/60 text-xs text-gray-600">
                    <strong className="text-gray-800">Mentee Target Goal:</strong> {req.goals}
                  </div>
                )}
                {req.preferredTime && (
                  <div className="pt-1 text-xs text-violet-800 font-medium">
                    <strong>Preferred Slot:</strong> {req.preferredTime}
                  </div>
                )}
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => onStartMessage(req.studentId)}
                  className="text-xs font-bold text-gray-500 hover:text-violet-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare size={13} /> Chat with {req.studentName.split(' ')[0]}
                </button>

                <div className="flex items-center gap-2">
                  {req.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => onDeclineRequest(req.id)}
                        className="px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold border border-rose-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <X size={13} /> Decline
                      </button>
                      <button
                        onClick={() => onAcceptRequest(req.id)}
                        className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Check size={14} /> Accept Request
                      </button>
                    </>
                  )}

                  {req.status === 'Accepted' && (
                    <button
                      onClick={() => onNavigateTab('sessions')}
                      className="px-4 py-2 bg-white border border-violet-200 text-violet-700 hover:bg-violet-50 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      View in Calendar →
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
