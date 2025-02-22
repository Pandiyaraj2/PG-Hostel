import React from "react";
import { Link } from "react-router-dom";
import repg4 from "../Assets/repg4.jpg";

export default function PGPramar () {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="col-span-2">
            <img
              src={repg4}
              alt="Main Hostel"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
         
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">Pramar Pg 2</h1>
          <p className="text-gray-600 mt-2">
          JP5F+854, Hinjawadi, Pimpri-chinchwad, Maharashtra, 411057 ,9893XXXXXX ,StayEase -Co-Living


          </p>
          <p className="text-lg font-semibold text-green-600 mt-2">Per month rent starting from ₹10,000</p>
          <Link to='/ContactForm'><button className="bg-black text-white px-4 py-2 rounded-md mt-4">I am Interested</button></Link>
        </div>
      </div>

      {/* Sharing and Amenities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800">Sharing Type</h2>
          <p className="text-gray-700 mt-2"> Double Occupancy  • ₹10,000/mo*</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800">Amenities</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-red-200 px-3 py-1 rounded">Hygienic Food</span>
            <span className="bg-red-200 px-3 py-1 rounded">Wi-Fi</span>
            <span className="bg-red-200 px-3 py-1 rounded">Fully Furnished</span>
            <span className="bg-red-200 px-3 py-1 rounded">R.O. Water</span>
            <span className="bg-red-200 px-3 py-1 rounded">CCTV</span>
            <span className="bg-red-200 px-3 py-1 rounded">A.C.</span>
            <span className="bg-red-200 px-3 py-1 rounded">TV/LED</span>
          </div>
        </div>
      </div>

      {/* House Rules */}
      <div className="bg-purple-100 p-6 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold text-gray-800">House Rules</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Check-in after 5:00 am and check-out before 1:00 pm.</li>
          <li>Self-check-in with the lockbox.</li>
          <li>Residents cannot use the common area & terrace between 11 pm-6 am.</li>
          <li>Keep the music and noise low after 11 pm.</li>
          <li>No queries will be solved on phone. Update onStayEase .</li>
          <li>No smoking allowed.</li>
          <li>No drinking.</li>
          <li>No pet allowed.</li>
          <li>No parties or get-togethers.</li>
          <li>No children and infants allowed.</li>
        </ul>
      </div>

      {/* Location */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3440516781197!2d75.79641421524407!3d26.91243398312721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d3424f5fb9%3A0xabcd123456789!2sTrinity%20Girls%20Hostel!5e0!3m2!1sen!2sin!4v1672608727634"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg mt-4"
        ></iframe>
      </div>

      {/* Nearby PG Locations */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Nearby PG Locations</h2>
        
      </div>
    </div>
  );
}
