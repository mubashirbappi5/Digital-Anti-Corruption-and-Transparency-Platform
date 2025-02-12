import { useContext } from "react";
import { Authcontext } from "../AuthContext/AuthProvider";

const useAuth = () => {
    const context = useContext(Authcontext)
    return context
};

export default useAuth;