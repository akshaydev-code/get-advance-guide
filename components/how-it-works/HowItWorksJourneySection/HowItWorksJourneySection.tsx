import { UserRoundSearch, Search, CalendarDays, Rocket, ChevronRight } from "lucide-react";
import MaxWidthWrapper from "../../common/MaxWidthWrapper/MaxWidthWrapper";
import Heading from "../../common/Heading/Heading";
import CreateProfileSection from './Steps/CreateProfileSection';
import ChooseMentorSection from "./Steps/ChooseMentorSection";
import BookSessionSection from "./Steps/BookSessionSection";
import LearnAndGrowSection from "./Steps/LearnAndGrowSection";

const steps = [
    {
        step: "01",
        title: "Create Account",
        desc: "Sign up and complete your profile to help mentors understand your goals.",
        icon: UserRoundSearch,
    },
    {
        step: "02",
        title: "Find Mentor",
        desc: "Browse experienced mentors based on skills and industry.",
        icon: Search,
    },
    {
        step: "03",
        title: "Book Session",
        desc: "Choose available slots and confirm your booking.",
        icon: CalendarDays,
    },
    {
        step: "04",
        title: "Start Learning",
        desc: "Attend live sessions, ask questions and grow.",
        icon: Rocket,
    },
];

const HowItWorksJourneySection = () => {
    return (
        <div className="py-12 lg:py-16">
            <MaxWidthWrapper className="pb-4">
                {/* HEADING */}
                <div className="mb-14">
                    <Heading
                        isCenter
                        as="h2"
                        headingParts={[
                            {
                                text: "Your Mentorship",
                                color: "#000000",
                                weight: "bold",
                            },
                            {
                                text: "Journey",
                                color: "text-violet-600",
                                weight: "bold",
                            },
                        ]}
                    />

                    {/* LINE */}
                    <div className="w-22 h-1 bg-violet-600 mx-auto mt-4 rounded-full" />
                </div>

                {/* JOURNEY CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
                    {steps.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.step}
                                className="relative"
                            >
                                {/* CARD */}
                                <div className="relative h-full border border-violet-200 bg-white rounded-[22px] px-4 pt-11 pb-6 text-center">

                                    {/* STEP NUMBER */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-13 h-13 rounded-full border-b border-violet-300 bg-white p-1.25 z-30">
                                        <div className="w-full h-full rounded-full bg-violet-600 text-white flex items-center justify-center text-[14px] font-semibold">
                                            {item.step}
                                        </div>
                                    </div>

                                    {/* ICON */}
                                    <div className="mx-auto mb-2 w-14 h-14 rounded-full bg-violet-50 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-violet-600 stroke-2" />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-[18px] font-semibold text-[#000000] mb-1">
                                        {item.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-[14px] leading-[1.45] text-[#000000]/60">
                                        {item.desc}
                                    </p>

                                    {/* ARROWS */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute hidden lg:flex items-center top-1/2 -right-18 w-15 -translate-y-1/2 z-20">
                                            <div className="w-full border-t-2 border-dotted border-violet-200"></div>
                                            <ChevronRight className="w-4 h-4 stroke-[3.2] text-violet-600 -ml-1 shrink-0" />
                                        </div>
                                    )}

                                </div>
                            </div>
                        );
                    })}
                </div>
            </MaxWidthWrapper>

            {/* STEP 1 */}
            <CreateProfileSection />

            {/* STEP 2 */}
            <ChooseMentorSection />

            {/* STEP 3 */}
            <BookSessionSection />

            {/* STEP 4 */}
            <LearnAndGrowSection />
        </div>
    );
};

export default HowItWorksJourneySection;