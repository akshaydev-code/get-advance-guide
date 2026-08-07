import Header from "@/components/common/Header/page";
import Footer from "@/components/common/Footer/page";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* BODY */}
      <main>{children}</main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}