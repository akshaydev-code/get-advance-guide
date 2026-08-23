import { Check, Star, BriefcaseBusiness, UserRound } from 'lucide-react';
import MaxWidthWrapper from '../../../common/MaxWidthWrapper/MaxWidthWrapper';

const mentors = [
    {
        name: 'Rahul Mehta',
        role: 'Senior Software Engineer',
        company: 'at Google',
        rating: '4.8 (120)',
        experience: '5+ years',
    },
    {
        name: 'Neha Kapoor',
        role: 'Product Manager',
        company: 'at Microsoft',
        rating: '4.9 (98)',
        experience: '6+ years',
    },
    {
        name: 'Vikram Singh',
        role: 'Data Scientist',
        company: 'at Amazon',
        rating: '4.7 (86)',
        experience: '4+ years',
    },
];

const filterItems = ['Domain', 'Experience', 'Rating', 'Availability'];

const ChooseMentorSection = () => {
    return (
        <section className="py-4">
            <MaxWidthWrapper>
                <div className="relative overflow-hidden rounded-[24px] border border-[#eeeaff] bg-white shadow-[0_8px_35px_rgba(76,55,170,0.08)]">
                    <div className="flex flex-col lg:flex-row lg:items-center">

                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-[40%] p-7 sm:p-9 lg:p-10">
                            <div className="flex flex-col items-start">

                                {/* NUMBER */}
                                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#5d32d8] text-[11px] font-extrabold text-white shadow-[0_5px_15px_rgba(93,50,216,0.2)]">
                                    02
                                </div>

                                {/* HEADING */}
                                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[27px]">
                                    Choose the Right Mentor
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-3 text-[14px] font-medium leading-6 text-black/60">
                                    Filter mentors using
                                </p>

                                {/* FILTER LIST */}
                                <ul className="mt-5 space-y-3">
                                    {filterItems.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6844e8]">
                                                <Check className="h-3 w-3 stroke-[3] text-white" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT MENTOR PREVIEW */}
                        <div className="w-full lg:w-[60%] p-4 sm:p-6 lg:p-7">
                            <div className="rounded-[22px] bg-[#faf9ff] p-5 sm:p-6 border border-[#f0edff]">

                                {/* HEADER */}
                                <div className="mb-5 flex items-center justify-between">
                                    <h4 className="text-[15px] font-extrabold text-slate-900 sm:text-base">
                                        Top Mentors for You
                                    </h4>

                                    <button type="button" className="text-[11px] font-bold text-[#6844e8] transition-colors hover:text-[#4f25c4]">
                                        View all
                                    </button>
                                </div>

                                {/* MENTORS */}
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    {mentors.map((mentor) => (
                                        <div key={mentor.name} className="overflow-hidden rounded-[14px] border border-[#eeeafa] bg-white shadow-[0_5px_20px_rgba(76,55,170,0.05)]">

                                            {/* MENTOR IMAGE */}
                                            <div className="flex h-[95px] items-end justify-center overflow-hidden bg-gradient-to-b from-[#f2f0ff] to-[#faf9ff] sm:h-[105px]">
                                                <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#e4ddff]">
                                                    <UserRound className="h-12 w-12 text-[#6844e8]" strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            {/* MENTOR INFO */}
                                            <div className="p-3.5">
                                                <h5 className="truncate text-[11px] font-extrabold text-slate-900 sm:text-xs">
                                                    {mentor.name}
                                                </h5>

                                                <p className="mt-1 truncate text-[10px] font-medium text-slate-500">
                                                    {mentor.role}
                                                </p>

                                                <p className="truncate text-[10px] font-medium text-slate-400">
                                                    {mentor.company}
                                                </p>

                                                {/* RATING + EXPERIENCE */}
                                                <div className="mt-3 flex items-center justify-between gap-2">
                                                    <div className="flex items-center gap-1 text-[9px] font-bold text-slate-700 sm:text-[10px]">
                                                        <Star className="h-3 w-3 fill-[#fbbf24] text-[#fbbf24]" />
                                                        {mentor.rating}
                                                    </div>

                                                    <div className="flex items-center gap-1 text-[9px] font-semibold text-slate-500 sm:text-[10px]">
                                                        <BriefcaseBusiness className="h-3 w-3 text-[#6844e8]" />
                                                        {mentor.experience}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default ChooseMentorSection;