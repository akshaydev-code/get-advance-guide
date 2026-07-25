import Image from "next/image";
import {
    Mail,
    Phone,
    Clock3,
    MapPin,
    MessageCircleMore,
    Send,
    ChevronDown,
} from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#f8f8fc] text-[#111827]">
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">
                {/* LEFT */}
                <div className="relative">
                    <div className="inline-flex bg-violet-100 text-violet-700 px-5 py-2 rounded-full text-sm font-semibold mb-8">
                        Contact Us
                    </div>

                    <h1 className="text-6xl font-extrabold leading-tight mb-6">
                        We’re Here to Help You
                        <br />
                        <span className="text-violet-600">
                            Connect, Learn & Grow
                        </span>
                    </h1>

                    <p className="text-gray-500 text-lg leading-8 max-w-xl mb-12">
                        Have questions or need support? Our team is here to help you
                        with anything you need. Reach out to us and we’ll get back
                        to you as soon as possible.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                                <Mail size={24} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-1">Email Us</h3>
                                <p className="text-gray-500 text-lg">
                                    support@getadvanceguide.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                                <Phone size={24} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-1">Call Us</h3>
                                <p className="text-gray-500 text-lg">
                                    +91 98765 43210
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                                <Clock3 size={24} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-1">
                                    Working Hours
                                </h3>
                                <p className="text-gray-500 text-lg">
                                    Mon - Sat : 9:00 AM - 7:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="absolute right-0 bottom-[-40px] hidden lg:block">
                        <div className="relative">
                            <div className="absolute w-[450px] h-[450px] bg-violet-200 rounded-full blur-3xl opacity-40" />

                            <Image
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                                alt="girl"
                                width={420}
                                height={500}
                                className="relative z-10 object-cover rounded-[40px]"
                            />

                            <div className="absolute top-8 right-[-30px] bg-violet-600 text-white p-5 rounded-3xl z-20 shadow-2xl">
                                <MessageCircleMore size={38} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="bg-white border border-[#ececf3] rounded-[36px] p-10 shadow-sm">
                    <h2 className="text-5xl font-bold mb-4">
                        Send Us a Message
                    </h2>

                    <p className="text-gray-500 text-lg mb-10">
                        Fill out the form below and our team will get back to you.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="font-semibold block mb-3">
                                Full Name
                            </label>

                            <div className="border border-[#dfe1ea] rounded-xl flex items-center px-4">
                                <Mail className="text-gray-400" size={18} />

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-4 outline-none rounded-xl"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-semibold block mb-3">
                                Email Address
                            </label>

                            <div className="border border-[#dfe1ea] rounded-xl flex items-center px-4">
                                <Mail className="text-gray-400" size={18} />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-4 outline-none rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="font-semibold block mb-3">
                            Subject
                        </label>

                        <div className="border border-[#dfe1ea] rounded-xl flex items-center justify-between px-4">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail size={18} />
                                <span>How can we help you?</span>
                            </div>

                            <ChevronDown size={18} className="text-gray-400" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="font-semibold block mb-3">
                            Message
                        </label>

                        <textarea
                            rows={6}
                            placeholder="Type your message here..."
                            className="w-full border border-[#dfe1ea] rounded-xl p-5 outline-none resize-none"
                        />
                    </div>

                    <button className="w-full bg-gradient-to-r from-violet-700 to-violet-500 hover:opacity-95 transition-all text-white py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3">
                        <Send size={20} />
                        Send Message
                    </button>
                </div>
            </section>

            {/* OTHER WAYS */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="text-center mb-14">
                    <h2 className="text-5xl font-bold">
                        Other Ways to Connect
                    </h2>

                    <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full mt-4" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <MapPin size={28} />,
                            title: "Visit Our Office",
                            text1: "GetAdvanceGuide HQ",
                            text2: "123, Knowledge Park, Sector 62",
                            text3: "Noida, Uttar Pradesh - 201309",
                        },
                        {
                            icon: <Mail size={28} />,
                            title: "Email Support",
                            text1: "For general queries and support",
                            text2: "support@getadvanceguide.com",
                        },
                        {
                            icon: <Phone size={28} />,
                            title: "Phone Support",
                            text1: "Speak with our support team",
                            text2: "+91 98765 43210",
                        },
                        {
                            icon: <MessageCircleMore size={28} />,
                            title: "Live Chat",
                            text1: "Chat with us live",
                            text2: "Available on website",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#ececf3] rounded-[28px] p-8"
                        >
                            <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-6">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                {item.title}
                            </h3>

                            <div className="space-y-2 text-gray-500 text-lg">
                                <p>{item.text1}</p>
                                <p className="text-violet-600 font-semibold">
                                    {item.text2}
                                </p>

                                {item.text3 && <p>{item.text3}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}