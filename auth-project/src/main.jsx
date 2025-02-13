import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} /> {/* Default route inside Root */}
      </Route>
    </Routes>
  </BrowserRouter>
);
