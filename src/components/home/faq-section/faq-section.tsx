"use client";

import { Card, CardContent } from "@/components/ui/card";
import * as motion from "framer-motion/client";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqs } from "../helper";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      id="faq"
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
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-brand-highlight mr-3" />
            <h1 className="text-xl font-bold text-brand-highlight uppercase underline">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-lg text-brand-subheading max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Here are the most common
            questions about our meditation video services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card className="bg-cream border border-terracotta/20 hover:border-terracotta/40 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-terracotta/5 transition-colors duration-200"
                  >
                    <h3
                      className={cn(
                        "text-lg font-semibold text-brand-heading pr-4",
                        !openItems.includes(faq.id) && "truncate"
                      )}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="h-5 w-5 text-brand-highlight flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-brand-highlight flex-shrink-0" />
                      )}
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(faq.id) ? "auto" : 0,
                      opacity: openItems.includes(faq.id) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-4">
                      <div className="border-t border-terracotta/10 pt-4">
                        <p className="text-brand-body leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FaqSection;
