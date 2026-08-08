"use client";

import { useState } from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import {
    LayoutGrid,
    Code2,
    BarChart3,
    PenTool,
    Megaphone,
    Briefcase,
    UserRound,
    MoreHorizontal,
} from "lucide-react";

const MentorCategoriesData = [
    {
        icon: <LayoutGrid size={18} />,
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
]

const MentorsCategories = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div>
            <MaxWidthWrapper>
                <div className="pt-9 mt-11">
                    <div className="flex flex-wrap gap-2">
                        {MentorCategoriesData?.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-[11px] border font-semibold cursor-pointer mx-auto
                                    ${index === activeIndex
                                        ? "bg-violet-50 border-violet-300"
                                        : "bg-white border-"
                                    }`}
                            >
                                <p className="text-[12px] text-violet-600">
                                    {item.icon}
                                </p>
                                <span className={`text-[13px]
                                    ${index === activeIndex
                                        ? "text-violet-600"
                                        : "text-gray-600"
                                    }`}
                                >
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default MentorsCategories;