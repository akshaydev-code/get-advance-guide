import {
    Gem,
    Check,
} from "lucide-react";

import { FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { RiStarSLine } from 'react-icons/ri';
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";

const AboutCorePillarsData = [
    {
        icon: <GoGoal size={24} />,
        title: "Our Mission",
        description:
            "To make quality mentorship accessible to everyone and help individuals grow in their personal and professional lives.",
        type: "description",
    },
    {
        icon: <FaEye size={24} />,
        title: "Our Vision",
        description:
            "To build a world where every individual has the right guidance to achieve their dreams and make an impact.",
        type: "description",
    },
    {
        icon: <Gem size={24} />,
        title: "Our Values",
        type: "values",
        values: [
            "We believe in trust and transparency",
            "We value inclusivity and diversity",
            "We support continuous learning",
            "We are committed to your success",
        ],
    },
];

const AboutCorePillars = () => {
    return (
        <div className="pt-12">
            <MaxWidthWrapper>
                {/* Heading & Label */}
                <div className="text-center mb-9">
                    {/* Label */}
                    <div className="flex items-center justify-center w-fit mx-auto gap-2 bg-violet-50 text-violet-600 px-4 py-1 rounded-full text-[11px] font-semibold uppercase">
                        <RiStarSLine size={16} />
                        The Core Pillars of Our Purpose
                    </div>

                    {/* Heading */}
                    <h2 className="text-[27px] font-semibold text-[#000000] mt-3">
                        The Blueprint of Our Success :<br />
                        <span className="text-violet-600 font-bold">Understanding  Our Mission, Vision, and Values</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {AboutCorePillarsData.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-violet-200 rounded-[22px] p-6 space-y-4 hover:-translate-y-4 hover:shadow-[0_18px_40px_rgba(124,58,237,0.18)] transition-all duration-500"
                        >
                            {/* Icon */}
                            <div className="w-15 h-15 rounded-full bg-violet-100 text-violet-600 mx-auto lg:mx-0 flex items-center justify-center">
                                <div className="transition-all duration-500 group-hover:scale-120">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-[18px] font-semibold text-center lg:text-left">
                                {item.title}
                            </h2>

                            {/* Description */}
                            {item.type === "description" && (
                                <>
                                    <p className="text-[#000000]/60 text-[14px] leading-5 text-center lg:text-left">
                                        {item.description}
                                    </p>

                                    <div className="w-15 h-1 bg-violet-600 rounded-full mx-auto lg:mx-0" />
                                </>
                            )}

                            {/* Values */}
                            {item.type === "values" && (
                                <div className="space-y-2">
                                    {item.values?.map((value, valueIndex) => (
                                        <div
                                            key={valueIndex}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mt-0.5 shrink-0">
                                                <Check size={14} className="stroke-3" />
                                            </div>

                                            <p className="text-gray-500 text-[14px]">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default AboutCorePillars;