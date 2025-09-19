import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let logo = "<Shriharsh/>";
  let sections = [
    { id: "intro", label: "Intro", link: "#intro" },
    { id: "About", label: "About", link: "#About" },
    { id: "skills", label: "Skills", link: "#skill" },
    { id: "projects", label: "Projects", link: "#project" },
    { id: "contact", label: "Contact", link: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] py-2 px-4 rounded-xl transition-all duration-300 overflow-hidden bg-[#0a0a0a]/30 backdrop-blur-sm border border-purple-500 cursor-pointer ">
        <div className="flex-shrink-0 relative">
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="#intro"
            className="w-25 h-9 flex items-center justify-center font-bold text-[20px] ml-2 text-purple-400"
          >
            {logo}
          </motion.a>
        </div>

        <div className="flex items-center space-x-1 w-full justify-end">
          <div className="hidden sm:flex items-center space-x-1">
            {sections.map((section) => (
              <a
                href={section.link}
                key={section.id}
                className="px-3 py-1.5 text-sm rounded-[5px] transition-all duration-150 relative overflow-hidden text-purple-300 border border-gray-500/30 cursor-pointer hover:bg-[#191a1a] font-normal ml-1 hover:scale-105 hover:border-purple-500 active:scale-95"
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r via-slate-500/30 to-transparent" />
                </div>
                {section.label}
              </a>
            ))}
          </div>
        </div>
        <button
          className="sm:hidden relative z-50 w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <BiX className="w-6 h-6 text-white transition-transform duration-150 transform  rotate-0 hover:rotate-90" />
          ) : (
            <BiMenu className="w-6 h-6 text-white transition-transform duration-200 transform hover:scale-110" />
          )}
        </button>
      </nav>
      {isMenuOpen ? <MobileNav /> : <></>}
    </>
  );
};

export default Navbar;
