import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[670px] pt-10 flex flex-col items-start justify-start gap-y-8 "
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span>About Me</span>
          </h3>
        </div>
      </div>

      <div className="p-6 rounded-sm border border-gray-800/50 bg-[#1a1a1a]/20 backdrop-blur-sm  transition-all duration-300 w-full">
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-emerald-500"></span>
              Who I Am
            </h4>
            <p className="text-sm text-white leading-relaxed">
              I&apos;m a passionate full-stack developer with a keen eye for
              design and a love for creating seamless user experiences.
            </p>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              My approach combines technical expertise with creative
              problem-solving, ensuring that every project I work on is not only
              functional but also visually appealing and user-friendly.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              With expertise across the full web development stack, I specialize
              in building clean and intuitive front-end interfaces using
              React.js, while also developing scalable and secure back-end
              solutions with Node.js, Express, and MongoDB.
            </p>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              I&apos;m also passionate about mentoring and sharing knowledge. I
              regularly contribute to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
