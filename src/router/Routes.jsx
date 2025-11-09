import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LogLayout from "../Layout/LogLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
