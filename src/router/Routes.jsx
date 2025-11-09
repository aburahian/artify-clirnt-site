import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LogLayout from "../Layout/LogLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ArtsLayout from "../Layout/ArtsLayout";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/arts",
    element: <ArtsLayout></ArtsLayout>,
  },
  {
    path: "/auth",
    element: <LogLayout></LogLayout>,
    children: [
      {
        path: "/auth",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
