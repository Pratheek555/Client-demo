import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactEnquiryDialog from "./ContactEnquiryDialog";
import { WHATSAPP_URL } from "../utils/contact";

const heroSlides = ["/landing_image.PNG",
  "/landingpage_slideshow/IMG_MODULAR.jpeg",
  "/landingpage_slideshow/IMG_2900.PNG"];

function ArrowCircleIcon() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-blue-deep)] transition group-hover:translate-x-0.5">
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </svg>
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.4 2.2 11.82c0 1.74.46 3.44 1.32 4.95L2 22l5.4-1.42a9.8 9.8 0 0 0 4.63 1.18h.01c5.42 0 9.83-4.4 9.83-9.82 0-2.63-1.02-5.1-2.82-6.99Zm-7.02 15.19h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.2.84.86-3.12-.2-.32a8.1 8.1 0 0 1-1.24-4.3c0-4.49 3.65-8.14 8.14-8.14 2.17 0 4.21.85 5.74 2.4a8.06 8.06 0 0 1 2.38 5.74c0 4.49-3.66 8.14-8.13 8.14Zm4.46-6.07c-.24-.12-1.43-.7-1.65-.77-.22-.08-.37-.12-.53.12-.16.24-.61.77-.75.93-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.76-.19-.46-.39-.4-.53-.4h-.45c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.06 3.6.57.24 1.02.38 1.37.49.58.18 1.11.15 1.53.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export default function Hero() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden px-4 pb-0 pt-0 sm:px-6 lg:px-8"
      id="home"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <img
              key={slide}
              alt="Westeel landing background"
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1600ms] ease-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
              src={slide}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[rgba(17,14,12,0.42)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,13,11,0.68)_0%,rgba(24,19,15,0.56)_35%,rgba(20,17,14,0.48)_68%,rgba(12,10,9,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(226,139,23,0.18),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(120,128,138,0.12),_transparent_28%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-30">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="mx-auto flex max-w-[760px] flex-col items-center text-center [text-shadow:0_2px_18px_rgba(0,0,0,0.65)]"
          initial={{ opacity: 0, x: -32 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full bg-[rgba(28,24,20,0.44)] px-4 py-2 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-gold-soft)] shadow-[0_18px_30px_-28px_rgba(0,0,0,0.8)] backdrop-blur-md">
            Building the Future, Today
          </span>

          <h1 className="mt-7 text-[3.5rem] font-black leading-[0.88] tracking-[-0.07em] text-[var(--color-brand-gold)] [text-shadow:0_6px_30px_rgba(0,0,0,0.5)] sm:mt-8 sm:text-6xl sm:leading-[0.9] sm:tracking-[-0.065em] lg:text-[5.25rem]">
            <span className="block">Steel &amp;</span>
            <span className="block">Modular</span>
            <span className="block text-[3.35rem] leading-[0.9] sm:text-inherit sm:leading-inherit">
              Construction
            </span>
          </h1>

          <p className="mt-5 max-w-[30ch] text-[0.98rem] leading-8 text-[rgba(238,244,250,0.8)] sm:mt-6 sm:max-w-[44ch] sm:text-lg sm:text-[rgba(238,244,250,0.86)]">
            Westeel Building (OPC) Pvt Ltd provides innovative construction
            solutions including Pre-Engineered Buildings, Modular Prefab
            Structures, Industrial Sheds, and Terrace Rooftop Structures for
            commercial, industrial, and residential applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-[rgba(24,20,18,0.56)] px-2 py-2 pl-6 text-sm font-semibold text-white shadow-[0_26px_40px_-28px_rgba(0,0,0,0.52)] backdrop-blur-lg transition duration-300 hover:scale-[1.02] hover:bg-[rgba(36,30,24,0.68)]"
              href="#about"
            >
              Start Your Project
              <ArrowCircleIcon />
            </a>
            <div className="rounded-full bg-[rgba(24,20,18,0.48)] px-5 py-3 text-sm font-medium text-[rgba(238,244,250,0.82)] backdrop-blur-xl">
              24/7 project visibility across design, build, and handover
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none fixed inset-y-0 right-4 z-40 flex items-center lg:hidden">
        <div className="pointer-events-auto flex flex-col gap-3">
          <a
            aria-label="Chat on WhatsApp"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-[#0f1b12] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.7)] transition hover:scale-105"
            href={WHATSAPP_URL}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon />
          </a>

          <button
            aria-label="Share contact details"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(24,20,18,0.72)] text-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md transition hover:scale-105"
            onClick={() => setIsContactDialogOpen(true)}
            type="button"
          >
            <ContactIcon />
          </button>
        </div>
      </div>

      {heroSlides.length > 1 ? (
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {heroSlides.map((slide, index) => {
            const isActive = index === activeSlide;

            return (
              <button
                key={`${slide}-dot`}
                aria-label={`Show slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-10 bg-[var(--color-brand-gold)]"
                    : "w-2.5 bg-white/45 hover:bg-white/75"
                }`}
                onClick={() => setActiveSlide(index)}
                type="button"
              />
            );
          })}
        </div>
      ) : null}

      <ContactEnquiryDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
      />
    </section>
  );
}
