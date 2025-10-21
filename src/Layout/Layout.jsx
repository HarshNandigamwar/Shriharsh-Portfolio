// Import from react
import React from "react";
// Import from pages
import Home from "../Pages/Home/HomePage";
import About from "../Pages/AboutPage";
import Skill from "../Pages/SkillPage";
import Project from "../Pages/ProjectPage";
import Contact from "../Pages/ContactPage";
// Import from Components
import GitChart from "../components/GithubChart";
import Footer from "../components/FooterPage";
// Import from Hooks
import SmoothScrollProvider from "../Hooks/SmoothScroll.jsx";
// Import from utils
import FloatingDots from "../utils/FloatingDots.jsx";
const Layout = () => {
  return (
    <SmoothScrollProvider>
      <div className="relative "> 
        <FloatingDots count={5} className="z-50 absolute inset-0" />
        <div className="relative z-10">
          <Home />
          <About />
          <Skill />
          <GitChart />
          <Project />
          <Contact />
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
};

export default Layout;
