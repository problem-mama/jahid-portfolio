import type { Metadata } from "next";
import MainLayout from "@/layouts/main-layouts";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// here you can add metadata for your application
export const metadata: Metadata = {
  title: "Jahid visuals",
  description: "Grow your audience with premium ambience videos",
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
