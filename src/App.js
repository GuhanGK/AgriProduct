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
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Dashboard />} />
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
