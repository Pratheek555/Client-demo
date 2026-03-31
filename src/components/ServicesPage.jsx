import { motion } from "framer-motion";
import Footer from "./Footer";
import GlassContainer from "./GlassContainer";
import Navbar from "./Navbar";

const serviceSections = [
  {
    id: "service-01",
    number: "01",
    title: "Pre-Engineered Building (PEB) Structures",
    description:
      "We provide complete Pre-Engineered Building solutions for large-span industrial and commercial buildings. PEB technology allows structures to be manufactured with high precision and installed quickly on site.",
    lists: [
      {
        title: "Applications",
        items: [
          "Industrial factories",
          "Warehouses & logistics hubs",
          "Industrial sheds",
          "Commercial buildings",
          "Distribution centers",
        ],
      },
      {
        title: "Key Benefits",
        items: [
          "Faster construction time",
          "Cost-efficient structural system",
          "Large column-free spaces",
          "Durable and low maintenance",
        ],
      },
    ],
  },
  {
    id: "service-02",
    number: "02",
    title: "Conventional Steel Building Structures",
    description:
      "Our team constructs custom conventional steel structures designed according to project load requirements and architectural specifications.",
    lists: [
      {
        title: "Applications",
        items: [
          "Multi-storey steel buildings",
          "Industrial plants",
          "Commercial complexes",
          "Infrastructure steel frameworks",
        ],
      },
    ],
  },
  {
    id: "service-03",
    number: "03",
    title: "Tubular Steel Structure Buildings",
    description:
      "We specialize in tubular steel structural systems that provide high strength with lightweight structural members.",
    lists: [
      {
        title: "Applications",
        items: [
          "Stadium roofing structures",
          "Space frame buildings",
          "Industrial sheds",
          "Airport and terminal structures",
          "Architectural steel frameworks",
        ],
      },
    ],
  },
  {
    id: "service-04",
    number: "04",
    title: "Elevated Steel Structures",
    description:
      "We design and build elevated steel structural platforms and support systems used in industrial environments and equipment installations.",
    lists: [
      {
        title: "Applications",
        items: [
          "Mezzanine floors",
          "Industrial equipment platforms",
          "Elevated machine support structures",
          "Control rooms and plant platforms",
        ],
      },
    ],
  },
  {
    id: "service-05",
    number: "05",
    title: "Prefabricated Modular Homes & Buildings",
    description:
      "We provide modern prefabricated modular building solutions that are faster, cost-efficient, and environmentally friendly compared to conventional construction.",
    lists: [
      {
        title: "Applications",
        items: [
          "Residential modular homes",
          "Factory offices",
          "Staff accommodation buildings",
          "Resort cottages & farmhouses",
          "Vehicle showrooms",
          "Wedding halls & event halls",
          "Rooftop homes and extensions",
          "Studio halls",
          "Rooftop classrooms",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Rapid construction and installation",
          "Lower project cost",
          "Flexible and expandable design",
          "Minimal construction waste",
          "Strong and durable steel structures",
        ],
      },
    ],
  },
  {
    id: "service-06",
    number: "06",
    title: "Industrial, Commercial & Residential Civil Construction",
    description:
      "In addition to steel structures, we also execute civil construction works for industrial, commercial, and residential projects.",
    lists: [
      {
        title: "Scope of Work",
        items: [
          "Industrial building construction",
          "Commercial structures",
          "Residential buildings",
          "Foundations and structural civil work",
          "Site development works",
        ],
      },
    ],
  },
  {
    id: "service-07",
    number: "07",
    title: "Design, Engineering & Project Execution Support",
    description:
      "We provide professional structural design and engineering services through experienced engineering partners and consultants.",
    lists: [
      {
        title: "Services Include",
        items: [
          "Structural design & engineering",
          "Steel structure detailing",
          "Project planning and technical support",
          "Fabrication coordination",
          "On-site erection and installation",
        ],
      },
    ],
    note:
      "Our flexible execution model allows us to work with client-supplied materials, outsourced fabrication, or full project contracts depending on project requirements.",
  },
];

const whyChooseWesteel = [
  "Specialized in steel structural construction",
  "Flexible project execution model",
  "Faster project delivery",
  "Cost-efficient solutions for industrial clients",
  "Experienced in modular and prefabricated construction",
];

const deliveryHighlights = [
  {
    title: "Engineering-driven delivery",
    description:
      "Integrated support across structural design, detailing, fabrication coordination, and erection planning.",
  },
  {
    title: "Built for multiple sectors",
    description:
      "Industrial, commercial, residential, institutional, and infrastructure-oriented construction systems.",
  },
  {
    title: "Execution across India",
    description:
      "Serving manufacturing companies, logistics operators, developers, contractors, and institutional clients.",
  },
];

