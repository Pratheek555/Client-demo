import { motion } from "framer-motion";
import Footer from "./Footer";
import GlassContainer from "./GlassContainer";
import Navbar from "./Navbar";
import ProjectsSection from "./ProjectsSection";

const projectHighlights = [
  {
    title: "Category-led browsing",
    description:
      "Filter project work across PEB structures, roofing, flooring, fabrication, and civil execution.",
  },
  {
    title: "Execution-focused visuals",
    description:
      "Real project imagery gives visitors a clearer sense of scope, quality, and on-site delivery capability.",
  },
  {
    title: "Ready for client conversations",
    description:
      "The page keeps a direct path back to contact so project discovery flows into enquiry without friction.",
  },
  {
    title: "Proven project scale & diversity",
    description:
      "From small installations to large industrial builds, the portfolio reflects the range, consistency, and reliability of our execution.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative isolate min-h-screen w-screen overflow-x-hidden bg-[var(--color-brand-blue-ink)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(0,87,173,0.34),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(226,139,23,0.2),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(10,34,68,0.18),_transparent_28%)]" />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 h-full"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <GlassContainer>
          <Navbar currentPath="/projects" />

          <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
            <div className="mx-auto max-w-[1360px]">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-8 rounded-[34px] border border-[rgba(242,192,110,0.14)] bg-[linear-gradient(160deg,rgba(10,34,68,0.94),rgba(6,16,29,0.92))] px-5 py-8 shadow-[0_32px_90px_-44px_rgba(0,0,0,0.4)] sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:px-10 lg:py-12"
                initial={{ opacity: 0, y: 28 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
              >
                <div className="max-w-[760px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brand-gold-soft)]">
                    Westeel Project Portfolio
                  </p>
                  <h1 className="mt-4 max-w-[11ch] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.6rem]">
                    Projects across steel, prefab, roofing, flooring, and civil work
                  </h1>
                  <p className="mt-6 max-w-[60ch] text-base leading-8 text-[rgba(238,244,250,0.78)] sm:text-lg">
                    Discover projects that showcase our strength in steel, prefab, roofing, flooring, and civil construction. Every build reflects our commitment to quality, efficiency, and reliable execution.
                  </p>
                  <p className="mt-4 max-w-[64ch] text-base leading-8 text-[rgba(238,244,250,0.7)] sm:text-lg">
                    Browse by category to find relevant work and understand the scale and standards we deliver across industries.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2">
                  {projectHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-[rgba(238,244,250,0.05)] p-5 backdrop-blur-xl"
                    >
                      <p className="text-lg font-bold text-white">
                        {item.title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[rgba(238,244,250,0.66)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <ProjectsSection />

          <Footer currentPath="/projects" />
        </GlassContainer>
      </motion.div>
    </main>
  );
}
