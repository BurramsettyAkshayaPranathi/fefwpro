import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">CareConnect</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/donor">Donor</Link>
      <Link to="/recipient">Recipient</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/logistics">Logistics</Link>
    </div>
  </nav>
)

export default Navbar
