import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as motion from "framer-motion/client";
import { BarChart3, Brain, Settings, ShoppingCart } from "lucide-react";
const services = [
  {
    key: "guidedMeditation",
    icon: Brain,
    title: "Guided Meditation",
    description:
      "Experience calming guided meditations to help you relax and focus.",
  },
  {
    key: "audienceGrowth",
    icon: BarChart3,
    title: "Audience Growth",
    description:
      "Grow your channel with strategies tailored for meditation and ambience content.",
  },
  {
    key: "videoCustomization",
    icon: Settings,
    title: "Video Customization",
    description:
      "Personalize your ambience and meditation videos with unique settings.",
  },
  {
    key: "monetization",
    icon: ShoppingCart,
    title: "Monetization",
    description:
      "Unlock revenue opportunities with high-quality meditation and ambience videos.",
  },
];
const ServiceSection = () => {
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
            My Services
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
              <Card className="h-full bg-bg-cream hover:shadow-lg transition-all gap-2 hover:scale-101 border border-terracotta p-4">
                <CardHeader className="p-2">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-terracotta/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-brand-highlight" />
                    </div>
                    <CardTitle className="text-xl text-brand-highlight font-medium">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-brand-body">
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
