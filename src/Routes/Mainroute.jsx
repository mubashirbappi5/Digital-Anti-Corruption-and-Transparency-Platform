import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import ReportCorruption from "../pages/ReportCorruption/ReportCorruption";
import Support from "../pages/Support/Support";
import Dashboard from "../pages/Dashboard/Dashboard";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Register/Registration";
<<<<<<< HEAD
import Profile from "../pages/Profile/Profile";
=======
import Resource from "../pages/Resource/Resource";
import ProjectTracking from "../pages/Project/ProjectTracking";
>>>>>>> 01784933ab72e804b3edf0ec0294a850336114df

const Mainroute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
<<<<<<< HEAD
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
    },
    {
     path:'/signup',
      element:<Registration/>
    },
    {
     path:'/profile',
      element:<Profile/>
    }
    ]
    },
=======
      {
        path: "/reportCorruption",
        element: <ReportCorruption />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path:"/projectTracking",
        element:<ProjectTracking/>
>>>>>>> 01784933ab72e804b3edf0ec0294a850336114df

      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Registration />,
      },
      {
        path: "/resource",
        element: <Resource />,
      },
    ],
  },
]);
export default Mainroute;
