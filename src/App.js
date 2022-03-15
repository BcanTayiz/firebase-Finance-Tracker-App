import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Signup from "./pages/signup/Signup";

import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <Router>
      <div>
        
        <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

