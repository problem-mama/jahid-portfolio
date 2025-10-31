"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as motion from "framer-motion/client";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { contactInfo, contactFormFields } from "../helper";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: contactInfo.address,
      href: "#",
    },
  ];

  return (
    <motion.div
      id="contact"
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
            <MessageCircle className="h-8 w-8 text-brand-highlight mr-3" />
            <h1 className="text-3xl font-bold  uppercase">
              <span className="text-brand-highlight"> Get In</span> Touch
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your meditation vision to life? Let&apos;s discuss
            your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-background border border-terracotta/20 hover:border-terracotta/40 transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-terracotta/10 rounded-lg">
                          <method.icon className="h-5 w-5 text-brand-highlight" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-muted-foreground text-sm mb-1">
                            {method.title}
                          </h3>
                          <p className="text-muted-foreground text-xs mb-2">
                            {method.description}
                          </p>
                          <a
                            href={method.href}
                            className="text-brand-highlight text-sm font-medium hover:underline"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background border border-terracotta/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-brand-highlight mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {contactFormFields.map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Label
                        htmlFor={field.id}
                        className="text-white font-medium"
                      >
                        {field.label}
                        {field.required && (
                          <span className="text-brand-highlight ml-1">*</span>
                        )}
                      </Label>

                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) =>
                          handleInputChange(field.id, e.target.value)
                        }
                        required={field.required}
                        className="mt-1"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="message" className="text-white font-medium">
                      Project Details
                      <span className="text-brand-highlight ml-1">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      className="w-full bg-brand-highlight text-brand-inverse hover:bg-brand-highlight/90 transition-colors duration-300"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
