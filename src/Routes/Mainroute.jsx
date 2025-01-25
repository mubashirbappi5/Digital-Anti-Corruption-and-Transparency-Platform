
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";

const Mainroute = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        path: "/",
        element:<Home></Home>
      }]
    },

  ]);
  export default  Mainroute;