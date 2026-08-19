"use client";

import React, { useState } from 'react';
import {
  Settings, Bell, Lock, Shield, Calendar, Clock, DollarSign,
  Building, CheckCircle2, RotateCcw, AlertTriangle, Save, Plus, X
} from 'lucide-react';
import { MentorProfile, MentorScheduleDay } from '../types';

interface SettingsTabProps {
  profile: MentorProfile;
  schedule: MentorScheduleDay[];
  onSaveSchedule: (schedule: MentorScheduleDay[]) => void;
  onSaveProfile: (profile: MentorProfile) => void;
  onResetData: () => void;
}

export default function SettingsTab({
  profile,
  schedule,
  onSaveSchedule,
  onSaveProfile,
  onResetData,
}: SettingsTabProps) {
  const [scheduleData, setScheduleData] = useState<MentorScheduleDay[]>(schedule);
  const [sessionAlerts, setSessionAlerts] = useState(true);
  const [requestPings, setRequestPings] = useState(true);
  const [payoutAlerts, setPayoutAlerts] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [settingsSaved, setSettingsSaved] = useState(false);

  // Toggle day availability
  const handleToggleDay = (dayIndex: number) => {
    const updated = [...scheduleData];
    updated[dayIndex].isEnabled = !updated[dayIndex].isEnabled;
    setScheduleData(updated);
  };

  // Add slot to day
  const handleAddSlot = (dayIndex: number) => {
    const newSlot = prompt('Enter new slot time (e.g. 08:00 PM):');
    if (!newSlot) return;
    const updated = [...scheduleData];
    updated[dayIndex].slots.push(newSlot);
    setScheduleData(updated);
  };

  // Remove slot from day
  const handleRemoveSlot = (dayIndex: number, slotIndex: number) => {
    const updated = [...scheduleData];
    updated[dayIndex].slots.splice(slotIndex, 1);
    setScheduleData(updated);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('Please fill in all password fields.');
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setPasswordSaved(true);
    setTimeout(() => {
      setPasswordSaved(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 2500);
  };

  const handleSaveAll = () => {
    onSaveSchedule(scheduleData);
    setSettingsSaved(true);
    setTimeout(() => {
      setSettingsSaved(false);
    }, 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Teaching Schedule & Account Settings
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Configure your weekly 1-on-1 availability hours, booking slots, and account preferences.
          </p>
        </div>

        <button
          onClick={handleSaveAll}
          className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-md shadow-violet-200 flex items-center gap-2 transition-all cursor-pointer w-fit"
        >
          {settingsSaved ? <CheckCircle2 size={16} className="text-emerald-300" /> : <Save size={16} />}
          {settingsSaved ? 'Schedule Saved!' : 'Save Schedule & Settings'}
        </button>
      </div>

      {settingsSaved && (
        <div className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-bold border border-emerald-200 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-600" />
          Your availability calendar and account preferences have been saved!
        </div>
      )}

      {/* Weekly Availability Calendar Matrix */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-violet-600" />
            <h3 className="font-extrabold text-gray-900 text-base">Weekly Working Days & Time Slots</h3>
          </div>
          <span className="text-[10px] text-gray-400 font-semibold">Timezone: {profile.timezone || 'Asia/Kolkata'}</span>
        </div>

        <div className="space-y-3">
          {scheduleData.map((dayItem, dIdx) => (
            <div
              key={dayItem.day}
              className={`p-4 rounded-2xl border transition-all ${
                dayItem.isEnabled ? 'bg-gray-50/70 border-gray-200' : 'bg-gray-50/30 border-gray-100 opacity-60'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={dayItem.isEnabled}
                    onChange={() => handleToggleDay(dIdx)}
                    className="w-4 h-4 rounded text-violet-600 focus:ring-violet-500 cursor-pointer"
                  />
                  <span className="text-sm font-bold text-gray-900 w-28">{dayItem.day}</span>
                </div>

                {dayItem.isEnabled ? (
                  <div className="flex flex-wrap items-center gap-1.5 flex-grow">
                    {dayItem.slots.map((slot, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 text-xs font-bold bg-white text-violet-800 px-2.5 py-1 rounded-xl border border-violet-200 shadow-xs"
                      >
                        {slot}
                        <button
                          type="button"
                          onClick={() => handleRemoveSlot(dIdx, sIdx)}
                          className="hover:text-rose-600"
                        >
                          <X size={10} />
                        </button>
                      </span>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAddSlot(dIdx)}
                      className="px-2.5 py-1 bg-violet-100 hover:bg-violet-200 text-violet-700 text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer"
                    >
                      <Plus size={12} /> Add Slot
                    </button>
                  </div>
                ) : (
                  <span className="text-xs text-gray-400 italic">Day marked unavailable</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications Preferences */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <Bell size={18} className="text-violet-600" />
          <h3 className="font-extrabold text-gray-900 text-base">Mentor Notifications</h3>
        </div>

        <div className="space-y-4">
          <ToggleOption
            title="Instant Student Booking & Request Alerts"
            description="Receive email & push notifications the moment a student sends a request or books a 1-on-1 slot."
            checked={requestPings}
            onChange={setRequestPings}
          />
          <ToggleOption
            title="Session Reminders (15 mins before call)"
            description="Get a calendar ping and Google Meet link prior to starting your mentorship session."
            checked={sessionAlerts}
            onChange={setSessionAlerts}
          />
          <ToggleOption
            title="Payout & Financial Summaries"
            description="Receive weekly transaction reports and instant notifications on payout clearances."
            checked={payoutAlerts}
            onChange={setPayoutAlerts}
          />
          <ToggleOption
            title="Community Updates & Mentor Spotlight"
            description="Get invited to host community webinars and early-access platform features."
            checked={marketingEmails}
            onChange={setMarketingEmails}
          />
        </div>
      </div>

      {/* Security & Password */}
      <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <Lock size={18} className="text-violet-600" />
          <h3 className="font-extrabold text-gray-900 text-base">Security & Password</h3>
        </div>

        {passwordSaved && (
          <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-200 flex items-center gap-2">
            <CheckCircle2 size={15} className="text-emerald-600" />
            Password updated successfully!
          </div>
        )}

        {passwordError && (
          <div className="p-3 bg-rose-50 text-rose-800 rounded-xl text-xs font-bold border border-rose-200 flex items-center gap-2">
            <AlertTriangle size={15} className="text-rose-600" />
            {passwordError}
          </div>
        )}

        <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="text-[11px] font-bold text-gray-700 block mb-1">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Danger Zone: Reset Mentor Demo Data */}
      <div className="bg-rose-50/50 p-6 md:p-8 rounded-[2rem] border border-rose-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-800 font-extrabold text-base mb-1">
            <AlertTriangle size={18} className="text-rose-600" />
            <h3>Reset Mentor Data & Seed Records</h3>
          </div>
          <p className="text-xs text-rose-700/80 max-w-xl">
            This will reset your mentor requests, scheduled calls, earnings history, and published resources back to initial values.
          </p>
        </div>

        <button
          onClick={onResetData}
          className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          <RotateCcw size={14} /> Reset Demo Data
        </button>
      </div>
    </div>
  );
}

function ToggleOption({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div>
        <h4 className="text-xs font-bold text-gray-900">{title}</h4>
        <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer flex-shrink-0 ${
          checked ? 'bg-violet-600' : 'bg-gray-200'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
