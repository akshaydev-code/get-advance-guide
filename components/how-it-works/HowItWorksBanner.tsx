import Image from 'next/image';
import { User } from 'lucide-react';

import MaxWidthWrapper from '@/components/common/MaxWidthWrapper/MaxWidthWrapper';
import LabelBadge from '../common/LabelBadge/LabelBadge';
import Heading from '../common/Heading/Heading';
import Button from '../common/Button/Button';

const HowItWorksBanner = () => {
    return (
        <div className="py-12 lg:py-16 bg-linear-to-b from-[#FFFFFF] to-[#EEE7FD]">
            <MaxWidthWrapper className='flex flex-col lg:flex-row gap-4 items-center'>
                {/* LEFT */}
                <div className="w-full lg:w-[50%]">
                    {/* LABEL */}
                    <LabelBadge
                        icon={User}
                        iconSize={14}
                        subTitle="How It Works"
                        className='w-fit mx-auto lg:mx-0'
                    />

                    {/* HEADING & DESCRIPTION */}
                    <div>
                        <Heading
                            headingParts={[
                                {
                                    text: "Start Your Mentorship Journey in Just",
                                    color: "#000000",
                                    weight: 700,
                                },
                                {
                                    text: "4 Simple Steps.",
                                    color: "text-purple-600",
                                    weight: 700,
                                },
                            ]}
                            descriptionParts={[
                                {
                                    text: "Whether you are looking for career guidance, interview preparation, or industry insights, finding the right mentor has never been easier.",
                                    color: "text-[#000000]/60",
                                    weight: "400",
                                },
                            ]}
                        />
                    </div>

                    {/* BUTTON */}
                    <div className='flex justify-center lg:justify-start'>
                        <Button
                            text="Find a Mentor"
                            variant="fill"
                            icon="arrow"
                            href="/mentors"
                        />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-[50%]">
                    <Image
                        src="https://res.cloudinary.com/dkbelrldw/image/upload/v1785004553/HomeBannerFullImageStatic_bwuje8.webp"
                        alt="Mentorship Platform Banner"
                        width={620}
                        height={600}
                        priority
                        className="object-cover mx-auto lg:ml-auto"
                    />
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default HowItWorksBanner;