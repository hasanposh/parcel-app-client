import Main from "@/layout/Main";
import Dashboard from "@/pages/Dashboard/Dashboard";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
      ],
  },
]);
