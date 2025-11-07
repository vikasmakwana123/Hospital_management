import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HospitalStaff.css';

const HospitalStaff = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      date: '2023-10-15',
      time: '10:00 AM',
      status: 'Confirmed'
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2023-10-15',
      time: '11:30 AM',
      status: 'Pending'
    },
    {
      id: 3,
      patientName: 'Bob Johnson',
      date: '2023-10-16',
      time: '2:00 PM',
      status: 'Confirmed'
    }
  ]);

  const [editingAppointment, setEditingAppointment] = useState(null);
  const [newTime, setNewTime] = useState('');
  const [newDate, setNewDate] = useState('');

  const handleEditAppointment = (appointment) => {
    setEditingAppointment(appointment);
    setNewTime(appointment.time);
    setNewDate(appointment.date);
  };

  const handleSaveAppointment = () => {
    if (!newTime || !newDate) {
      toast.error('Please enter both date and time!');
      return;
    }

    setAppointments(appointments.map(app =>
      app.id === editingAppointment.id
        ? { ...app, time: newTime, date: newDate }
        : app
    ));

    setEditingAppointment(null);
    setNewTime('');
    setNewDate('');
    toast.success('Appointment updated successfully!');
  };

  const handleCancelEdit = () => {
    setEditingAppointment(null);
    setNewTime('');
    setNewDate('');
  };

  return (
    <div className="hospital-staff">
      <div className="staff-header">
        <h1>Hospital Staff Dashboard</h1>
      </div>

      <div className="appointments-section">
        <h2>Patient Appointments</h2>
        <div className="appointments-list">
          {appointments.map(appointment => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-info">
                <h3>{appointment.patientName}</h3>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Status:</strong> <span className={`status ${appointment.status.toLowerCase()}`}>{appointment.status}</span></p>
              </div>
              <div className="appointment-actions">
                {editingAppointment && editingAppointment.id === appointment.id ? (
                  <div className="edit-form">
                    <input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      required
                    />
                    <input
                      type="time"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      required
                    />
                    <button onClick={handleSaveAppointment} className="save-btn">Save</button>
                    <button onClick={handleCancelEdit} className="cancel-btn">Cancel</button>
                  </div>
                ) : (
                  <button onClick={() => handleEditAppointment(appointment)} className="edit-btn">
                    Change Timing
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default HospitalStaff;
