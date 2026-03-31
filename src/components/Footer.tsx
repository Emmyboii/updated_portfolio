import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

interface footerColumnProps {
  title: string;
  links: string[];
  linkTo: string[];
  newTab?: boolean;
}

const Footer = () => {
  const year = new Date().getFullYear();

  // Smart greeting based on time

  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning ☀️";
    if (hour < 18) return "Good afternoon 🌤️";
    return "Good evening 🌙";
  });

  // Cursor glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const glowX = useTransform(mouseX, (x) => x - 150);
  const glowY = useTransform(mouseY, (y) => y - 150);

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="relative bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none fixed w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />

      {/* SVG WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,29,158,17,70-15,136-58,206-73,73-16,140,4,209,35,69,30,138,60,209,58,75-3,146-39,218-63,66-22,130-28,200-15V0Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">

          <div>
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/src/assets/logo2.png"
                alt="logo"
                className="sm:w-48 w-36 object-contain"
              />
            </a>

            <p className="text-gray-400 mt-3">{greeting}</p>

            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <p className="text-sm text-gray-400">
                Available for freelance & full-time
              </p>
            </div>
          </div>

          {/* MAGNETIC BUTTON */}
          <MagneticButton />
        </div>

        {/* LINKS */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          <FooterColumn
            title="Navigation"
            links={["Home", "About", "Projects", "Contact"]}
            linkTo={["#", "#about", "#projects", "#contact"]}
          />

          <FooterColumn
            title="Socials"
            newTab={true}
            links={["GitHub", "LinkedIn", "Twitter"]}
            linkTo={["https://github.com/Emmyboii", "https://www.linkedin.com/in/emmanuel-olukoya-2b7b00268", "https://x.com/Emmyboi000"]}
          />

          <div>
            <h3 className="sm:text-lg font-semibold text-purple-400 mb-4">
              Contact
            </h3>
            <p className="text-gray-400 text-sm">
              olukoyae01@gmail.com
            </p>
            <p className="text-gray-400 text-sm mt-2">
              +234 903 682 6456
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-6"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© {year} Emmanuel Olukoya</p>

          <motion.p whileHover={{ scale: 1.05 }}>
            Built with React ✦ Tailwind ✦ Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

/* ---------------- COMPONENTS ---------------- */

const FooterColumn = ({ title, links, linkTo, newTab }: footerColumnProps) => {
  return (
    <div>
      <h3 className="sm:text-lg font-semibold text-purple-400 mb-4">
        {title}
      </h3>
      <ul className="space-y-3 text-gray-400 text-sm">
        {links.map((link, i) => (
          <li key={i}>
            <motion.a
              href={linkTo[i]}
              target={newTab ? "_blank" : undefined}
              rel={newTab ? "noopener noreferrer" : undefined}
              whileHover={{ x: 6 }}
              className="hover:text-white transition"
            >
              {link}
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* Magnetic CTA Button */
const MagneticButton = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href="#contact"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold shadow-lg hover:shadow-purple-700/50 transition-all duration-300"
    >
      Let’s Talk 🚀
    </motion.a>
  );
};

export default Footer;