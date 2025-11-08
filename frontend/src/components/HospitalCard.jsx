import React from 'react';
import { useNavigate } from 'react-router-dom';

const HospitalCard = ({ hospital }) => {
  const {
    name,
    location,
    timings,
    contact,
    specialties,
    emergencyAvailable,
    imageUrl,
  } = hospital;

  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Image at top center */}
      <div className="w-full md:w-1/3 flex justify-center items-center p-4">
        <img
          src={imageUrl}
          alt={`${name} image`}
          className="h-50 w-50 object-cover rounded-xl border-2 border-gray-300"
        />
      </div>

      {/* Details on the left */}
      <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 mt-1">📍 {location}</p>
          <p className="text-gray-600 mt-1">🕒 Timings: {timings}</p>
          <p className="text-gray-600 mt-1">📞 Contact: {contact}</p>
          <p className="text-gray-600 mt-1">🏥 Specialties: {specialties.join(', ')}</p>
          <p className="text-gray-600 mt-1">
            🚨 Emergency Services: {emergencyAvailable ? 'Available' : 'Not Available'}
          </p>
        </div>

        {/* Button on the right */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => navigate(`/appointment/${hospital.id}`)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Show More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
