import React from "react";
import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
} from "react-icons/si";
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

const Skills = () => {
  let Frontend = [
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
      name: "React.js",
      icon: <FaReact color="#61DAFB" className="h-6 w-6" />,
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux color="#764ABC" className="h-6 w-6" />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill color="#06B6D4" className="h-6 w-6" />,
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
      name: "MongoDB",
      icon: <SiMongodb color="#47A248" className="h-6 w-6" />,
    },
    {
      name: "Mongoose",
      icon: <img src="../assets/mongoose.png" className="h-6 w-6" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase color="#FF9100" className="h-6 w-6" />,
    },
    {
      name: "REST API",
      icon: <FaNetworkWired color="#06B6D4" className="h-6 w-6" />,
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
      name: "Postman",
      icon: <img src="../assets/postman.png" className="h-6 w-6" />,
    },
    {
      name: "VS Code",
      icon: <VscVscode color="#007ACC" className="h-6 w-6" />,
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
  let SoftSkill = [
    {
      name: "Problem Solving",
      icon: <img src="../assets/problem2.jpg" className="h-6 w-6" />,
    },
    {
      name: "Communication",
      icon: <img src="../assets/comunication.jpg" className="h-6 w-6" />,
    },
    {
      name: "Teamwork",
      icon: <img src="../assets/teamwork.png" className="h-6 w-6" />,
    },
    {
      name: "Self Learning",
      icon: <img src="../assets/Self.png" className="h-6 w-6" />,
    },
  ];

  return (
    <section id="skill" className=" max-w-[670px] flex flex-col items-start justify-start gap-5 mt-10">
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-slate-200">Skills</span> I have
          </h3>
          <p className="text-[#A1A1AA] text-sm">
            Technologies and tools I&apos;ve worked with and enjoy using.
          </p>
        </div>
      </div>
      <div className="w-full space-y-5">
        <div className="space-y-3">
          {/* Frontend */}
          <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#08090a] dark:bg-slate-100"></span>
            <span className="text-2xl">Frontend</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {Frontend.map((data) => (
              <div
                key={data.name}
                className="inline-flex items-center gap-2 rounded-sm bg-[#0a0a0a] border border-slate-500/10 px-3 py-1.5 transition-all duration-300 hover:border-slate-500/10 hover:bg-[#111111] cursor-pointer "
              >
                <span className="flex items-center justify-center size-10 p-1 rounded-sm bg-[#191a1a] text-xs font-medium text-slate-200">
                  {data.icon}
                </span>
                <span className="text-sm font-medium text-gray-200">
                  {data.name}
                </span>
              </div>
            ))}
          </div>
          {/* Backend  */}
          <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#08090a] dark:bg-slate-100"></span>
            <span className="text-2xl">Backend</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {Backend.map((data) => (
              <div
                key={data.name}
                className="inline-flex items-center gap-2 rounded-sm bg-[#0a0a0a] border border-slate-500/10 px-3 py-1.5 transition-all duration-300 hover:border-slate-500/10 hover:bg-[#111111] cursor-pointer "
              >
                <span className="flex items-center justify-center size-10 p-1 rounded-sm bg-[#191a1a] text-xs font-medium text-slate-200">
                  {data.icon}
                </span>
                <span className="text-sm font-medium text-gray-200">
                  {data.name}
                </span>
              </div>
            ))}
          </div>
          {/* Tools   */}
          <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#08090a] dark:bg-slate-100"></span>
            <span className="text-2xl">Tools</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {Tools.map((data) => (
              <div
                key={data.name}
                className="inline-flex items-center gap-2 rounded-sm bg-[#0a0a0a] border border-slate-500/10 px-3 py-1.5 transition-all duration-300 hover:border-slate-500/10 hover:bg-[#111111] cursor-pointer "
              >
                <span className="flex items-center justify-center size-10 p-1 rounded-sm bg-[#191a1a] text-xs font-medium text-slate-200">
                  {data.icon}
                </span>
                <span className="text-sm font-medium text-gray-200">
                  {data.name}
                </span>
              </div>
            ))}
          </div>
          {/* Soft skill   */}
          <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#08090a] dark:bg-slate-100"></span>
            <span className="text-2xl"> Soft skills</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {SoftSkill.map((data) => (
              <div
                key={data.name}
                className="inline-flex items-center gap-2 rounded-sm bg-[#0a0a0a] border border-slate-500/10 px-3 py-1.5 transition-all duration-300 hover:border-slate-500/10 hover:bg-[#111111] cursor-pointer "
              >
                <span className="flex items-center justify-center size-10 p-1 rounded-sm bg-[#191a1a] text-xs font-medium text-slate-200">
                  {data.icon}
                </span>
                <span className="text-sm font-medium text-gray-200">
                  {data.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
