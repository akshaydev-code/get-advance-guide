import Image from "next/image";

import {
    FaLinkedinIn,
} from "react-icons/fa";
import { RiStarSLine } from 'react-icons/ri';
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";

const AboutTeamMembersData = [
    {
        name: "Akshay G",
        role: "CEO & Founder",
        desc: "Passionate about education and building meaningful connections.",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785083401/OwnerImageBig_khrcmp.webp",
    },
    {
        name: "Akshay G",
        role: "Head of Operations",
        desc: "Ensures smooth operations and great user experiences.",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785083401/OwnerImageBig_khrcmp.webp",
    },
    {
        name: "Akshay G",
        role: "Lead Developer",
        desc: "Loves turning ideas into powerful and scalable solutions.",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785083401/OwnerImageBig_khrcmp.webp",
    },
    {
        name: "Akshay G",
        role: "Community Manager",
        desc: "Builds and nurtures our amazing mentor and learner community.",
        image: "https://res.cloudinary.com/dkbelrldw/image/upload/v1785083401/OwnerImageBig_khrcmp.webp",
    },
];

const AboutTeam = () => {
    return (
        <div className="py-12">
            <MaxWidthWrapper>
                {/* Heading & Label */}
                <div className="text-center mb-6">
                    {/* Label */}
                    <div className="flex items-center justify-center w-fit mx-auto gap-2 bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[11px] font-semibold uppercase mb-6">
                        <RiStarSLine size={16} />
                        Our Team
                    </div>

                    {/* Heading */}
                    <h2 className="text-[27px] font-semibold">
                        Meet The People Behind{" "}
                        <span className="text-violet-600 font-bold">
                            GetAdvanceGuide
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {AboutTeamMembersData.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white border border-violet-200 rounded-[11px] p-2 flex items-center gap-4 hover:-translate-y-4 hover:shadow-[0_18px_40px_rgba(124,58,237,0.18)] transition-all duration-500"
                        >

                            <div className="flex flex-col items-center gap-1">
                                <div className="relative rounded-full h-16 w-16 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt="Owner"
                                        fill
                                        className="object-cover object-top h-15 w-15"
                                    />
                                </div>

                                <a href="https://www.linkedin.com/in/akshay0922" target="_blank" rel="noreferrer" className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center cursor-pointer hover:bg-violet-700 transition-all duration-300">
                                    <FaLinkedinIn size={9} className="shrink-0" />
                                </a>
                            </div>


                            <div>
                                <h3 className="text-[15px] font-semibold">
                                    {member.name}
                                </h3>

                                <p className="text-violet-600 font-medium text-[12px]">
                                    {member.role}
                                </p>

                                <p className="text-[#000000]/60 text-[10px]">
                                    {member.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default AboutTeam