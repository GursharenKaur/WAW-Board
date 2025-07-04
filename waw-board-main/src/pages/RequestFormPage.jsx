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
const reasonOptions = [
  "Lecture doubt", "Capstone related", "Project related", "Exam query", "Other"
];
const yearOptions = ["1st", "2nd", "3rd", "4th"];

const RequestFormPage = () => {
  const [profFieldType, setProfFieldType] = useState('name');
  const [profValue, setProfValue] = useState('');
  const [subjectFieldType, setSubjectFieldType] = useState('name');
  const [subjectValue, setSubjectValue] = useState('');
  const [comments, setComments] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [reason, setReason] = useState('');
  const [year, setYear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setProfValue('');
    setSubjectValue('');
    setComments('');
    setSelectedDate(null);
    setSelectedTime('');
    setReason('');
    setYear('');
    setProfFieldType('name');
    setSubjectFieldType('name');
  };

  return (
    <div className="request-form-page">
      <h1 className="request-title">Book a Meeting</h1>
      <form className="request-form" onSubmit={handleSubmit}>
        {/* SIDE-BY-SIDE PROFESSOR AND SUBJECT */}
        <div className="side-by-side-row">
          {/* Professor Field */}
          <div className="side-field">
            <label>Professor:</label>
            <input
              type="text"
              placeholder={profFieldType === 'name' ? "Enter Professor Name" : "Enter Professor Code"}
              value={profValue}
              onChange={e => setProfValue(e.target.value)}
              required
            />
            <div className="toggle-row">
              <label>
                <input
                  type="radio"
                  name="profFieldType"
                  value="name"
                  checked={profFieldType === 'name'}
                  onChange={() => setProfFieldType('name')}
                />
                Name
              </label>
              <label>
                <input
                  type="radio"
                  name="profFieldType"
                  value="code"
                  checked={profFieldType === 'code'}
                  onChange={() => setProfFieldType('code')}
                />
                Code
              </label>
            </div>
          </div>
          {/* Subject Field */}
          <div className="side-field">
            <label>Subject:</label>
            <input
              type="text"
              placeholder={subjectFieldType === 'name' ? "Enter Subject Name" : "Enter Subject Code"}
              value={subjectValue}
              onChange={e => setSubjectValue(e.target.value)}
              required
            />
            <div className="toggle-row">
              <label>
                <input
                  type="radio"
                  name="subjectFieldType"
                  value="name"
                  checked={subjectFieldType === 'name'}
                  onChange={() => setSubjectFieldType('name')}
                />
                Name
              </label>
              <label>
                <input
                  type="radio"
                  name="subjectFieldType"
                  value="code"
                  checked={subjectFieldType === 'code'}
                  onChange={() => setSubjectFieldType('code')}
                />
                Code
              </label>
            </div>
          </div>
        </div>

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
        <div className="dropdown-wrapper">
          <label htmlFor="reason">Reason of Meet</label>
          <select
            id="reason"
            value={reason}
            onChange={e => setReason(e.target.value)}
            required
            className="custom-dropdown"
          >
            <option value="">Select reason</option>
            {reasonOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dropdown-wrapper">
          <label htmlFor="year">Year of Study</label>
          <select
            id="year"
            value={year}
            onChange={e => setYear(e.target.value)}
            required
            className="custom-dropdown"
          >
            <option value="">Select year</option>
            {yearOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={() => {
            setProfValue('');
            setSubjectValue('');
            setComments('');
            setSelectedDate(null);
            setSelectedTime('');
            setReason('');
            setYear('');
            setProfFieldType('name');
            setSubjectFieldType('name');
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
