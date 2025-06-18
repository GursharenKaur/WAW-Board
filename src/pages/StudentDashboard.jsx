// src/pages/StudentDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProfileCard from '../components/ProfileCard';
import NotificationBell from '../components/NotificationBell';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [requests] = useState([
    { id: 1, professor: 'Dr. Smith', status: 'Pending', date: '2025-06-18', time: '10:00 AM' },
    { id: 2, professor: 'Prof. Johnson', status: 'Approved', date: '2025-06-15', time: '2:00 PM' }
  ]);

  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Welcome Back, Student</h1>
          <ProfileCard
            name="John Doe"
            role="Student"
            branch="Computer Science"
            email="john.doe@university.edu"
          />
        </div>
        <div className="header-right">
          <NotificationBell count={requests.filter(r => r.status === 'Pending').length} />
          <Button variant="primary" onClick={() => navigate('/student/request')}>
            New Request
          </Button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="requests-section">
          <h2>Recent Requests</h2>
          <div className="requests-list">
            {requests.length === 0 ? (
              <div className="no-requests">No requests yet.</div>
            ) : (
              requests.map(request => (
                <div key={request.id} className="request-card">
                  <div className="request-prof">{request.professor}</div>
                  <div className="request-info">
                    <span className={`status status-${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                    <span className="request-date">{request.date} at {request.time}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;
