"use client";

import { useEffect, useState } from "react";
import MaxWidthWrapper from "../common/MaxWidthWrapper/MaxWidthWrapper";
import {
    Users,
    CalendarCheck,
    Star,
} from "lucide-react";

import { HugeiconsIcon } from "@hugeicons/react";
import { UserStar01Icon } from "@hugeicons/core-free-icons";

const AboutStatsData = [
    {
        icon: <Users size={31} className="stroke-2" />,
        number: 99,
        suffix: "+",
        text: "Active Users",
    },
    {
        icon: <HugeiconsIcon icon={UserStar01Icon} size={33} className="stroke-2" />,
        number: 9,
        suffix: "+",
        text: "Expert Mentors",
    },
    {
        icon: <CalendarCheck size={31} className="stroke-2" />,
        number: 6,
        suffix: "+",
        text: "Sessions Completed",
    },
    {
        icon: <Star size={31} className="stroke-2" />,
        number: 96,
        suffix: "%",
        text: "Success Rate",
    },
];

// Counting Animator
const Counter = ({
    target,
    suffix,
}: {
    target: number;
    suffix: string;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 3000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            setCount(Math.floor(progress * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [target]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
};

const AboutStats = () => {
    return (
        <MaxWidthWrapper className="relative -mt-12 lg:-mt-15">
            <div className="bg-linear-to-br from-[#FFFFFF] via-violet-50 to-violet-100 border-2 border-violet-200 rounded-[22px] flex flex-col md:flex-row lg:justify-between items-center lg:items-start overflow-hidden">
                {AboutStatsData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 lg:gap-4 px-9 py-5"
                    >
                        <div className="w-18 h-18 rounded-full border-2 border-violet-100 bg-white text-violet-600 flex items-center justify-center">
                            {item.icon}
                        </div>

                        <div>
                            <h2 className="text-[27px] font-semibold mb-1 text-center lg:text-left">
                                <Counter
                                    target={item.number}
                                    suffix={item.suffix}
                                />
                            </h2>

                            <p className="text-gray-500 text-[12px] text-center lg:text-left">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper >
    )
}

export default AboutStats;