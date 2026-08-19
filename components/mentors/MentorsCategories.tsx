"use client";

import { useState, useEffect } from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import {
    LayoutGrid,
    Code2,
    BarChart3,
    PenTool,
    Megaphone,
    Briefcase,
    UserRound,
    Smartphone,
    Cloud,
    Cpu,
    Shield,
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
        text: "Career Guidance",
    },
    {
        icon: <Smartphone size={18} />,
        text: "App Development",
    },
    {
        icon: <Cloud size={18} />,
        text: "Cloud Computing",
    },
    {
        icon: <Cpu size={18} />,
        text: "AI & Machine Learning",
    },
    {
        icon: <Shield size={18} />,
        text: "Cyber Security",
    },
];

const MentorsCategories = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const handleFilterChange = (event: Event) => {
            const customEvent = event as CustomEvent<{ category?: string }>;
            if (customEvent.detail?.category !== undefined) {
                const cat = customEvent.detail.category;
                const idx = MentorCategoriesData.findIndex(
                    (c) => c.text.toLowerCase() === (cat || "All Categories").toLowerCase()
                );
                if (idx !== -1) {
                    setActiveIndex(idx);
                }
            }
        };

        window.addEventListener("mentorsFilterChange", handleFilterChange);
        return () => window.removeEventListener("mentorsFilterChange", handleFilterChange);
    }, []);

    const handleSelectCategory = (index: number) => {
        setActiveIndex(index);
        const catName = MentorCategoriesData[index].text;
        const event = new CustomEvent("mentorsFilterChange", {
            detail: {
                category: catName === "All Categories" ? "" : catName,
            },
        });
        window.dispatchEvent(event);

        const target = document.getElementById("mentors-list-section");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <MaxWidthWrapper>
                <div className="pt-9 mt-11">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {MentorCategoriesData?.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelectCategory(index)}
                                className={`flex items-center gap-2 px-3.5 py-2 rounded-[11px] border font-semibold cursor-pointer transition-all duration-200 ${
                                    index === activeIndex
                                        ? "bg-violet-50 border-violet-300 shadow-xs"
                                        : "bg-white border-gray-200 hover:border-violet-200 hover:bg-violet-50/40"
                                }`}
                            >
                                <div className={index === activeIndex ? "text-violet-600" : "text-gray-500"}>
                                    {item.icon}
                                </div>
                                <span
                                    className={`text-[13px] ${
                                        index === activeIndex
                                            ? "text-violet-600 font-semibold"
                                            : "text-gray-600 font-medium"
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
    );
};

export default MentorsCategories;