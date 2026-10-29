import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./ui";

const services = [
  {
    title: "Software Engineering",
    description:
      "End-to-end product builds, from the first sketch to production. Clean architecture, maintainable code, and decisions that age well.",
    tags: ["Architecture", "Performance", "Maintenance"],
  },
  {
    title: "Web Development",
    description:
      "Fast, responsive web apps built with React, TypeScript, and Tailwind CSS — interfaces that feel as good as they look.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile experiences with React Native, designed for small screens and real-world use.",
    tags: ["React Native", "iOS & Android", "UI/UX"],
  },
  {
    title: "Backend Development",
    description:
      "Secure APIs and server-side systems with Node.js and Express, built to scale with the product they support.",
    tags: ["Node.js", "Express", "REST APIs"],
  },
];

type ServiceItemProps = {
  index: number;
  title: string;
  description: string;
  tags: string[];
  open: boolean;
  onToggle: () => void;
};

function ServiceItem({ index, title, description, tags, open, onToggle }: ServiceItemProps) {
  const reduceMotion = useReducedMotion();
  const panelId = `service-panel-${index}`;

  return (
    <div className="border-t border-line last:border-b">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center gap-5 py-6 text-left"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted">0{index + 1}</span>
          <span
            className={`flex-1 font-display text-3xl transition-colors duration-300 sm:text-4xl ${
              open ? "text-acid" : "text-bone group-hover:text-acid"
            }`}
          >
            {title}
          </span>
          <span
            aria-hidden="true"
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
              open
                ? "border-acid bg-acid text-ink"
                : "border-line text-muted group-hover:border-acid group-hover:text-acid"
            }`}
          >
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-9 sm:pl-12">
              <p className="max-w-xl leading-relaxed text-muted">{description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-line py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel number="02" title="Services" />
            <h2
              id="services-heading"
              className="mt-6 font-display text-4xl leading-[0.95] sm:text-5xl lg:text-[3.4rem]"
            >
              What I bring to the table.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted">
              From the first commit to the final deploy, I cover the full product surface — and the
              parts in between.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-acid transition-opacity duration-300 hover:opacity-70"
            >
              Discuss a project
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          {services.map((service, index) => (
            <ServiceItem
              key={service.title}
              index={index}
              title={service.title}
              description={service.description}
              tags={service.tags}
              open={openIndex === index}
              onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
