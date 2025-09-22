import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logo = "< Shriharsh />";

  return (
    <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#intro" className="text-2xl font-bold text-purple-500">
            {logo}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#intro" className="hover:text-purple-500">
              Home
            </a>
            <a href="#About" className="hover:text-purple-500">
              About
            </a>
            <a href="#skill" className="hover:text-purple-500">
              Skills
            </a>
            <a href="#project" className="hover:text-purple-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-500">
              Contact
            </a>
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
          <a
            href="#intro"
            onClick={() => setIsOpen(false)}
            className="block text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl  hover:text-purple-500 hover:scale-102"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setIsOpen(false)}
            className="block text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl  hover:text-purple-500 hover:scale-102"
          >
            About
          </a>
          <a
            href="#skill"
            onClick={() => setIsOpen(false)}
            className="block text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl  hover:text-purple-500 hover:scale-102"
          >
            Skills
          </a>
          <a
            href="#project"
            onClick={() => setIsOpen(false)}
            className="block text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl  hover:text-purple-500 hover:scale-102"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-white text-center border border-purple-500 hover:border-white transition-all duration-150 active:scale-95 white mt-2 p-2 rounded-xl  hover:text-purple-500 hover:scale-102"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
