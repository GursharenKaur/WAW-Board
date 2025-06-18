import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import ProfessorDashboard from './pages/ProfessorDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import TimetablePage from './pages/TimetablePage';
import RequestFormPage from './pages/RequestFormPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          {/* Student Routes */}
          <Route path="/student" element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="request" element={<RequestFormPage />} />
          </Route>

          {/* Professor Routes */}
          <Route path="/professor" element={<ProtectedRoute allowedRoles={['professor']} />}>
            <Route path="dashboard" element={<ProfessorDashboard />} />
            <Route path="timetable" element={<TimetablePage />} />
          </Route>

          {/* Common Routes */}
          <Route path="/settings" element={<ProtectedRoute />}>
            <Route index element={<SettingsPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
