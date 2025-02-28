import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Errorpage from "./components/Errorpage/Errorpage";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetails from "./components/BookDetails/BookDetails";
import "./index.css";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
