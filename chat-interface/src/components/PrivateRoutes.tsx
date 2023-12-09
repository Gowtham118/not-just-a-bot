import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
export const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
