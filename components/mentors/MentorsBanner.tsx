import {
    Search,
    ChevronDown,
    Users,
    GraduationCap,
    Star,
} from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";

const MentorsBanner = () => {
    return (
        <div>
            <MaxWidthWrapper>
                <div className="pt-14 pb-10 grid lg:grid-cols-2 gap-10 items-center">
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
                            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785349541/MentorBannerImage_y9qqs2.webp"
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
                <div className="pb-10">
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
            </MaxWidthWrapper>
        </div>
    )
}

export default MentorsBanner;