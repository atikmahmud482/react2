import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App"; // Make sure the filename matches (case-sensitive on some systems)

import Home from "./components/Home";
import About from "./components/About";
import AuthLayout from "./components/Layouts";
import Login from "./components/Login";
import Register from "./components/Register";
// import ConcertsHome from "./pages/ConcertsHome";
// import City from "./pages/City";
// import Trending from "./pages/Trending";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* Home is the child (nested inside App) */}
        <Route index element={<Home />} />
      </Route>
      <Route path="about" element={<About />} />

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Nested Routes for Concerts */}
      {/* <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
);
