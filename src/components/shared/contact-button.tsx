"use client";
// contact button for navbar

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function ContactButton() {
  return (
    <Button className="primary-button-gradient uppercase font-medium">
      <motion.span>Get Started</motion.span>
    </Button>
  );
}

export default ContactButton;
