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
    whatsappNo: '',
    bloodGroup: '',
    gender: '',
    birthDate: '',
    age: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const calculateAge = (birthDate) => {
    if (!birthDate) return '';
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age.toString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'birthDate') {
      const age = calculateAge(value);
      setFormData(prev => ({ ...prev, age }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword, email, birthDate, age } = formData;

    if (email && !validateEmail(email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (password && password.length < 6) {
      toast.error('Password must be at least 6 characters long!');
      return;
    }

    if (!birthDate) {
      toast.error('Please select your birth date!');
      return;
    }

    const today = new Date();
    const birth = new Date(birthDate);
    if (birth > today) {
      toast.error('Birth date cannot be in the future!');
      return;
    }

    const calculatedAge = parseInt(age);
    if (isNaN(calculatedAge) || calculatedAge < 0 || calculatedAge > 150) {
      toast.error('Invalid age calculated. Please check your birth date!');
      return;
    }

    // Simulate signup success
    toast.success('Signup successful!');
    // Navigate to login or homepage
    navigate('/login');
  };

  return (
    <div className="auth-modal">
      <div className="auth-container">
        <button className="back-button" onClick={() => navigate('/')}>
          <i className="fas fa-arrow-left"></i> Back to Website
        </button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
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
            <label>Confirm Password</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
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
          <div className="form-group">
            <label>Blood Group (Optional)</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Transgender"
                  checked={formData.gender === 'Transgender'}
                  onChange={handleChange}
                />
                Transgender
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              max={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              readOnly
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