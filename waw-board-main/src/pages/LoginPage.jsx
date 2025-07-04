// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    // Minimum 7 characters
    return password.length >= 7;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!role) {
      setError('Please select your role');
      return;
    }
    if (!userId || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!isValidEmail(userId)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!isValidPassword(password)) {
      setError('Password must be at least 7 characters');
      return;
    }

    const userData = {
      id: userId,
      role: role,
      name: "John Doe"
    };
    login(userData);
    if (role === 'student') {
      navigate('/student/dashboard');
    } else {
      navigate('/professor/dashboard');
    }
  };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>WAW Board Login</h2>
        {/* HIGHLIGHT: Role selector moved above inputs and styled */}
        <div className="custom-select">
          <label htmlFor="role">Login as:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="User ID / Email"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
