import { motion } from "framer-motion";

const industries = [
  {
    title: "Logistics & Warehousing",
    description:
      "Distribution centers, storage facilities, and fulfillment environments designed for clear spans, efficient movement, and future expansion.",
  },
  {
    title: "Manufacturing Industries",
    description:
      "Production-ready steel structures built for heavy equipment loads, workflow efficiency, and dependable operational uptime.",
  },
  {
    title: "Infrastructure Development",
    description:
      "Engineered systems that support public and private infrastructure projects where speed, durability, and execution discipline matter.",
  },
  {
    title: "Commercial Buildings",
    description:
      "Flexible structural solutions for offices, retail developments, and mixed-use spaces that need both performance and visual clarity.",
  },
  {
    title: "Residential Projects",
    description:
      "Modular and steel-led residential builds tailored for fast delivery, long-term strength, and modern living requirements.",
  },
];

export default function IndustriesSection() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-gold)]">
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
            <motion.article
              key={industry.title}
              animate={{ opacity: 1, y: 0 }}
              className={`group rounded-[28px] border border-[rgba(0,87,173,0.12)] bg-[var(--color-surface-muted)] p-6 shadow-[0_24px_54px_-44px_rgba(10,34,68,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(226,139,23,0.28)] hover:shadow-[0_30px_64px_-42px_rgba(0,87,173,0.22)] sm:p-7 ${
                index === 4 ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
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
            </motion.article>
          ))}
        </div>
      </motion.div>
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
