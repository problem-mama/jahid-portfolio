import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "framer-motion/client";
import {
  Home,
  Moon,
  Snowflake,
  Sparkles,
  BarChart3,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    key: "ambience",
    icon: Home,
    title: "Ambience",
    description:
      "High-quality cozy scenes including cabins, rooms, cafés, luxury apartments, rustic cabins, and medieval settings — all designed with fireplaces for a calming vibe. Videos can be 1–12 hours long.",
  },
  {
    key: "sleep",
    icon: Moon,
    title: "Sleep",
    description:
      "Extended visuals designed to help viewers unwind, relax, and drift into restful sleep for hours at a time — perfect for deep, uninterrupted rest.",
  },
  {
    key: "seasonal",
    icon: Snowflake,
    title: "Seasonal",
    description:
      "Ambience videos for every season: autumn, winter, snow, Halloween, Christmas, Thanksgiving, or any seasonal idea you have in mind. Videos can be 1–12 hours long.",
  },
  {
    key: "custom",
    icon: Sparkles,
    title: "Custom",
    description:
      "Unique, themed ambience videos created exactly as you imagine. Whatever concept you have in mind, I can bring it to life in any length you need.",
  },
  {
    key: "audienceGrowth",
    icon: BarChart3,
    title: "Audience Growth",
    description:
      "Guidance on growing your channel effectively — learn strategies for scheduling uploads, optimizing video length, perfect timing, SEO, and all YouTube best practices to maximize growth.",
  },
  {
    key: "monetization",
    icon: ShoppingCart,
    title: "Monetization",
    description:
      "Build a passive income source with a faceless YouTube channel. I’ll help new creators set up and grow their channels to earn money while you sleep, travel, or relax — no experience required.",
  },
];

const ServiceSection = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.div className="container mx-auto px-4 flex flex-col gap-y-10   py-10 md:py-15">
        <div>
          <h1 className="text-4xl font-extrabold  uppercase text-center">
            My <span className="gradient-text10">Services</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-brand-secondary/10 hover:shadow-lg transition-all gap-2 hover:scale-101 border border-brand-secondary/10 p-4">
                <CardHeader className="p-2">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-brand-secondary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-brand-secondary" />
                    </div>
                    <CardTitle className="text-xl text-brand-secondary font-medium">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceSection;
