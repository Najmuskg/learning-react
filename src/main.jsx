import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.jsx";
// import Navbar from "../";
// import Footer from "../../Components/Footer.jsx";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />

    <App />

    <Footer />
  </StrictMode>
);
