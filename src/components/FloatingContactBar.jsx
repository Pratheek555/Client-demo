import { motion } from "framer-motion";
import { useState } from "react";
import ContactEnquiryDialog from "./ContactEnquiryDialog";

const WHATSAPP_NUMBER = "919876543210";

export default function FloatingContactBar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-4 bottom-4 z-40 hidden sm:bottom-6 lg:block">
        <div className="pointer-events-auto mx-auto max-w-[520px]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 rounded-[28px] border border-[rgba(242,192,110,0.22)] bg-[rgba(6,16,29,0.88)] p-2 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.35 }}
          >
            <a
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-[20px] bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#041b10] transition hover:brightness-105"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Westeel%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>

            <button
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-[20px] border border-white/10 bg-[rgba(238,244,250,0.08)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[rgba(238,244,250,0.14)]"
              onClick={() => setIsDialogOpen(true)}
              type="button"
            >
              <ContactCardIcon />
              Share Contact Details
            </button>
          </motion.div>
        </div>
      </div>

      <ContactEnquiryDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
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

function ContactCardIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.75 6.75A2.75 2.75 0 0 1 7.5 4h9A2.75 2.75 0 0 1 19.25 6.75v10.5A2.75 2.75 0 0 1 16.5 20h-9a2.75 2.75 0 0 1-2.75-2.75V6.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-1.5 6c.87-1.55 2.48-2.5 4-2.5s3.13.95 4 2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
