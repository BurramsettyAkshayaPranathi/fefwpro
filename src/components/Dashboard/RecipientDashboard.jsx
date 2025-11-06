import React from 'react'
import '../../styles/dashboard.css'

const RecipientDashboard = () => (
  <div className="dashboard">
    <h2>Recipient Dashboard</h2>
    <p>Request essential items and track your deliveries.</p>

    <div className="actions">
      <button className="request">Request Items</button>
      <button className="my-requests">My Requests</button>
    </div>

    <div className="requests">
      <h3>Current Requests</h3>
      <ul>
        <li>
          <strong>Winter Clothing</strong><br />
          Warm jackets for family of 4<br />
          Status: Matched<br />
          Expected: Dec 16, 2024
        </li>
        <li>
          <strong>Baby Formula</strong><br />
          Urgent need for infant formula<br />
          Status: Pending<br />
          Priority: High
        </li>
      </ul>
    </div>

    <div className="feedback">
      <h3>Recent Deliveries - Provide Feedback</h3>
      <p>Food Package Delivery - Dec 14, 2024</p>
      <button className="feedback-btn">Submit Feedback</button>
    </div>
  </div>
)

export default RecipientDashboard
