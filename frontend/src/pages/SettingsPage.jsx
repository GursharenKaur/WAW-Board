import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [message, setMessage] = useState('');

  const handleSave = e => {
    e.preventDefault();
    setMessage('Changes saved!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="settings-page">
      <h1 className="settings-title">Account Settings</h1>
      <form className="settings-form" onSubmit={handleSave}>
        <input type="password" placeholder="Change Password" />
        <input type="email" placeholder="Edit Email" />
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
      <button className="logout-btn">Logout</button>
      {message && <div className="settings-toast">{message}</div>}
    </div>
  );
};

export default SettingsPage;
