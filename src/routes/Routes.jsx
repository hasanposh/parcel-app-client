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
import UpdateParcel from "@/pages/Dashboard/UserPages/MyParcels/UpdateParcel/UpdateParcel";
import UserMyProfile from "@/pages/Dashboard/UserPages/UserMyProfile/UserMyProfile";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home/Home";
import LoginPage from "@/pages/Login/LoginPage";
import RegistrationPage from "@/pages/RegistrationPage/RegistrationPage";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import PaymentDone from "@/components/Payment/PaymentDone";
import PaymentPage from "@/components/Payment/PaymentPage";

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
        path: "userProfile",
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
      {
        path: "updateParcel/:id",
        element: <UpdateParcel />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/bookings/${params.id}`),
      },
      {
        path: "payment/:id",
        element: <PaymentPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/bookings/${params.id}`),
      },
      {
        path: "paymentSuccess",
        element: <PaymentDone />,
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
        element: (
          <AdminRoute>
            <AllParcels />
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "allDeliveryMen",
        element: (
          <AdminRoute>
            <AllDeliveryMen />
          </AdminRoute>
        ),
      },
      {
        // index: true,
        path: "statistics",
        element: (
          <AdminRoute>
            <Statistics />
          </AdminRoute>
        ),
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
