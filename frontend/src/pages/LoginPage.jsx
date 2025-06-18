import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Mock authentication - replace with real API call
    if (userId && password) {
      const userData = {
        id: userId,
        role: role,
        name: "John Doe" // Mock user data
      };
      
      login(userData);
      
      // Navigate based on role
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
        {error && <div className="error-message">{error}</div>}
        
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
        
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
