import { Users, UserCheck, CheckCircle2, Star } from 'lucide-react';
import { BiSolidRightArrow } from "react-icons/bi";
import MaxWidthWrapper from '../common/MaxWidthWrapper/MaxWidthWrapper';
import Link from 'next/link';

const stats = [
    {
        icon: Users,
        value: "10,000+",
        label: "Active Users",
    },
    {
        icon: UserCheck,
        value: "1,000+",
        label: "Expert Mentors",
    },
    {
        icon: CheckCircle2,
        value: "5,000+",
        label: "Sessions Completed",
    },
    {
        icon: Star,
        value: "95%",
        label: "Success Rate",
    },
];

const StatsCTA = () => {
    return (
        <MaxWidthWrapper className="bg-linear-to-t from-violet-700 via-violet-500 to-violet-300 lg:bg-linear-to-r rounded-[22px] py-6 px-9 text-white flex flex-col md:flex-row items-center justify-between gap-9">

            {/* Left Side: Stats Items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-9 flex-1 w-full lg:border-r border-white/40 lg:pr-9">
                {stats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex flex-col items-center text-center">
                            <Icon className="w-9 h-9 lg:w-11 lg:h-11 mb-3 text-white/90 stroke-[1.5]" />
                            <h3 className="text-[22px] lg:text-[31px] font-semibold mb-1">
                                {item.value}
                            </h3>
                            <p className="text-white/90 text-[11px] lg:text-[14px] font-medium">
                                {item.label}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Right Side: CTA Section */}
            <div className="flex flex-col items-center text-center lg:w-72 shrink-0 space-y-4">
                <h3 className="text-[18px] lg:text-[22px] font-semibold leading-tight text-white">
                    Ready to accelerate <br className="hidden sm:inline" />
                    your growth?
                </h3>

                <Link
                    href="/signup"
                    className="group relative overflow-hidden rounded-[11px] bg-white px-6 py-2.5 font-semibold text-[11px] lg:text-[14px] text-violet-600 cursor-pointer transition-all duration-100 active:scale-95 block w-fit"
                >
                    {/* Animated Background */}
                    <span className="absolute inset-0 -translate-x-full bg-violet-600 transition-transform duration-700 ease-out group-hover:translate-x-0"></span>

                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover:text-white">
                        <span>Get Started Now</span>
                        <BiSolidRightArrow size={11} />
                    </span>
                </Link>
            </div>
        </MaxWidthWrapper >
    );
};

export default StatsCTA;