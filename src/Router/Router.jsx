import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import EventDetailsPage from "../Pages/EventDetailsPage";
import QuotationPage from "../Pages/QuotationPage";
import EventPage from "../Pages/EventPage";
import PrivateRoute from "../Components/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/events/:id",
        element: (
          <PrivateRoute>
            <EventDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/event",
        element: (
          <PrivateRoute>
            <EventPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/quotation",
        element: (
          <PrivateRoute>
            <QuotationPage></QuotationPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default Router;
