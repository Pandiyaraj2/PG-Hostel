import React from "react";
import blog1 from "../Assets/coliving.jpg";
import blog2 from "../Assets/blog2.jpg";
import blog3 from "../Assets/blog3.jpg";
import blog4 from "../Assets/blog4.jpg";
import blog5 from "../Assets/blog5.jpg";
import blog6 from "../Assets/blog6.jpg";
import blog7 from "../Assets/blog7.jpg";
import blog8 from "../Assets/blog8.jpg";
import blog9 from "../Assets/blog9.jpg";
import blog10 from "../Assets/blog11.jpg";
import blog11 from "../Assets/blog12.jpg";
import blog12 from "../Assets/blog13.jpg";
import blog13 from "../Assets/blog13.jpg";


const BlogPage = () => {
  const blogs = [
    {
      title: "Find Your Ideal Coliving in Gurugram with BTRoomer",
      date: "13-01-2025",
      image: blog1,
      link: "#",
    },
    {
      title: "Why Choose a Luxury PG in Noida? Benefits and Top Choices",
      date: "11-07-2024",
      image: blog2,
      link: "#",
    },
    {
      title: "Budget-Friendly PGs in Pune: How to Find Affordable Accommodation",
      date: "11-07-2024",
      image: blog3,
      link: "#",
    },
    {
      title: "How a Paying Guest Management System Can Revolutionize Your Business?",
      date: "21-06-2024",
      image: blog4,
      link: "#",
    },
    {
      title: "Explore the Best PG in Sector 45 Gurgaon: A Comprehensive Guide",
      date: "21-06-2024",
      image: blog5,
      link: "#",
    },
    {
      title: "Transforming Hospitality: The Power of Professional Guest House Management",
      date: "21-06-2024",
      image: blog6,
      link: "#",
    },
    {
      title: "Top Tips for Renting a Room in Gurgaon: What You Need to Know",
      date: "21-06-2024",
      image: blog7,
      link: "#",
    },
    {
      title: "Exploring the Benefits of Co-Living PGs in Delhi for Young Professionals",
      date: "29-05-2024",
      image: blog8,
      link: "#",
    },
    {
      title: "Btroomer a Property Management Software: Key Features to Look For",
      date: "29-05-2024",
      image: blog9,
      link: "#",
    },
    {
      title: "Efficient Rent Collection and Expense Management Software for Owners",
      date: "29-05-2024",
      image: blog10,
      link: "#",
    },
    {
      title: "Top 10 PG Accommodation in Jaipur for Students",
      date: "29-05-2024",
      image: blog11,
      link: "#",
    },
    {
      title: "Why Should You Invest in a Hostel Management System?",
      date: "26-04-2024",
      image: blog12,
      link: "#",
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col hover:shadow-xl transition-shadow"
          >
            <div
              className="h-80 bg-cover bg-center rounded-xl mb-4 transform group-hover:scale-300 transition-transform duration-600"
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
            {/* <a
              href={blog.link}
              className="mt-auto bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Read more
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
