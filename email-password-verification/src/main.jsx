import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import Main from "./layout/Main.jsx";
import Home from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Use a layout route to wrap the Home component */}
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} /> {/* Nested route for Home */}
      </Route>
    </Routes>
  </BrowserRouter>
);
