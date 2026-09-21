import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Dustin Do | Senior Software Engineer",
  description:
    "Senior Software Engineer with 4+ years building full-stack products. Specializing in Node.js, React, TypeScript, microservices, and scalable cloud infrastructure.",
  keywords: [
    "Dustin Do",
    "Software Engineer",
    "Full Stack Developer",
    "Node.js",
    "React",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${outfit.variable} font-sans bg-[#0a0f1e] text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
