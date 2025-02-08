
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import ReportCorruption from "../pages/ReportCorruption/ReportCorruption";
import Support from "../pages/Support/Support";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login/Login";

const Mainroute = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        path: "/",
        element:<Home></Home>
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
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/login',
      element:<Login/>
    }
    ]
    },

  ]);
  export default  Mainroute;