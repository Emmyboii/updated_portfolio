import { Reveal } from "./ui";

const stats = [
  {
    value: "3",
    suffix: "+",
    label: "Years of experience",
    note: "Building for the web since 2023",
  },
  {
    value: "09",
    suffix: "",
    label: "Projects shipped",
    note: "Client and product work, live in the wild",
  },
  {
    value: "04",
    suffix: "",
    label: "Disciplines",
    note: "Web, mobile, backend, and UI/UX",
  },
];

const statBorders = [
  "border-b border-line lg:border-b-0 lg:border-r",
  "border-b border-line lg:border-b-0 lg:border-r",
  "lg:border-b-0",
];

function Stats() {
  return (
    <section aria-label="Key figures" className="border-b border-line">
      <div className="container-page grid grid-cols-2 lg:grid-cols-4">
        <Reveal className="col-span-2 flex flex-col justify-between gap-4 border-b border-line py-10 lg:col-span-1 lg:border-b-0 lg:border-r lg:pr-8">
          <p className="eyebrow">By the numbers</p>
          <p className="max-w-[18ch] font-display text-2xl leading-snug text-bone/80">
            A short summary of the work so far.
          </p>
        </Reveal>

        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.08}
            className={`py-10 lg:pl-8 ${index === 2 ? "col-span-2 lg:col-span-1" : ""} ${
              statBorders[index]
            }`}
          >
            <p className="font-display text-5xl leading-none text-bone tabular-nums sm:text-6xl">
              {stat.value}
              {stat.suffix && <span className="text-acid">{stat.suffix}</span>}
            </p>
            <p className="mt-4 text-sm font-medium text-bone/80">{stat.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{stat.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Stats;
