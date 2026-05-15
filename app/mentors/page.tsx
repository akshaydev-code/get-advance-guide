import Image from "next/image";
import {
  Search,
  ChevronDown,
  Code2,
  BarChart3,
  PenTool,
  Megaphone,
  Briefcase,
  UserRound,
  MoreHorizontal,
  Star,
  ShieldCheck,
  MessageCircleMore,
  CalendarDays,
  Lock,
  Bookmark,
  ArrowRight,
  Users,
  GraduationCap,
} from "lucide-react";

const mentors = [
  {
    name: "Rahul Mehta",
    role: "Senior Software Engineer",
    company: "Google",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "128",
    exp: "6+ years",
    skills: ["Python", "AI/ML", "System Design"],
  },
  {
    name: "Priya Verma",
    role: "Product Manager",
    company: "Microsoft",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    rating: "4.8",
    reviews: "96",
    exp: "7+ years",
    skills: ["Product Strategy", "Agile", "Roadmap"],
  },
  {
    name: "Amit Sharma",
    role: "UI/UX Designer",
    company: "Adobe",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "110",
    exp: "5+ years",
    skills: ["UI Design", "Figma", "User Research"],
  },
  {
    name: "Neha Kapoor",
    role: "Data Scientist",
    company: "IBM",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    rating: "4.8",
    reviews: "89",
    exp: "6+ years",
    skills: ["Python", "Machine Learning", "SQL"],
  },
  {
    name: "Vikram Singh",
    role: "Marketing Strategist",
    company: "HubSpot",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    rating: "4.7",
    reviews: "75",
    exp: "8+ years",
    skills: ["Digital Marketing", "SEO", "Growth"],
  },
];

