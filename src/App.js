import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";

import "./App.css";
import Dashboard from "./pages/dashboard";
import Profile from "./components/profile";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
