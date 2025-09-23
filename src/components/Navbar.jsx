// Import from react
import { useState } from "react";
import { Menu, X } from "lucide-react";
//import lenis
import { useLenis } from "../Hooks/SmoothScroll";

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

  return (
    <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#intro"
            className="text-2xl font-bold text-purple-500"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("intro");
            }}
          >
            {logo}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <button
              className="hover:text-purple-500"
              onClick={() => handleScroll("intro")}
            >
              Home
            </button>
            <button
              className="hover:text-purple-500"
              onClick={() => handleScroll("About")}
            >
              About
            </button>
            <button
              className="hover:text-purple-500"
              onClick={() => handleScroll("skill")}
            >
              Skills
            </button>
            <button
              className="hover:text-purple-500"
              onClick={() => handleScroll("project")}
            >
              Projects
            </button>
            <button
              className="hover:text-purple-500"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-opacity-80 backdrop-blur-md shadow-md px-4 py-3 space-y-3">
          <button
            onClick={() => {
              handleScroll("intro");
              setIsOpen(false);
            }}
            className="block w-full text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl  hover:text-purple-500 hover:scale-102"
          >
            Home
          </button>
          <button
            onClick={() => {
              handleScroll("About");
              setIsOpen(false);
            }}
            className="block w-full text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl hover:text-purple-500 hover:scale-102"
          >
            About
          </button>
          <button
            onClick={() => {
              handleScroll("skill");
              setIsOpen(false);
            }}
            className="block w-full text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl hover:text-purple-500 hover:scale-102"
          >
            Skills
          </button>
          <button
            onClick={() => {
              handleScroll("project");
              setIsOpen(false);
            }}
            className="block w-full text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl hover:text-purple-500 hover:scale-102"
          >
            Projects
          </button>
          <button
            onClick={() => {
              handleScroll("contact");
              setIsOpen(false);
            }}
            className="block w-full text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl hover:text-purple-500 hover:scale-102"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
