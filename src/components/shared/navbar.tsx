import React from "react";
import * as motion from "framer-motion/client";
import ContactButton from "@/components/shared/contact-button";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

function Navbar() {
  return (
    <motion.div className="h-16 flex items-center bg-cream ">
      <div className="container mx-auto flex justify-between items-center px-2">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-brand-highlight"
        >
          Jahid
        </motion.h1>
        <nav className="">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-navlink hover:text-brand-navlink-hover transition-colors duration-300"
              >
                <motion.li
                  initial={{ x: -index * 10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                  {item.name}
                </motion.li>
              </Link>
            ))}
          </ul>
        </nav>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactButton />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Navbar;
