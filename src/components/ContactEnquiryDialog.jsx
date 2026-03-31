import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const CONTACT_EMAIL = "info@westeel.in";
const CONTACT_PHONE = "+91 98765 43210";

const initialFormState = {
  fullName: "",
  company: "",
  phone: "",
  message: "",
};

export default function ContactEnquiryDialog({ isOpen, onClose }) {
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const mailtoSubject = encodeURIComponent(
      `New enquiry from ${formState.fullName || "website visitor"}`,
    );

    const mailtoBody = encodeURIComponent(
      [
        "Contact request from the Westeel website",
        "",
        `Full name: ${formState.fullName}`,
        `Company: ${formState.company || "Not provided"}`,
        `Mobile number: ${formState.phone}`,
        "",
        "Message:",
        formState.message || "Not provided",
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormState(initialFormState);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(4,12,22,0.78)] px-4 py-6 backdrop-blur-sm"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-[560px] rounded-[30px] border border-[rgba(242,192,110,0.18)] bg-[linear-gradient(180deg,rgba(10,34,68,0.98),rgba(6,16,29,0.98))] p-5 shadow-[0_36px_90px_-40px_rgba(0,0,0,0.62)] sm:p-7"
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-gold-soft)]">
                  Contact Westeel
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                  Share your details
                </h2>
                <p className="mt-3 max-w-[44ch] text-sm leading-7 text-[rgba(238,244,250,0.72)] sm:text-[0.98rem]">
                  Enter your full name, company name, mobile number, and project
                  message. Your email app will open with the enquiry prefilled
                  for {CONTACT_EMAIL}.
                </p>
              </div>

              <button
                aria-label="Close contact form"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/80 transition hover:bg-white/10 hover:text-white"
                onClick={onClose}
                type="button"
              >
                ×
              </button>
            </div>

            <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
              <Field
                label="Full name"
                name="fullName"
                onChange={handleChange}
                placeholder="Your full name"
                required
                value={formState.fullName}
              />
              <Field
                label="Company name"
                name="company"
                onChange={handleChange}
                placeholder="Company name"
                value={formState.company}
              />
              <Field
                label="Mobile number"
                name="phone"
                onChange={handleChange}
                placeholder={CONTACT_PHONE}
                required
                type="tel"
                value={formState.phone}
              />

              <div className="hidden sm:block" />

              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-[rgba(238,244,250,0.84)]">
                  Message
                </span>
                <textarea
                  className="min-h-[132px] w-full rounded-[20px] border border-white/10 bg-[rgba(238,244,250,0.06)] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[rgba(238,244,250,0.38)] focus:border-[rgba(242,192,110,0.46)] focus:bg-[rgba(238,244,250,0.08)]"
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements."
                  value={formState.message}
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-[rgba(238,244,250,0.5)]">
                  You can also reach us directly at {CONTACT_EMAIL}.
                </p>

                <button
                  className="inline-flex min-h-12 items-center justify-center rounded-[20px] bg-[var(--color-brand-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-brand-blue-ink)] transition hover:bg-[var(--color-brand-gold-soft)]"
                  type="submit"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  onChange,
  placeholder,
  required = false,
  type = "text",
  value,
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-medium text-[rgba(238,244,250,0.84)]">
        {label}
      </span>
      <input
        className="h-12 w-full rounded-[20px] border border-white/10 bg-[rgba(238,244,250,0.06)] px-4 text-sm text-white outline-none transition placeholder:text-[rgba(238,244,250,0.38)] focus:border-[rgba(242,192,110,0.46)] focus:bg-[rgba(238,244,250,0.08)]"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </label>
  );
}
