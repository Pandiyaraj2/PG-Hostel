


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  mobileNo: "",
  message: ""
};

export default function ContactForm() {
  const [blog, setBlog] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({
      ...prev,
      [name]: value, // Ensure correct state update
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    try {
      setIsSubmitting(true);
      const res = await axios.post("http://localhost:8000/createBlog", blog);
      console.log("Success:", res.data);
      
      setBlog(initialState); // Reset form
      navigate("/BlogList"); // Redirect after successful submission
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Connect With <span className="text-blue-600">StayEase</span>
        </h2>

        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">Name  {''} </label>
          <input
            type="text"
            name="userName"
            placeholder="Name"
            value={blog.userName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700 mb-2">Phone Number{''}</label>
          <input
            type="text"
            name="mobileNo"
            placeholder="Phone Number"
            value={blog.mobileNo}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email{''}</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={blog.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message{''}</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Message..."
            value={blog.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="recaptcha" className="mr-2" required />
            <label htmlFor="recaptcha" className="text-sm text-gray-700">I'm not a robot</label>
          </div>
        </div>

        <div className="flex justify-between">
          <button type="button" className="w-1/2 mr-2 py-2 text-center text-gray-800 border border-gray-400 rounded-lg hover:bg-gray-200">
            Cancel
          </button>
          <button type="submit" className="w-1/2 ml-2 py-2 text-center text-white bg-black rounded-lg hover:bg-gray-800">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
