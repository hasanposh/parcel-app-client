import Dashboard from "@/layout/Dashboard";
import Main from "@/layout/Main";
import AllDeliveryMen from "@/pages/Dashboard/AdminPages/AllDeliveryMen/AllDeliveryMen";
import AllParcels from "@/pages/Dashboard/AdminPages/AllParcels/AllParcels";
import AllUsers from "@/pages/Dashboard/AdminPages/AllUsers/AllUsers";
import Statistics from "@/pages/Dashboard/AdminPages/Statistics/Statistics";
import MyDeliveryList from "@/pages/Dashboard/DeliveryManPages/MyDeliveryList/MyDeliveryList";
import MyReviews from "@/pages/Dashboard/DeliveryManPages/MyReviews/MyReviews";
import BookAParcel from "@/pages/Dashboard/UserPages/BookAParcel/BookAParcel";
import MyParcels from "@/pages/Dashboard/UserPages/MyParcels/MyParcels";
import UserMyProfile from "@/pages/Dashboard/UserPages/UserMyProfile/UserMyProfile";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home/Home";
import LoginPage from "@/pages/Login/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage/RegistrationPage";
import PrivateRoute from "@/providers/PrivateRoute";
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
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      // user routes
      {
        index: true,
        element: <UserMyProfile />,
      },
      {
        path: "bookAParcel",
        element: <BookAParcel />,
      },
      {
        path: "myParcels",
        element: <MyParcels />,
      },
      // deliver men routes
      {
        path: "myDeliveryList",
        element: <MyDeliveryList />,
      },
      {
        path: "myReviews",
        element: <MyReviews />,
      },
      // admin routes
      {
        path: "allParcels",
        element: <AllParcels />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: "allDeliveryMen",
        element: <AllDeliveryMen />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegistrationPage />,
  },
]);
