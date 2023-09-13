import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate 
} from 'react-router-dom';
import './index.css';
import Login from "./pages/Login"
import Home from './pages/Home';
import AuthGuard from './wrappers/AuthGuard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthGuard><Home /></AuthGuard>} />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


export default App