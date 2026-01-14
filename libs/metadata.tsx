import type { Metadata } from "next";

export const baseMetaData: Metadata = {
  title: "My App",
  description: "Production-ready app",
};

export const seoMetaData: Metadata = {
  title: "My App - SEO Optimized",
  description: "An app optimized for search engines",
  openGraph: {
    title: "My App - Open Graph",
    description: "Open Graph description for My App",
    url: "https://myapp.com",
    siteName: "My App",
    images: [
      {
        url: "https://myapp.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "My App Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My App - Twitter Card",
    description: "Twitter card description for My App",
    images: ["https://myapp.com/twitter-image.jpg"],
  },
};
