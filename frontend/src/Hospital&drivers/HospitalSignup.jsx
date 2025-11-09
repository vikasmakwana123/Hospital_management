import React, { useState } from "react";

const HospitalSignup = () => {
  const [type, setType] = useState("hospital");
  const [formData, setFormData] = useState({
    hospitalId: "",
    hospitalName: "",
    address: "",
    contactNumber: "",
    email: "",
    password: "",
    driverId: "",
    driverName: "",
    licenseNumber: "",
    ambulanceNumber: "",
    experience: "",
    driverContact: "",
  });

  // 🏥 Dynamic services array
  const [services, setServices] = useState([{ service: "", price: "" }]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🧩 Handle service input change
  const handleServiceChange = (index, e) => {
    const updatedServices = [...services];
    updatedServices[index][e.target.name] = e.target.value;
    setServices(updatedServices);
  };

  // ➕ Add new service row
  const addService = () => {
    setServices([...services, { service: "", price: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { ...formData, services });
    alert(`${type === "hospital" ? "Hospital" : "Driver"} registered successfully!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        {type === "hospital" ? "Hospital Signup" : "Ambulance Driver Signup"}
      </h1>

      {/* Toggle Buttons */}
      <div className="mb-6">
        <button
          onClick={() => setType("hospital")}
          className={`px-6 py-2 mr-4 rounded ${
            type === "hospital" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Hospital
        </button>
        <button
          onClick={() => setType("driver")}
          className={`px-6 py-2 rounded ${
            type === "driver" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Ambulance Driver
        </button>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        {type === "hospital" && (
          <>
            {/* Basic Hospital Fields */}
            <label className="block mb-2">Hospital ID (Govt. Registered)</label>
            <input
              type="text"
              name="hospitalId"
              value={formData.hospitalId}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">Hospital Name</label>
            <input
              type="text"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            ></textarea>

            {/* 🏥 Dynamic Services Section */}
            <h2 className="text-lg font-semibold mb-2 text-blue-600">Hospital Services</h2>

            <div className="grid grid-cols-2 gap-4 mb-2">
              <label className="font-medium text-gray-700">Service</label>
              <label className="font-medium text-gray-700">Price (₹)</label>
            </div>

            {services.map((serviceItem, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-3">
                <input
                  type="text"
                  name="service"
                  placeholder="e.g., MRI"
                  value={serviceItem.service}
                  onChange={(e) => handleServiceChange(index, e)}
                  className="p-2 border rounded"
                  required
                />
                <input
                  type="number"
                  name="price"
                  placeholder="e.g., 5000"
                  value={serviceItem.price}
                  onChange={(e) => handleServiceChange(index, e)}
                  className="p-2 border rounded"
                  required
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addService}
              className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600 transition"
            >
              + Add More Services
            </button>

            {/* Contact Info */}
            <label className="block mb-2">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
          </>
        )}

        {/* 🚑 Ambulance Driver Form */}
        {type === "driver" && (
          <>
            <label className="block mb-2">Driver ID (Govt. Registered)</label>
            <input
              type="text"
              name="driverId"
              value={formData.driverId}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">Driver Name</label>
            <input
              type="text"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">License Number</label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">Ambulance Vehicle Number</label>
            <input
              type="text"
              name="ambulanceNumber"
              value={formData.ambulanceNumber}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">Experience (in years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              min="0"
            />

            <label className="block mb-2">Contact Number</label>
            <input
              type="tel"
              name="driverContact"
              value={formData.driverContact}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default HospitalSignup;
