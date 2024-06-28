import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  // Store the signup data in local storage
  const storedData = localStorage.getItem('userData');
  let userData = storedData ? JSON.parse(storedData) : {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login functionality
      if (email === userData.email && password === userData.password) {
        navigate('/LoggedInUserPage'); // Redirect to the logged-in user page
      } else {
        alert('Invalid email or password');
      }
    } else {
      // Signup functionality
      if (!userData.email) {
        userData = { name, email, password };
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/LoggedInUserPage'); // Redirect to the logged-in user page
      } else {
        // Guest login
        userData = { name, email, password };
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/LoggedInUserPage'); // Redirect to the logged-in user page
      }
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Login' : 'Guest Login'}</h2>
          <label htmlFor="guest-name">Name:</label>
          <input
            type="text"
            id="guest-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={!isLogin}
          />
          <label htmlFor="guest-email">Email:</label>
          <input
            type="email"
            id="guest-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="guest-password">Password:</label>
          <input
            type="password"
            id="guest-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-login">
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <div className="toggle-form">
          {isLogin ? (
            <p>
              Don't have an account? <Link to="#" onClick={handleToggle}>Signup</Link>
            </p>
          ) : (
            <p>
              Already have an account? <Link to="#" onClick={handleToggle}>Login</Link>
            </p>
          )}
        </div>
        {!isLogin && (
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;