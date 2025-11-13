import type { Metadata } from "next";
import MainLayout from "@/layouts/main-layouts";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const siteUrl = "https://jahidvisuals.com";
const ogImage = {
  url: `${siteUrl}/android-chrome-512x512.png`,
  width: 512,
  height: 512,
  alt: "Ambient visuals by Jahid Visuals",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jahid Visuals",
    template: "%s | Jahid Visuals",
  },
  description:
    "Premium ambience and meditation visuals crafted by Jahid Visuals to grow your audience and elevate your brand.",
  keywords: [
    "Jahid Visuals",
    "ambience videos",
    "meditation visuals",
    "wellness content",
    "YouTube growth",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jahid Visuals",
    description:
      "Premium ambience and meditation visuals crafted by Jahid Visuals to grow your audience and elevate your brand.",
    url: siteUrl,
    siteName: "Jahid Visuals",
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahid Visuals",
    description:
      "Premium ambience and meditation visuals crafted by Jahid Visuals to grow your audience and elevate your brand.",
    creator: "@jahidvisualss",
    site: "@jahidvisualss",
    images: [ogImage.url],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jahid Visuals",
    url: siteUrl,
    logo: ogImage.url,
    sameAs: [
      "https://www.instagram.com/jahidvisuals",
      "https://www.linkedin.com/in/jah1dhasan",
      "https://x.com/jahidvisualss",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground`}
      >
        <MainLayout>
          {children}
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
          />
        </MainLayout>
      </body>
    </html>
  );
}
