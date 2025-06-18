// src/components/NotificationBell.jsx
import React from 'react';
import './NotificationBell.css';

const NotificationBell = ({ count }) => (
  <div className="notification-bell" tabIndex={0} aria-label="Notifications">
    <span role="img" aria-label="bell">🔔</span>
    {count > 0 && <span className="notif-count">{count}</span>}
  </div>
);

export default NotificationBell;
