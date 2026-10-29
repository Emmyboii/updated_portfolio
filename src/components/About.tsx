import portrait from "../assets/pics1.jpg";
import { Reveal, SectionLabel } from "./ui";

const facts = [
  { label: "Based in", value: "Lagos, Nigeria" },
  { label: "Email", value: "olukoyae01@gmail.com", href: "mailto:olukoyae01@gmail.com" },
  { label: "Phone", value: "+234 903 682 6456", href: "tel:+2349036826456" },
  { label: "Availability", value: "Freelance & full-time" },
];

const toolkit = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  { label: "Backend", items: ["Node.js", "Express"] },
  { label: "Mobile", items: ["React Native"] },
  { label: "Practice", items: ["UI/UX", "Responsive design", "API design"] },
];

function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 hidden rounded-3xl border border-acid/20 sm:block"
            />
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
              <img
                src={portrait}
                alt="Olukoya Emmanuel working on a laptop"
                width={1016}
                height={762}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-[65%_35%] brightness-90 contrast-125 grayscale"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-acid/20 mix-blend-color" />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-full border border-white/15 bg-ink/70 px-4 py-2 backdrop-blur">
                <span className="eyebrow whitespace-nowrap text-bone/80">
                  Emmanuel — Lagos, NG
                </span>
                <span className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-acid sm:flex">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-acid" />
                  Open to work
                </span>
              </div>
            </div>
            <p className="eyebrow mt-4">Fig. 01 — The engineer, in his natural habitat</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionLabel number="01" title="About" />
          <h2
            id="about-heading"
            className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            Engineering with a <span className="italic text-acid">designer’s eye.</span>
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-muted sm:text-lg">
            <p>
              I’m Emmanuel, a software engineer and full-stack developer based in Lagos. For the
              past 3 years, I’ve been building web and mobile products that pair solid engineering
              with a sharp eye for design.
            </p>
            <p>
              My work lives where design meets technology. On the front end, I build polished,
              accessible interfaces with React and Tailwind CSS. On the back end, I design APIs and
              server-side systems with Node.js and Express that stay reliable as products grow.
            </p>
            <p>
              I care about the details — the loading state, the empty state, the way a page feels on
              a slow connection. Good software should be fast, clear, and a little bit delightful.
              When I’m away from the keyboard, you’ll find me gaming or practicing meditation,
              resetting before the next build.
            </p>
          </div>

          <dl className="mt-10 border-t border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {fact.label}
                </dt>
                <dd className="text-sm text-bone/80 sm:text-right">
                  {fact.href ? (
                    <a
                      href={fact.href}
                      className="break-all transition-colors duration-300 hover:text-acid"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <p className="eyebrow">Toolkit</p>
            <dl className="mt-4 border-t border-line">
              {toolkit.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-1.5 border-b border-line py-3 sm:grid-cols-[110px_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {group.label}
                  </dt>
                  <dd className="text-sm text-bone/80">{group.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
