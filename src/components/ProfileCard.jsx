// src/components/ProfileCard.jsx
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, role, branch, email }) => (
  <div className="profile-card">
    <div className="profile-avatar">{name ? name[0] : '?'}</div>
    <div className="profile-info">
      <div className="profile-name">{name}</div>
      <div className="profile-role">{role}</div>
      {branch && <div className="profile-branch">{branch}</div>}
      <div className="profile-email">{email}</div>
    </div>
  </div>
);

export default ProfileCard;
