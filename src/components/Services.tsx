import { motion } from "framer-motion";
import { useState } from "react";
import { FaCogs, FaCode, FaMobileAlt, FaServer } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaCogs />,
    title: "Software Engineering",
    desc: "Architect and build scalable software solutions with maintainable code and high-quality standards. I love solving complex problems and optimizing workflows.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Build responsive, dynamic web applications using ReactJS, TailwindCSS, and modern frameworks. Seamless performance, accessibility, and scalability guaranteed.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Craft sleek mobile experiences using React Native. Focused on intuitive UI/UX while complementing full-stack web solutions.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Develop robust server-side architectures using NodeJS & ExpressJS. APIs are secure, efficient, and scalable—even when backend is secondary.",
  },
];

const Services = () => {

  // Generate particle positions once on mount
  const [particlePositions] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#120a20] to-[#0a0a0a] text-white"
    >
      {/* Animated floating particles */}
      {particlePositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-50"
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.3,
          }}
          style={{ top: `${position.top}%`, left: `${position.left}%` }}
        />
      ))}

      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700">
        WHAT I DO
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-start gap-10 max-w-7xl mx-auto px-6 relative z-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="service-card relative flex-1 bg-purple-900/20 backdrop-blur-xl border border-purple-700/40 rounded-3xl sm:p-8 p-4 shadow-2xl hover:shadow-purple-700/50 transition-all duration-500 cursor-pointer"
          >
            <div className="text-purple-400 text-5xl mb-6 flex justify-center">
              {service.icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-purple-300">
              {service.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional floating abstract shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-120px] right-[-150px] w-[400px] h-[400px] rounded-full bg-purple-700/30 blur-3xl animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Services;