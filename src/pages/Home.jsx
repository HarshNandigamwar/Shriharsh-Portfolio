import React from "react";
import Resume from "/Shriharsh_Nandigamwar_resume.pdf";
import { motion } from "framer-motion";
import CustomBtn from "../components/CustomBtn/CustomBtn";
const Home = () => {
  return (
    <div 
      id="intro"
      className=" h-auto md:h-screen xl:h-screen w-screen overflow-x-hidden overflow-y-hidden relative flex flex-col-reverse xl:flex-row items-center justify-center "
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-auto lg:w-[60vw] lg:h-full flex items-center justify-center">
          <div className="max-w-3xl text-center relative xl:top-7 px-3">
            {/* Intro */}
            <div className="myIntroDiv">
              <p className="text-3xl md:text-5xl xl:text-4xl mb-2 font-extrabold">
                Hello, I'm
              </p>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-500">
                Shriharsh Nandigamwar
              </h1>
              <h2 className="text-xl md:text-4xl font-medium text-white mb-6">
                A Full Stack Developer passionate about crafting seamless
                digital experiences.
              </h2>
              <p className="text-[18px] md:text-[25px] lg:text-[22px] text-white mb-8">
                I specialize in building web apps with{" "}
                <span className="text-[#A1A1AA] ">
                  <span className="text-purple-500 font-bold">
                    React, JavaScript, Tailwind CSS, Node.js
                  </span>{" "}
                  and more.
                </span>{" "}
                Always excited to tackle new challenges where I can create value
                and grow as a coder. Let&apos;s connect if you&apos;ve got a
                project that could use my skills!
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 relative top-5">
              <motion.a
                href="#project"
                whileTap={{ scale: 0.9 }}
                className=" text-white border border-purple-500 px-6 py-3 rounded-full shadow-md 
                   hover:bg-purple-500 transition-colors"
              >
                See My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.9 }}
                className=" text-white border border-purple-500 px-6 py-3 rounded-full shadow-md 
                   hover:bg-purple-500 transition-colors"
              >
                Let's Connect
              </motion.a>
            </div>

            {/* Social + Resume */}
            <div className="relative top-10 mb-10 flex flex-col md:flex-row items-center justify-center gap-5 w-full">
              {/* Social Icons */}
              <div className="flex justify-center gap-5">
                <motion.a
                  href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=linkedin"
                    alt="linkedin"
                    className="h-11 w-11"
                  />
                </motion.a>

                <motion.a
                  href="https://github.com/HarshNandigamwar"
                  target="_blank"
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="Github"
                    className="h-11 w-11"
                  />
                </motion.a>

                <motion.a
                  href="https://x.com/Harsh477011?s=09"
                  target="_blank"
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src="https://skillicons.dev/icons?i=twitter"
                    alt="X"
                    className="h-11 w-11"
                  />
                </motion.a>
              </div>

              {/* Resume Button */}
              <a href={Resume} download="Shriharsh Nandigamwar Resume">
                <CustomBtn />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-[40vh] lg:w-[40vw] lg:h-full flex items-center justify-center relative xl:top-7">
          <div className="flex justify-center w-[50vw] lg:w-[50vw] xl:w-[50vw]">
            <img
              src="/shriharsh.jpg"
              alt="Profile"
              className=" border-2 border-purple-500
        rounded-full 
        h-[220px] w-[220px] 
        sm:h-[250px] sm:w-[250px] 
        md:h-[300px] md:w-[300px] 
        lg:h-[400px] lg:w-[400px] 
        xl:h-[500px] xl:w-[500px]
      "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
