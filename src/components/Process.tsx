import { Reveal, SectionLabel } from "./ui";

const steps = [
  {
    title: "Discover",
    description:
      "We start with the problem, not the pixels. Goals, users, constraints, and what success actually looks like.",
  },
  {
    title: "Design & build",
    description:
      "I turn the brief into a working product in tight iterations — designing in the browser and shipping in small, reviewable steps.",
  },
  {
    title: "Launch & refine",
    description:
      "We ship, measure, and polish. You get a clean handover that is documented and built to be maintained.",
  },
];

function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <SectionLabel number="03" title="Process" />
            <h2
              id="process-heading"
              className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
            >
              A calm, clear way to build.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted lg:col-span-5 lg:col-start-8 lg:justify-self-end">
            A simple three-step rhythm that keeps the work moving and the surprises to a minimum.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.08}
              className="flex h-full flex-col justify-between gap-10 bg-ink p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
                  Step 0{index + 1}
                </span>
                <span aria-hidden="true" className="font-display text-4xl italic text-bone/10">
                  0{index + 1}
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
