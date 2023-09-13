import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate 
} from 'react-router-dom';
import './index.css';


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

// Home component
const Home = () => <h1 className='bg-sky-500/100'>Home Page</h1>;

// Dashboard component (a private route)
const Dashboard = () => <h1>Dashboard Page</h1>;
const TEST = () => <h1>Dashsdasdasboard Page</h1>;

// Login component
const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = checkAuthentication();

  // Check if the user is already authenticated and redirect if necessary
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      <h1>Login</h1>
      {/* Your login form and authentication logic here */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/test" element={<PrivateRoute><TEST /></PrivateRoute>} />
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