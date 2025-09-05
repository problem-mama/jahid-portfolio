import React from "react";
import * as motion from "framer-motion/client";
import ContactButton from "@/components/shared/contact-button";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

function Navbar() {
  return (
    <motion.div
      className="h-16 flex items-center bg-cream "
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: { opacity: 1, transition: { duration: 0.5 } },
        pageExit: { opacity: 0 },
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold text-brand-highlight">
          Jahid
        </h1>
        <nav className="">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-navlink hover:text-brand-navlink-hover transition-colors duration-300"
              >
                <motion.li
                  whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                  {item.name}
                </motion.li>
              </Link>
            ))}
          </ul>
        </nav>
        <ContactButton />
      </div>
    </motion.div>
  );
}

export default Navbar;
