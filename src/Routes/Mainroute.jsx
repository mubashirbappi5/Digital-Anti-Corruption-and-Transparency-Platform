
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import ReportCorruption from "../pages/ReportCorruption/ReportCorruption";
import Support from "../pages/Support/Support";
import Dashboard from "../pages/Dashboard/Dashboard";

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
    }
    ]
    },

  ]);
  export default  Mainroute;