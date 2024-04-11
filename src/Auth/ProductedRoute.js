import React, { useState } from "react";
import { Outlet } from "react-router-dom";
const ProtectedRoute = () => {
    const [loading, setLoading] = useState(true)
    return loading ? <Outlet /> : window.location.href = "https://www.w3schools.com/";
};
export default ProtectedRoute; 