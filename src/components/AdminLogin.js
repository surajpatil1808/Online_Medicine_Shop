import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hard-coded credentials
    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin';

    if (email === adminEmail && password === adminPassword) {
      // Redirect to admin dashboard
      localStorage.setItem('username', email);
      navigate('/admindashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Fragment>
    <div className="app">
      <h2 className="title">Admin Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  </Fragment>
  );
};

export default AdminLogin;
