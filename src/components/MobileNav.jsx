import React from "react";
import { BiSolidSend } from "react-icons/bi";
const MobileNav = () => {
  let sections = [
    { id: "intro", label: "Intro", link: "#intro" },
    { id: "About", label: "About", link: "#About" },
    { id: "skills", label: "Skills", link: "#skill" },
    { id: "projects", label: "Projects", link: "#project" },
    { id: "contact", label: "Contact", link: "#contact" },
  ];
  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden transition-all duration-500 ease-in-out ">
        <div className="fixed top-20 right-3 h-fit w-72 rounded-sm z-50 shadow-2xl sm:hidden flex flex-col overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-500/30 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] translate-x-0 opacity-100 scale-100">
          <div className="flex-1 px-3 py-4">
            <div className="flex flex-col space-y-1">
              {sections.map((section) => (
                <a href={section.link} key={section.id}>
                  <div className="flex items-center justify-between pl-4 px-1.5 py-2 border border-gray-500/30 rounded-[8px] mb-2 hover:bg-[#191a1a]">
                    <div>{section.label}</div>
                    <BiSolidSend />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
