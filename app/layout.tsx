import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AffordaWeb Solutions — Affordable Website Design by Filipino Experts",
    template: "%s | AffordaWeb Solutions",
  },
  description:
    "Get a professionally hand-coded website at an affordable price. AffordaWeb Solutions is run by top-rated Filipino web designers on Upwork. Custom, mobile-ready, SEO-optimised — no subscriptions.",
  keywords: [
    "affordable website design",
    "affordable web design",
    "affordable website design for small business",
    "Filipino web designer",
    "hire Filipino web designer",
    "professional website design",
    "custom website affordable",
    "cheap website design",
    "web design services",
    "affordable website",
  ],
  metadataBase: new URL((process.env.NEXT_PUBLIC_SITE_URL ?? "https://webtemp-iota.vercel.app").trim()),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "AffordaWeb Solutions — Affordable Website Design by Filipino Experts",
    description:
      "Professionally hand-coded websites at affordable prices. Top-rated Filipino web designers. No subscriptions — you own the code.",
    url: "/",
    siteName: "AffordaWeb Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AffordaWeb Solutions — Affordable Website Design",
    description:
      "Professionally hand-coded websites at affordable prices. Top-rated Filipino web designers. No subscriptions.",
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
