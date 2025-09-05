import React from "react";
import Navbar from "@/components/shared/navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return <div>
    <Navbar/>
    {children}
    </div>;
}

export default MainLayout;
