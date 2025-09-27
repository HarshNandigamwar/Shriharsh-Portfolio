import React from "react";
import MotionWrapper from "../utils/MotionWrapper";
import { useLenis } from "../Hooks/SmoothScroll";
import { useNavigate } from "react-router-dom";
import { ChevronsRight } from "../components/ChevronsRight";
const AboutPage = () => {
  const lenis = useLenis();
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el && lenis) {
      lenis.scrollTo(el, {
        offset: -50, // adjust for navbar height
        duration: 0.8, // faster scroll just for navbar clicks
        easing: (t) => t, // linear easing for snappy feel
      });
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <section id="About" className="py-20 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-[var(--text-color)] font-bold mb-4">
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
                <h3 className="text-2xl font-semibold text-accent mb-5 text-[var(--maintext-color)]">
                  I’m{" "}
                  <span className="font-bold text-[var(--text-color)]">
                    Shriharsh Nandigamwar
                  </span>
                </h3>
                <p className="text-[var(--maintext-color)] leading-relaxed">
                  A dedicated Full Stack Developer with a strong passion for
                  building fast, functional, and visually engaging web
                  applications.
                  <br />I enjoy working across the modern web stack from
                  creating clean, responsive user interfaces with{" "}
                  <span className="text-[var(--text-color)] font-semibold">
                    React.js
                  </span>{" "}
                  to developing secure and scalable backend systems using{" "}
                  <span className="text-[var(--text-color)] font-semibold">
                    Node.js
                  </span>
                  ,{" "}
                  <span className="text-[var(--text-color)] font-semibold">
                    Express
                  </span>
                  , and{" "}
                  <span className="text-[var(--text-color)] font-semibold">
                    MongoDB
                  </span>
                  .
                  <br />I have a keen interest in building real-world projects,
                  solving meaningful problems through code, and collaborating
                  with other developers. I also believe in continuous learning
                  to stay up to date with the latest technologies and best
                  practices in the ever-changing tech world.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {/* Experience */}
                  <div
                    title="Explore Experience"
                    onClick={() => navigate("experience")}
                  >
                    <h4 className="font-semibold text-accent mb-2 text-[var(--maintext-color)] flex items-center">
                      Experience{" "}
                      <ChevronsRight
                        stroke="var(--text-color)"
                        height={"15px"}
                      />
                    </h4>
                    <p className="text-[var(--maintext-color)]">1 Internship</p>
                  </div>
                  {/* Project */}
                  <div
                    title="Explore Project"
                    onClick={() => handleScroll("project")}
                  >
                    <h4 className="font-semibold text-accent mb-2 text-[var(--maintext-color)] flex items-center ">
                      Projects{" "}
                      <ChevronsRight
                        stroke="var(--text-color)"
                        height={"15px"}
                      />
                    </h4>
                    <p className="text-[var(--maintext-color)]">4+ Completed</p>
                  </div>
                  {/* Certification */}
                  <div
                    title="Explore certification"
                    onClick={() => navigate("/certification")}
                  >
                    <h4 className="font-semibold text-accent mb-2 text-[var(--maintext-color)] flex items-center ">
                      Certifications
                      <ChevronsRight
                        stroke="var(--text-color)"
                        height={"15px"}
                      />
                    </h4>
                    <p className="text-[var(--maintext-color)]">3+ Won</p>
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
