import React from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  ArrowRight, 
  User, 
  Search, 
  Calendar, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  FileText, 
  Video, 
  MessageSquare, 
  Flag 
} from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-purple-600 selection:text-white">
      
      {/* 1. NAVBAR */}
      {/* <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
              <span>AG</span>
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
              GetAdvanceGuide
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Mentors</a>
            <a href="#" className="text-purple-600 font-semibold relative after:absolute after:bottom-[-22px] after:left-0 after:w-full after:h-[2px] after:bg-purple-600">How It Works</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Resources</a>
            <a href="#" className="hover:text-purple-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 px-4 py-2">
              Login
            </button>
            <button className="text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-purple-600/20 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </header> */}

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100/80 text-purple-700 text-xs font-semibold mb-6">
            <User className="w-3.5 h-3.5" /> How It Works
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Start Your Mentorship Journey in Just <span className="text-purple-600">4 Simple Steps.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Whether you are looking for career guidance, interview preparation, or industry insights, finding the right mentor has never been easier.
              </p>
              <div>
                <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-purple-600/25 transition-all group">
                  Find a Mentor 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Hero Illustration Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-3xl p-6 shadow-xl border border-purple-200/50 flex flex-col items-center justify-center min-h-[300px]">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-medium text-slate-700">
                  ✨ I am here to help you grow.
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-medium text-slate-700">
                  Let achieve your goals!
                </div>
                {/* Simplified visual representation of mentors collaborating */}
                <div className="flex items-center gap-4 my-8">
                  <div className="w-20 h-20 rounded-full bg-purple-300 border-4 border-white shadow-md flex items-center justify-center font-bold text-purple-800 text-xl">
                    👩‍💻
                  </div>
                  <div className="w-24 h-24 rounded-full bg-indigo-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-2xl font-bold">
                    👨‍💻
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JOURNEY OVERVIEW STEP CARDS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Your Mentorship <span className="text-purple-600">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Create Account", desc: "Sign up and complete your profile to help mentors understand your goals.", icon: User },
            { step: "02", title: "Find Mentor", desc: "Browse experienced mentors based on skills and industry.", icon: Search },
            { step: "03", title: "Book Session", desc: "Choose available slots and confirm your booking.", icon: Calendar },
            { step: "04", title: "Start Learning", desc: "Attend live sessions, ask questions and grow.", icon: Rocket },
          ].map((item, idx) => (
            <div key={idx} className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100 hover:border-purple-200 transition-all group">
              <div className="absolute -top-4 left-6 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                {item.step}
              </div>
              <div className="mt-4 mb-4 text-purple-600 bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DETAILED STEP-BY-STEP SECTIONS */}
      <section className="py-16 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step 01 Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50/50 p-8 sm:p-12 rounded-3xl border border-slate-100">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm text-slate-800">My Profile</span>
              </div>
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">90% Complete</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600 font-medium">Career Goals</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600 font-medium">Skills</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600 font-medium">Education</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">01</span>
            <h3 className="text-3xl font-extrabold text-slate-900">Create Your Profile</h3>
            <p className="text-slate-600 leading-relaxed">Tell us about your goals, skills and interests.</p>
            <ul className="space-y-2 pt-2">
              {['Career Goals', 'Skills', 'Education', 'Experience'].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 02 Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50/50 p-8 sm:p-12 rounded-3xl border border-slate-100">
          <div className="space-y-4 order-2 lg:order-1">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">02</span>
            <h3 className="text-3xl font-extrabold text-slate-900">Choose the Right Mentor</h3>
            <p className="text-slate-600 leading-relaxed">Filter mentors using domain, experience, rating and availability.</p>
            <div className="space-y-2 pt-2">
              {['Domain', 'Experience', 'Rating', 'Availability'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" /> {text}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 order-1 lg:order-2 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-slate-800">Top Mentors for You</span>
              <span className="text-xs text-purple-600 font-semibold cursor-pointer">View all</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Rahul Mehta", role: "Software Engineer @ Google", rating: "4.8 (120)", exp: "5+ years" },
                { name: "Neha Kapoor", role: "Product Manager @ Microsoft", rating: "4.9 (98)", exp: "6+ years" },
                { name: "Vikram Singh", role: "Data Scientist @ Amazon", rating: "4.7 (86)", exp: "4+ years" },
              ].map((mentor, i) => (
                <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center space-y-2">
                  <div className="w-12 h-12 bg-purple-200 rounded-full mx-auto flex items-center justify-center font-bold text-purple-700 text-xs">👤</div>
                  <h4 className="font-bold text-xs text-slate-900 truncate">{mentor.name}</h4>
                  <p className="text-[10px] text-slate-500 truncate">{mentor.role}</p>
                  <div className="flex items-center justify-center gap-1 text-[10px] text-amber-500 font-semibold">
                    <Star className="w-3 h-3 fill-amber-500" /> {mentor.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 03 Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50/50 p-8 sm:p-12 rounded-3xl border border-slate-100">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 space-y-4">
            <span className="font-bold text-sm text-slate-800 block">Select Date & Time</span>
            <div className="bg-purple-50 p-4 rounded-xl text-center text-xs font-semibold text-purple-700">
              May 2024 Calendar Mockup Component
            </div>
            <div className="space-y-2">
              {['10.00 AM', '01.00 PM', '04.00 PM', '07.00 PM'].map((slot, i) => (
                <div key={i} className={`p-2.5 rounded-lg text-xs font-semibold text-center ${slot === '01.00 PM' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-100 text-slate-600'}`}>
                  {slot}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">03</span>
            <h3 className="text-3xl font-extrabold text-slate-900">Book Session</h3>
            <p className="text-slate-600 leading-relaxed">Choose your preferred date, time and session type.</p>
            <ul className="space-y-2 pt-2">
              {['Online', 'One-to-One', 'Flexible Timing'].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 04 Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50/50 p-8 sm:p-12 rounded-3xl border border-slate-100">
          <div className="space-y-4 order-2 lg:order-1">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">04</span>
            <h3 className="text-3xl font-extrabold text-slate-900">Learn & Grow</h3>
            <p className="text-slate-600 leading-relaxed">Join meetings, receive guidance, track your progress and achieve your goals.</p>
            <ul className="space-y-2 pt-2">
              {['Live Sessions', 'Personalized Guidance', 'Track Progress'].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" /> {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 order-1 lg:order-2 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-slate-800">Your Progress</span>
              <span className="text-xs font-bold text-purple-600">75% Overall</span>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-slate-500 font-medium">Skills Gained</div>
              {['Communication 90%', 'Leadership 75%', 'Problem Solving 80%', 'Confidence 70%'].map((skill, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                    <span>{skill.split(' ')[0]}</span>
                    <span>{skill.split(' ')[1]}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-600 h-full rounded-full" style={{ width: skill.split(' ')[1] }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

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
  );
}