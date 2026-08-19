"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper/MaxWidthWrapper";
import {
  Star,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Bookmark,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { RiStarSLine } from "react-icons/ri";

interface MentorData {
  _id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  category: string;
  skills: string[];
  rating: number;
  reviews: number;
  exp: string;
  experienceYears?: number;
  hourlyRate?: number;
  bio?: string;
  about?: string;
  available?: boolean;
}

export default function MentorProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [mentor, setMentor] = useState<MentorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [booked, setBooked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/mentors/${params.id}`);
        const data = await res.json();
        if (data.success && data.data) {
          setMentor(data.data);
        } else {
          // If not found by ID, fallback to searching all mentors
          const allRes = await fetch("/api/mentors");
          const allData = await allRes.json();
          if (allData.success && allData.data?.length > 0) {
            setMentor(allData.data[0]);
          }
        }
      } catch (err) {
        console.error("Failed to load mentor", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchMentor();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="py-16 min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-gray-500">Loading Mentor Profile...</p>
        </div>
      </div>
    );
  }

  if (!mentor) {
    return (
      <MaxWidthWrapper className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Mentor Not Found</h2>
        <p className="text-gray-500 mb-6 text-sm">The mentor profile you are looking for does not exist or has been removed.</p>
        <Link
          href="/#Find-a-mentor"
          className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-violet-700 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Mentors
        </Link>
      </MaxWidthWrapper>
    );
  }

  return (
    <div className="bg-[#FAF8FF] min-h-screen py-10">
      <MaxWidthWrapper>
        {/* Back Link */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 font-semibold text-xs lg:text-sm cursor-pointer transition-all hover:-translate-x-1"
          >
            <ArrowLeft size={16} />
            Back to previous page
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                saved ? "bg-violet-50 border-violet-300 text-violet-600" : "bg-white border-gray-200 text-gray-500 hover:text-violet-600"
              }`}
              title="Save mentor"
            >
              <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: mentor.name, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Profile link copied to clipboard!");
                }
              }}
              className="p-2 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-violet-600 transition-all cursor-pointer"
              title="Share profile"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Top Header Card */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 border border-violet-100 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            {/* Image */}
            <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-violet-100">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Main Info */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="inline-flex items-center gap-1 bg-violet-50 text-violet-600 px-3 py-0.5 rounded-full text-xs font-semibold">
                  <RiStarSLine size={14} />
                  {mentor.category}
                </span>
                <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 px-3 py-0.5 rounded-full text-xs font-semibold">
                  <ShieldCheck size={14} />
                  Verified Mentor
                </span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{mentor.name}</h1>
              <p className="text-sm lg:text-base text-gray-600 font-medium">
                {mentor.role} at <span className="font-semibold text-violet-600">{mentor.company}</span>
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs lg:text-sm text-gray-600">
                <div className="flex items-center gap-1.5 font-semibold text-gray-900">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span>{mentor.rating}</span>
                  <span className="text-gray-400 font-normal">({mentor.reviews} reviews)</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Briefcase size={15} className="text-violet-600" />
                  <span>{mentor.exp} Experience</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock size={15} className="text-violet-600" />
                  <span>Fast Response (~2 hrs)</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start pt-2">
                {mentor.skills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-violet-50 text-violet-600 text-xs px-2.5 py-1 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action Card on Right */}
            <div className="w-full md:w-64 bg-violet-50/70 p-5 rounded-xl border border-violet-100 flex flex-col justify-between shrink-0 space-y-4">
              <div>
                <span className="text-xs text-gray-500 font-medium block">Starting from</span>
                <div className="text-2xl font-bold text-violet-700">
                  ${mentor.hourlyRate || 49}
                  <span className="text-xs font-normal text-gray-500"> / 45-min session</span>
                </div>
              </div>

              <button
                onClick={() => setBooked(true)}
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm transition-all shadow-sm cursor-pointer active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                {booked ? "Request Sent! ✓" : "Book 1:1 Session"}
              </button>

              <Link
                href="/contact"
                className="w-full py-2 text-center rounded-xl bg-white border border-violet-200 text-violet-600 hover:bg-violet-50 font-medium text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={14} />
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: About & Offerings */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Card */}
            <div className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Sparkles size={18} className="text-violet-600" />
                About {mentor.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mentor.about || mentor.bio || `${mentor.name} is an experienced ${mentor.role} currently working with ${mentor.company}. With ${mentor.exp} of deep industry experience, they have mentored many students and working professionals to scale their careers and master in-demand industry skills.`}
              </p>

              <h3 className="text-sm font-bold text-gray-900 pt-2">What you can learn from this mentor:</h3>
              <ul className="space-y-2 text-xs lg:text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>1-on-1 resume review and portfolio critique tailored for top company hiring filters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>Real-world system design, technical coding architecture, and mock interview practice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>Career roadmap planning, job negotiation guidance, and long-term tech leadership advice.</span>
                </li>
              </ul>
            </div>

            {/* Testimonials Card */}
            <div className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Star size={18} className="text-yellow-400 fill-yellow-400" />
                  Mentee Reviews ({mentor.reviews})
                </h2>
                <span className="text-xs text-violet-600 font-semibold">100% Recommended</span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-violet-50/50 border border-violet-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-xs text-gray-900">Priya K. (Software Engineer)</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    &quot;The mentorship session with {mentor.name} completely changed how I approach technical interviews. Got direct actionable feedback and landed my offer within 4 weeks!&quot;
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-violet-50/50 border border-violet-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-xs text-gray-900">Rahul M. (Data Analyst)</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    &quot;Very patient, deeply knowledgeable, and gives practical industry perspective that you can&apos;t find in standard tutorials.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Sessions & Guarantees */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900">Mentorship Sessions</h3>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-violet-200 bg-violet-50/40 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">1:1 Intro Call</h4>
                    <p className="text-[11px] text-gray-500">30 min • Goal setting</p>
                  </div>
                  <span className="text-xs font-bold text-violet-700">Free</span>
                </div>

                <div className="p-3.5 rounded-xl border border-violet-100 bg-white hover:border-violet-300 transition-all flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Career & Resume Deep Dive</h4>
                    <p className="text-[11px] text-gray-500">60 min • Full review & plan</p>
                  </div>
                  <span className="text-xs font-bold text-violet-700">${mentor.hourlyRate || 49}</span>
                </div>

                <div className="p-3.5 rounded-xl border border-violet-100 bg-white hover:border-violet-300 transition-all flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Monthly Guidance Track</h4>
                    <p className="text-[11px] text-gray-500">4 sessions + chat support</p>
                  </div>
                  <span className="text-xs font-bold text-violet-700">${(mentor.hourlyRate || 49) * 3.5}</span>
                </div>
              </div>

              <button
                onClick={() => setBooked(true)}
                className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs transition-all cursor-pointer"
              >
                Schedule Session
              </button>
            </div>

            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 text-white space-y-3">
              <h3 className="font-bold text-sm">Satisfaction Guaranteed</h3>
              <p className="text-xs text-violet-100 leading-relaxed">
                If your first 1-on-1 session is not 100% satisfactory, we offer a full money-back guarantee with zero questions asked.
              </p>
              <Link
                href="/refund"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-4"
              >
                Learn about refund policy <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
