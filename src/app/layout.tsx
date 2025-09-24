import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CPT - Chayaprinttech | Premium Label & Sticker Solutions",
  description:
    "Leading manufacturer of high-quality labels, stickers, and printing solutions. Serving Healthcare, Manufacturing, Retail, Automotive and more industries with innovative products.",
  keywords:
    "labels, stickers, printing, polycarbonate labels, adhesive labels, automotive labels, healthcare labels, manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
