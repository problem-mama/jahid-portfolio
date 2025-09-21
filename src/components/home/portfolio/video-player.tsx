"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlay, setShowPlay] = useState(true);

  const handlePlay = () => {
    videoRef.current?.play();
    setShowPlay(false);
  };

  const handlePauseOrEnd = () => setShowPlay(true);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.addEventListener("pause", handlePauseOrEnd);
    vid.addEventListener("ended", handlePauseOrEnd);
    return () => {
      vid.removeEventListener("pause", handlePauseOrEnd);
      vid.removeEventListener("ended", handlePauseOrEnd);
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover rounded-lg"
        controls={false}
        preload="metadata"
      />
      {showPlay && (
        <motion.button
          onClick={handlePlay}
          className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center bg-beige rounded-full shadow-lg cursor-pointer border-2 border-brand-highlight hover:border-brand-highlight-hover hover:shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Play className="h-10 w-10 text-brand-highlight" />
        </motion.button>
      )}
    </div>
  );
}
