import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const EMAIL = "olukoyae01@gmail.com";
const PHONE_DISPLAY = "+234 903 682 6456";
const PHONE_TEL = "+2349036826456";

const socials = [
  { label: "GitHub", href: "https://github.com/Emmyboii", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-olukoya-2b7b00268",
    icon: FaLinkedin,
  },
  { label: "X", href: "https://x.com/Emmyboi000", icon: FaXTwitter },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100074979452476",
    icon: FaFacebookSquare,
  },
];

function CopyButton({
  label,
  copied,
  onClick,
}: {
  label: string;
  copied: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-xs font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-acid"
    >
      {copied ? <Check aria-hidden="true" size={14} /> : <Copy aria-hidden="true" size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Contact() {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const copyToClipboard = async (text: string, kind: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(kind);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="on-acid relative overflow-hidden bg-acid py-24 text-ink sm:py-32"
    >
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">05</span>
            <span aria-hidden="true" className="h-px w-8 bg-ink/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
              Contact
            </span>
          </div>

          <h2
            id="contact-heading"
            className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            Let’s make something <span className="italic">worth remembering.</span>
          </h2>

          <p className="mt-6 max-w-md leading-relaxed text-ink/70 sm:text-lg">
            Have a project, a role, or an idea worth talking through? Reach out directly — no
            forms, no gatekeepers.
          </p>

          <p className="mt-8 flex items-center gap-3 text-sm font-medium">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ink" />
            Available for freelance & full-time work
          </p>
        </div>

        <div className="lg:col-span-6 lg:pl-10">
          <div className="border-t border-ink/20">
            <div className="flex flex-wrap items-center justify-between gap-4 py-6">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Email
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 inline-block break-all font-display text-2xl leading-tight transition-opacity duration-300 hover:opacity-60 sm:text-3xl"
                >
                  {EMAIL}
                </a>
              </div>
              <CopyButton
                label="Copy email address to clipboard"
                copied={copied === "email"}
                onClick={() => copyToClipboard(EMAIL, "email")}
              />
            </div>
          </div>

          <div className="border-t border-ink/20">
            <div className="flex flex-wrap items-center justify-between gap-4 py-6">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Phone
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-1 inline-block font-display text-2xl leading-tight transition-opacity duration-300 hover:opacity-60 sm:text-3xl"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <CopyButton
                label="Copy phone number to clipboard"
                copied={copied === "phone"}
                onClick={() => copyToClipboard(PHONE_TEL, "phone")}
              />
            </div>
          </div>

          <div className="border-t border-ink/20">
            <a
              href="https://wa.me/2349036826456"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-6"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  WhatsApp
                </p>
                <p className="mt-1 font-display text-2xl leading-tight sm:text-3xl">Start a chat</p>
              </div>
              <span
                aria-hidden="true"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/25 transition-colors duration-300 group-hover:bg-ink group-hover:text-acid"
              >
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>

          <div className="border-y border-ink/20 py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
              Elsewhere
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-ink hover:text-acid"
                  >
                    <Icon aria-hidden="true" size={15} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div aria-live="polite" className="sr-only">
        {copied ? `${copied === "email" ? "Email address" : "Phone number"} copied to clipboard` : ""}
      </div>

      {copied && (
        <div
          aria-hidden="true"
          className="fixed bottom-6 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-bone shadow-2xl"
        >
          <Check aria-hidden="true" size={15} className="text-acid" />
          {copied === "email" ? "Email copied" : "Phone copied"}
        </div>
      )}
    </section>
  );
}

export default Contact;
