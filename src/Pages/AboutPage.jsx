import React from "react";
import MotionWrapper from "../utils/MotionWrapper";
const AboutPage = () => {
  return (
    <div>
      <section id="About" className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-purple-500 font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left info */}
            <MotionWrapper direction="-x">
              <div className="w-64 h-70 lg:w-74 mx-auto lg:mx-0 rounded-2xl flex items-center justify-center text-6xl font-bold mb-8">
                <img src="/myImg2.jpg" alt="N/A" className="rounded-2xl" />
              </div>
            </MotionWrapper>

            {/* Right Info */}
            <MotionWrapper direction="x">
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-5">
                  I’m{" "}
                  <span className="font-bold text-purple-500">
                    Shriharsh Nandigamwar
                  </span>
                </h3>
                <p className="text-white leading-relaxed">
                  A dedicated Full Stack Developer with a strong passion for
                  building fast, functional, and visually engaging web
                  applications.
                  <br />I enjoy working across the modern web stack from
                  creating clean, responsive user interfaces with{" "}
                  <span className="text-purple-500 font-semibold">
                    React.js
                  </span>{" "}
                  to developing secure and scalable backend systems using{" "}
                  <span className="text-purple-500 font-semibold">Node.js</span>
                  ,{" "}
                  <span className="text-purple-500 font-semibold">Express</span>
                  , and{" "}
                  <span className="text-purple-500 font-semibold">MongoDB</span>
                  .
                  <br />I have a keen interest in building real-world projects,
                  solving meaningful problems through code, and collaborating
                  with other developers. I also believe in continuous learning
                  to stay up to date with the latest technologies and best
                  practices in the ever-changing tech world.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">
                      Experience
                    </h4>
                    <p className="text-gray-300">2+ Years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Projects</h4>
                    <p className="text-gray-300">8+ Completed</p>
                  </div>
                  {/* <div>
                  <h4 className="font-semibold text-accent mb-2">Clients</h4>
                  <p className="text-gray-300">30+ Happy</p>
                </div> */}
                  <div>
                    <h4 className="font-semibold text-accent mb-2">
                      Certifications
                    </h4>
                    <p className="text-gray-300">3+ Won</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
