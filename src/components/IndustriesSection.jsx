import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    title: "Logistics & Warehousing",
    image: "/projects/Logistic_W.png",
    description:
      "Distribution centers, storage facilities, and fulfillment environments designed for clear spans, efficient movement, and future expansion.",
  },
  {
    title: "Manufacturing Industries",
    image: "/projects/manufacturing.png",
    description:
      "Production-ready steel structures built for heavy equipment loads, workflow efficiency, and dependable operational uptime.",
  },
  {
    title: "Infrastructure Development",
    image: "/projects/infrastructure_D.png",
    description:
      "Engineered systems that support public and private infrastructure projects where speed, durability, and execution discipline matter.",
  },
  {
    title: "Commercial Buildings",
    image: "/projects/commercial_b.png",
    description:
      "Flexible structural solutions for offices, retail developments, and mixed-use spaces that need both performance and visual clarity.",
  },
  {
    title: "Modular Homes",
    image: "/projects/modular_H.png",
    description:
      "Modular and steel-led residential builds tailored for fast delivery, long-term strength, and modern living requirements.",
  },
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useEffect(() => {
    if (!selectedIndustry) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndustry(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndustry]);

  return (
    <section
      className="bg-[var(--color-steel-50)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      id="industries"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-10 rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-8 shadow-[0_32px_80px_-52px_rgba(10,34,68,0.18)] sm:px-8 sm:py-10 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-10 lg:py-12"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-brand-gold)] sm:text-base">
              Industries We Serve
            </p>
            <h2 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-brand-blue-deep)] sm:text-5xl">
              Built for diverse sectors with different structural demands
            </h2>
            <p className="mt-6 max-w-[34ch] text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              Westeel delivers steel and modular construction systems across
              industrial, commercial, and residential sectors where project
              speed, durability, and practical execution all need to align.
            </p>
          </div>

          <div className="mt-8 flex items-end gap-4 rounded-[28px] border border-[rgba(0,87,173,0.12)] bg-[linear-gradient(180deg,rgba(10,34,68,1),rgba(13,36,71,0.96))] p-6">
            <span className="text-5xl font-extrabold tracking-[-0.08em] text-[var(--color-brand-gold)] sm:text-6xl">
              05
            </span>
            <p className="max-w-[18ch] pb-1 text-sm leading-6 text-[rgba(238,244,250,0.76)]">
              core industry segments actively supported by our construction
              systems
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.title}
              animate={{ opacity: 1, y: 0 }}
              className={`group text-left rounded-[28px] border border-[rgba(0,87,173,0.12)] bg-[var(--color-surface-muted)] p-6 shadow-[0_24px_54px_-44px_rgba(10,34,68,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(226,139,23,0.28)] hover:shadow-[0_30px_64px_-42px_rgba(0,87,173,0.22)] sm:p-7 ${
                index === 4 ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              onClick={() => setSelectedIndustry(industry)}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.22em] text-[rgba(10,34,68,0.42)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(226,139,23,0.24)] bg-[rgba(0,87,173,0.08)] text-[var(--color-brand-blue)] transition group-hover:scale-105 group-hover:text-[var(--color-brand-gold)]">
                  <IndustryGlyph />
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-brand-blue-deep)]">
                {industry.title}
              </h3>
              <p className="mt-4 max-w-[34ch] text-sm leading-7 text-[var(--color-text-muted)] sm:text-[0.98rem]">
                {industry.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-gold)] opacity-0 transition-opacity group-hover:opacity-100">
                View Project Image
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(3,10,18,0.92)] p-4 sm:p-6"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/12 bg-[rgba(8,19,33,0.82)] shadow-[0_38px_120px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <button
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-[rgba(6,16,29,0.72)] text-2xl leading-none text-white transition hover:bg-[rgba(6,16,29,0.92)]"
                onClick={() => setSelectedIndustry(null)}
              >
                ×
              </button>
              <div className="grid lg:grid-cols-[1fr_300px]">
                <div className="flex items-center justify-center bg-[rgba(6,16,29,0.4)] p-4">
                  <img
                    alt={selectedIndustry.title}
                    className="max-h-[70vh] w-auto max-w-full rounded-[20px] object-contain shadow-2xl"
                    src={selectedIndustry.image}
                  />
                </div>
                <div className="flex flex-col justify-between p-8 text-white">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)]">
                      Industry Solution
                    </p>
                    <h3 className="mt-4 text-3xl font-bold tracking-tight">
                      {selectedIndustry.title}
                    </h3>
                    <p className="mt-6 text-sm leading-7 text-[rgba(238,244,250,0.72)]">
                      {selectedIndustry.description}
                    </p>
                  </div>
                  <button
                    className="mt-8 rounded-full bg-[var(--color-brand-gold)] px-6 py-3 text-sm font-bold text-[var(--color-brand-blue-deep)] transition hover:bg-[var(--color-brand-gold-soft)]"
                    onClick={() => setSelectedIndustry(null)}
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function IndustryGlyph() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M4 20h16" />
      <path d="M6 20V8l6-4 6 4v12" />
      <path d="M10 12h4" />
      <path d="M10 16h4" />
    </svg>
  );
}
