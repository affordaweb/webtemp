import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your DIY Website Template — Get Started in 3 Minutes",
  description:
    "Fill out our quick form and get a custom-designed website template built for your business. $29 flat, no subscriptions, you own the files. Takes under 3 minutes.",
  alternates: { canonical: "/generate" },
};

export default function GenerateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
