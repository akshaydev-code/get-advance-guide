import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import MaxWidthWrapper from '../../../common/MaxWidthWrapper/MaxWidthWrapper';

const days = [
    ['28', '29', '30', '1', '2', '3', '4'],
    ['5', '6', '7', '8', '9', '10', '11'],
    ['12', '13', '14', '15', '16', '17', '18'],
    ['19', '20', '21', '22', '23', '24', '25'],
    ['26', '27', '28', '29', '30', '31', '1'],
];

const timeSlots = ['10.00 AM', '01.00 PM', '04.00 PM', '07.00 PM'];

const BookSessionSection = () => {
    return (
        <section className="py-4">
            <MaxWidthWrapper>
                <div className="relative overflow-hidden rounded-[24px] border border-[#eeeaff] bg-white shadow-[0_8px_35px_rgba(76,55,170,0.08)]">
                    <div className="flex items-center">

                        {/* LEFT */}
                        <div className="w-full lg:w-[60%] p-4">
                            <div className="relative flex gap-4 overflow-hidden rounded-[22px] bg-[#faf9ff] p-4 sm:p-5">

                                {/* Calendar */}
                                <div className="w-[58%] rounded-xl border border-[#eeeafa] bg-white p-4 shadow-[0_8px_25px_rgba(70,50,140,0.06)]">

                                    <div className="mb-4 text-[11px] font-bold text-slate-800">
                                        Select Date & Time
                                    </div>

                                    <div className="mb-3 flex items-center justify-between">
                                        <ChevronLeft className="h-3.5 w-3.5 text-slate-300" />

                                        <span className="text-[11px] font-bold text-slate-700">
                                            May 2024
                                        </span>

                                        <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                                    </div>

                                    <div className="mb-2 grid grid-cols-7 text-center">
                                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                                            <span key={day} className="text-[8px] font-semibold text-slate-300">
                                                {day}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-1.5">
                                        {days.map((week, weekIndex) => (
                                            <div key={weekIndex} className="grid grid-cols-7 text-center">
                                                {week.map((day, dayIndex) => {
                                                    const isSelected = day === '15' && weekIndex === 2;

                                                    return (
                                                        <div key={`${weekIndex}-${dayIndex}`} className="flex justify-center">
                                                            <span className={`flex h-5 w-5 items-center justify-center rounded-md text-[8px] font-semibold ${isSelected ? 'bg-[#5d32d8] text-white shadow-[0_4px_10px_rgba(93,50,216,0.25)]' : (weekIndex === 0 || (weekIndex === 4 && (dayIndex === 0 || dayIndex === 6)) ? 'text-slate-300' : 'text-slate-600')}`}>
                                                                {day}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Slots */}
                                <div className="w-[42%] rounded-xl border border-[#eeeafa] bg-white p-4 shadow-[0_8px_25px_rgba(70,50,140,0.06)]">

                                    <div className="mb-3 text-[9px] font-bold text-slate-700">
                                        Available Slots
                                    </div>

                                    <div className="space-y-2">
                                        {timeSlots.map((slot) => (
                                            <div key={slot} className={`flex h-9 items-center justify-center rounded-lg text-[9px] font-semibold ${slot === '01.00 PM' ? 'bg-[#5d32d8] text-white shadow-[0_5px_12px_rgba(93,50,216,0.2)]' : 'border border-slate-100 bg-white text-slate-500'}`}>
                                                {slot}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="w-full lg:w-[40%] p-9">

                            {/* Number */}
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#5d32d8] text-[11px] font-extrabold text-white shadow-[0_5px_15px_rgba(93,50,216,0.2)]">
                                03
                            </div>

                            {/* Heading */}
                            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[27px]">
                                Book Session
                            </h3>

                            {/* Description */}
                            <p className="mt-3 max-w-[310px] text-[14px] font-medium leading-6 text-[#000000]/60">
                                Choose your preferred date, time and session type.
                            </p>

                            {/* Checklist */}
                            <ul className="mt-5 space-y-3">
                                {['Online', 'One-to-One', 'Flexible Timing'].map((text) => (
                                    <li key={text} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6844e8]">
                                            <Check className="h-3 w-3 stroke-[3] text-white" />
                                        </span>
                                        {text}
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

export default BookSessionSection;