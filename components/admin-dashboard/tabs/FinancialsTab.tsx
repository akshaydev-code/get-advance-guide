"use client";

import React, { useState } from 'react';
import {
  Wallet, TrendingUp, DollarSign, CheckCircle2, XCircle,
  Building, Smartphone, ArrowRight, ShieldCheck
} from 'lucide-react';
import {
  AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts';
import { AdminPayoutRequest, AdminSessionItem } from '../types';

interface FinancialsTabProps {
  payouts: AdminPayoutRequest[];
  sessions: AdminSessionItem[];
  revenueChartData: { name: string; gmv: number; commission: number }[];
  onApprovePayout: (payoutId: string) => void;
  onRejectPayout: (payoutId: string) => void;
}

export default function FinancialsTab({
  payouts,
  sessions,
  revenueChartData,
  onApprovePayout,
  onRejectPayout,
}: FinancialsTabProps) {
  const pendingPayouts = payouts.filter((p) => p.status === 'Pending');

  const totalGMV = sessions.reduce((acc, curr) => acc + curr.amount, 0) + 116000;
  const platformRevenue = totalGMV * 0.1;
  const mentorDisbursements = totalGMV * 0.9;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Financial Ledger & Payout Disbursements
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Audit Gross Merchandise Value (GMV), 10% platform revenue cut, and process mentor bank settlements.
          </p>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-6 rounded-[2rem] text-white shadow-lg shadow-violet-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
              Platform Gross GMV
            </span>
            <Wallet size={18} className="text-violet-200" />
          </div>
          <h3 className="text-3xl font-black">${totalGMV.toLocaleString()}</h3>
          <p className="text-[11px] text-violet-100 mt-1">All-time booking turnover</p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
              Platform Commission (10%)
            </span>
            <TrendingUp size={18} className="text-emerald-600" />
          </div>
          <h3 className="text-3xl font-black text-gray-900">${platformRevenue.toLocaleString()}</h3>
          <p className="text-[11px] text-gray-400 mt-1">Net platform fee revenue</p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
              Mentor Disbursements (90%)
            </span>
            <DollarSign size={18} className="text-violet-600" />
          </div>
          <h3 className="text-3xl font-black text-gray-900">${mentorDisbursements.toLocaleString()}</h3>
          <p className="text-[11px] text-gray-400 mt-1">Disbursed to engineering coaches</p>
        </div>
      </div>

      {/* Payout Requests Queue Table */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-gray-900 text-lg">Mentor Payout Withdrawal Requests</h3>
            <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
              {pendingPayouts.length} Pending
            </span>
          </div>
        </div>

        {payouts.length === 0 ? (
          <p className="text-xs text-gray-400 italic text-center py-8">No payout requests in the queue.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 font-bold uppercase tracking-wider">
                  <th className="pb-3 pl-2">Mentor</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Payout Method</th>
                  <th className="pb-3">Account Details</th>
                  <th className="pb-3">Requested</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 pr-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 font-medium">
                {payouts.map((pay) => (
                  <tr key={pay.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-3.5 pl-2">
                      <div className="flex items-center gap-2.5">
                        <img src={pay.mentorAvatar} alt={pay.mentorName} className="w-7 h-7 rounded-full object-cover" />
                        <div>
                          <p className="font-bold text-gray-900">{pay.mentorName}</p>
                          <p className="text-[10px] text-gray-400 font-semibold">{pay.mentorCompany}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 font-black text-gray-900">${pay.amount.toFixed(2)}</td>
                    <td className="py-3.5 font-bold text-violet-700">{pay.payoutMethod}</td>
                    <td className="py-3.5 font-mono text-gray-600">{pay.accountDetails}</td>
                    <td className="py-3.5 text-gray-400">{pay.requestDate}</td>
                    <td className="py-3.5">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          pay.status === 'Approved'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                            : pay.status === 'Rejected'
                            ? 'bg-rose-50 text-rose-700 border border-rose-100'
                            : 'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}
                      >
                        {pay.status}
                      </span>
                    </td>
                    <td className="py-3.5 pr-2 text-right">
                      {pay.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onRejectPayout(pay.id)}
                            className="px-3 py-1 text-gray-500 hover:text-rose-600 text-xs font-bold rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => onApprovePayout(pay.id)}
                            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                          >
                            Disburse Funds
                          </button>
                        </div>
                      ) : (
                        <span className="text-[11px] text-gray-400 font-semibold">Processed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
