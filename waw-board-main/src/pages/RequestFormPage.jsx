import React, { useState } from 'react';
import './RequestFormPage.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
];

const RequestFormPage = () => {
  const [subject, setSubject] = useState('');
  const [comments, setComments] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would send the form data to your backend or context
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setSubject('');
    setComments('');
    setSelectedDate(null);
    setSelectedTime('');
  };

  return (
    <div className="request-form-page">
      <h1 className="request-title">Book a Meeting</h1>
      <form className="request-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Extra comments (optional)"
          rows={3}
          value={comments}
          onChange={e => setComments(e.target.value)}
        />
        <div className="form-row">
          <div className="date-picker-wrapper">
            <label htmlFor="date-picker">Select date</label>
            <DatePicker
              id="date-picker"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              placeholderText="Choose a date"
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
              className="custom-datepicker"
              required
            />
          </div>
          <div className="time-picker-wrapper">
            <label htmlFor="time-slot">Select time</label>
            <select
              id="time-slot"
              value={selectedTime}
              onChange={e => setSelectedTime(e.target.value)}
              required
              className="custom-timepicker"
            >
              <option value="">Choose time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={() => {
            setSubject('');
            setComments('');
            setSelectedDate(null);
            setSelectedTime('');
          }}>Cancel</button>
        </div>
        {submitted && (
          <div className="confirmation-toast">Request submitted successfully!</div>
        )}
      </form>
    </div>
  );
};

export default RequestFormPage;
