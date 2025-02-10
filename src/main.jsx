import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
 
  RouterProvider,
} from "react-router-dom";
import Mainroute from "./Routes/Mainroute";
import AuthProvider from "./AuthContext/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Mainroute} />
    </AuthProvider>
  
</StrictMode>
);
