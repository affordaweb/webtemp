import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Go Live — Deploy Your Website Step by Step",
  description:
    "A step-by-step guide to deploying your website on Netlify, GitHub Pages, Hostinger, or Namecheap. No coding knowledge required. Free and paid options covered.",
  alternates: { canonical: "/how-to-go-live" },
};

export default function HowToGoLiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
