import * as motion from "framer-motion/client";
import HeroSectionCTA from "./hero-section-cta";

const HeroSection = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover "
        src="/hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      <motion.div className="relative z-10 container mx-auto px-4 flex flex-col gap-10 pt-34 pb-20 text-center black-red ">
        <motion.div className="flex flex-col justify-center items-center text-center space-y-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase"
          >
            <span className="gradient-text10">GROW YOUR AUDIENCE WITH</span>
            <br />
            <span className="text-white">PREMIUM AMBIENCE VIDEOS</span>
          </motion.h1>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-xl font-medium"
          >
            We help creators and wellness brands with Done-For-You ambience and
            meditation videos that grow your audience and keep viewers coming
            back
          </motion.h4>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HeroSectionCTA />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
