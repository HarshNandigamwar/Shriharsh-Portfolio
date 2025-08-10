import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiExport } from "react-icons/bi";

const Projects = () => {
  let Project = [
    {
      id: "1",
      title: "Sigma AI",
      description:
        "It Is A smart and interactive chatbot designed to provide quick, accurate, and engaging responses to users.",
      Image: "../assets/sigma ai.jpg",
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      LiveLink: "https://sigma-ai-by-shriharsh.netlify.app/",
      githubLink: "https://github.com/HarshNandigamwar/Sigma-AI",
    },

    {
      id: "2",
      title: "Currency Converter",
      description:
        "Quickly convert currencies on-the-go Get up-to-date exchange rates for countries worldwide.",
      Image: "../assets/currency converter .jpg",
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      LiveLink: "https://shriharsh-currency-converter.netlify.app/",
      githubLink: "https://github.com/HarshNandigamwar/Currency-Converter",
    },

    {
      id: "3",
      title: "Weather app",
      description:
        "Check the weather forecast anytime anywhere. Get accurate and up-to-date weather updates for your location.",
      Image: "../assets/weather app.jpg",
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      LiveLink: "https://weather-app-shriharsh.netlify.app/",
      githubLink: "https://github.com/HarshNandigamwar/Weather-App",
    },
    {
      id: "4",
      title: "E-Commerce app",
      description:
        "This is a dynamic E-Commerce web application built with React.js, designed to deliver a smooth and engaging shopping experience.",
      Image: "../assets/SigmaMart.png",
      tags: ["React.js", "Tailwind CSS"],
      LiveLink: "https://sigma-mart.vercel.app/",
      githubLink: "https://github.com/HarshNandigamwar/Sigma-mart",
    },
  ];

  return (
    <section
      id="project"
      className="max-w-[670px] pt-10 flex flex-col items-start justify-start gap-y-10 "
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            My <span className="text-slate-200">Projects</span>
          </h3>
          <p className="text-[#A1A1AA] text-sm">
            Explore some of the projects I&apos;ve worked on. These showcase my
            skills and expertise in various domains of web-development.
          </p>
        </div>
      </div>
      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2 w-full text-center">
          {Project.map((data) => {
            return (
              <div
                key={data.id}
                className="max-w-[670px] flex overflow-hidden rounded-sm border border-gray-500/10 transition-all duration-300 ease-in-out hover:border-gray-500/20 w-full cursor-pointer group"
              >
                <div className="flex sm:flex-row flex-col w-full">
                  <div className="relative h-[240px] w-full sm:w-[40%] overflow-hidden flex flex-col items-center justify-center">
                    <img
                      src={data.Image}
                      alt={data.title}
                      className="object-cover p-1 rounded-sm"
                    />
                  </div>
                  <div className="w-full sm:w-[60%] flex flex-col p-5 space-y-3">
                    <h3 className="text-white text-xl font-semibold">
                      {data.title}
                    </h3>
                    <p className="text-[#A1A1AA] text-sm font-normal line-clamp-4">
                      {data.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {data.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-sm font-medium bg-[#0a0a0a] border border-gray-500/10 text-white"
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
                            href={data.githubLink}
                            className="cursor-pointer w-8 h-8 border border-gray-500/10 rounded-[3px] flex items-center justify-center"
                            title="Source Code"
                          >
                            <BsGithub className="h-5 w-5" />
                          </a>
                          {/* Live Demo  */}
                          <a
                            href={data.LiveLink}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
