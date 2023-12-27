import type { Metadata } from "next";
import { Bai_Jamjuree as BaiJamhuree, Roboto_Flex as Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto' }); 
const baiJamhuree = BaiJamhuree({ subsets: ["latin"], weight: '700', variable: '--font-bai-jamhuree' }); 

export const metadata: Metadata = {
  title: "NLW Spacetime",
  description: "Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamhuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  );
}
