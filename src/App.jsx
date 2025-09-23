// Import from react
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import from Components
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" theme="dark" />
      <Layout />
    </>
  );
};

export default App;
