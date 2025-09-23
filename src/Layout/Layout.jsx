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
const Layout = () => {
  return (
    <SmoothScrollProvider>
      <Home />
      <About />
      <Skill />
      <GitChart />
      <Project />
      <Contact />
      <Footer />
    </SmoothScrollProvider>
  );
};

export default Layout;
