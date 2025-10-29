import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Images
//E-Commerce app
const Ecom1 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028463/Ecom1_tdmejk.png";
const Ecom2 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028482/Ecom2_gqko9l.png";
const Ecom3 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028459/Ecom3_vrkhk8.png";

// Weather app
const Weather1 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028369/weather1_uu4lnb.png";
const Weather2 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028353/weather2_ygfct9.png";
const Weather3 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028344/weather3_jqtyt7.jpg";

//Currency Converter
const CurrencyConverter1 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028182/Currency_Converter1_cu1e9i.jpg";
const CurrencyConverter2 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028243/Currency_Converter2_xi1lkh.png";
const CurrencyConverter3 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028249/Currency_Converter3_ivvhfx.png";

//Sigma AI
const SigmaAI1 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028076/sigma_ai1_kg5tpj.jpg";
const SigmaAI2 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028076/Sigma_AI2_e5uchs.png";
const SigmaAI3 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761028080/Sigma_AI3_t3ljgh.png";

//BookStore
const BookStore1 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761027916/BookStore1_c0urjm.png";
const BookStore2 =
  "https://res.cloudinary.com/darmatnf2/image/upload/BookStore2_ffsw3b.png";
const BookStore3 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1761027917/BookStore3_jxftt5.png";

const projects = [
  // E-Commerce app
  {
    title: "E-Commerce app",
    description:
      " This is a FullStack E-Commerce web application built with React.js & Firebase designed to deliver a smooth and engaging shopping experience.",
    LiveLink: "https://sigma-mart.vercel.app/",
    GithubLink: "https://github.com/HarshNandigamwar/SigmaMart",
    tech: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "DummyJSON API",
      "Axios",
      "Motion",
    ],
    images: [Ecom1, Ecom2, Ecom3],
  },
  // Weather app
  {
    title: "Weather app",
    description:
      "Check the weather forecast anytime anywhere. Get accurate and up-to-date weather updates for your location.",
    LiveLink: "https://weather-app-shriharsh.netlify.app/",
    GithubLink: "https://github.com/HarshNandigamwar/Weather-App",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Weather API"],
    images: [Weather1, Weather2, Weather3],
  },
  //Currency Converter
  {
    title: "Currency Converter",
    description:
      "Quickly convert currencies on-the-go Get up-to-date exchange rates for countries worldwide.",
    LiveLink: "https://shriharsh-currency-converter.netlify.app/",
    GithubLink: "https://github.com/HarshNandigamwar/Currency-Converter",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Currency API"],
    images: [CurrencyConverter1, CurrencyConverter2, CurrencyConverter3],
  },
  //Sigma AI
  {
    title: "Sigma AI",
    description:
      " It Is A smart and interactive chatbot designed to provide quick, accurate, and engaging responses to users.",
    LiveLink: "https://sigma-ai-by-shriharsh.netlify.app/",
    GithubLink: "https://github.com/HarshNandigamwar/Sigma-AI",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Gemini API"],
    images: [SigmaAI1, SigmaAI2, SigmaAI3],
  },
  //BookStore
  {
    title: "BookStore",
    description:
      " A full-stack Bookstore application built with React, Tailwind CSS, Firebase, and Cloudinary. This project allows users to sign up, log in (Email/Google), add books with images, view a responsive grid of books, and download book covers.",
    LiveLink: "https://bookstoreshriharshnandigamwar.netlify.app/",
    GithubLink: "https://github.com/HarshNandigamwar/BookStore_WebApp",
    tech: ["React.js", "Tailwind CSS", "Firebase"],
    images: [BookStore1, BookStore2, BookStore3],
  },
];

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0);

  // Auto change image every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="bg-black/30 rounded-md shadow-xl overflow-hidden border border-[var(--text-color)] flex flex-col transform-none">
      {/* Image Slideshow */}
      <div className="h-44 md:h-52 lg:h-56 w-full overflow-hidden relative group">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={project.images[current]}
            alt={project.title}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Arrows (only visible on hover) */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft className="text-[var(--text-color)] w-5 h-5 cursor-pointer" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight className="text-[var(--text-color)] w-5 h-5 cursor-pointer" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 w-full flex justify-center gap-2">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition border ${
                i === current ? "bg-[var(--text-color)]" : "bg-gray-800"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl text-[var(--text-color)] md:text-2xl font-bold mb-3">
          {project.title}
        </h2>
        <p className="text-[var(--maintext-color)] text-sm md:text-base mb-4">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-gray-900 text-[#A1A1AA] text-xs px-3 py-1 rounded-full border border-[var(--text-color)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <motion.a
            href={project.LiveLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Demo"
            className="flex-1 text-center bg-gray-900 text-[#A1A1AA] py-2 px-4 rounded-[8px] border border-gray-500/10 font-medium transition-all duration-150 active:scale-95 hover:scale-102 ease-in-out"
            whileHover={{
              backgroundColor: "var(--text-color)",
              color: "black",
            }}
            transition={{ duration: 0.4 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.GithubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Source Code"
            className="flex-1 text-center bg-gray-900 text-[#A1A1AA] py-2 px-4 rounded-[8px] border border-gray-500/10 font-medium transition-all duration-150 active:scale-95 hover:scale-102 ease-in-out"
            whileHover={{
              backgroundColor: "var(--text-color)",
              color: "black",
            }}
            transition={{ duration: 0.4 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div id="project" className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <motion.div
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[35px] md:text-[40px] lg:text-6xl font-bold text-[var(--text-color)]">
            My Projects
          </h3>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-[var(--maintext-color)] max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore some of the projects I've worked on. These showcase my skills
          and expertise in various domains of web-development.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="px-3 sm:px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
