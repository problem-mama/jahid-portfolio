import * as motion from "framer-motion/client";
import Image from "next/image";
import HeroSectionCTA from "../hero-section/hero-section-cta";

import { AboutSectionJobHistory } from "../helper";

const AboutSection = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.div className="container mx-auto px-4 flex flex-col gap-y-10   py-10 md:py-15">
        <div>
          <h1 className="text-3xl font-bold  uppercase text-center">
            <span className="text-brand-highlight"> Who </span> am I
          </h1>
        </div>

        {/* Content section */}
        <motion.div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-end"
          >
            <div>
              <Image
                src="/professional-portrait-photo-for-meditation-content.jpg"
                alt="Profile"
                height={600}
                width={600}
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-y-5">
            <motion.h2 className="text-5xl font-extrabold uppercase">
              This is <span className="text-brand-highlight">Jahid Hasan</span>
            </motion.h2>

            <motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col gap-y-3 mb-5"
              >
                <motion.h4 className="text-xl text-muted-foreground max-w-xl font-medium">
                  We help creators and wellness brands with Done-For-You
                  ambience and meditation videos that grow your audience and
                  keep viewers coming back for more.
                </motion.h4>
              </motion.div>
              <motion.div>
                <div className="my-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {AboutSectionJobHistory.map((item) => (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        key={item.id}
                        className="space-y-2 border bg-terracotta/10 border-terracotta/10 p-4 rounded-lg text-center h-[150px] flex flex-col justify-center items-center"
                      >
                        <div>
                          <h3 className="text-2xl font-bold text-brand-highlight">
                            {item.count}
                          </h3>
                          <h4 className="text-xl  font-bold text-brand-subheading">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-md font-normal text-brand-body">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <HeroSectionCTA />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
