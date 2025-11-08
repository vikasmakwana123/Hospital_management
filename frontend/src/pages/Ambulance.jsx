import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';

const Ambulance = () => {
  const [mode, setMode] = useState('normal');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [incidentType, setIncidentType] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [fromCoords, setFromCoords] = useState(null);
  const [preferredTime, setPreferredTime] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [price, setPrice] = useState(null);
  // New state to track if geolocation failed
  const [locationError, setLocationError] = useState(false);

  // Dummy coordinates for locations
  const dummyCoords = {
    'Andheri East': { lat: 19.1197, lng: 72.8468 },
    'Bandra': { lat: 19.0595, lng: 72.8295 },
    'Dadar': { lat: 19.0180, lng: 72.8426 },
    'CityCare Hospital': { lat: 19.0865, lng: 72.8375 },
    'Sunrise Clinic': { lat: 19.0722, lng: 72.8827 },
  };

  // Effect to handle mode switching and geolocation
  useEffect(() => {
    // Reset all fields when mode changes
    setFromLocation('');
    setToLocation('');
    setCurrentLocation(null);
    setFromCoords(null);
    setNearbyHospitals([]);
    setPrice(null);
    setIncidentType('');
    setPreferredTime('');
    setContactNumber('');
    setLocationError(false); // Reset location error on mode switch

    if (mode === 'emergency') {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const userLocation = { lat: latitude, lng: longitude };
          setCurrentLocation(userLocation);
          fetchNearbyHospitals(latitude, longitude);
          setLocationError(false); // Explicitly set false on success
        },
        (err) => {
          console.error('Location error:', err);
          setLocationError(true); // Set true on error
        }
      );
    }
  }, [mode]);

  // Effect to calculate price in 'normal' mode
  useEffect(() => {
    if (mode === 'normal' && fromCoords && toLocation) {
      const to = dummyCoords[toLocation];
      if (to) {
        calculatePrice(fromCoords.lat, fromCoords.lng, to.lat, to.lng);
      } else {
        setPrice(null);
      }
    }
  }, [mode, fromCoords, toLocation]);

  const fetchNearbyHospitals = (lat, lng) => {
    const dummyHospitals = [
      { name: 'CityCare Hospital', lat: lat + 0.01, lng: lng + 0.01 },
      { name: 'Sunrise Clinic', lat: lat - 0.01, lng: lng - 0.01 },
    ];
    setNearbyHospitals(dummyHospitals);
    setToLocation(dummyHospitals[0].name); // Auto-select first hospital
    calculatePrice(lat, lng, dummyHospitals[0].lat, dummyHospitals[0].lng);
  };

  const calculatePrice = (lat1, lng1, lat2, lng2) => {
    // Haversine formula for more accurate distance calculation
    const toRad = (val) => (val * Math.PI) / 180;
    const R = 6371; // Earth radius in km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km

    const baseRate = 200;
    const perKmRate = 50;
    setPrice(baseRate + distance * perKmRate);
  };

  // Component to handle map click events
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const newCoords = { lat: e.latlng.lat, lng: e.latlng.lng };

        if (mode === 'normal') {
          setFromCoords(newCoords); // Set the coordinate state
          setFromLocation(
            `${newCoords.lat.toFixed(4)}, ${newCoords.lng.toFixed(4)}`
          ); // Set the text input
        } else if (mode === 'emergency' && !currentLocation) {
          // If in emergency mode and location is not set (either fetching or failed)
          setCurrentLocation(newCoords);
          fetchNearbyHospitals(newCoords.lat, newCoords.lng);
          setLocationError(false); // We have a location now, so clear error
        }
      },
    });
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="h-64 mb-4 rounded overflow-hidden shadow">
        <MapContainer
          // Center the map on the user's location, the pinned location, or default
          center={currentLocation || fromCoords || [19.076, 72.877]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapEvents /> {/* Add the event handler component */}
          
          {/* Marker for emergency mode (user's location, auto or pinned) */}
          {currentLocation && (
            <Marker position={currentLocation}>
              <Popup>Your Location</Popup>
            </Marker>
          )}

          {/* Markers for nearby hospitals (emergency mode) */}
          {mode === 'emergency' && nearbyHospitals.map((hosp, idx) => (
            <Marker key={idx} position={[hosp.lat, hosp.lng]}>
              <Popup>{hosp.name}</Popup>
            </Marker>
          ))}

          {/* Marker for "From" location pin (normal mode) */}
          {mode === 'normal' && fromCoords && (
            <Marker position={fromCoords}>
              <Popup>Pickup Location</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            mode === 'normal' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setMode('normal')}
        >
          Normal
        </button>
        <button
          className={`px-4 py-2 rounded ${
            mode === 'emergency' ? 'bg-red-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setMode('emergency')}
        >
          Emergency
        </button>
      </div>

      <div className="bg-white shadow rounded p-4">
        {mode === 'emergency' && (
          <>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Your Location</label>
              <input
                type="text"
                value={
                  currentLocation
                    ? `${currentLocation.lat.toFixed(
                        4
                      )}, ${currentLocation.lng.toFixed(4)}`
                    : '' // Show empty value so placeholder is visible
                }
                placeholder={
                  locationError
                    ? 'Could not fetch. Click map to set.' // Show error
                    : 'Fetching...' // Show fetching status
                }
                disabled
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Type of Emergency
              </label>
              <input
                type="text"
                value={incidentType}
                onChange={(e) => setIncidentType(e.target.value)}
                placeholder="e.g. Cardiac arrest, accident"
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                To Location (Nearest Hospital)
              </label>
              <select
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              >
                {/* Show a default option if no hospitals are loaded yet */}
                {nearbyHospitals.length === 0 && (
                  <option value="">Set your location first</option>
                )}
                {nearbyHospitals.map((hosp, idx) => (
                  <option key={idx} value={hosp.name}>
                    {hosp.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Estimated Price
              </label>
              <input
                type="text"
                value={
                  price
                    ? `₹${price.toFixed(2)}`
                    : 'Calculating...'
                }
                disabled
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
          </>
        )}

        {mode === 'normal' && (
          <>
            <div className="mb-4">
              <label className="block font-semibold mb-1">From Location</label>
              <input
                type="text"
                value={fromLocation}
                disabled // Disabled, as it's set by map click
                placeholder="Click on the map to set pickup"
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">To Location</label>
              <select
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="">Select a destination...</option>
                {Object.keys(dummyCoords).map((locationName) => (
                  <option key={locationName} value={locationName}>
                    {locationName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Preferred Time</label>
              <input
                type="datetime-local"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                min={new Date().toISOString().slice(0, 16)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Contact Number</label>
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Estimated Price
              </label>
              <input
                type="text"
                value={
                  price
                    ? `₹${price.toFixed(2)}`
                    : 'Select From and To locations'
                }
                disabled
                className="w-full border px-3 py-2 rounded bg-gray-100"
              />
            </div>
          </>
        )}

        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Book Ambulance
        </button>
      </div>
    </div>
  );
};

export default Ambulance;