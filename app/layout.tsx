import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AffordaWeb Solutions — DIY Website Templates Starting at $29",
    template: "%s | AffordaWeb Solutions",
  },
  description:
    "Build your own website with a custom-designed template. Answer a short form, we design it, you own the files forever. DIY website templates starting at $29. No subscriptions, no coding needed.",
  keywords: [
    // Primary — DIY website
    "DIY website",
    "DIY website builder",
    "DIY website design",
    "build your own website",
    "build a website yourself",
    "create your own website",
    "how to build your own website",
    "DIY website template",
    "DIY web design",
    "DIY website builder alternative",
    // Templates
    "website template",
    "website templates for small business",
    "cheap website template",
    "custom website template",
    "HTML website template",
    "professional website template",
    "ready-made website template",
    "website template download",
    "pre-built website template",
    "website template under $50",
    // Affordable
    "affordable website design",
    "affordable website design for small business",
    "cheap website design for small business",
    "affordable web design services",
    "small business website packages",
    "professional website design affordable price",
    "website design without coding",
    "website design without a developer",
    // Long-tail
    "how much does a website cost for a small business",
    "cheapest way to build a professional website",
    "get a website built for cheap",
    "custom website without monthly fees",
    "one-time payment website design",
    "website that is mine to keep",
    "no subscription website design",
    "website design flat fee",
    "website design $29",
    "website design $99",
    "small business website 29 dollars",
    // Service types
    "mobile-friendly website design",
    "SEO-friendly web design",
    "responsive website design for local business",
    "hand-coded website",
    "website redesign service small business",
    "Filipino web designer",
    "hire Filipino web designer",
    "top rated web designer Upwork",
  ],
  metadataBase: new URL((process.env.NEXT_PUBLIC_SITE_URL ?? "https://webtemp-iota.vercel.app").trim()),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "AffordaWeb Solutions — DIY Website Templates Starting at $29",
    description:
      "Build your own website with a custom template designed for your brand. $29 flat, no subscriptions, you own the files forever.",
    url: "/",
    siteName: "AffordaWeb Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AffordaWeb Solutions — DIY Website Templates Starting at $29",
    description:
      "Custom website templates starting at $29. Fill out a form, we design it, you own the code. No subscriptions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
