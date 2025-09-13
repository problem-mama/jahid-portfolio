import * as motion from "framer-motion/client";
import HeroSectionCTA from "./hero-section-cta";

const HeroSection = () => {
  return (
    <motion.div
      id="home"
      className="bg-beige"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ transition: { duration: 0.5 } }}
    >
      <motion.div className="container mx-auto px-4 flex flex-col gap-5   py-10 md:py-15">
        <div className="grid  md:grid-cols-2  gap-4 items-center">
          {/* Left section for text content */}
          <motion.div className="flex  flex-col justify-center items-center md:items-start text-center md:text-left space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl text-brand-heading font-bold"
            >
              Grow Your Audience High-Quality <br />
              <motion.span className="text-brand-highlight">
                Ambience
              </motion.span>{" "}
              &{" "}
              <motion.span className="text-brand-highlight">
                Meditation Videos
              </motion.span>
            </motion.h1>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-brand-subheading max-w-xl font-medium"
            >
              We help creators and wellness brands with Done-For-You ambience
              and meditation videos that grow your audience and keep viewers
              coming back
            </motion.h4>
            <HeroSectionCTA />
          </motion.div>
          {/* Right section for image and gradient */}
          <motion.div className="hidden md:flex justify-center flex-col items-center relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="h-64 w-64 rounded-full  flex flex-shrink-0 justify-center items-center bg-gradient-to-bl from-honey via-terracotta to-brown  animate-gradient-move"
            />
            <div className="w-full h-full rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <img
                src="/professional-portrait-photo-for-meditation-content.jpg"
                alt="Profile"
                className="w-60 h-60 object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
