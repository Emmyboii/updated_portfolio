import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import philomena from '../assets/philomena.png'
import philomenaLive from '../assets/philomenaLive.png'
import Abprint from '../assets/Abprint.png'
import NIFTIUM from '../assets/NIFTIUM.png'
import Ecommerce from '../assets/ecommerce.JPG'
import Reccur from '../assets/Reccur.png'
import americanmilestoneelectric from '../assets/americanmilestoneelectric.png'
import Richsterling from '../assets/Richsterling.png'
import TMBIS from '../assets/tmbis.png'


const projects = [
  {
    title: "Philomena",
    desc: "Philomena is a beautiful and intuitive wedding website platform that allows couples to create personalized websites for their special day. Couples can share event details, RSVP forms, photo galleries, and memorable moments with family and friends, all in a stylish and responsive design.",
    img: philomena,
    link: "https://philomena.events/",
  },
  {
    title: "Philomena Live Page Website",
    desc: "The Philomena Live Page Website is a central hub showcasing all active couple wedding websites. Visitors can explore wedding details, RSVP pages, photo galleries, and see real examples of beautifully crafted wedding websites in action.",
    img: philomenaLive,
    link: "https://frances-stanley.philomena.events/",
  },
  {
    title: "Abprint Printing and Branding",
    desc: "A modern, professional website for Abprint, a printing brand. Showcases products, printing services, and contact information with a responsive design, clean layout, and visually appealing graphics to attract clients.",
    img: Abprint,
    link: "https://abprint.vercel.app",
  },
  {
    title: "Niftium Electric & Renovation",
    desc: "Modern website for an electrical and handyman service company. Built with React and Tailwind, includes interactive sections, booking CTAs, and responsive design.",
    img: NIFTIUM,
    link: "https://niftium.vercel.app/",
  },
  {
    title: "EmmyBuy",
    desc: "Full-stack e-commerce platform built with ReactJS and ExpressJS. Responsive UI, authentication, product categories, and cart functionality for seamless browsing.",
    img: Ecommerce,
    link: "https://emmybuy.vercel.app",
  },
  {
    title: "Reccur",
    desc: "Global money transfer platform allowing users to send, receive, convert, and manage funds worldwide, supporting crypto payments and freelance income.",
    img: Reccur,
    link: "https://www.tryreccur.com/",
  },
  {
    title: "American Milestone Electric LLC",
    desc: "Website for a home services company providing expert repairs, installations, and maintenance. Interactive service sections, contact page, and booking CTAs.",
    img: americanmilestoneelectric,
    link: "https://americanmilestoneelectric.com/",
  },
  {
    title: "Rich Sterling Hires",
    desc: "Platform connecting clients with skilled professionals. Efficient search, booking, and communication between clients and experts for a seamless hiring experience.",
    img: Richsterling,
    link: "https://www.richsterlinghires.com/",
  },
  {
    title: "TMBIS Switzerland",
    desc: "Professional development website featuring responsive design, course listings, program details, and interactive cart functionality for optimized user experience.",
    img: TMBIS,
    link: "https://tmbi-black.vercel.app/",
  },
  // {
  //   title: "LASU IDC",
  //   desc: "Replica of Lagos State University portal, enabling student registration, result viewing, and course management. Fully responsive and mimics the original functionality.",
  //   img: "/src/assets/lidc.JPG",
  //   link: "https://lidc-clone.vercel.app/",
  // },
];

const Projects = () => {

  const { scrollY } = useScroll();

  // Parallax: cards float and shift slightly on scroll
  // const yOffset = useTransform(scrollY, [0, 1000], [0, 0]);
  // const rotateX = useTransform(scrollY, [0, 1000], [0, 15]);
  // const rotateY = useTransform(scrollY, [0, 1000], [0, -15]);

  // yOffset is always 0
  const yOffset = useTransform(scrollY, [0, 1000], [0, 0]);
  const rotateX = useTransform(scrollY, [0, 1000], [0, 15]);

  // Create rotateY for each card based on index (-15, 15, -15, 15 ...)
  // const rotateYArray = projects.map((_, index) => {
  //   return useTransform(scrollY, [0, 1000], [0, index % 2 === 0 ? -15 : 15]);
  // });

  // Z-axis stagger and scroll-based scale
  const scaleArray = projects.map((_, index) =>
    useTransform(scrollY, [0, 1000], [1 - index * 0.03, 1 + index * 0.03])
  );
  const rotateYArray = projects.map((_, index) =>
    useTransform(scrollY, [0, 1000], [0, index % 2 === 0 ? -15 : 15])
  );
  const zIndexArray = projects.map((_, index) =>
    index % 2 === 0 ? projects.length - index : index
  );

  // Generate particle positions once on mount
  const [particlePositions] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1280);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-b from-[#0a0a0a] via-[#120a20] to-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Floating background particles */}
      {particlePositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-40"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.2,
          }}
          style={{ top: `${position.top}%`, left: `${position.left}%` }}
        />
      ))}

      <h1 className="text-4xl md:text-6xl font-extrabold text-center sm:mb-16 mb-7 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700">
        PROJECTS <span className="text-purple-300">DONE</span>
      </h1>

      <div className="relative 2xl:max-w-7xl xl:max-w-6xl mx-auto px-6 flex flex-col xl:gap-32 gap-10 pt-5">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center gap-10 perspective-1000 ${!isEven ? "lg:flex-row-reverse" : ""
                }`}
              style={{
                y: isMobile ? 0 : yOffset,
                rotateX: isMobile ? 0 : rotateX,
                rotateY: isMobile ? 0 : rotateYArray[index],
                scale: isMobile ? 1 : scaleArray[index],
                zIndex: isMobile ? "auto" : zIndexArray[index],
              }}
            >
              {/* Project Image */}
              <motion.img
                src={project.img}
                alt={project.title}
                className="lg:w-1/2 w-full rounded-3xl shadow-2xl border border-purple-700/50 backdrop-blur-lg cursor-pointer hover:scale-105 hover:rotate-3 transition-transform duration-500"
                whileHover={{
                  scale: 1.08,
                  rotateY: isEven ? 8 : -8,
                  translateY: -5,
                  rotateX: 2
                }}
              />

              {/* Project Details Card */}
              <motion.div
                className="lg:w-1/2 bg-purple-900/20 backdrop-blur-lg pb-8 rounded-3xl sm:p-8 p-4 border border-purple-700/40 shadow-lg text-center lg:text-left hover:translate-y-[-5px] transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <h2 className="text-3xl font-bold text-purple-400 mb-4">{project.title}</h2>
                <p className="text-gray-300 leading-relaxed mb-6">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 rounded-xl text-white font-semibold shadow-lg hover:shadow-purple-700/50 transition-all duration-300"
                >
                  View Project
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[60px] bg-purple-400/20"
            animate={{ y: [0, 40, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 10 + i, repeat: Infinity, delay: i * 0.1 }}
            style={{ top: `${position.top}%`, left: `${position.left}%` }}
          />
        ))}
      </div>


      {/* Floating abstract shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] rounded-full bg-purple-700/30 blur-3xl animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Projects;