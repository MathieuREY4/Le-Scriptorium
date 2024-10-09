import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Books from "./pages/Books";
import PoemsPage from "./pages/Poem";
import Home from "./pages/Home";

import "./styles/Main.css";
import booksLoader from "./services/booksUsersLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/books",
        element: <Books />,
        loader: booksLoader,
      },
      {
        path: "/poems",
        element: <PoemsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
