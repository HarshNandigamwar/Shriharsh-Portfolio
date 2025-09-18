import React from "react";
import MotionWrapper from "../utils/MotionWrapper";

const About = () => {
  return (
    <div
      id="About"
      className="w-full h-auto overflow-x-hidden overflow-y-hidden flex gap-5 flex-col md:flex-row items-center justify-center px-[50px] py-[10vh] pb-[50px] relative mt-0 md:mt-[50px]"
    >
      <div className=" flex flex-col-reverse md:flex-row gap-5 md:gap-0 xl:gap-5 lg:h-[75vh] ">
        <div className="flex flex-col gap-5 w-full px-2 md:w-[48vw] xl:w-[43vw] ">
          {/* Experience */}
          <MotionWrapper direction="-x">
            <div className="flex flex-col gap-[10px] w-[100%] p-[15px] rounded-[15px] border border-purple-500 ">
              <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-purple-500">
                Experience
              </h1>

              <h2 className="text-[19px] text-purple-500 russo-one-regular">
                SkillCraft Technology
                <p className="text-[17px]">Feb 2025 – March 2025</p>
              </h2>

              <p className="text-[16px] md:text-[18px] text-justify">
                During my internship at{" "}
                <span className="font-bold">SkillCraft Technology</span>, I was
                recognized for my strong work ethic, professionalism, and
                dedication to web development. I consistently exceeded
                expectations, demonstrated problem-solving skills, and delivered
                quality results. My mentor appreciated my passion for learning
                and ability to handle complex projects effectively.
              </p>
            </div>
          </MotionWrapper>

          {/* Certifications */}
          <MotionWrapper direction="y">
            <div className=" w-[100%] p-[15px] rounded-[15px] border border-purple-500 flex flex-col gap-[10px]  ">
              <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-purple-500">
                Certifications
              </h1>
              <div className="text-[18px] leading-[30px]">
                <h3>
                  <b className="text-purple-300">IBM:</b> Web Development
                  Fundamentals
                </h3>
                <h3>
                  <b className="text-purple-300">AWS:</b> Solutions Architecture
                  job Simulation
                </h3>
                <h3>
                  <b className="text-purple-300">Accenture :</b> Developer &
                  Technology Job Simulation
                </h3>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <div className="w-[100vw] md:w-[48vw] xl:w-[43vw] h-auto px-2 flex flex-col gap-5 ">
          {/* About   */}
          <MotionWrapper direction="x">
            <div className="w-[100%] p-[15px] rounded-[15px] border border-purple-500 flex flex-col gap-[10px]">
              <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-purple-500">
                About Me
              </h1>

              <p className="text-[16px] md:text-[18px] text-justify">
                I’m <span className="font-bold">Shriharsh Nandigamwar</span>, a
                dedicated Full Stack Developer with a strong passion for
                building fast, functional, and visually engaging web
                applications.
              </p>

              <p className="text-[16px] md:text-[18px] text-justify">
                I enjoy working across the modern web stack from creating clean,
                responsive user interfaces with{" "}
                <span className="text-purple-500 font-semibold">React.js</span>{" "}
                to developing secure and scalable backend systems using{" "}
                <span className="text-purple-500 font-semibold">Node.js</span>,{" "}
                <span className="text-purple-500 font-semibold">Express</span>,
                and{" "}
                <span className="text-purple-500 font-semibold">MongoDB</span>.
              </p>

              <p className="text-[16px] md:text-[18px] text-justify">
                I have a keen interest in building real-world projects, solving
                meaningful problems through code, and collaborating with other
                developers. I also believe in continuous learning to stay up to
                date with the latest technologies and best practices in the
                ever-changing tech world.
              </p>
            </div>
          </MotionWrapper>

          {/* Education */}
          <MotionWrapper direction="y">
            <div className=" w-[100%] p-[15px] rounded-[15px] border border-purple-500 flex flex-col gap-[10px]  ">
              <h1 className="text-[35px] md:text-[40px] font-bold aladin-regular text-purple-500">
                Education
              </h1>
              <div className="text-[15px] md:text-[18px] leading-[30px]">
                <p className="font-semibold">
                  Bachelor of Science in Information Technology
                </p>
                <p>Gondwana University, Gadchiroli</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
