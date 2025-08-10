import React from "react";
import CustomBtn from "../components/CustomBtn/CustomBtn";
import Resume from '../assets/Shriharsh_Nandigamwar_resume.pdf'
const Home = () => {
  return (
    <section
      id="intro"
      className="max-w-[670px] flex flex-col items-start justify-center"
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
    </section>
  );
};

export default Home;
