import type { Metadata } from "next";
import { Bai_Jamjuree as BaiJamhuree, Roboto_Flex as Roboto } from "next/font/google";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import { Copyright } from "../components/Copyright";
import { Hero } from "../components/Hero";
import { Profile } from "../components/Profile";
import { SignIn } from "../components/SignIn";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto' }); 
const baiJamhuree = BaiJamhuree({ subsets: ["latin"], weight: '700', variable: '--font-bai-jamhuree' }); 

export const metadata: Metadata = {
  title: "NLW Spacetime",
  description: "Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamhuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid grid-cols-2 min-h-screen">
          {/* Left */}
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[280px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"/>

            {/* Stripes */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

            {/* Sign In */}
            {isAuthenticated ? <Profile /> :<SignIn />}

            {/* Hero */}
            <Hero />

            {/* Copyright */}
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover overflow-y-scroll max-h-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
