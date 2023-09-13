import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// PrivateRoute component for protecting routes
const PrivateRoute = ({ children }) => {
  const isAuthenticated = false/* Add your authentication logic here */;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};

// Home component
const Home = () => <h1>Home Page</h1>;

// Dashboard component (a private route)
const Dashboard = () => <h1>Dashboard Page</h1>;

// Login component
const Login = () => <h1>Login</h1>

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
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