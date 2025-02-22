import React, { useState } from 'react'

import img2 from "../Assets/Aboutcontent.webp"


const About = () => {


const[openfaq,setOpenfaq] =useState(null);


const faqs = [
    {
        question:"What isStayEase  and how it helps in managing PGs and Hostels?",
        answer:"BTRoomer is a handy paying guest (PG) and property management software. It offers real-time data to property owners, including payment details, receipts, visitor information, and occupancy status of the property. It's an invaluable tool for efficient property management.",
    },
    {
       question:"How doesStayEase  ensure real-time visibility and transparency?",
        answer:"BTRoomer, your friendly PG and hostel management software, offers you complete transparency with real-time visibility. This guarantees instant access to information from any location at any moment, keeping you fully updated on your hostels and PGs' management and supervision."
    },
    {
        question:"CanStayEase  be adjusted to meet unique customer needs?",
        answer:"Definitely! With PG Hostel Management Software, you have the freedom to customizeStayEase  to suit your unique needs and preferences. This adaptability enables our clients to shape the software in a way that best serves their specific requirements, offering a tailored solution for effective management."
    },
    {
        question:"How isStayEase  different from other hostel and PG management systems?",
        answer:"Absolutely, a trustworthy Paying Guest Hostel Management Software such asStayEase  has the capability to proficiently handle numerous PG properties using one unified system. This consolidated method eases administrative duties, cuts down on operational expenses, and offers a comprehensive overview of all properties for informed decision-making. It's all about efficiency and ease!"
    },
        {
        question:"How doesStayEase  simplify the overall experience for hostel and PG management?",
        answer:"BTRoomer is your one-stop solution for managing and overseeing hostels and PGs, freeing you from the hassle of intricate paperwork. This user-friendly Paying Guest Hostel Management Software provides a seamless experience, allowing you to concentrate on other business elements as it guarantees smooth operations."
    },
   
]





const toggleFAQS = (index) =>{
    setOpenfaq(openfaq === index ? null : index)
}





  return (
    <div className='w-full bg-gray-100 min-h-screen    '>
          <div className="bg-gray-50 flex flex-col items-center py-12 px-4 md:px-8">
      
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        <div className="mb-6 md:mb-0 md:mr-8">
          <img
            src={img2}
            alt="Score Ticker Display"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center md:text-left">
        <h1 className="text-xl font-bold text-black lg:pt-[40px] mb-6 ">
       StayEase  (StayEase SOLUTIONS LLP) is the all-in-one platform that gives an
      </h1>
      <h1 className="text-xl font-bold text-black lg:pt- mb-6 ">
      elite service to manage and administer your PGs and Hostels
      </h1>
      elite service to manage and administer your PGs and Hostels
      
        </div>
      
      </div>
      <p className="text-gray-600 text-xl lg:pt-[80px] ">
         It’s a complete cloud- based solution developed by ZUCOL Group that can be accessed anywhere anytime.StayEase  indulges an effortless experience for management and supervision of hostels and PGs. The App features have been designed in accordance with the customer preferences & requirements which gives our clients the liberty from all the complex paperwork.
          </p>
    </div>


     
     {/* <div className='w-full min-h-100vh bg-[#4D28D4] flex flex-col justify-center items-center gap-[20px] py-[50px] px-[50px]'>
      <h2 className='text-[white] md:text-[32px] sm:text-[30px] text-[28px] font-medium text-center'>Frequently asked questions</h2>
      <p className='md:text-[18px] sm:text-[17px] text-[16px] text-[white]'>Concise answers to common questions, providing clarity and understanding effortlessly.</p>
    </div> */}
 
        
        <div className='max-w-3xl mx-auto px-5 mb-3 pt-[50px] '>
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
  )
}

export default About