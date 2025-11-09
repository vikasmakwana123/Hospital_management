import React, { useEffect, useState } from 'react';
import hospitals from '../data/hospitals';
import { useUser } from '../context/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HospitalStaff = () => {
  const { user } = useUser();
  const [selectedHospitalId, setSelectedHospitalId] = useState(hospitals[0]?.id || '1');
  const [appointments, setAppointments] = useState([]);
  const [editing, setEditing] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [newSlot, setNewSlot] = useState('');
  const [reportText, setReportText] = useState('');

  useEffect(() => {
    if (!selectedHospitalId) return;
    fetch(`http://localhost:4000/api/hospitals/${selectedHospitalId}/appointments`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to load appointments');
        setAppointments(data || []);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || 'Failed to load appointments');
      });
  }, [selectedHospitalId]);

  const startEdit = (entry) => {
    setEditing(entry);
    setNewDate(entry?.appointment?.date || '');
    setNewSlot(entry?.appointment?.slot || '');
    setReportText('');
  };

  const saveEdit = async () => {
    if (!editing) return;
    const { userId, appointment } = editing;
    const payload = {};
    if (newDate) payload.date = newDate;
    if (newSlot) payload.slot = newSlot;

    try {
      const res = await fetch(`http://localhost:4000/api/users/${userId}/appointments/${appointment.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Update failed');
      toast.success('Appointment updated');
      // refresh
      const refresh = await fetch(`http://localhost:4000/api/hospitals/${selectedHospitalId}/appointments`);
      const refreshed = await refresh.json();
      setAppointments(refreshed || []);
      setEditing(null);
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Update failed');
    }
  };

  const addReport = async () => {
    if (!editing || !reportText.trim()) {
      toast.error('Enter report text first');
      return;
    }
    const { userId, appointment } = editing;
    const payload = { addReport: { text: reportText, addedBy: user?.fullName || user?.email || 'staff' } };
    try {
      const res = await fetch(`http://localhost:4000/api/users/${userId}/appointments/${appointment.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Add report failed');
      toast.success('Report added');
      // refresh list and clear inputs
      const refresh = await fetch(`http://localhost:4000/api/hospitals/${selectedHospitalId}/appointments`);
      const refreshed = await refresh.json();
      setAppointments(refreshed || []);
      setReportText('');
      setEditing(null);
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Add report failed');
    }
  };

  return (
    <div className="hospital-staff p-6">
      <div className="staff-header mb-4">
        <h1 className="text-2xl font-bold">Hospital Staff Dashboard</h1>
        <p className="text-sm text-gray-600">Logged in as: {user?.fullName || user?.email}</p>
      </div>

      <div className="mb-4">
        <label className="mr-2">Select Hospital:</label>
        <select value={selectedHospitalId} onChange={(e) => setSelectedHospitalId(e.target.value)} className="p-2 border rounded">
          {hospitals.map((h) => (
            <option key={h.id} value={h.id}>{h.name}</option>
          ))}
        </select>
      </div>

      <div className="appointments-list space-y-4">
        {appointments.length === 0 && <p>No appointments for selected hospital.</p>}
        {appointments.map((entry) => (
          <div key={`${entry.userId}-${entry.appointment.id}`} className="p-4 border rounded bg-white">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{entry.fullName} <span className="text-sm text-gray-500">({entry.email})</span></div>
                <div className="text-sm">Test(s): {entry.appointment.facilities.map(f => f.name).join(', ')}</div>
                <div className="text-sm">Status: {entry.appointment.status}</div>
                <div className="text-sm">Total: ₹{entry.appointment.total}</div>
              </div>
              <div className="text-sm text-gray-500">{new Date(entry.appointment.createdAt).toLocaleString()}</div>
            </div>

            <div className="mt-3 flex gap-2">
              <button onClick={() => startEdit(entry)} className="px-3 py-1 bg-blue-600 text-white rounded">Change Timing / Add Report</button>
            </div>

            {editing && editing.userId === entry.userId && editing.appointment.id === entry.appointment.id && (
              <div className="mt-3 bg-gray-50 p-3 rounded">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div>
                    <label className="block text-sm">Date</label>
                    <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="p-1 border rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-sm">Slot/Time</label>
                    <input type="time" value={newSlot} onChange={(e) => setNewSlot(e.target.value)} className="p-1 border rounded w-full" />
                  </div>
                  <div className="flex items-end">
                    <button onClick={saveEdit} className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-sm">Add Report</label>
                  <textarea value={reportText} onChange={(e) => setReportText(e.target.value)} className="w-full p-2 border rounded" rows={3} />
                  <div className="mt-2">
                    <button onClick={addReport} className="px-3 py-1 bg-indigo-600 text-white rounded">Add Report</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default HospitalStaff;