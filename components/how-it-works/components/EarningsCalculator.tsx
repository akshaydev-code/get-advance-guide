"use client";

import React, { useState } from 'react';
import { DollarSign, Clock, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EarningsCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(4);
  const [hourlyRate, setHourlyRate] = useState(70);

  const monthlyGross = hoursPerWeek * 4 * hourlyRate;
  const monthlyNet = monthlyGross * 0.9;
  const annualNet = monthlyNet * 12;

  return (
    <div className="bg-gradient-to-br from-violet-950 via-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Col (7 cols): Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-violet-300 text-xs font-bold border border-white/10">
            <Sparkles size={14} className="text-amber-400" />
            <span>Interactive Coach Revenue Estimator</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            How Much Can You Earn as a Mentor?
          </h3>

          <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-medium">
            Set your coaching hours and rate. With our 90% mentor revenue share, top tech coaches earn steady secondary income on their own terms.
          </p>

          <div className="space-y-5 pt-2">
            {/* Hours Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span>Coaching Hours Per Week</span>
                <span className="text-violet-400 text-sm font-mono">{hoursPerWeek} Hours / week</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full accent-violet-500 cursor-pointer h-2 bg-gray-800 rounded-lg"
              />
            </div>

            {/* Hourly Rate Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span>Your Hourly Session Rate ($ USD)</span>
                <span className="text-violet-400 text-sm font-mono">${hourlyRate} / hour</span>
              </div>
              <input
                type="range"
                min="30"
                max="200"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full accent-violet-500 cursor-pointer h-2 bg-gray-800 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Col (5 cols): Earnings Projected Card */}
        <div className="lg:col-span-5">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 text-center space-y-4 shadow-xl">
            <p className="text-xs font-bold text-violet-300 uppercase tracking-wider">Estimated Monthly Earnings</p>
            <h4 className="text-4xl md:text-5xl font-black text-white tracking-tight text-amber-300">
              ${monthlyNet.toFixed(0)} <span className="text-xs text-gray-300 font-normal">/ month</span>
            </h4>
            <p className="text-xs text-gray-300">
              Projected Annual Payout: <strong className="text-white">${annualNet.toLocaleString()} / year</strong>
            </p>
            <div className="pt-2">
              <Link
                href="/become-a-mentor"
                className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                Apply as a Mentor Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
