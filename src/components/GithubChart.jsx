import React, { useState } from "react";
import GitBox from "./GitBox";
import { FaGithub } from "react-icons/fa";
import Reveal from "../utils/Reveal";
import { motion } from "framer-motion";
const GithubChart = () => {
  const [GitChartLoader, setGitChartLoader] = useState(true);

  setTimeout(() => {
    setGitChartLoader(false);
  }, 5000);

  return GitChartLoader ? (
    <Reveal>
      <div className="py-10 flex flex-col items-center gap-y-10">
        <div className="border w-85 h-30 rounded-[8px] border-purple-500 flex flex-col items-center justify-center p-2.5">
          <h1>Loading GitChart Just for you . . .</h1>
          <div className="mt-2 animate-spin"> ⌛ </div>
        </div>
      </div>
    </Reveal>
  ) : (
    <Reveal>
      <div>
        <div className="py-10 flex flex-col items-center gap-y-10">
          <div className="space-y-2 items-center">
            <h3 className="text-[35px] md:text-[40px] font-bold aladin-regular text-purple-500 text-center">
              GitHub Contributions
            </h3>
            <p className="text-[#A1A1AA] text-sm">
              When I look back at where I started, the progress feels both
              inspiring, & deeply motivating to continue.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://ghchart.rshah.org/00ff00/Harshnandigamwar"
              alt="Oops GitHub API Error ＞﹏＜ "
            />
            <div className="px-4 py-2 text-[13px] text-[#A1A1AA] rounded-sm ">
              Contributions in 2025
            </div>

            <div className="flex gap-5 items-center">
              {" "}
              <span className="text-[#A1A1AA]">Less</span>
              <GitBox color="#ebedf0" />
              <GitBox color="#9be9a8" />
              <GitBox color="#40c463" />
              <GitBox color="#30a14e" />
              <GitBox color="#216e39" />
              <span className="text-[#A1A1AA]">More</span>{" "}
            </div>

            <motion.a
              href="https://github.com/HarshNandigamwar"
              whileTap={{ scale: 0.9 }}
              className="mt-4"
              target="_blank"
            >
              <button className="flex items-center gap-2 cursor-pointer w-50 h-8 border py-2 border-purple-500 rounded-md justify-center">
                {" "}
                <FaGithub /> View Github Profile
              </button>
            </motion.a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
export default GithubChart;
