import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hospitals from '../data/hospitals';
import { useUser } from '../context/UserContext'; // ✅ Import user context
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchWithErrorHandling } from '../utils/api';

const Appointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser(); // ✅ Access logged-in user info

  const hospital = useMemo(() => hospitals.find((h) => String(h.id) === String(id)), [id]);

  const [selected, setSelected] = useState({});
  const [selectedSlot, setSelectedSlot] = useState({});

  if (!hospital) {
    return (
      <div className="p-8">
        <p>Hospital not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-600 text-white px-3 py-2 rounded"
        >
          Back
        </button>
      </div>
    );
  }

  const toggleFacility = (facilityId, facility) => {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[facilityId]) {
        delete next[facilityId];
        setSelectedSlot((s) => {
          const ns = { ...s };
          delete ns[facilityId];
          return ns;
        });
      } else {
        next[facilityId] = true;
        setSelectedSlot((s) => ({ ...s, [facilityId]: facility.slots[0] }));
      }
      return next;
    });
  };

  const handleSlotChange = (facilityId, slot) => {
    setSelectedSlot((s) => ({ ...s, [facilityId]: slot }));
  };

  const selectedFacilities = hospital.facilities.filter((f) => selected[f.id]);
  const total = selectedFacilities.reduce((sum, f) => sum + Number(f.price || 0), 0);

  // ✅ Booking Handler with Login Check
  const handleBooking = async () => {
    if (!user) {
      alert('You must log in before booking an appointment.');
      navigate('/login'); // redirect to login page
      return;
    }
    // Build payload
    const payload = {
      hospitalId: hospital.id,
      hospitalName: hospital.name,
      facilities: selectedFacilities.map((f) => ({ id: f.id, name: f.name, price: f.price, slot: selectedSlot[f.id] })),
      total,
    };

    try {
      // No need to stringify the payload, fetchWithErrorHandling will do it
      await fetchWithErrorHandling(`/api/users/${user.id}/appointments`, {
        method: 'POST',
        body: payload, // Send the payload directly
      });
      toast.success('Appointment booked successfully!');
      navigate('/patient');
    } catch (err) {
      console.error('Error booking appointment:', err);
      toast.error(err.message || 'Failed to book appointment. Please try again.');
    }
  };

  return (
    <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6">
      <ToastContainer />
      {/* Hospital Info Section */}
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">{hospital.name}</h1>
          <p className="text-gray-600">
            {hospital.location} • {hospital.timings}
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-3">Available Tests</h2>
        <div className="space-y-4">
          {hospital.facilities.map((f) => (
            <div
              key={f.id}
              className="p-4 bg-white shadow rounded flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={!!selected[f.id]}
                    onChange={() => toggleFacility(f.id, f)}
                    className="w-4 h-4"
                  />
                  <div>
                    <div className="font-semibold">{f.name}</div>
                    <div className="text-sm text-gray-600">Duration: {f.duration}</div>
                    <div className="text-sm text-gray-600">Price: ₹{f.price}</div>
                  </div>
                </label>
              </div>

              {/* Slot selector */}
              {selected[f.id] && (
                <div className="mt-3 md:mt-0">
                  <label className="text-sm text-gray-700 mr-2">Choose slot:</label>
                  <select
                    value={selectedSlot[f.id] || f.slots[0]}
                    onChange={(e) => handleSlotChange(f.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    {f.slots.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar / Cart */}
      <aside className="w-full md:w-80 bg-white p-4 rounded shadow">
        <h3 className="font-semibold text-lg mb-2">Appointment Summary</h3>
        {selectedFacilities.length === 0 ? (
          <p className="text-gray-600">No tests selected.</p>
        ) : (
          <div className="space-y-3">
            {selectedFacilities.map((f) => (
              <div key={f.id} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{f.name}</div>
                  <div className="text-sm text-gray-600">
                    Slot: {selectedSlot[f.id]}
                  </div>
                </div>
                <div className="font-semibold">₹{f.price}</div>
              </div>
            ))}

            <div className="border-t pt-3 flex justify-between font-bold">
              <div>Total</div>
              <div>₹{total}</div>
            </div>

            {/* ✅ Book Button Checks Login */}
            <button
              onClick={handleBooking}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              {user ? 'Book Appointment' : 'Login to Book'}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Appointment;
