import { motion } from "framer-motion";
import { handleNavigationClick } from "../utils/navigation";

const services = [
  {
    number: "01",
    title: "Pre-Engineered Buildings",
    description:
      "Optimized steel building systems designed for faster delivery, lower site disruption, and dependable long-span performance.",
  },
  {
    number: "02",
    title: "Industrial Shed Construction",
    description:
      "Heavy-duty sheds engineered for manufacturing, fabrication, logistics, and production environments with practical structural planning.",
  },
  {
    number: "03",
    title: "Warehouse Construction",
    description:
      "Efficient warehouse spaces built for storage, movement, loading access, and future operational scale without unnecessary complexity.",
  },
  {
    number: "04",
    title: "Modular Prefabricated Buildings",
    description:
      "Factory-informed modular solutions that reduce build time while maintaining quality, flexibility, and consistent on-site execution.",
  },
  {
    number: "05",
    title: "Terrace Rooftop Construction",
    description:
      "Smart rooftop structures for residential and commercial properties, tailored for expansion, utility, and long-term durability.",
  },
];

export default function Services() {
  return (
    <section
      className="bg-[var(--color-steel-50)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      id="services"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-8 shadow-[0_32px_80px_-52px_rgba(10,34,68,0.18)] sm:px-8 sm:py-10 lg:px-10 lg:py-14"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-y-12">
          <div className="text-center lg:col-span-2 lg:pt-6 lg:text-left">
            <p className="text-sm font-semibold text-[var(--color-brand-blue)]">
              Our Services
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-3 lg:max-w-[760px] lg:justify-self-center">
            <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-brand-gold)] sm:text-base">
              Our services
            </p>
            <h2 className="mx-auto mt-4 max-w-[13ch] text-center text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-[var(--color-brand-blue-deep)] sm:text-5xl lg:text-[4.6rem]">
              Built for projects that need speed, precision, and structural reliability
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-center text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              Westeel delivers steel and prefab construction systems for industrial,
              commercial, and residential builds that need fast timelines without
              compromising structural performance.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                className="inline-flex items-center rounded-full bg-[var(--color-brand-blue-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-blue)]"
                href="/services"
                onClick={(event) => handleNavigationClick(event, "/services")}
              >
                Explore all services
              </a>
            </div>
          </div>

          <article className="flex justify-center lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:justify-start lg:pt-12">
            <ServiceTextBlock service={services[0]} />
          </article>

          <article className="flex justify-center lg:col-span-3 lg:col-start-4 lg:row-start-2 lg:justify-start lg:pt-28">
            <ServiceTextBlock service={services[1]} />
          </article>

          <article className="flex justify-center lg:col-span-3 lg:col-start-9 lg:row-start-2 lg:justify-start lg:pt-10">
            <ServiceTextBlock service={services[2]} />
          </article>

          <article className="flex justify-center lg:col-span-3 lg:col-start-2 lg:row-start-3 lg:justify-start lg:-mt-2">
            <ServiceTextBlock service={services[3]} />
          </article>

          <article className="flex justify-center lg:col-span-3 lg:col-start-8 lg:row-start-3 lg:justify-start lg:-mt-6">
            <ServiceTextBlock service={services[4]} />
          </article>
        </div>
      </motion.div>
    </section>
  );
}

function ServiceTextBlock({ service }) {
  return (
    <div className="max-w-[280px] text-center lg:text-left">
      <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-brand-gold)] lg:min-w-10">
          [{service.number}]
        </span>
        <div>
          <h3 className="text-base font-semibold leading-6 text-[var(--color-brand-blue-deep)]">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)] sm:text-[0.95rem]">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
