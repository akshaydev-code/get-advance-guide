import Image from "next/image";
import { ChevronRight } from "lucide-react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import { RiStarSLine } from "react-icons/ri";

const AboutBanner = () => {
    return (
        <div className="relative bg-linear-to-b from-[#FFFFFF] to-[#EEE7FD] pt-4 pb-12">
            {/* DOTS */}
            <svg
                width="160"
                height="260"
                viewBox="0 0 260 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-115 top-11 hidden lg:flex"
            >
                <g fill="#C7B8FF" opacity="0.4">
                    {/* Row 1 */}
                    <circle cx="90" cy="20" r="2.8" />
                    <circle cx="110" cy="20" r="2.8" />
                    <circle cx="130" cy="20" r="2.8" />
                    <circle cx="150" cy="20" r="2.8" />
                    <circle cx="170" cy="20" r="2.8" />

                    {/* Row 2 */}
                    <circle cx="70" cy="40" r="2.8" />
                    <circle cx="90" cy="40" r="2.8" />
                    <circle cx="110" cy="40" r="2.8" />
                    <circle cx="130" cy="40" r="2.8" />
                    <circle cx="150" cy="40" r="2.8" />
                    <circle cx="170" cy="40" r="2.8" />
                    <circle cx="190" cy="40" r="2.8" />

                    {/* Row 3 */}
                    <circle cx="50" cy="60" r="2.8" />
                    <circle cx="70" cy="60" r="2.8" />
                    <circle cx="90" cy="60" r="2.8" />
                    <circle cx="110" cy="60" r="2.8" />
                    <circle cx="130" cy="60" r="2.8" />
                    <circle cx="150" cy="60" r="2.8" />
                    <circle cx="170" cy="60" r="2.8" />
                    <circle cx="190" cy="60" r="2.8" />
                    <circle cx="210" cy="60" r="2.8" />

                    {/* Row 4 */}
                    <circle cx="50" cy="80" r="2.8" />
                    <circle cx="70" cy="80" r="2.8" />
                    <circle cx="90" cy="80" r="2.8" />
                    <circle cx="110" cy="80" r="2.8" />
                    <circle cx="130" cy="80" r="2.8" />
                    <circle cx="150" cy="80" r="2.8" />
                    <circle cx="170" cy="80" r="2.8" />
                    <circle cx="190" cy="80" r="2.8" />
                    <circle cx="210" cy="80" r="2.8" />

                    {/* Row 5 */}
                    <circle cx="50" cy="100" r="2.8" />
                    <circle cx="70" cy="100" r="2.8" />
                    <circle cx="90" cy="100" r="2.8" />
                    <circle cx="110" cy="100" r="2.8" />
                    <circle cx="130" cy="100" r="2.8" />
                    <circle cx="150" cy="100" r="2.8" />
                    <circle cx="170" cy="100" r="2.8" />
                    <circle cx="190" cy="100" r="2.8" />
                    <circle cx="210" cy="100" r="2.8" />

                    {/* Row 6 */}
                    <circle cx="50" cy="120" r="2.8" />
                    <circle cx="70" cy="120" r="2.8" />
                    <circle cx="90" cy="120" r="2.8" />
                    <circle cx="110" cy="120" r="2.8" />
                    <circle cx="130" cy="120" r="2.8" />
                    <circle cx="150" cy="120" r="2.8" />
                    <circle cx="170" cy="120" r="2.8" />
                    <circle cx="190" cy="120" r="2.8" />
                    <circle cx="210" cy="120" r="2.8" />

                    {/* Row 7 */}
                    <circle cx="50" cy="140" r="2.8" />
                    <circle cx="70" cy="140" r="2.8" />
                    <circle cx="90" cy="140" r="2.8" />
                    <circle cx="110" cy="140" r="2.8" />
                    <circle cx="130" cy="140" r="2.8" />
                    <circle cx="150" cy="140" r="2.8" />
                    <circle cx="170" cy="140" r="2.8" />
                    <circle cx="190" cy="140" r="2.8" />
                    <circle cx="210" cy="140" r="2.8" />

                    {/* Row 8 */}
                    <circle cx="70" cy="160" r="2.8" />
                    <circle cx="90" cy="160" r="2.8" />
                    <circle cx="110" cy="160" r="2.8" />
                    <circle cx="130" cy="160" r="2.8" />
                    <circle cx="150" cy="160" r="2.8" />
                    <circle cx="170" cy="160" r="2.8" />
                    <circle cx="190" cy="160" r="2.8" />

                    {/* Row 9 */}
                    <circle cx="90" cy="180" r="2.8" />
                    <circle cx="110" cy="180" r="2.8" />
                    <circle cx="130" cy="180" r="2.8" />
                    <circle cx="150" cy="180" r="2.8" />
                    <circle cx="170" cy="180" r="2.8" />
                </g>
            </svg>

            <MaxWidthWrapper className="flex flex-col lg:flex-row items-center justify-between">
                {/* LEFT */}
                <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                    {/* Label */}
                    <div className="flex items-center justify-center gap-2 bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[12px] font-semibold">
                        <RiStarSLine size={16} />
                        About Us
                    </div>

                    {/* Heading */}
                    <h1 className="text-[36px] lg:text-[45px] leading-11 lg:leading-13 text-center lg:text-left font-bold text-[#000000]">
                        Empowering Growth Through{" "}
                        <span className="text-violet-600">
                            Mentorship
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-[#000000]/60 text-[14px] lg:text-[15px] w-full md:w-[65%] lg:w-full mt-2">
                        <span className="text-[#000000] font-medium">GetAdvanceGuide</span> is a platform dedicated to connecting learners with experienced mentors who can guide them towards their goals and unlock their true potential.
                    </p>

                    {/* Button */}
                    <div className="flex items-center gap-4 mb-8 text-[11px] lg:text-[14px] mt-4">
                        <button className="group relative overflow-hidden rounded-[11px] bg-violet-600 px-6 py-3 font-semibold text-white cursor-pointer transition-all duration-100 active:scale-95">

                            <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-700 ease-out group-hover:translate-x-0"></span>

                            {/* Content */}
                            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-violet-600">
                                Join Our Community
                                <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-[60%]">
                    <Image
                        src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785073449/AboutBannerImage_fti8at.webp"
                        alt="Mentorship Platform Banner"
                        width={1200}
                        height={1200}
                        priority
                        className="object-cover mx-auto lg:ml-auto"
                    />
                </div>
            </MaxWidthWrapper >
        </div >
    );
}

export default AboutBanner;