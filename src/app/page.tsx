import AboutSection from "@/components/home/about-section/about-section";
import HeroSection from "@/components/home/hero-section";
import PortfolioSection from "@/components/home/portfolio/portfolio-section";
import ServiceSection from "@/components/home/service-section/service-section";
import TestimonialSection from "@/components/home/testimonial-section/testimonial-section";
import FaqSection from "@/components/home/faq-section/faq-section";
import ContactSection from "@/components/home/contact-section/contact-section";

export default function Home() {
  return (
    <main>
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <PortfolioSection />
      </section>
      <section>
        <ServiceSection />
      </section>
      <section>
        <TestimonialSection />
      </section>
      <section>
        <ContactSection />
      </section>
      <section>
        <FaqSection />
      </section>
    </main>
  );
}
