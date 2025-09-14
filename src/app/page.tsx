import AboutSection from "@/components/home/about-section/about-section";
import HeroSection from "@/components/home/hero-section";
import ServiceSection from "@/components/home/service-section/service-section";

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
        <ServiceSection />
      </section>
    </main>
  );
}
