"use client";

import Link from "next/link";
import { Linkedin, XIcon, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-beige bg-cream">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <p className="text-sm text-brand-navlink hover:text-brand-navlink-hover">
              Copyright © {new Date().getFullYear()} Jahid Hasan
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="https://linkedin.com/in/jahid"
              className="text-brand-highlight hover:text-brand-navlink-hover transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com/jahid"
              className="text-brand-highlight hover:text-brand-navlink-hover transition-colors"
            >
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:jahid@gmail.com"
              className="text-brand-highlight hover:text-brand-navlink-hover transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
