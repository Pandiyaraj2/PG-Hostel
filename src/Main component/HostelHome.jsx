import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import explore from "../Assets/boyspg.webp";
import explore1 from "../Assets/coliving.webp";
import explore2 from "../Assets/girilpg.webp";
import explore3 from "../Assets/pglisting.webp";
import repg1 from "../Assets/repg1.jpg";
import repg2 from "../Assets/repg2.jpg";
import repg3 from "../Assets/repg3.jpg";
import repg4 from "../Assets/repg4.jpg";
import repg5 from "../Assets/repg5.jpg";
// /import repg6 from "../Assets/repg6.jpg";
import repg7 from "../Assets/repg7.jpg";
import repg8 from "../Assets/repg8.jpg";
import repg9 from "../Assets/repg9.jpg";
import repg10 from "../Assets/repg10.jpg";
import benefit1 from "../Assets/benefits1.webp";
import benefit2 from "../Assets/benefits2.webp";
import benefit3 from "../Assets/benefits3.webp";
import using1 from "../Assets/using1.webp";
import using2 from "../Assets/using2.webp";
import using3 from "../Assets/using3.webp";
import bg from "../Assets/bgimg2.jpg"
import { Link } from "react-router-dom";
const HeroSection = () => {
  const recommendedPGs = [

    { id: 1, name: "Maitree Girls PG", price: "₹5,000", location: "Jagatpura Jaipur", rating: "5 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg1 },
    { id: 2, name: "Redfort PG", price: "₹10,000", location: "Jagatpura Jaipur", rating: "5 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg2 },
    { id: 3, name: "Mentor 365 Gurukul", price: "₹25,000", location: "SH 24", rating: "5 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg3 },
    { id: 4, name: "Skyline PG", price: "₹8,000", location: "Malviya Nagar Jaipur", rating: "4.5 ⭐", features: ["AC Rooms", "CCTV", "Laundry"], img: repg4 },
    { id: 5, name: "Elite PG", price: "₹12,000", location: "Vaishali Nagar Jaipur", rating: "4.8 ⭐", features: ["Wi-Fi", "Meals", "Power Backup"], img: repg5 },
    { id: 6, name: "Rekha Residency", price: "₹5,000", location: "363, Vardhman Nagar-A, Ajmer Road, Jaipur , Jaipur, Rajasthan, 302019", rating: "5 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg6 },
    { id: 7, name: "Ganesh Pg", price: "₹10,000", location: "VQ7H+5W5, Arjun Nagar, Jaipur, Rajasthan, 3020209057XXXXXX", rating: "4.5 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg7 },
    { id: 8, name: "Maitree Girls Pg", price: "₹25,000", location: "jagatpura jaipur, Jaipur, Rajasthan, 3020179772XXXXXX", rating: "3 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg8 },
    { id: 9, name: "Redfort Pg", price: "₹10,000", location: "jagatpura jaipur, Jaipur, Rajasthan, 3020179694XXXXXX", rating: "4.5 ⭐", features: ["AC Rooms", "CCTV", "Laundry"], img: repg9 },
    { id: 10, name: "Orovia P/1901", price: "₹5,000", location: "thane west , Thane, Maharashtra, 4006157666XXXXXX", rating: "2.8 ⭐", features: ["Wi-Fi", "Meals", "Power Backup"], img: repg10 },
  
  ];

  const[openfaq,setOpenfaq] =useState(null);


  const faqs = [
      {
          question:"1. What is a PG/Hostel Management System?",
          answer:"A PG/Hostel Management System, such asStayEase  Hostel/PG Management system, is a software designed to efficiently maintain and manage various tasks related to operating a hostel or paying guest (PG) accommodation.StayEase  encompasses features for streamlining police verifications, rent agreements, and other essential services at a competitive price point in the market.",
      },
      {
         question:"2. How does a PG/Hostel Management System benefit PG owners?",
          answer:"benefit PG owners? including centralized management of tenant information, streamlined record-keeping, automated payment reminders, and efficient communication channels with tenants. Additionally,StayEase  enhances operational efficiency and helps in creating a more professional and organized image for the PG property."
      },
      {
          question:"3. Can a PG/Hostel Management System track tenant payments?",
          answer:"Yes, a high-quality PG/Hostel Management System likeStayEase  has the capability to track tenant payments. It allows for easy monitoring of rental payments, overdue payments, and facilitates automated reminders to ensure timely and consistent cash flow for PG owners."
      },
      {
          question:"4. Is it possible to manage multiple PG/Hostel properties with a single system?",
          answer:"Definitely, a reliable PG/Hostel Management System likeStayEase  can efficiently manage multiple PG properties with a single integrated system. This centralized approach simplifies administrative tasks, reduces operational overheads, and provides a unified view of all properties for effective decision-making."
      },
          {
          question:"5. Can a PG/Hostel Management System handle maintenance requests?",
          answer:"A PG/Hostel Management System is fully equipped to handle maintenance requests, likeStayEase  enables tenants to submit maintenance requests online, allows PG owners to prioritize and track these requests, and enhances the overall maintenance process through streamlined communication and task management."
      },
      {
          question:"6. How much does a PG/Hostel Management System cost?",
          answer:"The cost of a PG/Hostel Management System can vary depending on factors like the size of your hostel, the number of rooms, the features and functionality you need, and the software provider. Some systems may charge a monthly subscription fee, while others may have a one-time setup cost. It is advisable to request quotes from different providers and compare their offerings before making a decision."
      },
      {
          question:"7. What are the main features of a PG/Hostel Management System?",
          answer:"The cost of a PG/Hostel Management System can vary depending on factors like the size of your hostel, the number of rooms, the features and functionality you need, and the software provider. Some systems may charge a monthly subscription fee, while others may have a one-time setup cost. It is advisable to request quotes from different providers and compare their offerings before making a decision."
      },
      {
          question:"8. Does a Hostel Management System support multiple locations?",
          answer:"PG/Hostel Management Systems likeStayEase  can support multiple locations, especially if they are part of a chain or have multiple branches. These systems offer centralized management, allowing hostel owners to access and control operations across different locations from a single dashboard. This streamlines administrative tasks and facilitates better coordination between multiple hostels."
      },
      {
          question:"9. What are property management services in India?",
          answer:"Property management services (BTRoomer) refer to professional services offered to property owners to assist them in finding and screening tenants, handling lease agreements. These services also include Maintenance and repairs Property managers handle routine maintenance, schedule repairs as needed, and ensure the property remains in good condition."
      },
      {
          question:"10. What are the benefits of hiring property management services?",
          answer:"Hiring property management services can provide several benefits, such as saving time and effort, maximizing rental income, ensuring efficient property maintenance, minimizing vacancies, handling tenant issues and disputes, and staying updated with local rental laws and regulations."
      }
  ]
  
  
  
  
  const toggleFAQS = (index) =>{
    setOpenfaq(openfaq === index ? null : index)
}

  return (
    <div className="bg-white font-sans">


      <main
        className="relative bg-gray-100 py-10 w-full  h-full px-6 md:px-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 bg-white bg-opacity-80 p-6 rounded-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Transforming PG Living</h1>
            <p className="text-lg text-gray-600 mb-6">From Hassle to Happiness</p>
            {/* <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-500">
              Explore Now
            </button> */}
                        <Link to="/pglist">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-500">
                Explore Now
              </button>
            </Link>

          </div>
        </div>
      </main>

      <section className="py-10 px-6 md:px-20 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">Explore</h2>
        <Link to="/pglist"><div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="group bg-white shadow-gray-500 rounded-lg p-4 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={explore3}
                alt="2409 PG Listing"
                className="rounded-lg mb-2  transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="font-semibold text-center">2409 PG Listing</p>
          </div>
          <div className="group bg-white shadow-lg rounded-lg p-4 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={explore}
                alt="703 Boys PG"
                className="rounded-lg mb-2 transform  group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="font-semibold text-center">703 Boys PG</p>
          </div>
          <div className="group bg-white shadow-lg rounded-lg p-4 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={explore2}
                alt="763 Girl PG"
                className="rounded-lg mb-2  transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="font-semibold text-center">763 Girl PG</p>
          </div>
          <div className="group bg-white shadow-lg rounded-lg p-4 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={explore1}
                alt="943 Co-living"
                className="rounded-lg mb-2  transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="font-semibold text-center">943 Co-living</p>
          </div>
        </div></Link>
      </section>

      <section className="py-10 px-2  md:px-20 bg-white">
      <Link to="/pglist">
        <h2 className="text-2xl font-bold text-center mb-6">Recommended PG</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {recommendedPGs.map((pg) => (
            <SwiperSlide key={pg.id}>
              <div className="bg-gray-50 shadow-lg rounded-lg ml-3 p-4 h-[400px] w-[300px] shadow-slate-600 mb-11 flex flex-col justify-evenly">
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={pg.img}
                    alt={pg.name}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold">{pg.name}</p>
                  <p className="font-bold text-indigo-600">{pg.price}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">{pg.rating} {pg.location}</p>
                <div className="flex space-x-2 mt-2">
                  {pg.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </Link>
      </section>
      <div className="bg-gray-50 font-sans">
      {/* Benefits for PG and Hostel Management */}
      <section className="py-10 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Benefits of UsingStayEase  for <span className="text-indigo-600">PG and Hostel Management</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={benefit1}
                alt="Icon 1"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">
              Ease of access to important information that the system provides.
            </h3>
            <p className="text-gray-600 text-center">
              With theStayEase  app for PG, property owners can quickly check and
              monitor all necessary data, such as due payments, receipts, guest
              information & empty rooms.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={benefit2}
                alt="Icon 2"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">
              The cloud-based property management system
            </h3>
            <p className="text-gray-600 text-center">
              It allows owners to manage their facilities from anywhere, at any
              time. This means that owners can keep track of their facility and
              guests even while on the move, providing added convenience and
              flexibility.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
              src={benefit3}
                alt="Icon 3"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">
              User-friendly interface of the system.
            </h3>
            <p className="text-gray-600 text-center">
              Both guests & owners can use the app for paying guests with ease,
              without requiring any technical skills or expertise. This makes
              the process of managing a hostel or PG much simpler and more
              efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits for PG Tenants */}
      <section className="py-10 px-6 md:px-20 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Benefits of UsingStayEase  for <span className="text-indigo-600">PG Tenants</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={using1}
                alt="Icon 4"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Find nearby PG</h3>
            <p className="text-gray-600 text-center">
              Explore local PG options: Affordable, Comfortable, Convenient.
              Find your perfect match with ease.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={using2}
                alt="Icon 5"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">
              Pay Rent through UPI and Net Banking
            </h3>
            <p className="text-gray-600 text-center">
              Pay your rent effortlessly via UPI and Net Banking for a smooth
              and hassle-free experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={using3}
                alt="Icon 5"
                className="h-16 w-16"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">
            Verified & Certified PGs
            </h3>
            <p className="text-gray-600 text-center">
            Discover verified & certified PGs near you. Safe, secure, and hassle-free booking!
            </p>
          </div>
        </div>
      </section>
    </div>
    <div className='w-full bg-gray-100 min-h-screen    '>
     
     <div className='w-full min-h-100vh bg-[#4D28D4] flex flex-col justify-center items-center gap-[20px] py-[50px] px-[50px]'>
      <h2 className='text-[white] md:text-[32px] sm:text-[30px] text-[28px] font-medium text-center'>Frequently asked questions</h2>
      <p className='md:text-[18px] sm:text-[17px] text-[16px] text-[white]'>Concise answers to common questions, providing clarity and understanding effortlessly.</p>
    </div>

        
        <div className='max-w-3xl mx-auto pt-[50px] px-5 mb-3 '>
            {
                faqs.map((faq,index)=> (
                    <div
                    key={index}
                    className='border-b border-gray-300 mb-5'
                    >
                        <button
                        className='w-full text-left flex justify-between items-center p-4 bg-white shadow-md hover:bg-gray-50 transition-all rounded'
                        onClick={()=> toggleFAQS(index)}
                        >

                        <span className='font-semibold text-gray-700 text-[14px]  sm:text-[18px]'>{faq.question}</span>   
                        <span className='text-gray-500'>
                            {openfaq === index ? "▲" : "▼"}
                            </span> 

                        </button>
                        {openfaq === index && (
                            <div className='p-4 bg-gray-50 text-gray-600 flex justify-center px-5'>
                                {faq.answer}
                            </div>
                        )}

                    </div>
                ))
            }
        </div>
     

    </div>
    <br/>
    <br/>
  
    </div>
  );
};

export default HeroSection;
