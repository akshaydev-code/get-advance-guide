import { Check, User, BriefcaseBusiness, GraduationCap, Sparkles } from 'lucide-react';
import MaxWidthWrapper from '../../../common/MaxWidthWrapper/MaxWidthWrapper';
import Image from 'next/image';

const profileItems = [
    {
        label: 'Career Goals',
        icon: BriefcaseBusiness,
    },
    {
        label: 'Skills',
        icon: Sparkles,
    },
    {
        label: 'Education',
        icon: GraduationCap,
    },
    {
        label: 'Experience',
        icon: BriefcaseBusiness,
    },
];

const HowItWorksCreateProfileSection = () => {
    return (
        <section className="py-4">
            <MaxWidthWrapper>
                <div className="relative overflow-hidden rounded-[24px] border border-[#eeeaff] bg-white shadow-[0_8px_35px_rgba(76,55,170,0.08)]">
                    <div className="flex items-center">

                        {/* LEFT */}
                        <div className="w-full lg:w-[60%] p-4">
                            <div className="relative bg-violet-100 rounded-[22px]">
                                {/* IMAGE */}
                                <Image
                                    src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785073449/AboutBannerImage_fti8at.webp"
                                    alt="Mentorship Platform Banner"
                                    width={1200}
                                    height={1200}
                                    priority
                                    className="object-cover mx-auto lg:ml-auto"
                                />

                                {/* PROFILE CARD */}
                                <div className="absolute right-[8%] top-[10%] z-30 w-[44%] rounded-xl border border-[#eeeafa] bg-white p-4 shadow-[0_12px_35px_rgba(70,50,140,0.12)]">

                                    {/* Card Header */}
                                    <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0ebff] text-[#6844e8]">
                                            <User className="h-3.5 w-3.5" />
                                        </div>

                                        <span className="text-[11px] font-bold text-slate-800">
                                            My Profile
                                        </span>
                                    </div>

                                    {/* Profile items */}
                                    <div className="mt-2 space-y-1.5">
                                        {profileItems.map((item, index) => {
                                            const Icon = item.icon;

                                            return (
                                                <div
                                                    key={index}
                                                    className=" flex items-center justify-between  rounded-lg px-2.5 py-2"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <Icon className="h-3.5 w-3.5 text-slate-300" />
                                                        <span className="text-[10px] font-medium text-slate-400">
                                                            {item.label}
                                                        </span>
                                                    </div>

                                                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#6844e8]">
                                                        <Check className="h-2.5 w-2.5 text-white" />
                                                    </div>
                                                </div>
                                            );
                                        })}

                                    </div>

                                    {/* Progress */}
                                    <div className="mt-2">

                                        <div className=" mb-1 flex items-center justify-between ">
                                            <span className=" text-[9px] font-bold text-[#6844e8]">
                                                90% Complete
                                            </span>

                                            <span className=" text-[8px] font-medium text-slate-300 ">
                                                90%
                                            </span>
                                        </div>

                                        <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                                            <div className=" h-full w-[90%] rounded-full bg-[#6844e8]
                                        " />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="w-[40%] p-9">
                            {/* Number */}
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#5d32d8] text-[11px] font-extrabold text-white shadow-[0_5px_15px_rgba(93,50,216,0.2)]">
                                01
                            </div>

                            {/* Heading */}
                            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[27px]">
                                Create Your Profile
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-[14px] font-medium leading-6 text-[#000000]/60">
                                Tell us about your goals, skills and interests.
                            </p>

                            {/* Checklist */}
                            <ul className="mt-5 space-y-3">
                                {profileItems?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-sm font-semibold text-slate-800"
                                    >
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6844e8]">
                                            <Check className="h-3 w-3 stroke-[3] text-white" />
                                        </span>

                                        {item?.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default HowItWorksCreateProfileSection;