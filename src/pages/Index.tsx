import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedCounter from "@/components/AnimatedCounter";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Header />
      <Hero />
      <AnimatedCounter />
      <Features />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
