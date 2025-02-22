import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between items-center py-4 px-6 shadow-md">
        {/* Logo */}
        <Link to="/"><div className="text-xl font-bold text-indigo-600">StayEase </div></Link>

        {/* Navigation for Large Screens - Centered */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-6">
        <Link to="/">
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Home
          </a>
          </Link>
          <Link to="/About">
          <a href="#about" className="text-gray-600 hover:text-indigo-600">
            About
          </a>
          </Link>
          <Link to="/pgList">
          <a href="#find-my-pg" className="text-gray-600 hover:text-indigo-600">
            Find My PG
          </a>
          </Link>
          {/* <Link to="/pgList">
          <a href="#pg-owners" className="text-gray-600 hover:text-indigo-600">
            For PG Owners
          </a>
          </Link> */}
          <Link to="/BlogPage">
          <a href="#blog" className="text-gray-600 hover:text-indigo-600">
            Blog
          </a>
          </Link>
        </nav>

        {/* Buttons (Right Side) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to='/Login'>
          <a href="#signup" className="text-gray-600 hover:text-indigo-600">
            Sign Up
          </a></Link>
          <Link to='/ContactForm'>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            Schedule a Demo
          </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </header>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6">
          <button
            className="absolute top-6 right-6 text-gray-600 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
          <Link to="/">
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Home
          </a>
          </Link>
          <Link to="/About">
          <a href="#about" className="text-gray-600 hover:text-indigo-600">
            About
          </a>
          </Link>
          <Link to="/pgList">
          <a href="#find-my-pg" className="text-gray-600 hover:text-indigo-600">
            Find My PG
          </a>
          </Link>
          {/* <Link to="/pgList">
          <a href="#pg-owners" className="text-gray-600 hover:text-indigo-600">
            For PG Owners
          </a>
          </Link> */}
          <a href="#blog" className="text-2xl font-bold text-gray-900">
            Blog
          </a>
          <a href="#contact" className="text-2xl font-bold text-gray-900">
            Contact us
          </a>
          <Link to='/Login'>
          <a href="#signup" className="text-gray-600 hover:text-indigo-600">
            Sign Up
          </a></Link>
          <Link to='/ContactForm'>
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            Schedule a Demo
          </button>
          </Link>
        </div>
      )}

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-16"></div>
    </div>
  );
}

export default Navbar;
