"use client";

import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  Clock,
  CreditCard,
  FileText,
  ShieldCheck,
  UserPlus,
  MessageSquare,
  Award,
  Star,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
//   Mail,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
  Sparkles,
  Quote,
} from "lucide-react";

export default function MentorLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-800 font-sans">
      {/* ---------------- NAVBAR ---------------- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
              AG
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              GetAdvance<span className="text-indigo-600">Guide</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Mentors
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              How It Works
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Resources
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
              Login
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Become a Mentor</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Share Your Knowledge. <br />
                <span className="text-indigo-600">Inspire</span> the Next
                Generation.
              </h1>

              <p className="text-lg text-slate-600 max-w-xl">
                Join our community of expert mentors and help learners achieve
                their goals, grow their skills and unlock their true potential.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center gap-2">
                  <span>Apply as a Mentor</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-7 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl transition-all">
                  How It Works
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Mentor"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Mentor"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                    alt="Mentor"
                  />
                </div>
                <div className="text-sm text-slate-600">
                  Trusted by <span className="font-bold text-slate-900">10,000+</span> mentors worldwide
                </div>
              </div>
            </div>

            {/* Right Column (Hero Graphic) */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer Glow & Background Accent */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 via-purple-100 to-indigo-100 rounded-full blur-3xl opacity-70"></div>

                <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Hero Mentor"
                    className="rounded-2xl object-cover w-full h-[420px]"
                  />

                  {/* Floating Badges */}
                  <div className="absolute -top-4 -left-6 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Make an Impact</p>
                    </div>
                  </div>

                  <div className="absolute top-12 -right-6 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Grow Your Network</p>
                    </div>
                  </div>

                  <div className="absolute bottom-16 -left-8 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Flexible Schedule</p>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Earn & Inspire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHY BECOME A MENTOR ---------------- */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Why Become a <span className="text-indigo-600">Mentor?</span>
            </h2>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6 text-indigo-600" />,
                title: "Make a Real Impact",
                desc: "Help learners overcome challenges and achieve their career goals.",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
                title: "Grow Your Brand",
                desc: "Build your personal brand and establish yourself as an expert.",
              },
              {
                icon: <Clock className="w-6 h-6 text-indigo-600" />,
                title: "Work on Your Terms",
                desc: "Set your own schedule and mentor at your convenience.",
              },
              {
                icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
                title: "Earn and Inspire",
                desc: "Get rewarded for sharing your knowledge and experience.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFC] p-8 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- HOW MENTORSHIP WORKS ---------------- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              How Mentorship <span className="text-indigo-600">Works</span>
            </h2>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-indigo-200 -translate-y-12 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: "1",
                  icon: <FileText className="w-5 h-5 text-indigo-600" />,
                  title: "Apply",
                  desc: "Fill out the application form and tell us about your expertise.",
                },
                {
                  step: "2",
                  icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
                  title: "Verify",
                  desc: "Our team reviews your application and verifies your profile.",
                },
                {
                  step: "3",
                  icon: <UserPlus className="w-5 h-5 text-indigo-600" />,
                  title: "Create Profile",
                  desc: "Build your mentor profile and highlight your skills and experience.",
                },
                {
                  step: "4",
                  icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
                  title: "Start Mentoring",
                  desc: "Connect with learners, share knowledge and make an impact.",
                },
                {
                  step: "5",
                  icon: <Award className="w-5 h-5 text-indigo-600" />,
                  title: "Grow Together",
                  desc: "Receive feedback, grow your network and inspire the next generation.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white border border-indigo-100 rounded-2xl flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-indigo-600 text-white rounded-full text-xs font-bold flex items-center justify-center border-2 border-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHO CAN BECOME A MENTOR ---------------- */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-indigo-50 rounded-3xl p-4">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                  alt="Mentor Candidate"
                  className="rounded-2xl object-cover w-full h-[380px]"
                />
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur px-4 py-3 rounded-2xl shadow-lg border border-slate-100 text-center">
                  <p className="text-xs font-medium text-slate-500">Join</p>
                  <p className="text-base font-extrabold text-indigo-600">10,000+</p>
                  <p className="text-xs font-semibold text-slate-800">Expert Mentors</p>
                  <div className="flex justify-center -space-x-2 mt-2">
                    <img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" alt="" />
                    <img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" alt="" />
                    <img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&q=80" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Content Side */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">
                Who Can Become a <span className="text-indigo-600">Mentor?</span>
              </h2>
              <p className="text-sm text-slate-600">
                We welcome professionals, industry experts and enthusiasts from
                all walks of life.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Industry Professionals",
                  "Entrepreneurs",
                  "Subject Matter Experts",
                  "Students & Recent Graduates",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 fill-indigo-100" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quote Card */}
            <div className="lg:col-span-3">
              <div className="bg-indigo-50/60 border border-indigo-100 rounded-3xl p-8 relative">
                <Quote className="w-8 h-8 text-indigo-600 fill-indigo-600 mb-4 opacity-80" />
                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-6">
                  Mentoring is not just about teaching, it is about learning,
                  growing and making a lasting impact.
                </p>
                <p className="text-xs font-bold text-indigo-600">
                  – GetAdvanceGuide Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHAT OUR MENTORS SAY ---------------- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              What Our <span className="text-indigo-600">Mentors Say</span>
            </h2>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
            {[
              {
                name: "Vikram Singh",
                role: "Software Engineer at Google",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                text: "“Mentoring on GetAdvanceGuide has been an incredibly rewarding experience. I love helping learners grow and achieve their dreams.”",
              },
              {
                name: "Neha Kapoor",
                role: "Product Manager at Microsoft",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
                text: "“A great platform with amazing learners. The flexibility and support from the team make it a wonderful experience.”",
              },
              {
                name: "Rahul Mehta",
                role: "Data Scientist at Amazon",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
                text: "“I enjoy sharing my knowledge and seeing my mentees succeed. It's truly inspiring to be a part of this community.”",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
            ))}

            {/* Slider Arrow */}
            <button className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-12 w-10 h-10 bg-white border border-slate-200 rounded-full items-center justify-center shadow-md hover:bg-slate-50">
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ & BANNER SECTION ---------------- */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* FAQ Left Side */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Frequently Asked <span className="text-indigo-600">Questions</span>
              </h2>

              <div className="space-y-3">
                {[
                  {
                    q: "How do I become a mentor?",
                    a: "Simply click on the 'Apply as a Mentor' button, fill out the required details about your experience, and submit your application for review.",
                  },
                  {
                    q: "Is there any fee to join as a mentor?",
                    a: "No, joining GetAdvanceGuide as a mentor is completely free of charge.",
                  },
                  {
                    q: "How will I be verified?",
                    a: "Our team verifies your background using your LinkedIn profile, work experience, and optional quick introductory call.",
                  },
                  {
                    q: "Can I mentor in multiple categories?",
                    a: "Yes! You can select multiple domains and topics based on your expertise.",
                  },
                  {
                    q: "How do I get paid?",
                    a: "Payouts are transferred directly to your preferred bank account or payment method on a bi-weekly schedule.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-100 rounded-xl overflow-hidden bg-[#FAFAFC]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 py-4 flex justify-between items-center text-sm font-semibold text-slate-800"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Banner Right Side */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[380px]">
                <div className="relative z-10 max-w-sm space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                    Ready to Make an Impact?
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                    Join thousands of mentors who are empowering learners and
                    shaping the future together.
                  </p>
                  <div className="pt-2">
                    <button className="px-6 py-3 bg-white text-indigo-600 font-bold text-xs sm:text-sm rounded-xl shadow-md hover:bg-indigo-50 transition-all flex items-center gap-2">
                      <span>Apply as a Mentor</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bottom Banner Image / Elements */}
                <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden sm:block">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                    alt="Mentors working"
                    className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12">
            {/* Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 flex items-center justify-center text-white font-bold text-sm">
                  AG
                </div>
                <span className="font-bold text-lg tracking-tight text-slate-900">
                  GetAdvance<span className="text-indigo-600">Guide</span>
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed max-w-xs">
                Empowering learners through mentorship, resources and guidance
                to achieve their goals and unlock their potential.
              </p>
              <div className="flex items-center space-x-3 pt-2">
                {/* <a href="#" className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </a> */}
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Blogs</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Career Advice</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Interview Tips</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Resume Tips</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Industry Insights</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Technical Blogs</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Guides</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Resume Guide</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Interview Guide</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Career Guide</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn Guide</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Salary Guide</a></li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">FAQ</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">General Questions</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Booking & Sessions</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Payments</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Account Help</a></li>
              </ul>
            </div>

            {/* Links Column 4 (Help Center & Newsletter) */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Stay Updated</h4>
              <p className="text-slate-500">
                Subscribe to get the latest resources and career tips.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600 text-xs"
                />
                <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all text-xs">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-400 gap-4">
            <p>© 2024 GetAdvanceGuide. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}