"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? "text-golden-honey fill-golden-honey"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <motion.div
      id="testimonials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.div className="container mx-auto px-4 flex flex-col gap-y-10 py-10 md:py-15">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold  uppercase mb-4">
            What <span className="gradient-text10">Clients Say</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <Swiper
          modules={[Autoplay, Controller, Navigation, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true}
          className="w-full h-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 0.98,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full max-w-2xl mx-auto bg-brand-secondary/10 border border-brand-secondary/10 hover:border-brand-secondary/40 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 h-full ">
                    {/* Quote Icon */}
                    <div className="w-full flex flex-col  items-center">
                      <div className="flex justify-center mb-4">
                        <Quote className="h-8 w-8 text-brand-secondary" />
                      </div>
                      {/* Rating */}
                      <div className="flex items-center justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-white text-base leading-relaxed mb-6 flex-grow max-w-2xl mx-auto">
                        &quot;{testimonial.content}&quot;
                      </p>

                      {/* Client Info */}
                      <div>
                        <div className="flex items-center w-full space-x-3">
                          <Avatar className="h-12 w-12 border-2 border-brand-secondary/20">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-brand-secondary/10 text-brand-secondary font-semibold">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-white text-xs">
                              {testimonial.role}
                            </p>
                            <p className="text-white text-xs font-medium">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSection;
