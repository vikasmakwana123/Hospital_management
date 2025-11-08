import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="emergency-badge">24/7 Emergency Care</div>
          <h1>Your Health Journey Starts Here</h1>
          <p>Access quality healthcare services, find nearby hospitals, book ambulances, and manage your medical records all in one place.</p>
          <div className="hero-buttons">
            <Link to="/hospital" className="btn btn-primary">
              <i className="fas fa-hospital"></i> Find Hospitals
            </Link>
            <Link to="/ambulance" className="btn btn-secondary">
              <i className="fas fa-ambulance"></i> Book Ambulance
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="service-card">
          <div className="service-icon appointment">
            <i className="fas fa-calendar-check"></i>
          </div>
          <h3>Book Appointment</h3>
          <p>Schedule a visit with our specialists</p>
          <Link to="/hospital" className="service-button">Book Now</Link>
        </div>

        <div className="service-card">
          <div className="service-icon records">
            <i className="fas fa-file-medical"></i>
          </div>
          <h3>Medical Records</h3>
          <p>Access your health history anytime</p>
          <Link to="/medical-records" className="service-button">View Records</Link>
        </div>

        <div className="service-card">
          <div className="service-icon emergency">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3>Emergency Care</h3>
          <p>24/7 emergency services available</p>
          <Link to="tel:911" className="service-button emergency-button">Call 911</Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <h2>Why Choose MediCare Plus?</h2>
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Partner Hospitals</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Qualified Doctors</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Emergency Support</p>
          </div>
          <div className="stat-item">
            <h3>100K+</h3>
            <p>Happy Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;