
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import ReportCorruption from "../pages/ReportCorruption/ReportCorruption";

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
    }
    ]
    },

  ]);
  export default  Mainroute;