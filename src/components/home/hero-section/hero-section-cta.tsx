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
        className="bg-[#C4745B]  hover:bg-[#C4745B]/90 text-[#FDFBF7] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 "
      >
        <Play className="mr-2 h-5 w-5" />
        Work with me
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="border-2 border-[#D9A441] text-[#D9A441] hover:bg-[#D9A441] hover:text-[#2F2F2F] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300  bg-transparent"
      >
        <Video className="mr-2 h-5 w-5" />
        See my work
      </Button>
    </motion.div>
  );
}

export default HeroSectionCTA;
