import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Tax Clinic Corner | Fiscal Intelligence & Policy Education",
  description: "A Nigerian digital media and tax policy education platform bridging the knowledge gap between regulatory authorities and the public.",
  keywords: "Tax Clinic Corner, TCC Educational Media, Nigeria Tax Act, tax policy education, fiscal literacy Nigeria",
  icons: {
    icon: "/tcc_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex flex-col min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-600 selection:text-white`}>
        <Navbar />
        {/* pt-20 pushes the page content down so it doesn't hide behind the fixed Navbar */}
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}