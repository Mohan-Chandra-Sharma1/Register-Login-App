import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  // Define inline CSS styles
  const containerStyle = {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const headingStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '5px',
    textDecoration: 'none',
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Home Page</h2>
      <p style={paragraphStyle}>Welcome to our website!</p>
      <Link to="/login" style={buttonStyle}>
        Login
      </Link>
      <Link to="/signup" style={buttonStyle}>
        Sign Up
      </Link>
    </div>
  );
};

export default Homepage;
