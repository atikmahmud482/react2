import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Errorpage from "./components/Errorpage/Errorpage";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetails from "./components/BookDetails/BookDetails";
import "./index.css";

async function bookDetailsLoader({ params }) {
  const response = await fetch("/booksData.json");
  const data = await response.json();
  return data.find((book) => book.id === params.bookId); // Match bookId
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "books/:bookId",
        element: <BookDetails />,
        loader: bookDetailsLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
