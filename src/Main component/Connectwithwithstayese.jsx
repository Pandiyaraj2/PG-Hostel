// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_lw5ty7s", 
//         "template_u9nvc9v", 
//         formData,
//         "gXe5KQ7hjr8Xc-Cni" 
//       )
//       .then(
//         (response) => {
//           Swal.fire({
//             icon: "success",
//             title: "Message Sent!",
//             text: "Your message has been successfully sent.",
//           });
//           setFormData({ name: "", phone: "", email: "", message: "" });
//         },
//         (error) => {
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Something went wrong! Please try again later.",
//           });
//         }
//       );
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-600">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Connect With <span className="text-blue-500">StayEase</span>
//         </h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="phone">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="4"
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="mr-2 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             I&apos;m not a robot
//           </label>
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="button"
//             className="px-4 py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_lw5ty7s', 'template_q7t8lpf', form.current, {
        publicKey: 'gXe5KQ7hjr8Xc-Cni',
      })
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            form.current.reset(); // Clear form fields
            navigate('/'); // Redirect to homepage
          });
        },
        (error) => {
          setLoading(false);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send message. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        },
      );
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium">Name</label>
          <input 
            type="text" 
            name="from_name" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your name" 
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <input 
            type="email" 
            name="from_email" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your email" 
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Message</label>
          <textarea 
            name="message" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Your message..." 
            rows="5"
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 transition-all"
          disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;