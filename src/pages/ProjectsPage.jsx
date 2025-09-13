import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../utils/Reveal";
// Import Images
//E-Commerce app
import Ecom1 from "../assets/Ecom/Ecom1.png";
import Ecom2 from "../assets/Ecom/Ecom2.png";
import Ecom3 from "../assets/Ecom/Ecom3.png";
// Weather app
import Weather1 from "../assets/Weather/weather1.png";
import Weather2 from "../assets/Weather/weather2.png";
import Weather3 from "../assets/Weather/weather3.jpg";
//Currency Converter
import CurrencyConverter1 from "../assets/Currency Converter/Currency Converter1.jpg";
import CurrencyConverter2 from "../assets/Currency Converter/Currency Converter2.png";
import CurrencyConverter3 from "../assets/Currency Converter/Currency Converter3.png";
//Sigma AI
import SigmaAI1 from "../assets/Sigma AI/sigma ai1.jpg";
import SigmaAI2 from "../assets/Sigma AI/Sigma AI2.png";
import SigmaAI3 from "../assets/Sigma AI/Sigma AI3.png";
//BookStore
import BookStore1 from "../assets/BookStore/BookStore1.png";
import BookStore2 from "../assets/BookStore/BookStore2.png";
import BookStore3 from "../assets/BookStore/BookStore3.png";

const projects = [
  // E-Commerce app
  {
    title: "E-Commerce app",
    description:
      " This is a dynamic E-Commerce web application built with React.js, designed to deliver a smooth and engaging shopping experience.",
    LiveLink: "https://sigma-mart.vercel.app/",
    GithubLink: "https://github.com/HarshNandigamwar/Sigma-mart",
    tech: ["React.js", "Tailwind CSS", "DummyJSON API"],
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
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  return (
    <motion.div
      className="bg-[#1e1e1e]/20 rounded-2xl shadow-xl overflow-hidden border border-purple-500/50 hover:border-purple-500 flex flex-col transform-none"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Image Slideshow */}
      <div className="h-44 md:h-52 lg:h-56 w-full overflow-hidden relative group">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={project.images[current]}
            alt={project.title}
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
          <ChevronLeft className="text-purple-400 w-5 h-5 cursor-pointer" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight className="text-purple-400 w-5 h-5 cursor-pointer" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 w-full flex justify-center gap-2">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition border ${
                i === current ? "bg-purple-400" : "bg-gray-800"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl text-purple-400 md:text-2xl font-bold mb-3">
          {project.title}
        </h2>
        <p className="text-[#A1A1AA] text-sm md:text-base mb-4">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-gray-900 text-[#A1A1AA] text-xs px-3 py-1 rounded-full border border-purple-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.LiveLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Demo"
            className="flex-1 text-center bg-purple-400 text-[#000000] py-2 px-4 rounded-[8px] border border-gray-500/10 font-medium transition-all duration-300 hover:scale-102"
          >
            Live Demo
          </a>
          <a
            href={project.GithubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Source Code"
            className="flex-1 text-center bg-gray-900 text-[#A1A1AA] py-2 px-4 rounded-[8px] border border-gray-500/10 font-medium transition-all duration-300 hover:scale-102"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-mono font-bold text-purple-300">
            My Projects
          </h3>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-[#A1A1AA] max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore some of the projects I've worked on. These showcase my skills
          and expertise in various domains of web-development.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-16">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal>
              <ProjectCard key={index} project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
