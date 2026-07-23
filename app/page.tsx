import Image from "next/image";

import Header from "@/components/MaxWidthWrapper/common/Header/page";

import {
  ArrowRight,
  ChevronRight,
  Search,
  Star,
  UserPlus,
  SearchCheck,
  Send,
  CircleCheckBig,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const mentors = [
  {
    name: "Arjun Sharma",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    skills: ["React", "Node.js", "MongoDB"],
    exp: "5+ years",
    rating: "4.9",
  },
  {
    name: "Priya Verma",
    role: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    skills: ["Python", "ML", "AI"],
    exp: "4+ years",
    rating: "4.8",
  },
  {
    name: "Rahul Mehta",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    skills: ["UI/UX", "Figma", "Adobe XD"],
    exp: "6+ years",
    rating: "4.9",
  },
  {
    name: "Neha Kapoor",
    role: "Career Coach",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    skills: ["Resume", "Interview", "Growth"],
    exp: "7+ years",
    rating: "4.8",
  },
];

const categories = [
  "Web Development",
  "Data Science",
  "Design",
  "Marketing",
  "Business",
  "Career Guidance",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f8fc] text-[#111827] overflow-hidden">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            ✨ Mentorship That Shapes Your Future
          </div>

          <h1 className="text-6xl leading-tight font-extrabold mb-6">
            Find Mentor.
            <br />
            Get Guidance.
            <br />
            <span className="text-violet-600">Achieve More.</span>
          </h1>

          <p className="text-gray-500 text-lg leading-8 max-w-xl mb-10">
            Connect with experienced mentors, gain valuable insights,
            and accelerate your growth in your career and life.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-12">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all shadow-lg shadow-violet-200">
              Find a Mentor
              <ArrowRight size={18} />
            </button>

            <button className="border border-violet-300 px-8 py-4 rounded-2xl font-semibold text-violet-700 flex items-center gap-3 hover:bg-violet-50 transition-all">
              How It Works
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <Image
                  key={item}
                  src={`https://i.pravatar.cc/100?img=${item + 10}`}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full border-4 border-white"
                />
              ))}
            </div>

            <p className="text-gray-700 font-medium text-lg">
              Trusted by <span className="font-bold">10,000+</span>
              <br />
              students & professionals
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <div className="absolute w-[600px] h-[600px] bg-violet-200 rounded-full blur-3xl opacity-50" />

          <div className="relative z-10 flex items-end gap-6">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="mentor"
              width={280}
              height={500}
              className="rounded-[40px] object-cover h-[450px]"
            />

            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              alt="mentor"
              width={320}
              height={600}
              className="rounded-[40px] object-cover h-[520px]"
            />
          </div>

          <div className="absolute top-10 left-8 bg-white rounded-2xl p-5 shadow-2xl z-20">
            <p className="text-gray-500 text-sm">Expert Mentors</p>
            <h3 className="font-bold text-3xl">1000+</h3>
          </div>

          <div className="absolute top-40 right-0 bg-white rounded-2xl p-5 shadow-2xl z-20">
            <p className="text-gray-500 text-sm">Success Rate</p>
            <h3 className="font-bold text-3xl">95%</h3>
          </div>

          <div className="absolute bottom-10 right-10 bg-white rounded-2xl p-5 shadow-2xl z-20">
            <p className="text-gray-500 text-sm">Active Sessions</p>
            <h3 className="font-bold text-3xl">5000+</h3>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-violet-700 to-violet-300 rounded-[32px] p-10 shadow-2xl">
          <h2 className="text-white text-4xl font-bold mb-8">
            Find the right mentor for you
          </h2>

          <div className="grid lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl flex items-center px-5">
              <Search className="text-gray-400" size={18} />
              <input
                placeholder="Search by skills or expertise..."
                className="w-full px-4 py-5 outline-none rounded-2xl"
              />
            </div>

            <select className="bg-white rounded-2xl px-5 py-5 outline-none text-gray-500">
              <option>Select Category</option>
            </select>

            <select className="bg-white rounded-2xl px-5 py-5 outline-none text-gray-500">
              <option>Experience Level</option>
            </select>

            <button className="bg-violet-700 hover:bg-violet-800 transition-all rounded-2xl text-white font-semibold text-lg">
              Search Mentors
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <span className="bg-violet-100 text-violet-600 px-5 py-2 rounded-full font-semibold text-sm">
            SIMPLE PROCESS
          </span>

          <h2 className="text-5xl font-bold mt-6">
            How <span className="text-violet-600">GetAdvanceGuide</span> Works
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            {
              title: "Create Account",
              desc: "Sign up and create your profile in minutes.",
              icon: <UserPlus size={34} />,
            },
            {
              title: "Find a Mentor",
              desc: "Search and connect with mentors that match your goals.",
              icon: <SearchCheck size={34} />,
            },
            {
              title: "Send Request",
              desc: "Send a mentorship request and start a conversation.",
              icon: <Send size={34} />,
            },
            {
              title: "Grow Together",
              desc: "Learn, get guidance, and achieve your goals.",
              icon: <CircleCheckBig size={34} />,
            },
          ].map((item, index) => (
            <div key={index}>
              <div className="w-28 h-28 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>

              <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES + MENTORS */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-[320px_1fr] gap-12">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Top Categories</h2>

          <div className="space-y-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-5 py-5 rounded-2xl border cursor-pointer transition-all ${index === 0
                  ? "bg-violet-100 border-violet-300 text-violet-700"
                  : "bg-white"
                  }`}
              >
                <span className="font-medium">{category}</span>
                <ChevronRight size={18} />
              </div>
            ))}
          </div>

          <button className="mt-8 text-violet-600 font-semibold flex items-center gap-2">
            View All Categories
            <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Popular Mentors</h2>

            <button className="text-violet-600 font-semibold">
              View All Mentors
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] overflow-hidden border border-[#ececf3] hover:shadow-2xl transition-all"
              >
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={500}
                  height={500}
                  className="w-full h-[250px] object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">{mentor.name}</h3>
                  <p className="text-gray-500 mt-1 mb-4">{mentor.role}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {mentor.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-violet-100 text-violet-700 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
                    <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                      <Star size={14} fill="currentColor" />
                      {mentor.rating}
                    </span>

                    <span>{mentor.exp}</span>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-violet-100 text-violet-700 font-semibold hover:bg-violet-600 hover:text-white transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-violet-700 to-violet-400 rounded-[32px] p-12 text-white grid lg:grid-cols-5 gap-10 items-center">
          {[
            ["10,000+", "Active Users"],
            ["1,000+", "Expert Mentors"],
            ["5,000+", "Sessions Completed"],
            ["95%", "Success Rate"],
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-extrabold mb-3">{item[0]}</h3>
              <p className="text-violet-100">{item[1]}</p>
            </div>
          ))}

          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Ready to accelerate your growth?
            </h3>

            <button className="bg-white text-violet-700 px-8 py-4 rounded-2xl font-bold hover:bg-violet-100 transition-all">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#ececf3]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-5">
              GetAdvance<span className="text-violet-600">Guide</span>
            </h2>

            <p className="text-gray-500 leading-8">
              Empowering students and professionals by connecting them
              with the right mentors for guidance, growth, and success.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-500">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Mentors</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Resources</h3>

            <ul className="space-y-3 text-gray-500">
              <li>Blog</li>
              <li>Guides</li>
              <li>FAQs</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Legal</h3>

            <ul className="space-y-3 text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Follow Us</h3>

            <div className="flex items-center gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center cursor-pointer hover:bg-violet-600 hover:text-white transition-all"
                  >
                    <Icon size={20} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-[#ececf3] py-6 text-center text-gray-500">
          © 2024 GetAdvanceGuide. All rights reserved.
        </div>
      </footer>
    </main>
  );
}