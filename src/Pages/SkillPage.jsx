import React, { useEffect } from "react";
import MotionWrapper from "../utils/MotionWrapper";
import thunder from "../assets//thunderClinet.png";
import { SiExpress, SiMongodb, SiRedux, SiFirebase } from "react-icons/si";
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

const SkillPage = () => {
  const frontendSkills = [
    {
      name: "HTML",
      logo: <FaHtml5 color="#E34F26" className="h-6 w-6" />,
    },
    {
      name: "CSS",
      logo: <FaCss3 color="#1572B6" className="h-6 w-6" />,
    },
    {
      name: "JavaScript",
      logo: <IoLogoJavascript color="#F7DF1E" className="h-6 w-6" />,
    },
    {
      name: "React.js",
      logo: <FaReact color="#61DAFB" className="h-6 w-6" />,
    },
    {
      name: "Redux Toolkit",
      logo: <SiRedux color="#764ABC" className="h-6 w-6" />,
    },
    {
      name: "Tailwind CSS",
      logo: <RiTailwindCssFill color="#06B6D4" className="h-6 w-6" />,
    },
    {
      name: "Bootstrap",
      logo: <BsBootstrap color="#7952B3" className="h-6 w-6" />,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      logo: <FaNodeJs color="#339933" className="h-6 w-6" />,
    },
    {
      name: "Express.js",
      logo: <SiExpress color="#00ff00" className="h-6 w-6" />,
    },
    {
      name: "MongoDB",
      logo: <SiMongodb color="#47A248" className="h-6 w-6" />,
    },
    {
      name: "Mongoose",
      logo: (
        <img
          src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
          className="w-[30px] md:w-[35px]" 
          loading="lazy"
        />
      ),
    },
    {
      name: "Firebase",
      logo: <SiFirebase color="#FF9100" className="h-6 w-6" />,
    },
    {
      name: "REST API",
      logo: <FaNetworkWired color="#06B6D4" className="h-6 w-8" />,
    },
  ];

  const tools = [
    {
      name: "Git",
      logo: <FaGitAlt color="#F05032" className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      logo: <FaGithub color="#ffffff" className="h-6 w-6" />,
    },
    {
      name: "Postman",
      logo: (
        <img
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
          className="h-6 w-6" 
          loading="lazy"
        />
      ),
    },
    {
      name: "Thunder Client",
      logo: <img src={thunder} className="h-7 w-8" loading="lazy" />,
    },
    {
      name: "VS Code",
      logo: <VscVscode color="#007ACC" className="h-6 w-6" />,
    },
    {
      name: "Vercel",
      logo: (
        <img src="https://skillicons.dev/icons?i=vercel" className="h-6 w-6" loading="lazy" />
      ),
    },
    {
      name: "Netlify",
      logo: (
        <img src="https://skillicons.dev/icons?i=netlify" className="h-6 w-6" loading="lazy" />
      ),
    },
  ];

  // const softSkills = [
  //   {
  //     name: "Problem Solving",
  //     logo: "https://img.icons8.com/fluency/480/idea.png",
  //   },
  //   {
  //     name: "Communication",
  //     logo: "https://img.icons8.com/fluency/480/speech-bubble.png",
  //   },
  //   {
  //     name: "Teamwork",
  //     logo: "https://img.icons8.com/fluency/480/teamwork.png",
  //   },
  //   {
  //     name: "Time Management",
  //     logo: "https://img.icons8.com/color/48/time-machine--v1.png",
  //   },
  //   {
  //     name: "Adaptability",
  //     logo: "https://img.icons8.com/color/480/synchronize.png",
  //   },
  //   {
  //     name: "Self Learning",
  //     logo: "https://img.icons8.com/fluency/480/mind-map.png",
  //   },
  // ];

  return (
    <div>
      <div
        id="skill"
        className="w-full h-auto overflow-x-hidden overflow-y-hidden flex flex-col gap-10 items-center justify-evenly px-4 py-[50px] lg:px-[100px] relative mt-0 md:mt-[50px]"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-[var(--text-color)] font-bold mb-4">
          Skills & technologies
        </h1>

        <div className="w-[100vw] xl:w-[90vw] h-auto rounded-3xl lg:px-10 flex flex-col gap-10">
          {[
            { title: "Frontend", skills: frontendSkills },
            { title: "Backend", skills: backendSkills },
            { title: "Tools", skills: tools },
          ].map((section, idx) => (
            <div className="flex flex-col gap-3 px-3 md:px-5" key={idx}>
              <h1 className="text-3xl md:text-4xl russo-one-regular text-[var(--text-color)]">
                {section.title}
              </h1>
              <MotionWrapper key={idx}>
                <div className="flex gap-5 flex-wrap w-[100%] ">
                  {section.skills.map((data) => (
                    <div
                      className="border-2 border-[var(--text-color)] w-auto h-15 text-center flex items-center bg-black/30 justify-evenly p-2 xl:px-3 rounded-[12px] gap-2 lg:gap-1 cursor-pointer hover:scale-105 hover:shadow-[0px_0px_10px_var(--text-color)] transition-all  "
                      key={data.name}
                      title={data.name}
                    >
                      {data.logo}
                      <p className="text-[15px] md:text-[17px] text-[var(--maintext-color)]">
                        {data.name}
                      </p>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
