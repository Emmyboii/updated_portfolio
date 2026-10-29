import { Pause, Play } from "lucide-react";
import { useState } from "react";

const items = [
  "Web Development",
  "Mobile Apps",
  "UI/UX",
  "Backend Systems",
  "Software Engineering",
];

function MarqueeContent() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <div key={item} className="flex items-center">
          <span className="px-6 font-display text-2xl italic text-bone/70 sm:text-3xl">{item}</span>
          <span aria-hidden="true" className="text-acid">
            ✦
          </span>
        </div>
      ))}
    </div>
  );
}

function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="group relative overflow-hidden border-y border-line bg-surface/40 py-5">
      <div
        aria-hidden="true"
        className={`flex w-max animate-marquee motion-reduce:animate-none ${
          paused ? "[animation-play-state:paused]" : ""
        } group-hover:[animation-play-state:paused]`}
      >
        <MarqueeContent />
        <MarqueeContent />
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-l from-ink via-ink/90 to-transparent pl-12 pr-4 sm:pr-6">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play scrolling text" : "Pause scrolling text"}
          aria-pressed={paused}
          className="grid h-9 w-9 place-items-center rounded-full border border-line bg-ink text-muted transition-colors duration-300 hover:border-acid hover:text-acid"
        >
          {paused ? (
            <Play aria-hidden="true" size={14} />
          ) : (
            <Pause aria-hidden="true" size={14} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Marquee;
