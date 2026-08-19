"use client";

import React, { useState } from 'react';
import {
  FileText, Search, Check, XCircle, ExternalLink,
  Eye, Clock, CheckCircle2, Award
} from 'lucide-react';
import { AdminApplicationItem } from '../types';

interface ApplicationsTabProps {
  applications: AdminApplicationItem[];
  onOpenReviewModal: (application: AdminApplicationItem) => void;
  onApprove: (id: string) => void;
  onDecline: (id: string) => void;
}

export default function ApplicationsTab({
  applications,
  onOpenReviewModal,
  onApprove,
  onDecline,
}: ApplicationsTabProps) {
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Approved' | 'Declined'>('Pending');

  const filtered = applications.filter((a) => {
    if (filterStatus === 'All') return true;
    return a.status === filterStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Mentor Application Pipeline
            </h2>
            <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
              {applications.filter((a) => a.status === 'Pending').length} Pending Review
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Review incoming mentor submissions from the &ldquo;Become a Mentor&rdquo; registration funnel.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl">
          {(['Pending', 'Approved', 'Declined', 'All'] as const).map((st) => (
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

      {/* Applications List */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border border-gray-100 shadow-sm space-y-3">
          <FileText size={36} className="mx-auto text-gray-300" />
          <h3 className="text-base font-bold text-gray-900">No applications in this category</h3>
          <p className="text-xs text-gray-500">When engineers apply to mentor, their profiles will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:border-violet-200 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-base font-extrabold text-gray-900">{app.name}</h3>
                    <span className="text-xs font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
                      {app.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {app.role} @ <strong className="text-gray-800">{app.company}</strong> • {app.experienceYears}+ years exp
                  </p>
                  <p className="text-[11px] text-gray-400 font-semibold mt-1">
                    Email: {app.email} • Proposed Rate: <strong className="text-gray-900">${app.proposedRate}/hr</strong>
                  </p>
                </div>

                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    app.status === 'Pending'
                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                      : app.status === 'Approved'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}
                >
                  {app.status}
                </span>
              </div>

              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 text-xs text-gray-700 italic leading-relaxed">
                &ldquo;{app.coachingStatement}&rdquo;
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => onOpenReviewModal(app)}
                  className="text-xs font-bold text-violet-600 hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye size={13} /> Review Full Application
                </button>

                {app.status === 'Pending' && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onDecline(app.id)}
                      className="px-4 py-2 bg-gray-100 hover:bg-rose-50 text-gray-600 hover:text-rose-600 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => onApprove(app.id)}
                      className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Check size={14} /> Approve & Onboard
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
