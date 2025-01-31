import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeak Navigator",
  description: "Power Up Your Wallet with Zeak Navigator",
  openGraph: {
    title: "Zeak Navigator",
    description: "Power Up Your Wallet with Zeak Navigator",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeak Navigator",
    description: "Power Up Your Wallet with Zeak Navigator",
    images: ["/twitter-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-base-content bg-base-100`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
