import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";


const Root = () => {
    return (
        <div>
            <Navber/>
            <h1>hay toriqul dhko</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;