import React, { useState } from 'react';
import '../signup.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      const data = await response.json();
      setMessage(data.message); // Assuming your server sends a message back
    } else {
      const errorData = await response.json();
      setMessage(errorData.error);
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>
          <label htmlFor="forgot-email">Email:</label>
          <input
            type="email"
            id="forgot-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-login">
            Reset Password
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
