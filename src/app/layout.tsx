import type { Metadata } from "next";
import MainLayout from "@/layouts/main-layouts";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jahid visuals",
  description: "Grow your audience with premium ambience videos",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jahidvisuals.com",
    siteName: "Jahid Visuals",
    title: "Jahid Visuals - Premium Ambience Videos",
    description: "Grow your audience with premium ambience videos",
    images: [
      {
        url: "/jahid_hasan.png",
        width: 1200,
        height: 630,
        alt: "Jahid Visuals - Premium Ambience Videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahid Visuals - Premium Ambience Videos",
    description: "Grow your audience with premium ambience videos",
    images: ["/jahid_hasan.png"],
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
        className={`${poppins.variable} antialiased bg-background text-foreground`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
