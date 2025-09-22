import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Layout from "./Layout/Layout";
import Footer from "./components/FooterPage";
const App = () => {
  return (
    <>
      <ToastContainer position="top-center" theme="dark" />
      <Navbar />
      <Layout />
      <Footer />
    </>
  );
};

export default App;
