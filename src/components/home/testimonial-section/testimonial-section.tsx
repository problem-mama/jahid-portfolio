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
      className="bg-beige"
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
          <h1 className="text-xl font-bold text-brand-highlight uppercase underline mb-4">
            What Clients Say
          </h1>
          <p className="text-lg text-brand-subheading max-w-2xl mx-auto">
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
                <Card className="h-full max-w-2xl mx-auto bg-cream border border-terracotta/20 hover:border-terracotta/40 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 h-full ">
                    {/* Quote Icon */}
                    <div className="w-full flex flex-col !justify-center !items-center">
                      <div className="flex justify-center mb-4">
                        <Quote className="h-8 w-8 text-brand-highlight/60" />
                      </div>
                      {/* Rating */}
                      <div className="flex items-center justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-brand-body text-base leading-relaxed mb-6 flex-grow max-w-2xl mx-auto">
                        &quot;{testimonial.content}&quot;
                      </p>

                      {/* Client Info */}
                      <div>
                        <div className="flex items-center w-full space-x-3">
                          <Avatar className="h-12 w-12 border-2 border-terracotta/20">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-terracotta/10 text-brand-highlight font-semibold">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-semibold text-brand-heading text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-brand-subheading text-xs">
                              {testimonial.role}
                            </p>
                            <p className="text-brand-subheading text-xs font-medium">
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
