import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiReact, SiTailwindcss, SiJavascript, SiNodedotjs } from "react-icons/si";
import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "Mobile App Developer",
    "UI/UX Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Generate particle positions once on mount
  const [particles] = useState(() =>
    Array.from({ length: 12 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 5,
    }))
  );

  // Floating tech icons positions
  const techIcons = [
    { icon: <SiReact />, top: 20, left: 15 },
    { icon: <SiTailwindcss />, top: 60, left: 80 },
    { icon: <SiJavascript />, top: 75, left: 30 },
    { icon: <SiNodedotjs />, top: 30, left: 64 },
  ];

  // Rotate roles every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Mouse movement listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#110a1f] to-[#0a0a0a] flex items-center justify-center px-6 overflow-hidden">

      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/logo2.png')",
        }}
      />

      {/* Morphing background blobs */}
      <motion.div
        className="absolute w-[400px] h-[400px] top-[-150px] left-[-150px] bg-gradient-to-tr from-purple-900/60 to-purple-700/40 rounded-full filter blur-[140px]"
        animate={{
          scale: [1, 1.1, 1],
          borderRadius: ["40% 60% 50% 50%", "60% 40% 50% 50%", "40% 60% 50% 50%"],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bottom-[-100px] right-[-100px] bg-gradient-to-bl from-purple-700/50 to-purple-500/30 rounded-full filter blur-[120px]"
        animate={{
          scale: [1, 1.05, 1],
          borderRadius: ["50% 40% 60% 50%", "40% 50% 50% 60%", "50% 40% 60% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Interactive floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-purple-500 rounded-full opacity-60"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            x: [(mousePos.x / 100) * (i + 1), -(mousePos.x / 100) * (i + 1), 0],
            y: [(mousePos.y / 100) * (i + 1), -(mousePos.y / 100) * (i + 1), 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            repeatType: "mirror",
            delay: p.delay,
          }}
        />
      ))}

      {/* Floating tech icons */}
      {techIcons.map((tech, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-400 text-2xl"
          style={{ top: `${tech.top}%`, left: `${tech.left}%` }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror", delay: i }}
        >
          {tech.icon}
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          className="text-gray-400 sm:text-lg md:text-xl"
        >
          Hey there! I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold py-4 text-animated-gradient mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700"
        >
          Olukoya Emmanuel
        </motion.h1>

        <div className="relative h-10 mb-6 pt-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, textShadow: "0 0 10px #7c3aed" }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full text-purple-400 sm:text-lg md:text-[22px] font-semibold"
            >
              {roles[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-300 mb-8 leading-relaxed sm:text-lg"
        >
          A passionate developer crafting beautiful and functional digital experiences from concept to deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-purple-700/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white transition transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-purple-700/30"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-6 mt-8 text-gray-400"
        >
          <a href="https://github.com/Emmyboii" title="My GitHub" target="_blank" rel="noopener">
            <FaGithub className="hover:text-purple-400 transition text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-olukoya-2b7b00268" title="My LinkedIn" target="_blank" rel="noopener">
            <FaLinkedin className="hover:text-purple-400 transition text-2xl" />
          </a>
          <a href="https://x.com/Emmyboi000" target="_blank" title="My Twitter" rel="noopener">
            <FaXTwitter className="hover:text-purple-400 transition text-2xl" />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100074979452476" title="My Facebook" target="_blank" rel="noopener">
            <FaFacebookSquare className="hover:text-purple-400 transition text-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;