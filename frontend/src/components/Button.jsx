// src/components/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ variant = 'primary', children, ...props }) => (
  <button className={`button ${variant}`} {...props}>
    {children}
  </button>
);

export default Button;
