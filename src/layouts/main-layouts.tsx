import { Navbar } from "@/components/shared/navbar";
import React from "react";


function MainLayout({ children }: { children: React.ReactNode }) {
  return <div>
    <Navbar/>
    {children}
    </div>;
}

export default MainLayout;
