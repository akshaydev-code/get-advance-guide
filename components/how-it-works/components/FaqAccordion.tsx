"use client";

import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || null);
  const [searchFaq, setSearchFaq] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFaqs = faqs.filter((f) => {
    const matchesSearch =
      f.question.toLowerCase().includes(searchFaq.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchFaq.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'General', 'Booking', 'Mentors', 'Pricing & Payouts'];

  return (
    <div className="space-y-6">
      {/* Search & Category Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchFaq}
            onChange={(e) => setSearchFaq(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl py-2 pl-9 pr-3 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-xs"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === c
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-white border-violet-200 shadow-md shadow-violet-100/50'
                  : 'bg-white border-gray-100 hover:border-gray-200 shadow-xs'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                className="w-full p-4 md:p-5 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-md border border-violet-100 hidden sm:inline-block">
                    {faq.category}
                  </span>
                  <span className="text-xs md:text-sm font-extrabold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 bg-violet-100 text-violet-700' : 'bg-gray-100 text-gray-500'
                }`}>
                  <ChevronDown size={14} />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 md:px-5 pb-5 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed font-medium border-t border-gray-50 animate-in fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
