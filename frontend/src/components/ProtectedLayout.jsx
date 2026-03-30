import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "@/utils/auth";
import { getCurrentUser } from "@/utils/auth";

export default function ProtectedLayout(){

    const user = getCurrentUser()
    console.log("Current user:", user)

    const location = useLocation
    if (!isAuthenticated()){
        return <Navigate to={"/login"} replace/>
    }

    return(
            <Outlet/>
    )
}