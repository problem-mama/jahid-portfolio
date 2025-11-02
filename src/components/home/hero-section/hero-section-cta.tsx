"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Video } from "lucide-react";

function HeroSectionCTA() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Button
        size="lg"
        className="primary-button-gradient  px-12 py-8 text-lg font-semibold rounded-lg transition-all duration-300 "
      >
        <Play className="mr-2 h-5 w-5" />
        Work with me
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-12 py-8 text-lg font-semibold rounded-lg transition-all duration-300  bg-transparent"
      >
        <Video className="mr-2 h-5 w-5" />
        See my work
      </Button>
    </motion.div>
  );
}

export default HeroSectionCTA;
