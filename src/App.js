import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Layout from "./Components/Pages/Layout";
import Dashboard from "./Components/Pages/DashBoard";
import ProtectedRoute from "./Auth/ProductedRoute";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
