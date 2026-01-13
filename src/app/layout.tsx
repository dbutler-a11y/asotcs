import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MetaPixel } from "@/components/meta-pixel";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASOTCS | A Seat on the Counselor's Sofa",
  description:
    "The wellness community where you finally get your life together—without a diagnosis or a lecture. Therapist-informed tools using the SOFA Method.",
  keywords: [
    "wellness community",
    "SOFA Method",
    "therapist-informed",
    "personal development",
    "emotional wellness",
    "life coaching",
    "women's wellness",
    "counselor",
  ],
  authors: [{ name: "Tonia", url: "https://instagram.com/thehouseoftonia" }],
  openGraph: {
    title: "ASOTCS | A Seat on the Counselor's Sofa",
    description:
      "The wellness community where you finally get your life together—without a diagnosis or a lecture.",
    type: "website",
    locale: "en_US",
    siteName: "ASOTCS",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOTCS | A Seat on the Counselor's Sofa",
    description:
      "The wellness community where you finally get your life together—without a diagnosis or a lecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <MetaPixel />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
