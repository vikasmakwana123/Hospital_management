import React, { useState, useEffect } from 'react';
import { usePatient } from '../context/PatientContext';
import { useUser } from '../context/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchWithErrorHandling } from '../utils/api';

const PatientCard = () => {
  const { patient, setPatient } = usePatient();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(patient);
  const [appointmentView, setAppointmentView] = useState(false);
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setFormData(patient);
  }, [patient]);

  useEffect(() => {
    async function loadUserData() {
      if (!user || !user.id) return;
      try {
        const data = await fetchWithErrorHandling(`/api/users/${user.id}`);
        // Ensure appointments exists
        data.appointments = data.appointments || [];
        setUserData(data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        toast.error(err.message);
      }
    }
    loadUserData();
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedPatient = { ...patient };
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      if (value !== undefined && value !== null && String(value).trim()) {
        updatedPatient[key] = String(value).trim();
      }
    });
    setPatient(updatedPatient);
    setFormData(updatedPatient);
    setIsEditing(false);
    toast.success('Profile updated (local only).');
  };

  const displayName = (userData && userData.fullName) || patient.name;
  const initials = displayName
    .split(' ')
    .map((word) => word[0] || '')
    .join('')
    .toUpperCase();

  return (
    <>
      <div className="flex flex-col bg-gray-100 m-10 pt-6 border-gray-500 border-[1px] rounded-2xl min-h-screen">
        <div className="w-[90%] mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg p-6 relative">
          <div className="absolute top-4 right-4">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-white text-blue-600 px-4 py-1 rounded font-semibold hover:bg-gray-100"
              >
                Edit Profile
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="bg-white text-green-600 px-4 py-1 rounded font-semibold hover:bg-gray-100"
              >
                Save
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white text-blue-600 font-bold text-xl w-14 h-14 rounded-full flex items-center justify-center">
              {initials}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{displayName}</h2>
              <p className="text-sm">Patient ID: {(userData && userData.id) || patient.id || 'PT-89329'}</p>
            </div>
          </div>

          <div className="space-y-2">
            {isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block mb-1 font-medium">Age</label>
                  <input
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder={patient.age}
                    className="w-full p-2 rounded bg-gray-200 text-black"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Blood Group</label>
                  <input
                    name="bloodgroup"
                    value={formData.bloodgroup}
                    onChange={handleChange}
                    placeholder={patient.bloodgroup}
                    className="w-full p-2 rounded bg-gray-200 text-black"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Gender</label>
                  <input
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    placeholder={patient.gender}
                    className="w-full p-2 rounded bg-gray-200 text-black"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input
                    name="phoneno"
                    value={formData.phoneno}
                    onChange={handleChange}
                    placeholder={patient.phoneno}
                    className="w-full p-2 rounded bg-gray-200 text-black"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">Whatsapp Number</label>
                  <input
                    name="whatsappno"
                    value={formData.whatsappno}
                    onChange={handleChange}
                    placeholder={patient.whatsappno}
                    className="w-full p-2 rounded bg-gray-200 text-black"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">Address:</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder={patient.address}
                    className="w-full p-2 rounded bg-gray-200 text-black"
                  />
                </div>
              </div>
            ) : (
              <>
                <p><strong>Age:</strong> {patient.age}</p>
                <p><strong>Blood Group:</strong> {patient.bloodgroup}</p>
                <p><strong>Gender:</strong> {patient.gender}</p>
                <p><strong>Phone:</strong> {patient.phoneno}</p>
                <p><strong>Whatsapp No:</strong> {patient.whatsappno}</p>
                <p><strong>Address:</strong> {patient.address}</p>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-5 ml-20">
          <button
            onClick={() => setAppointmentView(false)}
            className={`px-6 py-3 rounded-3xl shadow-lg font-semibold ${
              !appointmentView
                ? 'bg-red-700 text-white'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            Medical Records
          </button>
          <button
            onClick={() => setAppointmentView(true)}
            className={`px-9 py-3 rounded-3xl shadow-lg font-semibold ${
              appointmentView
                ? 'bg-blue-700 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Appointment
          </button>
        </div>

        <div className="w-[90%] mx-auto mt-8">
          {!appointmentView ? (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-3">🩺 Medical Records</h2>

              {userData && userData.appointments && userData.appointments.length > 0 ? (
                <div className="space-y-4">
                  {userData.appointments.map((a) => (
                    <div key={a.id} className="p-3 border rounded">
                      <div className="flex justify-between">
                        <div>
                          <div className="font-semibold">Hospital: {a.hospitalName}</div>
                          <div className="text-sm text-gray-600">Status: {a.status}</div>
                          <div className="text-sm text-gray-600">Total: ₹{a.total}</div>
                        </div>
                        <div className="text-sm text-gray-500">{new Date(a.createdAt).toLocaleString()}</div>
                      </div>
                      {a.reports && a.reports.length > 0 && (
                        <div className="mt-2">
                          <div className="font-medium">Reports:</div>
                          <ul className="list-disc ml-5">
                            {a.reports.map((r) => (
                              <li key={r.id} className="text-sm">{r.text} <span className="text-xs text-gray-500">({r.addedBy} - {new Date(r.createdAt).toLocaleString()})</span></li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>Display all patient medical history, test reports, and prescriptions here.</p>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-3">📅 Appointment Booking</h2>
              <p>Form to book appointments will appear here (use Hospital page to book).</p>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PatientCard;