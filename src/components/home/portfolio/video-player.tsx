"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full h-[450px] rounded-lg overflow-hidden group">
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover rounded-lg"
        controls={false}
        preload="metadata"
        muted
        loop
        autoPlay
        playsInline
      />

      {/* 🔹 Black Overlay */}
      {/* <motion.div
        className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/40"
        animate={{ opacity: 1 }}
      /> */}
    </div>
  );
}
