import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import ReportCorruption from "../pages/ReportCorruption/ReportCorruption";
import Support from "../pages/Support/Support";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Register/Registration";
import Profile from "../pages/Profile/Profile";
import Resource from './../pages/Resource/Resource';
import PrivateRoute from "./PrivateRoute";
import Feed from "../pages/Feed/Feed";

const Mainroute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    {
      path:'/reportCorruption',
      element:<ReportCorruption/>
    },
    {
      path:'/support',
      element:<Support/>
    },
   {
    path:'/feed',
    element:<Feed/>
   },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
     path:'/signup',
      element:<Registration/>
    },
    {
     path:'/profile',
      element:<PrivateRoute><Profile/></PrivateRoute>
    },
    

      
      {
        path: "/resource",
        element: <Resource/>,
      },
    ],
  },
]);
export default Mainroute;
