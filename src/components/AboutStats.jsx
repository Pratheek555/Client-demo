import { motion } from "framer-motion";

export default function AboutStats() {
  return (
    <section
      className="bg-[var(--color-steel-50)] px-4 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10"
      id="about"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-8 px-2 py-2 lg:grid-cols-[180px_minmax(0,1fr)_320px] lg:items-start lg:gap-12"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
      >
        <div className="pt-2">
          <p className="text-sm font-medium text-[var(--color-brand-blue)]">
            About our company
          </p>
        </div>

        <div>
          <p className="max-w-[34ch] text-2xl leading-[1.55] tracking-[-0.03em] text-[var(--color-brand-blue-deep)] lg:text-[2rem]">
            Westeel Building OPC Pvt Ltd is a fast-growing construction company
            specializing in steel structures and modern building technologies.
            We deliver high-quality construction solutions for warehouses,
            factories, industrial sheds, modular prefab buildings, and rooftop
            structures. Our mission is to provide cost-effective, durable, and
            fast construction solutions to clients across India.
          </p>
        </div>

        <aside className="rounded-[28px] border border-[rgba(0,87,173,0.1)] bg-[linear-gradient(180deg,rgba(10,34,68,1),rgba(13,36,71,0.96))] p-5 shadow-[0_24px_50px_-40px_rgba(6,16,29,0.32)] sm:p-6">
          <div className="rounded-[24px] border border-[rgba(242,192,110,0.14)] bg-[linear-gradient(180deg,rgba(0,87,173,0.12),rgba(255,255,255,0.03))] p-6">
            <p className="text-5xl font-extrabold tracking-[-0.06em] text-[var(--color-brand-gold)] sm:text-6xl">
              1,200+
            </p>
            <p className="mt-3 text-base font-semibold text-white/88">
              Successful projects completed
            </p>
            <p className="mt-4 text-sm leading-6 text-[rgba(238,244,250,0.72)]">
              Trusted by developers, owners, and public-sector teams for
              residential builds, structural upgrades, and complex mixed-use
              programs.
            </p>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}
