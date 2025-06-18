import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <div className="notfound-page">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a className="back-link" href="/login">Go to Login</a>
  </div>
);

export default NotFoundPage;
