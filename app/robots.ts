import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://webtemp-iota.vercel.app").trim();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/download/", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
