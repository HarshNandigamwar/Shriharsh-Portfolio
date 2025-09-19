import React from "react";
import Reveal from "../utils/Reveal.jsx";
import mongoose from "../assets/mongoose.png";
import thunder from "../assets/thunderClinet.png";
import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaNetworkWired,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import BlinkDot from "../components/BlinkDot";

const Skills = () => {
  let Language = [
    {
      name: "HTML",
      icon: <FaHtml5 color="#E34F26" className="h-6 w-6" />,
    },
    {
      name: "CSS",
      icon: <FaCss3 color="#1572B6" className="h-6 w-6" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript color="#F7DF1E" className="h-6 w-6" />,
    },
    {
      name: "C",
      icon: <img src="https://skillicons.dev/icons?i=c" className="h-8 w-8" />,
    },
    {
      name: "C++",
      icon: <SiCplusplus color="#1572B6" className="h-6 w-6" />,
    },
    {
      name: "Python",
      icon: <img src="https://skillicons.dev/icons?i=py" className="h-8 w-8" />,
    },
    {
      name: "Java",
      icon: (
        <img src="https://skillicons.dev/icons?i=java" className="h-8 w-8" />
      ),
    },
  ];
  let Frontend = [
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill color="#06B6D4" className="h-6 w-6" />,
    },
    {
      name: "Bootstrap",
      icon: <BsBootstrap color="#7952B3" className="h-6 w-6" />,
    },
    {
      name: "React.js",
      icon: <FaReact color="#61DAFB" className="h-6 w-6" />,
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux color="#764ABC" className="h-6 w-6" />,
    },
  ];
  let Backend = [
    {
      name: "Node.js",
      icon: <FaNodeJs color="#339933" className="h-6 w-6" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress color="#ffffff" className="h-6 w-6" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase color="#FF9100" className="h-6 w-6" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb color="#47A248" className="h-6 w-6" />,
    },
    {
      name: "Mongoose",
      icon: <img src={mongoose} className="h-6 w-6" />,
    },
    {
      name: "REST API",
      icon: <FaNetworkWired color="#06B6D4" className="h-6 w-8" />,
    },
  ];
  let Tools = [
    {
      name: "Git",
      icon: <FaGitAlt color="#F05032" className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub color="#ffffff" className="h-6 w-6" />,
    },
    {
      name: "VS Code",
      icon: <VscVscode color="#007ACC" className="h-6 w-6" />,
    },
    {
      name: "Postman",
      icon: (
        <img
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
          className="h-6 w-6"
        />
      ),
    },
    {
      name: "Thunder Client",
      icon: <img src={thunder} className="h-7 w-8" />,
    },

    {
      name: "Vercel",
      icon: (
        <img src="https://skillicons.dev/icons?i=vercel" className="h-6 w-6" />
      ),
    },
    {
      name: "Netlify",
      icon: (
        <img src="https://skillicons.dev/icons?i=netlify" className="h-6 w-6" />
      ),
    },
    {
      name: "Replit",
      icon: (
        <img src="https://skillicons.dev/icons?i=replit" className="h-6 w-6" />
      ),
    },
  ];

  return (
    <section
      id="skill"
      className="w-full flex flex-col items-center ml-10 gap-5 mt-15 lg:ml-35 "
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">
            <span className="text-[35px] md:text-[40px] font-bold aladin-regular text-purple-500">
              Skills & Technologies
            </span>
          </h3>
        </div>
      </div>
      <div className="w-full space-y-5">
        <div className="space-y-3">
          {/* Languages  */}
          <h4 className="text-lg font-medium text-white flex items-center gap-2">
            <BlinkDot />
            <span className="text-4xl font-bold">Languages</span>
          </h4>
          <div className="flex flex-wrap gap-3 lg:gap-5">
            {Language.map((data) => (
              <Reveal stagger={0.08} >
                <div
                  key={data.name}
                  title={data.name}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#0a0a0a] border border-purple-500/50 px-3 py-1.5 transition-all duration-300 hover:border-purple-500 hover:bg-[#111111] cursor-pointer hover:scale-105 "
                >
                  <span className="flex items-center justify-center size-10 p-1 rounded-sm bg-[#191a1a] text-xs font-medium text-slate-200">
                    {data.icon}
                  </span>
                  <span className="text-sm lg:text-2xl font-bold text-gray-200">
                    {data.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Libraries & Frameworks*/}
          <h4 className="text-lg font-medium text-white flex items-center gap-2 mt-10">
            <BlinkDot />
            <span className="text-4xl font-bold">Libraries & Frameworks</span>
          </h4>
          <div className="flex flex-wrap gap-3 lg:gap-5">
            {Frontend.map((data) => (
              <Reveal stagger={0.08}>
                <div
                  key={data.name}
                  title={data.name}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#0a0a0a] border border-purple-500/50 px-3 py-1.5 transition-all duration-300 hover:border-purple-500 hover:bg-[#111111] cursor-pointer hover:scale-105 "
                >
                  <span className="flex items-center justify-center size-10 p-1 rounded-sm bg-[#191a1a] text-xs font-medium text-slate-200">
                    {data.icon}
                  </span>
                  <span className="text-sm lg:text-2xl font-bold text-gray-200">
                    {data.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Backend  */}
          <h4 className="text-lg font-medium text-white flex items-center gap-2 mt-10">
            <BlinkDot />
            <span className="text-4xl font-bold">Backend</span>
          </h4>
          <div className="flex flex-wrap gap-3 lg:gap-5">
            {Backend.map((data) => (
              <Reveal stagger={0.08}>
                <div
                  key={data.name}
                  title={data.name}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#0a0a0a] border border-purple-500/50 px-3 py-1.5 transition-all duration-300 hover:border-purple-500 hover:bg-[#111111] cursor-pointer hover:scale-105 "
                >
                  <span className="flex items-center justify-center size-10 p-1 rounded-sm bg-[#191a1a] text-xs font-medium text-slate-200">
                    {data.icon}
                  </span>
                  <span className="text-sm lg:text-2xl font-bold text-gray-200">
                    {data.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Tools   */}
          <h4 className="text-lg font-medium text-white flex items-center gap-2 mt-10">
            <BlinkDot />
            <span className="text-4xl font-bold">Tools</span>
          </h4>
          <div className="flex flex-wrap gap-3 lg:gap-5">
            {Tools.map((data) => (
              <Reveal stagger={0.08}>
                <div
                  key={data.name}
                  title={data.name}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#0a0a0a] border border-purple-500/50 px-3 py-1.5 transition-all duration-300 hover:border-purple-500 hover:bg-[#111111] cursor-pointer hover:scale-105 "
                >
                  <span className="flex items-center justify-center size-10 p-1 rounded-sm bg-[#191a1a] text-xs font-medium text-slate-200">
                    {data.icon}
                  </span>
                  <span className="text-sm lg:text-2xl font-bold text-gray-200">
                    {data.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
