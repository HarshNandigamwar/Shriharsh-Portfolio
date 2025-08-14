import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Project from "../pages/Projects";
// import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import About from "../pages/About";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between pt-40 pl-5 pr-5">
        <Home />
        <hr className="w-full border-purple-300/10 mt-10" />
        <About />
        <hr className="w-full border-purple-300/10 mt-10" />
        <Skills />
        <hr className="w-full border-purple-300/10 mt-10" />
        <Project />
        <hr className="w-full border-purple-300/10 mt-10" />
        <Contact />
        <hr className="w-full border-purple-300/10 mt-10" />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
