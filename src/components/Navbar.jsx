import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { handleNavigationClick } from "../utils/navigation";
import { WHATSAPP_URL } from "../utils/contact";

const navItems = [
  { label: "Home", href: "/", activePath: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services", activePath: "/services" },
  { label: "Projects", href: "/projects", activePath: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar({ currentPath = "/" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-5">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4">
        <a
          className="flex shrink-0 items-center"
          href="/"
          onClick={(event) => handleNavigationClick(event, "/")}
        >
          <img
            alt="Westeel logo"
            className="h-28 w-auto object-contain sm:h-28"
            src="/logo.png"
          />
        </a>

        <div className="hidden flex-1 justify-center lg:flex">
          <nav className="flex items-center gap-1 rounded-2xl border border-white/12 bg-[rgba(10,34,68,0.62)] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(242,192,110,0.16)] backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                aria-current={
                  item.activePath === currentPath ? "page" : undefined
                }
                className={`rounded-xl px-4 py-1.5 text-sm font-medium transition ${
                  item.activePath === currentPath
                    ? "bg-white/10 text-[var(--color-brand-gold-soft)]"
                    : "text-[rgba(238,244,250,0.76)] hover:bg-white/8 hover:text-[var(--color-brand-gold-soft)]"
                }`}
                href={item.href}
                onClick={(event) => handleNavigationClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden shrink-0 lg:block">
          <a
            className="inline-flex items-center rounded-full bg-[var(--color-brand-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-brand-blue-deep)] shadow-[0_18px_32px_-24px_rgba(6,16,29,0.9)] transition hover:bg-[var(--color-brand-gold-soft)]"
            href={WHATSAPP_URL}
            rel="noreferrer"
            target="_blank"
          >
            Get Started
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-[rgba(10,34,68,0.58)] text-[var(--color-brand-gold-soft)] backdrop-blur-md transition hover:bg-[rgba(10,34,68,0.76)] lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-4 top-[84px] z-30 rounded-[24px] border border-white/12 bg-[rgba(10,34,68,0.86)] p-4 backdrop-blur-xl sm:inset-x-6 lg:hidden"
            exit={{ opacity: 0, y: -12 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  aria-current={
                    item.activePath === currentPath ? "page" : undefined
                  }
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[rgba(238,244,250,0.8)] transition hover:bg-white/8 hover:text-[var(--color-brand-gold-soft)]"
                  href={item.href}
                  onClick={(event) => {
                    handleNavigationClick(event, item.href);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-brand-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-brand-blue-deep)] transition hover:bg-[var(--color-brand-gold-soft)]"
                href={WHATSAPP_URL}
                onClick={() => setIsOpen(false)}
                rel="noreferrer"
                target="_blank"
              >
                Get Started
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
