import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import GithubChart from "../components/GithubChart";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import About from "../pages/About";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pl-2 overflow-x-hidden ">
        <Home />
        <About />
        <Skills />
        <Projects />
        <GithubChart />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
