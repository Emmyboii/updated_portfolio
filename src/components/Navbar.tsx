import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Brand } from "./Brand";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Emmyboii", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-olukoya-2b7b00268",
    icon: FaLinkedin,
  },
  { label: "X (Twitter)", href: "https://x.com/Emmyboi000", icon: FaXTwitter },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100074979452476",
    icon: FaFacebookSquare,
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16);
  const [active, setActive] = useState("home");

  const reduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });
  const progress = reduceMotion ? scrollYProgress : smoothProgress;

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive(topmost.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const background = [
      document.querySelector("header"),
      document.getElementById("main"),
      document.querySelector("footer"),
    ];

    background.forEach((element) => element?.setAttribute("inert", ""));
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      background.forEach((element) => element?.removeAttribute("inert"));
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(focusTimer);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-acid"
      />

      <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6">
          <nav
            aria-label="Primary"
            className={`mt-4 flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-[background-color,border-color,box-shadow] duration-300 sm:px-5 ${
              scrolled
                ? "border-line bg-ink/80 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <Brand />

            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "location" : undefined}
                    className={`relative inline-flex rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                      active === link.id ? "text-bone" : "text-muted hover:text-bone"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-acid transition-transform duration-300 ${
                        active === link.id ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden items-center gap-1.5 rounded-full bg-acid px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-bone sm:inline-flex"
              >
                Let’s talk
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>

              <button
                ref={triggerRef}
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-bone transition-colors duration-300 hover:border-acid hover:text-acid md:hidden"
              >
                <Menu aria-hidden="true" size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto overscroll-contain bg-ink/95 pt-[env(safe-area-inset-top)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Brand onClick={() => setOpen(false)} />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-bone transition-colors duration-300 hover:border-acid hover:text-acid"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-6">
              <ul>
                {navLinks.map((link, index) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 border-b border-line py-4"
                    >
                      <span className="font-mono text-[11px] tracking-[0.2em] text-acid">
                        0{index + 1}
                      </span>
                      <span className="font-display text-4xl text-bone transition-colors duration-300 group-hover:text-acid sm:text-5xl">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        size={18}
                        className="ml-auto text-muted transition-colors duration-300 group-hover:text-acid"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-8">
              <a
                href="mailto:olukoyae01@gmail.com"
                className="text-sm text-muted transition-colors duration-300 hover:text-bone"
              >
                olukoyae01@gmail.com
              </a>
              <div className="mt-5 flex items-center gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-acid hover:text-acid"
                  >
                    <Icon aria-hidden="true" size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
