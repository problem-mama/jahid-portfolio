import * as motion from "framer-motion/client";
import HeroSectionCTA from "./hero-section-cta";

const HeroSection = () => {
  return (
    <motion.div
      id="home"
      className="bg-beige"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="container mx-auto px-4 flex flex-col gap-10 py-20">
        <motion.div className="flex flex-col justify-center items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Subtle greeting / intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg border rounded-2xl border-terracotta px-3 text-brand-highlight"
          >
            Elevate Your Wellness Brand
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-heading text-center"
          >
            Grow Your Audience With <br />
            <span className="text-brand-highlight">
              High-Quality Ambience & Meditation Videos
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-brand-subheading max-w-xl font-medium"
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
