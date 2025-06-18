import React, { useState } from 'react';
import './AdminSearchPage.css';

const mockResults = [
  { name: 'Dr. Smith', code: 'CS101', department: 'Computer Science', email: 'smith@university.edu' },
  { name: 'Prof. Johnson', code: 'MA201', department: 'Mathematics', email: 'johnson@university.edu' }
];

const AdminSearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = e => {
    e.preventDefault();
    setResults(
      mockResults.filter(
        t =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.code.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="admin-search-page">
      <h1 className="admin-search-title">Find a Professor</h1>
      <form className="admin-search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter name or code"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {results.length === 0 ? (
          <p className="no-results">No results to display.</p>
        ) : (
          results.map((prof, idx) => (
            <div key={idx} className="result-card">
              <div className="prof-name">{prof.name} ({prof.code})</div>
              <div className="prof-details">
                <span>{prof.department}</span> | <span>{prof.email}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminSearchPage;
