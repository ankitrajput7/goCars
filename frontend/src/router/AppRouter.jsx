import React from "react";
import Layout from "../components/layout/Layout.jsx";
import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../features/UserAuth/components/index";
import { Dashboard } from "../features/Dashboard/components/index";
import BookService from "../features/BookService/components/BookService.jsx";
// import PrivateRouter from "./PrivateRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "book-service",
        element: <BookService />,
      },
    ],
  },
]);

export default router;