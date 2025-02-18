import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true, // Equivalent to path: ""
        element: <Navigate to="category/01" />,
      },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/auth",
    element: <h1>Login</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
