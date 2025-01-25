
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layouts/Root";

const Mainroute = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
  ]);
  export default  Mainroute;