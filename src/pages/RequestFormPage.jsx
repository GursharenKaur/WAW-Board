import React, { useState } from 'react';
import './RequestFormPage.css';

const RequestFormPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="request-form-page">
      <h1 className="request-title">Book a Meeting</h1>
      <form className="request-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" placeholder="Subject" required />
        </div>
        <div className="form-row">
          <textarea placeholder="Extra comments (optional)" rows={3} />
        </div>
        <div className="form-row">
          <input type="date" required />
          <input type="time" required />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
        {submitted && (
          <div className="confirmation-toast">Request submitted successfully!</div>
        )}
      </form>
    </div>
  );
};

export default RequestFormPage;
