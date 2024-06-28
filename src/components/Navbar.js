import React from 'react';
import { Link } from 'react-router-dom';
import pglogo from '../images/pglogo.png'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={pglogo} alt="pg logo"></img>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Admin Login</Link></li>
        <li><Link to="/signup">Guest Login</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
