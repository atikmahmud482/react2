import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Root from "./components/Root/Root";
import Home from "./components/Home/Home"; // Another component for the Home page
import About from "./components/About/About"; // About page

import "./index.css";
import Errorpage from "./components/Errorpage/Errorpage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define routes here */}
        <Route
          path="/"
          element={<Root />}
          errorElement={<Errorpage></Errorpage>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
