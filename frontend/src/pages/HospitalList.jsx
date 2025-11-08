import React, { useState } from "react";
import HospitalCard from "../components/HospitalCard";
import hospitals from "../data/hospitals";

const HospitalList = () => {
  const hospitalsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFacility, setSelectedFacility] = useState("All");

  // Extract all unique facilities dynamically from hospital data
  const allFacilities = Array.from(
    new Set(hospitals.flatMap((h) => h.facilities.map((f) => f.name)))
  );

  // Filter hospitals based on the selected facility
  const filteredHospitals =
    selectedFacility === "All"
      ? hospitals
      : hospitals.filter((h) =>
          h.facilities.some((f) => f.name === selectedFacility)
        );

  // Pagination calculations
  const totalPages = Math.ceil(filteredHospitals.length / hospitalsPerPage);
  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = filteredHospitals.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFacilityChange = (e) => {
    setSelectedFacility(e.target.value);
    setCurrentPage(1); // Reset pagination when changing filter
  };

  return (
    <div className="py-8 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Hospitals in Maharashtra
      </h1>

      {/* 🔍 Facility Filter Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedFacility}
          onChange={handleFacilityChange}
          className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Facilities</option>
          {allFacilities.map((facility, index) => (
            <option key={index} value={facility}>
              {facility}
            </option>
          ))}
        </select>
      </div>

      {/* Hospital List */}
      <div className="space-y-6">
        {currentHospitals.length > 0 ? (
          currentHospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))
        ) : (
          <p className="text-center text-gray-600">
            No hospitals found with {selectedFacility} facility.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredHospitals.length > hospitalsPerPage && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          {/* Prev Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-700 text-white font-semibold"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HospitalList;
