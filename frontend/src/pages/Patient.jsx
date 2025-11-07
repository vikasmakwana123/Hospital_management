import React, { useState } from 'react';
import { usePatient } from '../context/PatientContext';

const PatientCard = () => {
  const { patient, setPatient } = usePatient();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(patient);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedPatient = { ...patient };

    Object.keys(formData).forEach(key => {
      const value = formData[key];
      if (value !== undefined && value !== null && String(value).trim()) {
        updatedPatient[key] = String(value).trim();
      }
    });

    setPatient(updatedPatient);
    setFormData(updatedPatient);
    setIsEditing(false);
  };

  const initials = patient.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="bg-gray-100 m-10 pt-6 border-gray-500 border-[1px] rounded-2xl min-h-screen">
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
            <h2 className="text-2xl font-bold">{patient.name}</h2>
            <p className="text-sm">Patient ID: {patient.id || 'PT-89329'}</p>
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
    </div>
  );
};

export default PatientCard;
