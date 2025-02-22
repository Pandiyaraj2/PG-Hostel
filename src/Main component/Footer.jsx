import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="bg-black text-white pt-[50px] py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            {[
            
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Find My Hostel", path: "/Find" },
    { name: "Blog", path: "/Blog" },
    { name: "Contact Us", path: "/Contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Cancellation Refund Policy", path: "/refund-policy" }
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-gray-400 hover:text-white transition"
                >
                    {link.name}
                 
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Established Centre */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Established Centre</h3>
          <ul className="space-y-2">
            {[
              "Spaze IT Park, Gurugram",
              "AIPL Business Club Sector 62, Gurugram",
              "Mangalam Signature Tower, Jaipur",
              "Ganga Heights, Jaipur",
              "Panchashil Park, Pune",
              "EN Block, Sector V, Bidhannagar, Kolkata",
              "Savitri Empire, Indore",
              "Station St E, United Kingdom",
            ].map((center, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span>📍</span>
                <span className="text-gray-400 hover:text-white transition">
                  {center}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Brands */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
          <ul className="space-y-2">
            {[
              "LOCUS RAGS",
              "BTHAWK",
              "BTRESTRO",
              "THE DESIGN TRIP",
              "BTCAMPUS",
              "PARMARTHAM",
              "BTPoint",
              "KAPISH",
            ].map((brand, index) => (
              <li key={index}>
                <span className="text-gray-400 hover:text-white transition">
                  {brand}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 StayEase  Design with ❤️ by Pandiyaraj.D
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer