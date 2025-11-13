"use client";
// contact button for navbar

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ContactButton() {
  return (
    <Button asChild className="primary-button-gradient uppercase font-medium">
      <Link href={"#contact"}>
        <motion.span>Get Started</motion.span>
      </Link>
    </Button>
  );
}

export default ContactButton;
