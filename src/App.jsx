// Import from react
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import from Components
import Layout from "./Layout/Layout";
import { Route, Router, Routes } from "react-router-dom";
import Certifications from "./Pages/Certifications";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" theme="dark" />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/certification" element={<Certifications />} />
      </Routes>
    </>
  );
};

export default App;
