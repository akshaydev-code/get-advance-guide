import React from 'react';
import {
  ChevronDown,
  ArrowRight,
  User,
  Search,
  Calendar,
  ShieldCheck,
  Zap,
  TrendingUp,
  FileText,
  Video,
  MessageSquare,
  Flag
} from 'lucide-react';

import HowItWorksBanner from '@/components/how-it-works/HowItWorksBanner';
import HowItWorksJourneySection from '@/components/how-it-works/HowItWorksJourneySection/HowItWorksJourneySection';

export default function HowItWorksPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-purple-600 selection:text-white">

        <HowItWorksBanner />

        <HowItWorksJourneySection />

        {/* 5. WHY OUR PROCESS WORKS */}
        <section className="py-20 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Why Our Process <span className="text-purple-600">Works</span>
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-16 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Personalized Matching", desc: "Get mentors perfectly suited to your goals.", icon: Zap },
                { title: "Fast Booking", desc: "Schedule sessions within minutes.", icon: Calendar },
                { title: "Secure Platform", desc: "Safe communication and your privacy.", icon: ShieldCheck },
                { title: "Continuous Growth", desc: "Track your learning journey and progress.", icon: TrendingUp },
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shadow-inner">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. MENTORSHIP PROCESS LINEAR FLOW */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-10">Mentorship Process</h2>
          <div className="flex items-center justify-between min-w-[700px] gap-2 px-4">
            {[
              { label: "Create Account", icon: User },
              { label: "Complete Profile", icon: FileText },
              { label: "Find Mentor", icon: Search },
              { label: "Book Session", icon: Calendar },
              { label: "Attend Session", icon: Video },
              { label: "Receive Feedback", icon: MessageSquare },
              { label: "Achieve Goals", icon: Flag },
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center shadow-sm">
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 max-w-[80px]">{step.label}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex-1 h-[2px] bg-purple-200 border-dashed border-t border-purple-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "How do I book a mentor?",
              "How do online sessions work?",
              "How much does mentorship cost?",
              "Can I become a mentor?",
              "Can I reschedule sessions?"
            ].map((faq, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-purple-300 bg-white shadow-sm cursor-pointer transition-all">
                <span className="text-sm font-medium text-slate-800">{faq}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        </section>

        {/* 8. READY TO FIND YOUR MENTOR BANNER */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to Find Your Mentor?</h2>
              <p className="text-purple-200 text-sm leading-relaxed">
                Join thousands of learners who are growing with GetAdvanceGuide.
              </p>
              <button className="bg-white text-purple-900 hover:bg-purple-50 font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2">
                Find a Mentor <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="z-10 flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center text-2xl">👩‍🎓</div>
              <div className="w-20 h-20 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center text-3xl">👨‍💻</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}