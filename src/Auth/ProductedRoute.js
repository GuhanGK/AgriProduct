import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
const ProtectedRoute = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    console.log("isLoggedIn--->", isLoggedIn)
    return isLoggedIn ? <Outlet /> : navigate("/login");
};
export default ProtectedRoute; 