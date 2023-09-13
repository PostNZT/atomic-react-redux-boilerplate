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
import Dashboard from './pages/Dashboard';


const checkAuthentication = () => {
  // Implement your authentication logic here, e.g., check if the user is logged in
  // You might use cookies, tokens, or a user context to determine if the user is authenticated
  // Return true if authenticated, false otherwise
  return false; // Replace with your logic
};

// PrivateRoute component for protecting routes
const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuthentication());
  const navigate = useNavigate();


  useEffect(() => {
    const isAuthenticatedNow = checkAuthentication();
    setIsAuthenticated(isAuthenticatedNow);

   
  }, [navigate]);

 

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;