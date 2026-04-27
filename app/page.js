import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <TechStack />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </SmoothScrollProvider>
  );
}
