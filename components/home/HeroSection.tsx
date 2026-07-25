import Image from "next/image";
import { ChevronRight, Search } from "lucide-react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import { RiStarSLine } from "react-icons/ri";
import { BiSolidRightArrow } from "react-icons/bi";

const HomeBannerData = {
    TestimonialPersons: [
        {
            Image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985125/HomeBannerTestimonialPerson_1_vtpgtb.webp",
        },
        {
            Image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985126/HomeBannerTestimonialPerson_2_vw8rwa.webp",
        },
        {
            Image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985126/HomeBannerTestimonialPerson_3_ps7s1s.webp",
        },
        {
            Image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1784985124/HomeBannerTestimonialPerson_4_xiafuw.webp",
        },
    ],
};

const HeroSection = () => {
    return (
        <div className="relative bg-linear-to-b from-[#FFFFFF] to-[#EEE7FD]">
            <svg
                width="160"
                height="260"
                viewBox="0 0 160 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-4"
            >
                <g fill="#C7B8FF" opacity="0.4">
                    <circle cx="140" cy="20" r="2.8" />
                    <circle cx="155" cy="20" r="2.8" />

                    <circle cx="125" cy="40" r="2.8" />
                    <circle cx="140" cy="40" r="2.8" />
                    <circle cx="155" cy="40" r="2.8" />

                    <circle cx="110" cy="60" r="2.8" />
                    <circle cx="125" cy="60" r="2.8" />
                    <circle cx="140" cy="60" r="2.8" />
                    <circle cx="155" cy="60" r="2.8" />

                    <circle cx="110" cy="80" r="2.8" />
                    <circle cx="125" cy="80" r="2.8" />
                    <circle cx="140" cy="80" r="2.8" />
                    <circle cx="155" cy="80" r="2.8" />

                    <circle cx="110" cy="100" r="2.8" />
                    <circle cx="125" cy="100" r="2.8" />
                    <circle cx="140" cy="100" r="2.8" />
                    <circle cx="155" cy="100" r="2.8" />

                    <circle cx="110" cy="120" r="2.8" />
                    <circle cx="125" cy="120" r="2.8" />
                    <circle cx="140" cy="120" r="2.8" />
                    <circle cx="155" cy="120" r="2.8" />

                    <circle cx="125" cy="140" r="2.8" />
                    <circle cx="140" cy="140" r="2.8" />
                    <circle cx="155" cy="140" r="2.8" />

                    <circle cx="140" cy="160" r="2.8" />
                    <circle cx="155" cy="160" r="2.8" />
                </g>
            </svg>

            <MaxWidthWrapper className="flex flex-col items-center justify-center pb-4">
                {/* TOP */}
                <div className="w-full flex items-center justify-between gap-20">
                    {/* LEFT */}
                    <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                        {/* Label */}
                        <div className="flex items-center justify-center gap-2 bg-violet-100 text-violet-600 px-4 py-1 rounded-full text-[12px] font-semibold">
                            <RiStarSLine size={16} />
                            Mentorship That Shapes Your Future
                        </div>

                        {/* Heading */}
                        <h1 className="text-[45px] leading-13 font-bold text-[#000000]">
                            Find Mentor.<br />
                            Get Guidance.<br />
                            <span className="text-violet-600">Achieve More.</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-[16px]">
                            Connect with experienced mentors, gain valuable insights, and accelerate your growth in your career and life.
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 mb-8 text-[14px]">
                            <button className="group relative overflow-hidden rounded-[11px] bg-violet-600 px-6 py-3 font-semibold text-white cursor-pointer">
                                {/* White Fill */}
                                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-700 ease-out group-hover:translate-x-0"></span>

                                {/* Content */}
                                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-violet-600">
                                    Find a Mentor
                                    <ChevronRight size={18} />
                                </span>
                            </button>

                            <button className="group relative overflow-hidden rounded-[11px] bg-white px-6 py-3 font-semibold text-violet-600 cursor-pointer">
                                {/* Violet Fill */}
                                <span className="absolute inset-0 -translate-x-full bg-violet-600 transition-transform duration-700 ease-out group-hover:translate-x-0 rounded-[10px]"></span>

                                {/* Content */}
                                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
                                    How It Works
                                    <BiSolidRightArrow size={14} />
                                </span>
                            </button>
                        </div>

                        {/* Testimonial */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            {/* Images */}
                            <div className="flex -space-x-3">
                                {HomeBannerData.TestimonialPersons.map((person, index) => (
                                    <Image
                                        key={index}
                                        src={person.Image}
                                        alt={`Student ${index + 1}`}
                                        width={48}
                                        height={48}
                                        className="rounded-full border-2 border-white object-cover shadow-sm"
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-[#000000]/80 font-medium text-[14px]">
                                Trusted by <span className="font-bold text-[#000000]">9+</span>
                                <br className="hidden sm:block" />
                                students & professionals
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        className="w-full lg:w-[60%] pt-16"
                        // style={{
                        //     backgroundImage:
                        //         'url("https://res.cloudinary.com/dkbelrldw/image/upload/v1784990262/HomeBannerImageBg_ks0q0y.webp")',
                        //     backgroundSize: "100% 500px",
                        //     backgroundRepeat: "no-repeat",
                        //     backgroundPosition: "center",
                        // }}
                    >
                        <Image
                            // src="https://res.cloudinary.com/dkbelrldw/image/upload/v1784986237/HomeBannerImage_qvluvy.webp"
                            src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785004553/HomeBannerFullImageStatic_bwuje8.webp"
                            alt="Mentorship Platform Banner"
                            width={620}
                            height={600}
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="bg-linear-to-r from-violet-700 via-violet-500 to-violet-300 rounded-[15px] px-9 py-6 w-full">
                    {/* Heading */}
                    <p className="text-white text-[22px] font-semibold mb-4">
                        Find the right mentor for you
                    </p>

                    {/* Search Options */}
                    <div className="flex items-center gap-2 w-full">
                        <div className="bg-white rounded-[9px] flex items-center px-4 py-2.5 flex-1 text-[12px]">
                            <Search className="text-gray-400 shrink-0" size={16} />
                            <input
                                placeholder="Search by skills or expertise..."
                                className="outline-none px-2 w-full text-gray-700 placeholder:text-gray-400"
                            />
                        </div>

                        {/* Select Category */}
                        <select className="bg-white rounded-[9px] px-4 py-2.5 outline-none text-[12px] text-gray-500 cursor-pointer w-full sm:w-60">
                            <option>Select Category</option>
                        </select>

                        {/* Experience Level */}
                        <select className="bg-white rounded-[9px] px-4 py-2.5 outline-none text-[12px] text-gray-500 cursor-pointer w-full sm:w-60">
                            <option>Experience Level</option>
                        </select>

                        {/* Search Button - auto width / compact */}
                        <button className="bg-violet-700 hover:bg-violet-800 transition-all rounded-[9px] text-white font-semibold text-[12px] px-6 py-2.5 whitespace-nowrap w-full sm:w-auto cursor-pointer">
                            Search Mentors
                        </button>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}

export default HeroSection;