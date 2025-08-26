import React from "react";
import GitBox from "./GitBox";
import { FaGithub } from "react-icons/fa";
const GithubChart = () => {
  return (
    <div>
      <div className="max-w-[670px] py-10 flex flex-col items-start gap-y-10">
        <div className="space-y-2 items-start">
          <h3 className="text-3xl font-mono font-bold text-purple-300">
            GitHub <span className="text-purple-300">Contributions</span>
          </h3>
          <p className="text-[#A1A1AA] text-sm">
            When I look back at where I started, the progress feels both
            inspiring, & deeply motivating to continue.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://ghchart.rshah.org/00ff00/Harshnandigamwar"
            alt="GitHub Contribution Chart"
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

          <a href="https://github.com/HarshNandigamwar" className="mt-4">
            <button className="flex items-center gap-2 cursor-pointer w-40 h-8 border py-2 border-gray-500/30 rounded-[3px] justify-center">
              {" "}
              <FaGithub /> View Github Profile
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubChart;
