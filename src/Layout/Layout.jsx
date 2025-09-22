import React from "react";
import Home from "../Pages/Home/HomePage";
import About from "../Pages/AboutPage";
import Skill from "../Pages/SkillPage";
import GitChart from "../components/GithubChart";
import Project from "../Pages/ProjectPage";
import Contact from "../Pages/ContactPage";

const Layout = () => {
  return (
    <>
      <Home />
      <About />
      <div>
        <Skill />
        <GitChart />
        <Project />
      </div>
      <Contact />
    </>
  );
};

export default Layout;
