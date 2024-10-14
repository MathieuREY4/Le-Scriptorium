import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import { AuthProvider } from "./context/authContext";
import App from "./App";
import Publish from "./pages/Publish";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Books from "./pages/Books";
import PoemsPage from "./pages/Poem";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

import "./styles/Main.css";
import booksLoader from "./services/booksUsersLoader";

const publishLoader = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/genre`);
  return { genres: response.data };
};

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
        path: "publish",
        element: <Publish />,
        loader: publishLoader,
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
        path: "/about",
        element: <About />,
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
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/admin",
        element: <Admin />,
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
