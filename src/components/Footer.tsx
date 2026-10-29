import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Africa/Lagos",
});

const hourFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  hour12: false,
  timeZone: "Africa/Lagos",
});

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const navigateLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const elsewhereLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/Emmyboii", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-olukoya-2b7b00268",
    external: true,
  },
  { label: "X (Twitter)", href: "https://x.com/Emmyboi000", external: true },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100074979452476",
    external: true,
  },
];

const reachLinks: FooterLink[] = [
  { label: "olukoyae01@gmail.com", href: "mailto:olukoyae01@gmail.com" },
  { label: "+234 903 682 6456", href: "tel:+2349036826456" },
  { label: "WhatsApp", href: "https://wa.me/2349036826456", external: true },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group inline-flex items-center gap-1.5 break-words text-sm text-bone/70 transition-colors duration-300 hover:text-acid"
            >
              {link.label}
              {link.external && (
                <ArrowUpRight
                  aria-hidden="true"
                  size={12}
                  className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(interval);
  }, []);

  const year = new Date().getFullYear();
  const time = timeFormatter.format(now);
  const hour = Number(hourFormatter.format(now));
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="container-page pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Brand />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Software engineer building thoughtful web and mobile products from Lagos, Nigeria.
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-acid" />
              {greeting} in Lagos — <span className="tabular-nums">{time}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterColumn title="Navigate" links={navigateLinks} />
            <FooterColumn title="Elsewhere" links={elsewhereLinks} />
            <FooterColumn title="Reach" links={reachLinks} />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Olukoya Emmanuel. All rights reserved.</p>
          <p className="sm:text-center">Built with React, Tailwind CSS & Framer Motion.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-acid"
          >
            Back to top
            <ArrowUpRight aria-hidden="true" size={14} className="-rotate-45" />
          </a>
        </div>

        <p
          aria-hidden="true"
          translate="no"
          className="select-none overflow-hidden whitespace-nowrap pb-6 font-display text-[clamp(4.5rem,15vw,12rem)] leading-[0.72] tracking-[-0.04em] text-bone/[0.07]"
        >
          emmycode<span className="text-acid/30">.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
