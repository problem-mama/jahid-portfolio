import * as motion from "framer-motion/client";

const HeroSection = () => {
  return (
    <motion.div
      id="home"
      className="bg-beige"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ transition: { duration: 0.5 } }}
    >
      <motion.div className="container mx-auto px-2 grid md:grid-cols-2 md:min-h-[80vh] gap-4  py-5 md:py-10">
        {/* Left section for text content */}
        <motion.div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            className="text-4xl text-brand-heading font-bold"
          >
            Grow Your Audience High-Quality{" "}
            <motion.span className="text-brand-highlight">Ambience</motion.span>{" "}
            &{" "}
            <motion.span className="text-brand-highlight">
              Meditation Videos
            </motion.span>
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            className="text-xl text-brand-subheading max-w-xl font-medium"
          >
            We help creators and wellness brands with Done-For-You ambience and
            meditation videos that grow your audience and keep viewers coming
            back
          </motion.h4>
        </motion.div>
        {/* Right section for image and gradient */}
        <motion.div className="flex justify-center items-center relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="h-64 w-64 rounded-full  flex justify-center items-center bg-gradient-to-bl from-honey via-terracotta to-brown  animate-gradient-move"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className=" h-60 w-60 rounded-full bg-beige  animate-gradient-move"
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
