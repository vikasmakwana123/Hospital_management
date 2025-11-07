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
import HospitalStaff from './pages/HospitalStaff';


function App() {
  
  return (
    <>
    
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/hospitalstaff" element={
          <ProtectedRoute>
            <HospitalStaff />
          </ProtectedRoute>
        } />
        <Route path="/driver" element={<Driver />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
