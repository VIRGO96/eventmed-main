import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// This is necessary in order to prevent users who are not logged in to access the content
const ProtectedRoute = ({ children }) => {
    let { user } = useUserAuth();
    if(!user) {
       return <Navigate to="/" />
    }
    return children;
}

export default ProtectedRoute;