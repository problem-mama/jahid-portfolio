import type { Metadata } from "next";
import MainLayout from "@/layouts/main-layouts";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
// here you can add metadata for your application
export const metadata: Metadata = {
  title: "Jahid's Portfolio",
  description: "Grow Your Audience High-Quality Ambience & Meditation Videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} antialiased bg-background text-foreground`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
