import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  const reduceMotion = useReducedMotion();

  const intro = (delay: number) => {
    if (reduceMotion) return {};
    return {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
    };
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 sm:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(244, 241, 232, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 241, 232, 0.045) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 72%)",
          }}
        />
        <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-acid/10 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-bone/[0.04] blur-[120px]" />
      </div>

      <div className="container-page relative flex flex-1 flex-col justify-between">
        <div>
          <motion.div
            {...intro(0)}
            className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5"
          >
            <p className="eyebrow">Portfolio — 2026</p>
            <p className="eyebrow hidden md:block">Software engineer · Frontend · Mobile</p>
            <p className="eyebrow flex items-center gap-2 text-bone/70">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
              </span>
              Open for new work
            </p>
          </motion.div>

          <div className="mt-14 sm:mt-20">
            <motion.p {...intro(0.05)} className="eyebrow flex flex-wrap items-center gap-3">
              <span className="text-acid">Olukoya Emmanuel</span>
              <span aria-hidden="true" className="h-px w-10 bg-line" />
              <span>Lagos, Nigeria</span>
            </motion.p>

            <motion.h1
              id="hero-heading"
              {...intro(0.1)}
              className="mt-6 font-display text-[clamp(3rem,9.5vw,8.25rem)] leading-[0.92] tracking-[-0.02em]"
            >
              Full-stack craft,
              <br />
              front-end <span className="italic text-acid">obsession.</span>
            </motion.h1>
          </div>

          <motion.div
            {...intro(0.2)}
            className="mt-10 flex flex-col gap-8 border-t border-line pt-8 lg:flex-row lg:items-start lg:justify-between"
          >
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I’m Emmanuel — a software engineer building fast, accessible web and mobile products.
              I care about the details most people never notice, and the outcomes everyone does.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-bone"
              >
                View selected work
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-bone transition-colors duration-300 hover:border-acid hover:text-acid"
              >
                Start a conversation
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...intro(0.3)}
          className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6 sm:mt-24"
        >
          <a href="#about" className="group inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-acid group-hover:text-acid">
              <ArrowDown
                aria-hidden="true"
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </span>
            <span className="eyebrow transition-colors duration-300 group-hover:text-bone">
              Scroll to explore
            </span>
          </a>

          <div className="hidden items-center gap-8 sm:flex">
            <p className="eyebrow">React · TypeScript · Node</p>
            <p className="eyebrow">GMT+1</p>
          </div>
        </motion.div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.35em] text-muted/60 [writing-mode:vertical-rl] 2xl:block"
      >
        Software Engineer — 2026
      </p>
    </section>
  );
}

export default Hero;
