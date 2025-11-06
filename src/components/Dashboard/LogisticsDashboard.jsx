import React from 'react'
import '../../styles/dashboard.css'

const LogisticsDashboard = () => (
  <div className="dashboard">
    <h2>Logistics Dashboard</h2>
    <p>Organize transportation and manage inventory.</p>

    <div className="metrics">
      <div>Active Routes: <strong>8</strong></div>
      <div>Pending Deliveries: <strong>23</strong></div>
      <div>Completed Today: <strong>15</strong></div>
      <div>Urgent Deliveries: <strong>4</strong></div>
    </div>

    <div className="routes">
      <h3>Today's Routes</h3>
      <ul>
        <li>
          <strong>Route A - Downtown</strong><br />
          5 stops, 12 packages<br />
          Driver: John Smith<br />
          Status: In Progress
        </li>
        <li>
          <strong>Route B - Suburbs</strong><br />
          3 stops, 6 packages<br />
          Driver: Maria Garcia<br />
          Status: Scheduled<br />
          Departure: 2:00 PM
        </li>
      </ul>
    </div>

    <div className="inventory">
      <h3>Warehouse Inventory</h3>
      <ul>
        <li>Food Items: 847 packages</li>
        <li>Clothing: 234 items</li>
        <li>Medical Supplies: 156 kits</li>
      </ul>
    </div>
  </div>
)

export default LogisticsDashboard
