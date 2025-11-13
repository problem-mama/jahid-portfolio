"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Settings, Mail, Video } from "lucide-react";
import ContactButton from "./contact-button";
import Image from "next/image";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Portfolio", href: "#portfolio", icon: Video },
  { name: "Services", href: "#services", icon: Settings },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 top-3  backdrop-blur-md"
    >
      <div className="container mx-auto px-4 border border-brand-primary/40 rounded-xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 "
          >
            <div className="flex gap-2 items-center">
              <Image
                src="/android-chrome-512x512.png"
                alt="Jahid Hasan creating ambient visuals"
                width={35}
                height={35}
                className="rounded-full mb-2"
              />
              <p className="text-4xl font-extrabold text-white uppercase">
                <span className="gradient-text10">Jahid</span> Visuals
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-brand-navlink hover:text-brand-navlink-hover px-3 py-2 rounded-md text-sm font-medium transition-colors duration-100 flex items-center gap-2"
                >
                  <item.icon size={16} />
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="hidden md:block"
          >
            <ContactButton />
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-brand-highlight hover:text-golden-honey"
              aria-label="Menu button"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-teracotta/95 backdrop-blur-md border-t border-teracotta/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{
                    x: 10,
                    backgroundColor: "#D9A441",
                    color: "#2F2F2F",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-brand-navlink hover:brand-navlink-hover px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={18} />
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                className="px-3 py-2"
              >
                <ContactButton />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
