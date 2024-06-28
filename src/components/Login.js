import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username and password match
    if (username === 'mihir' && password === '123') {
      // Redirect to another page (e.g., '/admin')
      navigate('/admin');
    } else {
      // Invalid credentials handling (optional)
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container1">
      <div className="background-image1"></div>
      <div className="form-container1">
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <h2>Admin Login</h2>
            <label htmlFor="admin-username1">Username:</label>
            <input
              type="text"
              id="admin-username1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="admin-password1">Password:</label>
            <input
              type="password"
              id="admin-password1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
