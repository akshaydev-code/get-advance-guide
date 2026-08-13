import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

// CSS FILES
import "../@core/styles/globals.css";
import "../@core/styles/styles.css";
// import "../@core/styles/typography.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GetAdvanceGuide",
  description: "Mentor to Mantee Guidence",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        {children}
        <Link
          href="https://geturai.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GetURAI"
          className="
      fixed
      bottom-5
      right-5
      z-50
      w-12
      h-12
      lg:w-14
      lg:h-14
      rounded-full
      bg-black
      text-white
      flex
      items-center
      justify-center
      shadow-lg
      hover:scale-110
      hover:shadow-xl
      hover:bg-[#6342E8]
      transition-all
      duration-300
      animate-bounce
    "
        >
          <span className="text-sm font-bold">
            AI
          </span>
        </Link>
      </body>
    </html>
  );
}