import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../@core/styles/globals.css";
import "../@core/styles/styles.css";
// import "../@core/styles/typography.css";
import Header from "@/components/common/Header/page";
import Footer from "@/components/common/Footer/page";

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
    <>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          {/* HEADER */}
          <Header />

          {/* BODY */}
          {children}

          {/* FOOTER */}
          <Footer />
        </body>
      </html>
    </>
  );
}