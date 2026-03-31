import { motion } from "framer-motion";
import { handleNavigationClick } from "../utils/navigation";

const serviceLinks = [
  {
    label: "PEB Structures",
    href: "/services#service-01",
  },
  {
    label: "Tubular Steel Structures",
    href: "/services#service-03",
  },
  {
    label: "Modular Buildings",
    href: "/services#service-05",
  },
  {
    label: "Execution Support",
    href: "/services#service-07",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-brand-blue-ink)] px-4 pb-8 pt-4 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12"
      id="contact"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] border border-[rgba(242,192,110,0.14)] bg-[linear-gradient(180deg,rgba(10,34,68,1),rgba(6,16,29,0.98))] px-5 py-8 shadow-[0_32px_80px_-52px_rgba(0,0,0,0.32)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.16 }}
      >
        <div className="grid gap-10 border-b border-white/10 pb-8 lg:grid-cols-[minmax(260px,1.05fr)_repeat(3,minmax(0,0.7fr))] lg:gap-8 lg:pb-10">
          <div>
            <img
              alt="Westeel logo"
              className="h-12 w-auto object-contain sm:h-14"
              src="/logo.png"
            />

            <p className="mt-6 max-w-[34ch] text-sm leading-7 text-[rgba(238,244,250,0.72)] sm:text-[0.98rem]">
              Westeel Building OPC Pvt Ltd delivers steel and modular
              construction systems built for speed, durability, and dependable
              execution across industrial, commercial, and residential projects.
            </p>
          </div>

          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                className="transition hover:text-[var(--color-brand-gold-soft)]"
                href={link.href}
                onClick={(event) => handleNavigationClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {serviceLinks.map((service) => (
              <a
                key={service.label}
                className="transition hover:text-[var(--color-brand-gold-soft)]"
                href={service.href}
                onClick={(event) => handleNavigationClick(event, service.href)}
              >
                {service.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <a
              className="transition hover:text-[var(--color-brand-gold-soft)]"
              href="mailto:info@westeel.in"
            >
              info@westeel.in
            </a>
            <a
              className="transition hover:text-[var(--color-brand-gold-soft)]"
              href="tel:+919876543210"
            >
              +91 98765 43210
            </a>
            <span>
              Westeel Building OPC Pvt Ltd
              <br />
              India
            </span>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-[rgba(238,244,250,0.52)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Westeel Building OPC Pvt Ltd. All rights reserved.</p>
          <p>Steel structures, prefab systems, and modular construction solutions.</p>
        </div>
      </motion.div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold text-[var(--color-brand-gold)]">{title}</p>
      <div className="mt-4 flex flex-col gap-3 text-sm leading-6 text-[rgba(238,244,250,0.68)]">
        {children}
      </div>
    </div>
  );
}
