import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Layout from "./Components/Pages/Layout/main";
import Dashboard from "./Components/Pages/DashBoard";
import ProtectedRoute from "./Auth/ProductedRoute";
import NoInternet from "./Components/Reusable/Nointernet";
import { useNetworkState } from "react-use";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Login } from "./Components/Pages/Login";
import { SignUp } from "./Components/Pages/SignUp";
import { SoilTesting } from "./Components/Pages/SoilTesting";
import PestDetection  from "./Components/Pages/PestDetection";
import CropManagement from "./Components/Pages/CropManagement";

export const isOnlineContext = React.createContext();

function App() {
  const NetworkState = useNetworkState();
  const netState = NetworkState.online;

  const [online, setonline] = useState(netState);

  useEffect(() => {
    setonline(netState);
  }, [netState]);

  const isOnlineContextValue = { online };
  return (
    <div className="App">
      <isOnlineContext.Provider value={isOnlineContextValue}>
        <Router>
          <Routes>
            <Route element={<NoInternet />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/soil-testing" element={<SoilTesting/>} />
                  <Route path="/pest-detection" element={<PestDetection/>} />
                  <Route path="/crop-management" element={<CropManagement />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </isOnlineContext.Provider>
    </div>
  );
}

export default App;
