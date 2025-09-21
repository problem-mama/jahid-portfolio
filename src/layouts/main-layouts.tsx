import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
