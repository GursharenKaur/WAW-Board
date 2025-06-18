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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!role) {
      setError('Please select your role');
      return;
    }
    if (userId && password) {
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
    } else {
      setError('Please fill in all fields');
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
