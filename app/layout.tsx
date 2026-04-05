import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebTemp — Custom Website Templates, Delivered Fast",
  description:
    "Tell us about your business and get a custom website template delivered to your inbox. No drag-and-drop builders, no subscriptions — just a clean, professional site you own.",
  metadataBase: new URL((process.env.NEXT_PUBLIC_SITE_URL ?? "https://webtemp-iota.vercel.app").trim()),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "WebTemp — Custom Website Templates, Delivered Fast",
    description:
      "Tell us about your business and get a custom website template delivered to your inbox.",
    url: "/",
    siteName: "WebTemp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebTemp — Custom Website Templates, Delivered Fast",
    description:
      "Tell us about your business and get a custom website template delivered to your inbox.",
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
