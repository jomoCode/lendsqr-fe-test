'use client'

import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local Font
const myFont = localFont({
  src: [
    {
      path: "../public/fonts/karu-regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "../public/fonts/karu-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-myfont",
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html
        lang="en"
        className={`${geistSans.className} ${geistMono.className}`}
      >
        <body className={myFont.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
