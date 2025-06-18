// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className="navbar">
      <div className="navbar-brand">WAW Board</div>
      
      <div className="nav-links">
        <Link to={user.role === 'student' ? '/student/dashboard' : '/professor/dashboard'}>
          Dashboard
        </Link>
        <Link to="/settings">Settings</Link>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