export default function ServicesPage() {
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
          <Navbar currentPath="/services" />

          <section
            className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36"
            id="services-hero"
          >
            <div className="mx-auto max-w-[1360px]">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-8 rounded-[34px] border border-[rgba(242,192,110,0.14)] bg-[linear-gradient(160deg,rgba(10,34,68,0.94),rgba(6,16,29,0.92))] px-5 py-8 shadow-[0_32px_90px_-44px_rgba(0,0,0,0.4)] sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:px-10 lg:py-12"
                initial={{ opacity: 0, y: 28 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
              >
                <div className="max-w-[760px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-brand-gold-soft)]">
                    Westeel Building OPC Pvt Ltd
                  </p>
                  <h1 className="mt-4 max-w-[13ch] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.6rem]">
                    Industrial steel structures and prefabricated building solutions
                  </h1>
                  <p className="mt-6 max-w-[60ch] text-base leading-8 text-[rgba(238,244,250,0.78)] sm:text-lg">
                    At Westeel Building OPC Pvt Ltd, we deliver engineering-driven
                    steel construction and prefabricated building solutions for
                    industrial, commercial, and residential projects.
                  </p>
                  <p className="mt-4 max-w-[64ch] text-base leading-8 text-[rgba(238,244,250,0.7)] sm:text-lg">
                    Our services cover design, fabrication, and erection of
                    structural steel buildings, along with modern modular
                    construction systems that ensure faster project completion,
                    structural strength, and long-term reliability.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[28px] border border-[rgba(242,192,110,0.16)] bg-[rgba(238,244,250,0.06)] p-6 backdrop-blur-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-gold)]">
                      Who we work with
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[rgba(238,244,250,0.76)] sm:text-[0.98rem]">
                      Manufacturing companies, logistics operators, developers,
                      infrastructure contractors, and institutional clients
                      across India.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {deliveryHighlights.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[24px] border border-white/10 bg-[rgba(238,244,250,0.05)] p-5"
                      >
                        <p className="text-sm font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[rgba(238,244,250,0.66)]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[var(--color-steel-50)] px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
            <div className="mx-auto max-w-[1360px]">
              <div className="grid gap-6 lg:grid-cols-2">
                {serviceSections.map((service, index) => (
                  <motion.article
                    key={service.id}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_32px_80px_-52px_rgba(10,34,68,0.18)] sm:p-8"
                    id={service.id}
                    initial={{ opacity: 0, y: 28 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: 0.08 * index,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-semibold tracking-[0.22em] text-[var(--color-brand-gold)]">
                        [{service.number}]
                      </span>
                      <span className="rounded-full bg-[rgba(0,87,173,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-blue)]">
                        Steel Construction
                      </span>
                    </div>

                    <h2 className="mt-6 max-w-[18ch] text-3xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-brand-blue-deep)] sm:text-[2.15rem]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-[0.98rem]">
                      {service.description}
                    </p>

                    <div
                      className={`mt-8 grid gap-6 ${
                        service.lists.length > 1 ? "lg:grid-cols-2" : ""
                      }`}
                    >
                      {service.lists.map((list) => (
                        <div
                          key={`${service.id}-${list.title}`}
                          className="rounded-[24px] border border-[rgba(0,87,173,0.1)] bg-[var(--color-surface-muted)] p-5"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-blue)]">
                            {list.title}
                          </p>
                          <ul className="mt-4 space-y-3">
                            {list.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-muted)]"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-brand-gold)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {service.note ? (
                      <div className="mt-6 rounded-[24px] border border-[rgba(226,139,23,0.18)] bg-[linear-gradient(180deg,rgba(10,34,68,1),rgba(13,36,71,0.96))] p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-gold-soft)]">
                          Flexible execution model
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[rgba(238,244,250,0.76)]">
                          {service.note}
                        </p>
                      </div>
                    ) : null}
                  </motion.article>
                ))}
              </div>

              <motion.section
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 grid gap-6 rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_32px_80px_-52px_rgba(10,34,68,0.18)] sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)]"
                initial={{ opacity: 0, y: 28 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-gold)]">
                    Why Choose Westeel
                  </p>
                  <h2 className="mt-4 max-w-[14ch] text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-brand-blue-deep)] sm:text-4xl">
                    Practical steel execution with speed, flexibility, and reliability
                  </h2>
                </div>

                <div className="grid gap-3">
                  {whyChooseWesteel.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[22px] border border-[rgba(0,87,173,0.1)] bg-[var(--color-surface-muted)] px-4 py-4 text-sm font-medium text-[var(--color-brand-blue-deep)]"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(226,139,23,0.14)] text-[var(--color-brand-gold)]">
                        <CheckGlyph />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </section>

          <Footer currentPath="/services" />
        </GlassContainer>
      </motion.div>
    </main>
  );
}

function CheckGlyph() {
  return (
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
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}
