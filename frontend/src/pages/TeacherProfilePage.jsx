import React from 'react';
import './TeacherProfilePage.css';

const TeacherProfilePage = () => (
  <div className="teacher-profile-page">
    <h1 className="profile-title">Professor Profile</h1>
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar">JD</div>
        <div>
          <div className="prof-name">Dr. Jane Doe</div>
          <div className="prof-department">Mathematics</div>
        </div>
      </div>
      <div className="profile-info">
        <div><strong>Office:</strong> Room 101</div>
        <div><strong>Email:</strong> jane.doe@university.edu</div>
      </div>
    </div>
    <div className="availability">
      <h2>Availability</h2>
      <div className="availability-summary">
        <span className="available-dot"></span> Available: Mon, Wed, Fri (10am-2pm)
      </div>
    </div>
  </div>
);

export default TeacherProfilePage;
