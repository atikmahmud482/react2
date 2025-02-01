import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Root from "./components/Root/Root";
import Home from "./components/Home/Home"; // Another component for the Home page

import "./index.css";
import Errorpage from "./components/Errorpage/Errorpage";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route
          path="/"
          element={<Root />}
          errorElement={<Errorpage />} // Error page when route is not found
        >
          {/* Nested Routes under the Root route */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route
            path="books/:bookId"
            element={<BookDetails></BookDetails>}></Route>
          <Route path="dashboard" element={<Dashboard />} />{" "}
          {/* Dashboard page */}
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
