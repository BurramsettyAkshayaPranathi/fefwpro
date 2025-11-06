import React from 'react'
import '../../styles/dashboard.css'

const DonorDashboard = () => (
  <div className="dashboard">
    <h2>Donor Dashboard</h2>
    <p>Make a difference by donating essential items.</p>

    <div className="metrics">
      <div>Items Donated: <strong>47</strong></div>
      <div>People Helped: <strong>23</strong></div>
      <div>Impact Score: <strong>10</strong></div>
    </div>

    <div className="actions">
      <button className="donate">Donate Items</button>
      <button className="emergency">Emergency Drives</button>
    </div>

    <div className="donations">
      <h3>Your Active Donations</h3>
      <ul>
        <li>
          <strong>Winter Clothing Package</strong><br />
          5 jackets; 10 blankets<br />
          Status: In Transit<br />
          Expected Delivery: Dec 15, 2024
        </li>
        <li>
          <strong>Food Essentials</strong><br />
          Rice, canned goods, water bottles<br />
          Status: Delivered<br />
          Delivered: Dec 12, 2024
        </li>
      </ul>
    </div>
  </div>
)

export default DonorDashboard
