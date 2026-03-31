import { motion } from "framer-motion";
import { useState, type JSX } from "react";
import { SiHtml5, SiCss, SiJavascript, SiReact, SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 95, icon: <SiHtml5 /> },
  { name: "CSS3", level: 85, icon: <SiCss /> },
  { name: "JavaScript", level: 60, icon: <SiJavascript /> },
  { name: "ReactJS", level: 90, icon: <SiReact /> },
  { name: "TypeScript", level: 67, icon: <SiTypescript /> },
  { name: "ExpressJS", level: 57, icon: <SiExpress /> },
  { name: "TailwindCSS", level: 94, icon: <SiTailwindcss /> },
];

function About() {

  // Generate particle positions once on mount
  const [particlePositions] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#110a1f] to-[#0a0a0a] flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Floating particles */}
      {particlePositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-50"
          style={{ top: `${position.top}%`, left: `${position.left}%` }}
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.3,
          }}
        />
      ))}

      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 mb-16">
        ABOUT ME
      </h1>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-12">
        {/* Left: Personal Info Card */}
        <motion.div
          className="flex-1 bg-purple-900/20 backdrop-blur-lg rounded-xl sm:p-8 p-4 shadow-lg border border-purple-700/40"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-300">Personal Info</h2>
          <div className="flex flex-col gap-4">
            <InfoRow label="Full Name" value="Olukoya Emmanuel Ayomide" />
            <InfoRow label="Phone" value="09036826456" />
            <InfoRow label="Email" value="olukoyae01@gmail.com" />
            <InfoRow label="Address" value="2, Agboroko, LASU OJO road, Lagos, Nigeria" />
          </div>
        </motion.div>

        {/* Right: Bio & Skills */}
        <motion.div
          className="flex-1 flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Bio */}
          <div className="bg-purple-900/20 backdrop-blur-lg rounded-xl sm:p-8 p-4 shadow-lg border border-purple-700/40">
            <p className="text-gray-300 leading-relaxed sm:text-lg">
              Hello! I'm Emmanuel, a passionate Web Developer and Full Stack Engineer committed to crafting elegant, high-performance digital experiences that seamlessly blend form and function.
            </p>
            <p className="text-gray-300 leading-relaxed sm:text-lg mt-4">
              With over 3 years of hands-on experience, I specialize in building responsive, intuitive, and visually striking websites and applications. My work lies at the intersection of design and technology, ensuring every project is both impactful and user-friendly.
            </p>
            <p className="text-gray-300 leading-relaxed sm:text-lg mt-4">
              From developing polished user interfaces with ReactJS to architecting scalable backend systems using NodeJS and ExpressJS, I manage end-to-end web development with precision, innovation, and attention to detail.
            </p>
            <p className="text-gray-300 leading-relaxed sm:text-lg mt-4">
              Outside of coding, I enjoy gaming to recharge my creativity and practice mindfulness through meditation and reflection. I'm always eager to collaborate on exciting projects that push boundaries and bring innovative ideas to life.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} icon={skill.icon} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Component for personal info row
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-gray-300 hover:text-purple-400 transition">
      <span className="font-medium sm:text-base text-sm">{label}:</span>
      <span className="font-semibold sm:text-base text-sm text-right">{value}</span>
    </div>
  );
}

// Component for skill bar
function SkillBar({ name, level, icon }: { name: string; level: number; icon: JSX.Element }) {
  return (
    <motion.div
      className="bg-purple-900/20 backdrop-blur-lg rounded-xl p-4 flex flex-col gap-2 shadow-lg border border-purple-700/40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-2 text-purple-300 font-semibold sm:text-lg">
        {icon}
        {name}
        <span className="ml-auto text-gray-300">{level}%</span>
      </div>
      <div className="w-full h-2 bg-purple-700/40 rounded-full overflow-hidden">
        <motion.div
          className="h-2 bg-purple-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

export default About;