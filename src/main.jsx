// Import from React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import CSS
import "./index.css";
// Import App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
