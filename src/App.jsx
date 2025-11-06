import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import DonorDashboard from './components/Dashboard/DonorDashboard';
import RecipientDashboard from './components/Dashboard/RecipientDashboard';
import LogisticsDashboard from './components/Dashboard/LogisticsDashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/recipient" element={<RecipientDashboard />} />
        <Route path="/logistics" element={<LogisticsDashboard />} />
      </Routes>
    </>
  );
}

export default App;
