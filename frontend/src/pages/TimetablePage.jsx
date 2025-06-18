import React from 'react';
import './TimetablePage.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const slots = ['9-10 AM', '10-11 AM', '11-12 PM', '1-2 PM', '2-3 PM', '3-4 PM'];

const TimetablePage = () => (
  <div className="timetable-page">
    <h1 className="timetable-title">Weekly Timetable</h1>
    <div className="timetable-container">
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Time</th>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map(slot => (
            <tr key={slot}>
              <td className="slot-time">{slot}</td>
              {days.map(day => (
                <td key={day} className="slot-cell">
                  <span className="slot-available">Available</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TimetablePage;
