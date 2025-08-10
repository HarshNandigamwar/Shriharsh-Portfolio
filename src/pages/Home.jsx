import React from "react";
import CustomBtn from "../components/CustomBtn/CustomBtn";
import Resume from '../assets/Shriharsh_Nandigamwar_resume.pdf'
const Home = () => {
  return (
    <section
      id="intro"
      className="max-w-[670px] flex flex-col items-start justify-center relative"
    >
      <div className="space-y-6 ">
        <div className="space-y-5 sm:space-y-6">
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            <span className="text-slate-200">Hi, I&apos;m Shriharsh</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-white max-w-2xl">
            A Full Stack Developer passionate about crafting seamless digital
            experiences
          </p>

          <p className="text-sm sm:text-base font-normal text-[#A1A1AA] max-w-2xl">
            I specialize in building web apps with{" "}
            <span className="text-slate-100 font-semibold">
              React, JavaScript, Tailwind CSS, Node.js and more.
            </span>{" "}
            Always excited to tackle new challenges where I can create value and
            grow as a coder. Let&apos;s connect if you&apos;ve got a project
            that could use my skills!
          </p>
        </div>

        <div className="mt-4">
          <a
            href={Resume}
            download="Shriharsh_Nandigamwar_resume.pdf"
          >
            {" "}
            <CustomBtn />{" "}
          </a>
        </div>
      </div>
    
            <div className="absolute w-[200px] h-[200px] bg-blue-700 opacity-30 rounded-full blur-[150px] top-[10%] left-[10%]" />
            <div className="absolute w-[200px] h-[200px] bg-cyan-700 opacity-30 rounded-full blur-[130px] top-[40%] left-[70%]" />
           
    </section>
  );
};

export default Home;
