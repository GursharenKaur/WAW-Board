// src/pages/ProfessorDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProfileCard from '../components/ProfileCard';
import NotificationBell from '../components/NotificationBell';
import './ProfessorDashboard.css';

const ProfessorDashboard = () => {
  const [requests, setRequests] = useState([
    { id: 1, student: 'Alice Sharma', status: 'Pending', date: '2025-06-19', time: '11:00 AM' },
    { id: 2, student: 'Bob Kumar', status: 'Approved', date: '2025-06-17', time: '3:00 PM' }
  ]);

  // Handler stubs for actions (to be implemented with backend)
  const handleAccept = (id) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: 'Approved' } : r));
  };
  const handleDecline = (id) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: 'Declined' } : r));
  };
  const handleReschedule = (id) => {
    alert('Reschedule functionality coming soon!');
  };

  return (
    <div className="professor-dashboard">
      <header className="prof-header">
        <div className="prof-header-left">
          <h1>Welcome, Professor</h1>
          <ProfileCard
            name="Dr. Smith"
            role="Professor"
            branch="Computer Science"
            email="dr.smith@university.edu"
          />
        </div>
        <div className="prof-header-right">
          <NotificationBell count={requests.filter(r => r.status === 'Pending').length} />
          <Link to="/professor/timetable">
            <Button variant="primary">Edit Timetable</Button>
          </Link>
        </div>
      </header>

      <main className="prof-dashboard-content">
        <section className="prof-requests-section">
          <h2>Incoming Requests</h2>
          <div className="prof-requests-list">
            {requests.length === 0 ? (
              <div className="no-requests">No incoming requests.</div>
            ) : (
              requests.map(request => (
                <div key={request.id} className="prof-request-card">
                  <div className="prof-request-student">{request.student}</div>
                  <div className="prof-request-info">
                    <span className={`prof-status prof-status-${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                    <span className="prof-request-date">{request.date} at {request.time}</span>
                  </div>
                  <div className="prof-request-actions">
                    {request.status === 'Pending' && (
                      <>
                        <Button variant="primary" onClick={() => handleAccept(request.id)}>Accept</Button>
                        <Button variant="secondary" onClick={() => handleDecline(request.id)}>Decline</Button>
                        <Button variant="secondary" onClick={() => handleReschedule(request.id)}>Reschedule</Button>
                      </>
                    )}
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

export default ProfessorDashboard;
