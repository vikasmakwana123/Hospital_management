import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import Homepage from './pages/Homepage';
import Patient from './pages/Patient';
import Driver from './pages/Driver';
import ProtectedRoute from './components/ProtectedRoutes.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HospitalStaff from './pages/HospitalStaff';
import HospitalList from './pages/HospitalList.jsx';
import Appointment from './pages/Appointment.jsx';
import Ambulance from './pages/Ambulance.jsx';
import HospitalSignup from './Hospital&drivers/HospitalSignup.jsx';


function App() {
  
  return (
  <>
  <Router>
  <NavBar/>
  <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/patient" element={<Patient />} />
  <Route path="/hospitalstaff" element={
    <ProtectedRoute>
      <HospitalStaff />
    </ProtectedRoute>
  } />
  <Route path="/driver" element={<Driver />} />
  <Route path="/hospital" element={<HospitalList />} />
  <Route path="/ambulance" element={<Ambulance />} /> {/* ✅ Fixed */}
  <Route path="/appointment/:id" element={<Appointment />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup/hospitaldriver"element={<HospitalSignup/>}/>
</Routes>
</Router>

    </>
  )
}

export default App
