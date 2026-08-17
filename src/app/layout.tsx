import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-slate-900 text-slate-100 flex flex-col min-h-screen selection:bg-blue-600 selection:text-white`}>
        <Navbar />
        <div className="grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}