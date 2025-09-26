// Import from react
import { useEffect, useState } from "react";
import {
  RiCodeSSlashLine,
  RiFolderLine,
  RiHomeLine,
  RiInformationLine,
  RiMailLine,
} from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";
//import lenis
import { useLenis } from "../Hooks/SmoothScroll";
// Import from Components
import { ChevronDown } from "../components/ChevronDown";
import { ChevronsRight } from "../components/ChevronsRight";
// Import from motion
import { motion } from "framer-motion";

const Navbar = () => {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const logo = "< Shriharsh />";
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
  // Theme
  const [theme, setTheme] = useState("Purple");
  const [open, setOpen] = useState(false);
  const themes = [
    { name: "Orange", value: "orange", color: "orange" },
    { name: "Blue", value: "blue", color: "blue" },
    { name: "Purple", value: "purple", color: "purple" },
    { name: "Green", value: "green", color: "green" },
  ];
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  // Mode
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    // document.documentElement.setAttribute("data-mode",darkMode?"dark":"light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-[var(--bg-color)] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#intro"
            className="text-2xl font-bold text-[var(--text-color)]"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("intro");
            }}
          >
            {logo}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-[var(--maintext-color)] font-medium">
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("intro")}
            >
              Home
            </button>
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("About")}
            >
              About
            </button>
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("skill")}
            >
              Skills
            </button>
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("project")}
            >
              Projects
            </button>
            <button
              className="hover:text-[var(--text-color)]"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
            {/* Theme Option */}
            <div>
              {/* Theme Button */}
              <button
                onClick={() => setOpen(!open)}
                className="bg-[var(--bg-color)] p-1 flex items-center gap-1 cursor-pointer text-[var(--maintext-color)]"
              >
                Theme
                <ChevronDown
                  stroke="var(--text-color)"
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                  } `}
                />
              </button>
              {/* theme option */}
              {open && (
                <ul className="absolute mt-2 rounded-md shadow-lg z-10">
                  {themes.map((t) => (
                    <li
                      key={t.value}
                      onClick={() => {
                        setTheme(t.value);
                        setOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer flex gap-3 items-center"
                    >
                      <div
                        className={`h-5 w-5 rounded-full`}
                        style={{ backgroundColor: t.color }}
                      ></div>
                      <span className="text-[var(--maintext-color)]">
                        {t.name}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex gap-2 items-center text-[var(--maintext-color)]"
            >
              {darkMode ? <FiSun /> : <FiMoon />}{" "}
              <span>{darkMode ? "Light" : "Dark"} </span>
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-color)]"
            >
              {isOpen ? (
                <ChevronsRight stroke="var(--text-color)" />
              ) : (
                <ChevronsRight
                  stroke="var(--text-color)"
                  className="rotate-180"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute md:hidden bg-[var(--bg-color)] w-[50%] right-0 h-screen p-5 pt-6 text-xl text-[var(--text-color)]"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,
          }}
        >
          {/* Home */}
          <div
            onClick={() => {
              handleScroll("intro");
              setIsOpen(false);
            }}
            className="flex gap-2 items-center mt-3 p-2 "
          >
            <RiHomeLine /> <span>Home</span>{" "}
          </div>
          {/* About me */}
          <div
            onClick={() => {
              handleScroll("About");
              setIsOpen(false);
            }}
            className="flex gap-2 items-center mt-3 p-2 "
          >
            <RiInformationLine /> <span>About </span>{" "}
          </div>
          {/* Skill */}
          <div
            onClick={() => {
              handleScroll("skill");
              setIsOpen(false);
            }}
            className="flex gap-2 items-center mt-3 p-2 "
          >
            <RiCodeSSlashLine /> <span> Skills</span>{" "}
          </div>
          {/* Projects */}
          <div
            onClick={() => {
              handleScroll("project");
              setIsOpen(false);
            }}
            className="flex gap-2 items-center mt-3 p-2 "
          >
            <RiFolderLine /> <span>Projects </span>{" "}
          </div>
          {/* Contact me */}
          <div
            onClick={() => {
              handleScroll("contact");
              setIsOpen(false);
            }}
            className="flex gap-2 items-center mt-3 p-2 "
          >
            <RiMailLine /> <span>Contact </span>{" "}
          </div>
          {/* Theme Dark & Light */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" flex gap-2 items-center mt-3 p-2"
          >
            {darkMode ? <FiSun /> : <FiMoon />}{" "}
            <span>{darkMode ? "Light" : "Dark"} </span>
          </button>
          {/* Theme Options List */}
          <div className="flex gap-2 items-center mt-3 p-2">
            <div className="relative">
              {/* Button */}
              <button
                onClick={() => setOpen(!open)}
                className="[var(--bg-color)] p-1 flex items-center"
              >
                Theme
                <ChevronDown
                  stroke="var(--text-color)"
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : "rotate-0"
                  } `}
                />
              </button>
              {/* theme option */}
              {open && (
                <ul className="absolute mt-2 rounded-md shadow-lg z-10">
                  {themes.map((t) => (
                    <li
                      key={t.value}
                      onClick={() => {
                        setTheme(t.value);
                        setOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer flex gap-3 items-center"
                    >
                      <div
                        className={`h-5 w-5 rounded-full`}
                        style={{ backgroundColor: t.color }}
                      ></div>
                      <span className="text-[var(--maintext-color)]">
                        {t.name}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>

        // <div className="absolute md:hidden bg-[var(--bg-color)] w-[50%] right-0 h-screen p-5 pt-6 text-xl text-[var(--text-color)] ">
        //   {/* Home */}
        //   <div
        //     onClick={() => {
        //       handleScroll("intro");
        //       setIsOpen(false);
        //     }}
        //     className="flex gap-2 items-center mt-3 p-2 "
        //   >
        //     <RiHomeLine /> <span>Home</span>{" "}
        //   </div>
        //   {/* About me */}
        //   <div
        //     onClick={() => {
        //       handleScroll("About");
        //       setIsOpen(false);
        //     }}
        //     className="flex gap-2 items-center mt-3 p-2 "
        //   >
        //     <RiInformationLine /> <span>About </span>{" "}
        //   </div>
        //   {/* Skill */}
        //   <div
        //     onClick={() => {
        //       handleScroll("skill");
        //       setIsOpen(false);
        //     }}
        //     className="flex gap-2 items-center mt-3 p-2 "
        //   >
        //     <RiCodeSSlashLine /> <span> Skills</span>{" "}
        //   </div>
        //   {/* Projects */}
        //   <div
        //     onClick={() => {
        //       handleScroll("project");
        //       setIsOpen(false);
        //     }}
        //     className="flex gap-2 items-center mt-3 p-2 "
        //   >
        //     <RiFolderLine /> <span>Projects </span>{" "}
        //   </div>
        //   {/* Contact me */}
        //   <div
        //     onClick={() => {
        //       handleScroll("contact");
        //       setIsOpen(false);
        //     }}
        //     className="flex gap-2 items-center mt-3 p-2 "
        //   >
        //     <RiMailLine /> <span>Contact </span>{" "}
        //   </div>
        //   {/* Theme Dark & Light */}
        //   <button
        //     onClick={() => setDarkMode(!darkMode)}
        //     className=" flex gap-2 items-center mt-3 p-2"
        //   >
        //     {darkMode ? <FiSun /> : <FiMoon />}{" "}
        //     <span>{darkMode ? "Light" : "Dark"} </span>
        //   </button>
        //   {/* Theme Options List */}
        //   <div className="flex gap-2 items-center mt-3 p-2">
        //     <div className="relative">
        //       {/* Button */}
        //       <button
        //         onClick={() => setOpen(!open)}
        //         className="[var(--bg-color)] p-1 flex items-center"
        //       >
        //         Theme
        //         <ChevronDown
        //           stroke="var(--text-color)"
        //           className={`transition-transform duration-300 ${
        //             open ? "rotate-180" : "rotate-0"
        //           } `}
        //         />
        //       </button>
        //       {/* theme option */}
        //       {open && (
        //         <ul className="absolute mt-2 rounded-md shadow-lg z-10">
        //           {themes.map((t) => (
        //             <li
        //               key={t.value}
        //               onClick={() => {
        //                 setTheme(t.value);
        //                 setOpen(false);
        //               }}
        //               className="px-4 py-2 cursor-pointer flex gap-3 items-center"
        //             >
        //               <div
        //                 className={`h-5 w-5 rounded-full`}
        //                 style={{ backgroundColor: t.color }}
        //               ></div>
        //               <span className="text-[var(--maintext-color)]">
        //                 {t.name}
        //               </span>
        //             </li>
        //           ))}
        //         </ul>
        //       )}
        //     </div>
        //   </div>
        // </div>
      )}
    </nav>
  );
};

export default Navbar;
