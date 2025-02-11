import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corrected import
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Mainn from "./Mainn.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainn></Mainn>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
