import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
      },
    ]
  },
]);

export default router