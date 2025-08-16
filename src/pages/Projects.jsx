import React from "react";
import Reveal from "../utils/Reveal.jsx";
import { BsGithub } from "react-icons/bs";
import { BiExport } from "react-icons/bi";
import SigmaAIImg from "../assets/sigma ai.jpg";
import CC from "../assets/currency converter .jpg";
import WeatherImg from "../assets/weather app.jpg";
import Ecom from "../assets/SigmaMart.png";
const Projects = () => {
  let SigmaAI = ["HTML", "Tailwind CSS", "JavaScript", "Gemini API"];
  let Cc = ["HTML", "Tailwind CSS", "JavaScript", "Currency API"];
  let weather = ["HTML", "Tailwind CSS", "JavaScript", "Weather API"];
  let SigmaMart = ["React.js", "Tailwind CSS", "DummyJSON API"];

  return (
    <section
      id="project"
      className="max-w-[670px] pt-10 flex flex-col items-start justify-start gap-y-10  "
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="space-y-2">
          <h3 className="text-3xl font-mono font-bold text-purple-300">
            My Projects
          </h3>
          <p className="text-[#A1A1AA] text-sm">
            Explore some of the projects I&apos;ve worked on. These showcase my
            skills and expertise in various domains of web-development.
          </p>
        </div>
      </div>
      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2 w-full text-center">
          {/* SigmaAI   */}
          <Reveal>
            <div className="max-w-[670px] flex overflow-hidden rounded-sm border border-purple-500/50 transition-all duration-300 ease-in-out hover:border-purple-500 w-full cursor-pointer group bg-[#1e1e1e]/20">
              <div className="flex sm:flex-row flex-col w-full">
                <div className="relative h-[240px] w-full sm:w-[40%] overflow-hidden flex flex-col items-center justify-center">
                  <img
                    src={SigmaAIImg}
                    alt="Sigma AI"
                    className="object-cover p-1 rounded-sm"
                  />
                </div>
                <div className="w-full sm:w-[60%] flex flex-col p-5 space-y-3">
                  <h3 className="text-purple-400 text-xl font-mono font-bold">
                    Sigma AI
                  </h3>
                  <p className="text-[#A1A1AA] text-sm font-normal line-clamp-4">
                    It Is A smart and interactive chatbot designed to provide
                    quick, accurate, and engaging responses to users.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {SigmaAI.map((tag) => (
                      <span
                        key={tag}
                        title={tag}
                        className="px-4 py-2 text-[12px] rounded-sm font-medium bg-[#0a0a0a] border border-gray-500/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="relative px-1 py-1 text-xs font-medium text-gray-300/70 group-hover:text-gray-300/90 transition-all duration-300 flex items-center gap-3">
                        {/* GitHub   */}
                        <a
                          href="https://github.com/HarshNandigamwar/Sigma-AI"
                          className="cursor-pointer w-8 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center"
                          title="Source Code"
                        >
                          <BsGithub className="h-5 w-5" />
                        </a>
                        {/* Live Demo  */}
                        <a
                          href="https://sigma-ai-by-shriharsh.netlify.app/"
                          className="cursor-pointer w-30 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center gap-2"
                          title="Live Demo"
                        >
                          <BiExport className="h-5 w-5" />{" "}
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          {/* CC   */}
          <Reveal>
            <div className="max-w-[670px] flex overflow-hidden rounded-sm border border-purple-500/50 transition-all duration-300 ease-in-out hover:border-purple-500 w-full cursor-pointer group bg-[#1e1e1e]/20 ">
              <div className="flex sm:flex-row flex-col w-full">
                <div className="relative h-[240px] w-full sm:w-[40%] overflow-hidden flex flex-col items-center justify-center">
                  <img
                    src={CC}
                    alt="Currency Converter"
                    className="object-cover p-1 rounded-sm"
                  />
                </div>
                <div className="w-full sm:w-[60%] flex flex-col p-5 space-y-3">
                  <h3 className="text-purple-400 font-mono font-bold text-xl ">
                    Currency Converter
                  </h3>
                  <p className="text-[#A1A1AA] text-sm font-normal line-clamp-4">
                    Quickly convert currencies on-the-go Get up-to-date exchange
                    rates for countries worldwide.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {Cc.map((tag) => (
                      <span
                        key={tag}
                        title={tag}
                        className="px-4 py-2 text-[12px] rounded-sm font-medium bg-[#0a0a0a] border border-gray-500/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="relative px-1 py-1 text-xs font-medium text-gray-300/70 group-hover:text-gray-300/90 transition-all duration-300 flex items-center gap-3">
                        {/* GitHub   */}
                        <a
                          href="https://github.com/HarshNandigamwar/Currency-Converter"
                          className="cursor-pointer w-8 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center"
                          title="Source Code"
                        >
                          <BsGithub className="h-5 w-5" />
                        </a>
                        {/* Live Demo  */}
                        <a
                          href="https://shriharsh-currency-converter.netlify.app/"
                          className="cursor-pointer w-30 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center gap-2"
                          title="Live Demo"
                        >
                          <BiExport className="h-5 w-5" />{" "}
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          {/* Weather app   */}
          <Reveal>
            <div className="max-w-[670px] flex overflow-hidden rounded-sm border border-purple-500/50 transition-all duration-300 ease-in-out hover:border-purple-500 w-full cursor-pointer group bg-[#1e1e1e]/20 ">
              <div className="flex sm:flex-row flex-col w-full">
                <div className="relative h-[240px] w-full sm:w-[40%] overflow-hidden flex flex-col items-center justify-center">
                  <img
                    src={WeatherImg}
                    alt="Weather app"
                    className="object-cover p-1 rounded-sm"
                  />
                </div>
                <div className="w-full sm:w-[60%] flex flex-col p-5 space-y-3">
                  <h3 className="text-purple-400 font-mono font-bold text-xl ">
                    Weather app
                  </h3>
                  <p className="text-[#A1A1AA] text-sm font-normal line-clamp-4">
                    Check the weather forecast anytime anywhere. Get accurate
                    and up-to-date weather updates for your location.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {weather.map((tag) => (
                      <span
                        key={tag}
                        title={tag}
                        className="px-4 py-2 text-[12px] rounded-sm font-medium bg-[#0a0a0a] border border-gray-500/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="relative px-1 py-1 text-xs font-medium text-gray-300/70 group-hover:text-gray-300/90 transition-all duration-300 flex items-center gap-3">
                        {/* GitHub   */}
                        <a
                          href="https://github.com/HarshNandigamwar/Weather-App"
                          className="cursor-pointer w-8 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center"
                          title="Source Code"
                        >
                          <BsGithub className="h-5 w-5" />
                        </a>
                        {/* Live Demo  */}
                        <a
                          href="https://weather-app-shriharsh.netlify.app/"
                          className="cursor-pointer w-30 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center gap-2"
                          title="Live Demo"
                        >
                          <BiExport className="h-5 w-5" />{" "}
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          {/* E-Commerce app */}
          <Reveal>
            <div className="max-w-[670px] flex overflow-hidden rounded-sm border border-purple-500/50 transition-all duration-300 ease-in-out hover:border-purple-500 w-full cursor-pointer group bg-[#1e1e1e]/20 ">
              <div className="flex sm:flex-row flex-col w-full">
                <div className="relative h-[240px] w-full sm:w-[40%] overflow-hidden flex flex-col items-center justify-center">
                  <img
                    src={Ecom}
                    alt="E-Commerce app"
                    className="object-cover p-1 rounded-sm"
                  />
                </div>
                <div className="w-full sm:w-[60%] flex flex-col p-5 space-y-3">
                  <h3 className="text-purple-400 font-mono font-bold text-xl ">
                    E-Commerce app
                  </h3>
                  <p className="text-[#A1A1AA] text-sm font-normal line-clamp-4">
                    This is a dynamic E-Commerce web application built with
                    React.js, designed to deliver a smooth and engaging shopping
                    experience.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {SigmaMart.map((tag) => (
                      <span
                        key={tag}
                        title={tag}
                        className="px-4 py-2 text-[12px] rounded-sm font-medium bg-[#0a0a0a] border border-gray-500/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="relative px-1 py-1 text-xs font-medium text-gray-300/70 group-hover:text-gray-300/90 transition-all duration-300 flex items-center gap-3">
                        {/* GitHub   */}
                        <a
                          href="https://github.com/HarshNandigamwar/Sigma-mart"
                          className="cursor-pointer w-8 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center"
                          title="Source Code"
                        >
                          <BsGithub className="h-5 w-5" />
                        </a>
                        {/* Live Demo  */}
                        <a
                          href="https://sigma-mart.vercel.app/"
                          className="cursor-pointer w-30 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center gap-2"
                          title="Live Demo"
                        >
                          <BiExport className="h-5 w-5" />{" "}
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
