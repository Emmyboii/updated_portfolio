import { ArrowUpRight } from "lucide-react";
import philomena from "../assets/work/philomena.png";
import philomenaLive from "../assets/work/philomena-live.png";
import abprint from "../assets/work/abprint.jpg";
import niftium from "../assets/work/niftium.png";
import emmybuy from "../assets/work/emmybuy.jpg";
import reccur from "../assets/work/reccur.jpg";
import americanMilestone from "../assets/work/american-milestone.jpg";
import richSterling from "../assets/work/rich-sterling.jpg";
import tmbis from "../assets/work/tmbis.jpg";
import { SectionLabel } from "./ui";

type Project = {
  title: string;
  description: string;
  category: string;
  img: string;
  width: number;
  height: number;
  link: string;
};

const projects: Project[] = [
  {
    title: "Philomena",
    description:
      "A wedding-website platform that lets couples create personalised sites with RSVPs, photo galleries, and every event detail — all in a responsive, elegant package.",
    category: "Wedding platform · Web app",
    img: philomena,
    width: 1600,
    height: 814,
    link: "https://philomena.events/",
  },
  {
    title: "Philomena Live",
    description:
      "A showcase hub for live Philomena wedding sites, letting visitors explore real couples’ pages.",
    category: "Showcase · Events",
    img: philomenaLive,
    width: 1600,
    height: 813,
    link: "https://frances-stanley.philomena.events/",
  },
  {
    title: "Abprint",
    description:
      "A modern site for a printing and branding studio, built to turn visitors into clients.",
    category: "Branding · Marketing site",
    img: abprint,
    width: 1600,
    height: 818,
    link: "https://abprint.vercel.app",
  },
  {
    title: "Niftium Electric & Renovation",
    description:
      "A booking-focused site for an electrical and renovation company, with interactive service sections.",
    category: "Services · Web",
    img: niftium,
    width: 1600,
    height: 815,
    link: "https://niftium.vercel.app/",
  },
  {
    title: "EmmyBuy",
    description:
      "A full-stack e-commerce platform with authentication, categories, and a working cart — React in front, Express behind.",
    category: "E-commerce · Full-stack",
    img: emmybuy,
    width: 725,
    height: 344,
    link: "https://emmybuy.vercel.app",
  },
  {
    title: "Reccur",
    description:
      "A global money-transfer platform for sending, receiving, converting, and managing funds across borders.",
    category: "Fintech · Product",
    img: reccur,
    width: 1600,
    height: 794,
    link: "https://www.tryreccur.com/",
  },
  {
    title: "American Milestone Electric",
    description:
      "A home-services website with clear service showcases and booking calls to action.",
    category: "Home services · Web",
    img: americanMilestone,
    width: 1600,
    height: 822,
    link: "https://americanmilestoneelectric.com/",
  },
  {
    title: "Rich Sterling Hires",
    description:
      "A hiring platform connecting clients with vetted professionals through search and booking.",
    category: "Marketplace · Web",
    img: richSterling,
    width: 1600,
    height: 801,
    link: "https://rich-sterling-hires.vercel.app/",
  },
  {
    title: "TMBIS Switzerland",
    description:
      "A professional development site with course listings, program details, and a working cart.",
    category: "Education · Web",
    img: tmbis,
    width: 1600,
    height: 820,
    link: "https://tmbi-black.vercel.app/",
  },
];

const tileSpans = [
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
  "",
  "",
];

function FeaturedProject({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-12 grid overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-acid/40 lg:grid-cols-12"
    >
      <div className="relative min-h-[260px] overflow-hidden lg:col-span-7 lg:min-h-[420px]">
        <img
          src={project.img}
          alt={`${project.title} website preview`}
          width={project.width}
          height={project.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-left transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col justify-between gap-8 p-7 sm:p-9 lg:col-span-5 lg:p-10">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-acid px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
              Featured
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-acid/80">
              {project.category}
            </span>
          </div>
          <h3 className="mt-4 font-display text-4xl leading-none sm:text-5xl">{project.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        </div>

        <div className="flex items-center justify-between border-t border-line pt-5">
          <span className="text-sm text-bone/80">View live site</span>
          <span
            aria-hidden="true"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-bone transition-colors duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-ink"
          >
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-acid/40 ${className}`}
    >
      <div className="relative h-52 overflow-hidden sm:h-60">
        <img
          src={project.img}
          alt={`${project.title} website preview`}
          width={project.width}
          height={project.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span
          aria-hidden="true"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-bone backdrop-blur transition-colors duration-300 group-hover:bg-acid group-hover:text-ink"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-acid/80">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-2xl text-bone transition-colors duration-300 group-hover:text-acid sm:text-[1.7rem]">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <span className="mt-auto pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 group-hover:text-bone">
          Visit site
        </span>
      </div>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function WorkCta() {
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-acid p-6 text-ink sm:col-span-2 sm:p-8 lg:col-span-2">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">Next project</p>
      <div>
        <h3 className="font-display text-3xl leading-tight sm:text-4xl">
          Have something ambitious in mind?
        </h3>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bone transition-colors duration-300 hover:bg-ink/85"
        >
          Let’s talk
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel number="04" title="Selected work" />
            <h2
              id="work-heading"
              className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
            >
              Selected <span className="italic text-acid">work.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-right">
            9 live builds across weddings, fintech, e-commerce, and services — each one designed and
            shipped end to end.
          </p>
        </div>

        <FeaturedProject project={projects[0]} />

        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={project.title} project={project} className={tileSpans[index]} />
          ))}
          <WorkCta />
        </div>
      </div>
    </section>
  );
}

export default Projects;
