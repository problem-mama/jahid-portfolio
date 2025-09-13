import * as motion from "framer-motion/client";
import Image from "next/image";
import HeroSectionCTA from "../hero-section/hero-section-cta";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { AboutSectionJobHistory } from "../helper";
const timeline = [
  {
    year: "2025 - Now",
    title: "Full Stack Developer (MERN)",
    company: "Trade Asia HRC Ltd",
    description:
      "Spearheading enterprise application development and guiding junior developers to ensure quality and efficiency.",
  },
  {
    year: "2023 - 2025",
    title: "Full Stack Developer (MERN)",
    company: "TS4U",
    description:
      "Developed scalable web apps and streamlined deployment with automated CI/CD pipelines.",
  },
];
const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="bg-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.div className="container mx-auto px-4 flex flex-col gap-y-10   py-10 md:py-15">
        <div>
          <h1 className="text-xl font-bold text-brand-highlight uppercase text-center underline">
            Who am I
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
            <motion.h2 className="text-4xl font-bold ">
              This is jahid Hasan
            </motion.h2>

            {/* <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div
                    className={`flex items-center mb-8 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                    >
                      <Card>
                        <CardHeader>
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                              {item.year}
                            </span>
                          </div>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                    <div className="w-1/2" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-border -mt-4 mb-4" />
                  )}
                </motion.div>
              ))}
            </div> */}
            <motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col gap-y-3 mb-5"
              >
                <motion.h4 className="text-xl text-brand-subheading max-w-xl font-medium">
                  We help creators and wellness brands with Done-For-You
                  ambience and meditation videos that grow your audience and
                  keep viewers coming back ambience and meditation videos that
                  grow your audience and keep viewers coming back
                </motion.h4>
              </motion.div>
              <motion.div>
                <div className="my-4">
                  <div className="grid grid-cols-2 gap-6">
                    {AboutSectionJobHistory.map((item) => (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        key={item.id}
                        className="space-y-2 border border-terracotta p-4 rounded-lg text-center h-[150px] flex flex-col justify-center items-center"
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
