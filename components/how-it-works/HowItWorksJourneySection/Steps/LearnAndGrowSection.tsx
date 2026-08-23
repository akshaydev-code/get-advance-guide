import { Check, CheckCircle2 } from 'lucide-react';
import MaxWidthWrapper from '../../../common/MaxWidthWrapper/MaxWidthWrapper';

const sessions = [
    { name: 'Career Guidance Session', mentor: 'Rahul Mehta', avatar: 'RM' },
    { name: 'Resume Review', mentor: 'Neha Kapoor', avatar: 'NK' },
    { name: 'Mock Interview', mentor: 'Vikram Singh', avatar: 'VS' },
];

const skills = [
    { name: 'Communication', value: 90 },
    { name: 'Leadership', value: 75 },
    { name: 'Problem Solving', value: 80 },
    { name: 'Confidence', value: 70 },
];

const LearnAndGrowSection = () => {
    return (
        <section className="py-4">
            <MaxWidthWrapper>
                <div className="relative overflow-hidden rounded-[24px] border border-[#eeeaff] bg-white shadow-[0_8px_35px_rgba(76,55,170,0.08)]">
                    <div className="flex flex-col lg:flex-row items-center gap-6 p-5 sm:p-7 lg:p-8">

                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-[34%] p-2 sm:p-4 lg:p-3">
                            <div className="space-y-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5d32d8] text-[11px] font-extrabold text-white shadow-[0_5px_15px_rgba(93,50,216,0.2)]">
                                    04
                                </div>

                                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                                    Learn & Grow
                                </h3>

                                <p className="max-w-[300px] text-[14px] font-medium leading-6 text-slate-500">
                                    Join meetings, receive guidance, track your progress and achieve your goals.
                                </p>

                                <ul className="space-y-3 pt-1">
                                    {['Live Sessions', 'Personalized Guidance', 'Track Progress'].map((text, index) => (
                                        <li key={index} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6844e8]">
                                                <Check className="h-3 w-3 stroke-[3] text-white" />
                                            </span>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT DASHBOARD */}
                        <div className="w-full lg:w-[66%] rounded-[22px] bg-[#faf9ff] p-4 sm:p-5 lg:p-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                                {/* YOUR PROGRESS */}
                                <div className="rounded-2xl border border-[#eeeafa] bg-white p-5 shadow-[0_5px_20px_rgba(70,50,140,0.04)]">
                                    <h4 className="text-[12px] font-extrabold text-slate-800">
                                        Your Progress
                                    </h4>

                                    <div className="flex justify-center py-6">
                                        <div className="relative flex h-32 w-32 items-center justify-center">
                                            <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 120 120">
                                                <circle cx="60" cy="60" r="50" fill="none" stroke="#eeeaff" strokeWidth="7" />
                                                <circle cx="60" cy="60" r="50" fill="none" stroke="#5d32d8" strokeWidth="7" strokeLinecap="round" strokeDasharray="314" strokeDashoffset="78.5" />
                                            </svg>

                                            <span className="text-xl font-extrabold text-[#6844e8]">
                                                75%
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-center text-[11px] font-medium text-slate-400">
                                        Overall Progress
                                    </p>
                                </div>

                                {/* RECENT SESSIONS */}
                                <div className="rounded-2xl border border-[#eeeafa] bg-white p-5 shadow-[0_5px_20px_rgba(70,50,140,0.04)] md:col-span-1">
                                    <h4 className="mb-4 text-[12px] font-extrabold text-slate-800">
                                        Recent Sessions
                                    </h4>

                                    <div className="space-y-4">
                                        {sessions.map((session, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e8e0ff] to-[#cfc2ff] text-[9px] font-extrabold text-[#5d32d8]">
                                                    {session.avatar}
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-[10px] font-bold text-slate-800">
                                                        {session.name}
                                                    </p>
                                                    <p className="text-[9px] font-medium text-slate-400">
                                                        with {session.mentor}
                                                    </p>
                                                </div>

                                                <span className="shrink-0 rounded-full border border-green-100 bg-green-50 px-2 py-1 text-[8px] font-bold text-green-600">
                                                    Completed
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* SKILLS GAINED */}
                                <div className="rounded-2xl border border-[#eeeafa] bg-white p-5 shadow-[0_5px_20px_rgba(70,50,140,0.04)]">
                                    <h4 className="mb-4 text-[12px] font-extrabold text-slate-800">
                                        Skills Gained
                                    </h4>

                                    <div className="space-y-4">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="space-y-1.5">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[10px] font-bold text-slate-700">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-[9px] font-extrabold text-[#6844e8]">
                                                        {skill.value}%
                                                    </span>
                                                </div>

                                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                                                    <div className="h-full rounded-full bg-[#6844e8]" style={{ width: `${skill.value}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default LearnAndGrowSection;