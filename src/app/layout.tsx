import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppFrame } from "@/components/app-frame";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Performance",
  description:
    "A demo project to test Next.js navigation performance features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppFrame>{children}</AppFrame>
        <Toaster />
      </body>
    </html>
  );
}
