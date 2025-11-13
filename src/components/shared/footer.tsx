"use client";

import Link from "next/link";
import { Linkedin, XIcon, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-terracotta/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <p className="text-sm text-brand-navlink hover:text-brand-navlink-hover">
              Copyright © {new Date().getFullYear()} Jahid Visuals. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
