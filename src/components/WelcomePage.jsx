import React from 'react'
import '../styles/welcome.css'

const WelcomePage = () => (
  <div className="welcome">
    <h1>Welcome to CareConnect</h1>
    <p>Connecting donors with people in need during emergencies and everyday challenges.</p>

    <div className="buttons">
      <button onClick={() => (window.location.href = '/donor')}>Login</button>
      <button onClick={() => (window.location.href = '/recipient')}>Sign Up</button>
    </div>

    <div className="demo-section">
      <h3>Try Demo Accounts</h3>
      <ul>
        <li><strong>Admin:</strong> admin@careconnect.com / admin123</li>
        <li><strong>Donor:</strong> donor@example.com / donor123</li>
        <li><strong>Recipient:</strong> recipient@example.com / recipient123</li>
        <li><strong>Logistics:</strong> logistics@example.com / logistics123</li>
      </ul>
    </div>
  </div>
)

export default WelcomePage
