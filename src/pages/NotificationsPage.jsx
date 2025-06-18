import React from 'react';
import './NotificationsPage.css';

const notifications = [
  { id: 1, type: 'request', message: 'Your meeting with Dr. Smith has been approved!', status: 'approved', time: 'Today, 10:00 AM' },
  { id: 2, type: 'system', message: 'Password changed successfully.', status: 'info', time: 'Yesterday, 7:45 PM' }
];

const NotificationsPage = () => (
  <div className="notifications-page">
    <h1 className="notifications-title">Notifications</h1>
    <ul className="notifications-list">
      {notifications.map(n => (
        <li key={n.id} className={`notification-card ${n.status}`}>
          <div className="notif-message">{n.message}</div>
          <div className="notif-meta">{n.time}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default NotificationsPage;
