import { motion } from "framer-motion";
import AboutStats from "./AboutStats";
import Footer from "./Footer";
import GlassContainer from "./GlassContainer";
import Hero from "./Hero";
import IndustriesSection from "./IndustriesSection";
import Navbar from "./Navbar";
import ScrollProgressLine from "./ScrollProgressLine";
import Services from "./Services";

export default function LandingPage() {
  return (
    <main className="relative isolate min-h-screen w-screen overflow-x-hidden bg-[var(--color-brand-blue-ink)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(0,87,173,0.34),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(226,139,23,0.2),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(10,34,68,0.18),_transparent_28%)]" />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 h-full"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <ScrollProgressLine startAfterId="home" />
        <GlassContainer>
          <Navbar currentPath="/" />
          <Hero />
          <AboutStats />
          <Services />
          <IndustriesSection />
          <Footer currentPath="/" />
        </GlassContainer>
      </motion.div>
    </main>
  );
}
