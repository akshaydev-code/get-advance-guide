"use client";

import React, { useState } from 'react';
import {
  Wallet, TrendingUp, Download, ArrowUpRight, DollarSign,
  Calendar, CheckCircle2, Clock, AlertCircle, Building
} from 'lucide-react';
import {
  AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts';
import { EarningRecord } from '../types';

interface EarningsTabProps {
  earnings: EarningRecord[];
  earningsChartData: { name: string; earnings: number; students: number }[];
  onOpenWithdrawModal: () => void;
}

export default function EarningsTab({
  earnings,
  earningsChartData,
  onOpenWithdrawModal,
}: EarningsTabProps) {
  const [timeFilter, setTimeFilter] = useState<'month' | 'quarter' | 'year'>('month');

  const totalGross = earnings.reduce((acc, curr) => acc + curr.amount, 0);
  const totalFees = earnings.reduce((acc, curr) => acc + curr.platformFee, 0);
  const totalNet = earnings.reduce((acc, curr) => acc + curr.netPayout, 0);

  const availableBalance = earnings
    .filter((e) => e.status === 'Paid')
    .reduce((acc, curr) => acc + curr.netPayout, 0);

  const pendingBalance = earnings
    .filter((e) => e.status === 'Processing' || e.status === 'Pending')
    .reduce((acc, curr) => acc + curr.netPayout, 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Withdraw Button */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Financials & Earnings Overview
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Track your 1-on-1 teaching revenue, platform payouts, and bank settlement transfers.
          </p>
        </div>

        <button
          onClick={onOpenWithdrawModal}
          className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          <Wallet size={15} /> Request Payout Withdrawal
        </button>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-6 rounded-[2rem] text-white shadow-lg shadow-violet-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
              Available For Payout
            </span>
            <Wallet size={18} className="text-violet-200" />
          </div>
          <h3 className="text-3xl font-black">${availableBalance.toFixed(2)}</h3>
          <p className="text-[11px] text-violet-100 mt-1">Ready for 1-click bank transfer</p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100">
              Pending Clearing
            </span>
            <Clock size={18} className="text-amber-500" />
          </div>
          <h3 className="text-3xl font-black text-gray-900">${pendingBalance.toFixed(2)}</h3>
          <p className="text-[11px] text-gray-400 mt-1">Settles within 24 hours of session</p>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
              Lifetime Net Earnings
            </span>
            <TrendingUp size={18} className="text-emerald-600" />
          </div>
          <h3 className="text-3xl font-black text-gray-900">${totalNet.toFixed(2)}</h3>
          <p className="text-[11px] text-emerald-600 font-bold mt-1">90% mentor revenue share</p>
        </div>
      </div>

      {/* Revenue Graph */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-gray-900 text-lg">Revenue History & Projections</h3>
            <p className="text-xs text-gray-500 font-medium">Net earnings per coaching billing period</p>
          </div>

          <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setTimeFilter('month')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                timeFilter === 'month' ? 'bg-white text-violet-700 shadow-xs' : 'text-gray-600'
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimeFilter('quarter')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                timeFilter === 'quarter' ? 'bg-white text-violet-700 shadow-xs' : 'text-gray-600'
              }`}
            >
              Quarter
            </button>
          </div>
        </div>

        <div className="h-64 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={earningsChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="earningsAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} />
              <Tooltip
                formatter={(val: any) => [`$${val}`, 'Net Payout']}
                contentStyle={{ borderRadius: '1rem', border: '1px solid #E2E8F0', fontSize: '12px' }}
              />
              <Area
                type="monotone"
                dataKey="earnings"
                stroke="#7C3AED"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#earningsAreaGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
        <h3 className="font-extrabold text-gray-900 text-lg">Transaction History & Invoices</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 font-bold uppercase tracking-wider">
                <th className="pb-3 pl-2">Session / Topic</th>
                <th className="pb-3">Mentee</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Gross</th>
                <th className="pb-3">Net Payout</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 pr-2 text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {earnings.map((earn) => (
                <tr key={earn.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-3.5 pl-2 font-bold text-gray-900">{earn.topic}</td>
                  <td className="py-3.5 text-gray-600">{earn.studentName}</td>
                  <td className="py-3.5 text-gray-400">{earn.date}</td>
                  <td className="py-3.5 font-semibold text-gray-700">${earn.amount.toFixed(2)}</td>
                  <td className="py-3.5 font-bold text-violet-700">${earn.netPayout.toFixed(2)}</td>
                  <td className="py-3.5">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        earn.status === 'Paid'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          : 'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}
                    >
                      {earn.status}
                    </span>
                  </td>
                  <td className="py-3.5 pr-2 text-right">
                    <button
                      onClick={() => alert(`Invoice for ${earn.topic} (${earn.id}) downloaded.`)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-violet-600 hover:bg-violet-50 transition-colors cursor-pointer"
                      title="Download Invoice"
                    >
                      <Download size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
