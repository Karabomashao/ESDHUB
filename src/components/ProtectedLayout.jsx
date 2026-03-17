import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "@/utils/auth";

export default function ProtectedLayout(){

    const location = useLocation
    if (!isAuthenticated()){
        return <Navigate to={"/login"} replace/>
    }

    return(
            <Outlet/>
    )
}