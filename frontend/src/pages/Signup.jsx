import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css'; // Assuming a shared CSS for auth pages

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    address: '',
    password: '',
    confirmPassword: '',
    whatsappNo: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phoneNo, address, password, confirmPassword } = formData;

    if (!fullName || !email || !phoneNo || !address || !password || !confirmPassword) {
      toast.error('All required fields must be filled!');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    // Simulate signup success
    toast.success('Signup successful!');
    // Navigate to login or homepage
    navigate('/login');
  };

  return (
    <div className="auth-modal w-full h-full flex items-center justify-center">
      <div className="auth-container">
        <button className="back-button" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left"></i> Back to Website
        </button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="eye-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Confirm Password *</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="eye-button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className={showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>WhatsApp Number (Optional)</label>
            <input
              type="tel"
              name="whatsappNo"
              value={formData.whatsappNo}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
