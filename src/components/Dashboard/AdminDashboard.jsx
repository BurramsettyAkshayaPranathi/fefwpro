import React from 'react'
import '../../styles/dashboard.css'

const AdminDashboard = () => (
  <div className="dashboard">
    <h2>Admin Dashboard</h2>
    <p>Manage donation drives and oversee platform operations.</p>

    <div className="metrics">
      <div>Total Donations: <strong>2,847</strong></div>
      <div>Active Drives: <strong>12</strong></div>
      <div>Active Users: <strong>1,234</strong></div>
      <div>Emergency Drives: <strong>3</strong></div>
    </div>

    <div className="actions">
      <button className="create">Create New Drive</button>
      <button className="manage">Manage Drives</button>
      <button className="report">Transparency Report</button>
    </div>

    <div className="activity">
      <h3>Recent Platform Activity</h3>
      <ul>
        <li>Hurricane Relief Drive created (2 hours ago)</li>
        <li>500 food packages delivered (6 hours ago)</li>
        <li>New logistics coordinator verified (8 hours ago)</li>
      </ul>
    </div>
  </div>
)

export default AdminDashboard
