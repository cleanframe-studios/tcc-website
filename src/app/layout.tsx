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
  title: "Tax Clinic Corner",
  description: "Professional tax education and regulatory guidance designed for the modern business landscape.",
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