export default function MentorsPage() {
  return (
    <main className="min-h-screen bg-[#f8f8fc] text-[#111827] overflow-hidden">
      {/* NAVBAR */}
      <nav className="w-full bg-white border-b border-[#ececf3]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-blue-600 flex items-center justify-center text-white font-bold">
              AG
            </div>

            <h1 className="text-2xl font-bold">
              GetAdvance<span className="text-violet-600">Guide</span>
            </h1>
          </div>

          <ul className="hidden lg:flex items-center gap-10 font-medium">
            <li>Home</li>

            <li className="text-violet-600 border-b-2 border-violet-600 pb-2">
              Mentors
            </li>

            <li>How It Works</li>

            <li className="flex items-center gap-1">
              Resources
              <ChevronDown size={16} />
            </li>

            <li>About Us</li>
            <li>Contact</li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="border border-violet-300 text-violet-700 px-7 py-3 rounded-xl font-semibold">
              Log In
            </button>

            <button className="bg-violet-600 hover:bg-violet-700 transition-all text-white px-7 py-3 rounded-xl font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#f5f3ff]">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-5 py-2 rounded-full text-sm font-semibold mb-8">
              ✨ Learn from Experts. Grow with Guidance.
            </div>

            <h1 className="text-7xl font-extrabold leading-tight mb-8">
              Find the Right Mentor.
              <br />
              <span className="text-violet-600">
                Achieve Your Goals.
              </span>
            </h1>

            <p className="text-gray-500 text-2xl leading-10 max-w-xl">
              Explore our expert mentors from various industries.
              Connect, learn, and grow with the right guidance.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="absolute w-[550px] h-[550px] bg-violet-200 rounded-full blur-3xl opacity-40" />

            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
              alt="hero"
              width={700}
              height={550}
              className="relative z-10 rounded-[40px] object-cover"
            />

            {/* floating cards */}
            <div className="absolute top-12 left-0 bg-white rounded-3xl p-6 shadow-xl flex items-center gap-4 z-20">
              <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                <Users size={28} />
              </div>

              <div>
                <h3 className="text-3xl font-bold">10,000+</h3>
                <p className="text-gray-500">Expert Mentors</p>
              </div>
            </div>

            <div className="absolute top-10 right-0 bg-white rounded-3xl p-6 shadow-xl flex items-center gap-4 z-20">
              <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                <Star size={28} />
              </div>

              <div>
                <h3 className="text-3xl font-bold">50,000+</h3>
                <p className="text-gray-500">Sessions Completed</p>
              </div>
            </div>

            <div className="absolute bottom-12 right-0 bg-white rounded-3xl p-6 shadow-xl flex items-center gap-4 z-20">
              <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                <GraduationCap size={28} />
              </div>

              <div>
                <h3 className="text-3xl font-bold">25,000+</h3>
                <p className="text-gray-500">Students Guided</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <div className="bg-white rounded-[28px] border border-[#ececf3] p-5 shadow-sm grid lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_0.6fr] gap-4">
            <div className="flex items-center gap-3 border border-[#ececf3] rounded-2xl px-5">
              <Search size={20} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search mentors by skills, name or expertise..."
                className="w-full py-4 outline-none"
              />
            </div>

            {["All Categories", "Experience Level", "Availability"].map(
              (item, index) => (
                <div
                  key={index}
                  className="border border-[#ececf3] rounded-2xl px-5 py-4 flex items-center justify-between"
                >
                  <span>{item}</span>

                  <ChevronDown size={18} className="text-gray-400" />
                </div>
              )
            )}

            <button className="bg-violet-600 hover:bg-violet-700 transition-all text-white rounded-2xl font-semibold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-5">
          {[
            {
              icon: <Code2 size={18} />,
              text: "All Categories",
            },
            {
              icon: <Code2 size={18} />,
              text: "Web Development",
            },
            {
              icon: <BarChart3 size={18} />,
              text: "Data Science",
            },
            {
              icon: <PenTool size={18} />,
              text: "Design",
            },
            {
              icon: <Megaphone size={18} />,
              text: "Marketing",
            },
            {
              icon: <Briefcase size={18} />,
              text: "Business",
            },
            {
              icon: <UserRound size={18} />,
              text: "Career Coaching",
            },
            {
              icon: <MoreHorizontal size={18} />,
              text: "More",
            },
          ].map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-3 px-7 py-4 rounded-2xl border font-medium ${
                index === 0
                  ? "bg-violet-50 border-violet-300 text-violet-700"
                  : "bg-white border-[#ececf3]"
              }`}
            >
              {item.icon}
              {item.text}
            </button>
          ))}
        </div>
      </section>

      {/* TOP MENTORS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-12">
          <div className="text-center w-full">
            <h2 className="text-5xl font-bold mb-4">
              Top Mentors
            </h2>

            <p className="text-gray-500 text-lg">
              Connect with verified mentors who can help you grow and succeed.
            </p>
          </div>

          <button className="hidden lg:flex border border-violet-300 text-violet-700 px-6 py-3 rounded-xl font-semibold items-center gap-2">
            View All Mentors
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white border border-[#ececf3] rounded-[28px] p-5 shadow-sm hover:shadow-xl transition-all"
            >
              {/* top */}
              <div className="flex items-start justify-between mb-5">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={70}
                  height={70}
                  className="rounded-full w-18 h-18 object-cover"
                />

                <div className="flex flex-col items-end gap-4">
                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold">
                    ● Available
                  </span>

                  <Bookmark
                    size={20}
                    className="text-violet-600"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1">
                {mentor.name}
              </h3>

              <p className="text-gray-500">{mentor.role}</p>

              <p className="text-gray-400 mb-5">
                {mentor.company}
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-500 mb-5">
                <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                  <Star size={14} fill="currentColor" />
                  {mentor.rating}
                </span>

                <span>({mentor.reviews} reviews)</span>

                <span>|</span>

                <span>{mentor.exp}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-violet-100 text-violet-700 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="border border-violet-300 text-violet-700 py-3 rounded-xl font-semibold">
                  View Profile
                </button>

                <button className="bg-violet-600 hover:bg-violet-700 transition-all text-white py-3 rounded-xl font-semibold">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white border border-[#ececf3] rounded-[32px] grid md:grid-cols-4 overflow-hidden">
          {[
            {
              icon: <ShieldCheck size={28} />,
              title: "Verified Mentors",
              desc: "All mentors are verified and background checked.",
            },
            {
              icon: <MessageCircleMore size={28} />,
              title: "Personalized Match",
              desc: "Find mentors that match your goals and needs.",
            },
            {
              icon: <CalendarDays size={28} />,
              title: "Flexible Sessions",
              desc: "Book sessions at your convenience.",
            },
            {
              icon: <Lock size={28} />,
              title: "Secure & Reliable",
              desc: "Your data and privacy are our top priority.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-10 border-r border-[#ececf3] last:border-r-0"
            >
              <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
                {item.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-7">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}