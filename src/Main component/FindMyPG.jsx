

import React, { useState } from "react";
import { Link } from "react-router-dom";
import repg1 from "../Assets/repg1.jpg";
import repg2 from "../Assets/repg2.jpg";
import repg3 from "../Assets/repg3.jpg";
import repg4 from "../Assets/repg4.jpg";
import repg5 from "../Assets/repg5.jpg";
import repg6 from "../Assets/repg6.jpg";
import repg7 from "../Assets/repg7.jpg";
import repg8 from "../Assets/repg8.jpg";
import repg9 from "../Assets/repg9.jpg";
import repg10 from "../Assets/repg10.jpg";
import repg11 from "../Assets/repg11.jpg";
import repg12 from "../Assets/repg12.jpg";
import { useParams } from "react-router-dom";

const properties = [
  {id:1, name: "Trinity Girls Hostel", location: "34, Panchsheel Colony", amenities: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], price: 5000, rating: 5, type: "Girls",img: repg1,path:'/pgdetails/id' },
  { id:2,name: "Teja", location: "PG", amenities: ["Wi-Fi", "Hygienic Food", "CCTV"], price: 5000, rating: 3, type: "Boys",img: repg2,path:'/PGTeja/id' },
  { id:3,name: "Unique House Girls Pg", location: "Shakurpur Delhi", amenities: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], price: 5000, rating: 5, type: "Girls" ,img: repg3,path:'/pgUniqueHouse/id'},
  { id:4,name: "Pramar Pg 2", location: "JP5F+854, Hinjawadi", amenities: ["Laundry/Washing Machine", "CCTV", "R.O. Water"], price: 10000, rating: 4, type: "Co-living",img: repg4 ,path:'/pgPramar/id'},
  { id:5,name: "Raga", location: "Santacruz Fabrication", amenities: ["Daily Newspaper", "Power Backup", "Wi-Fi"], price: 10000, rating: 4, type: "Boys",img: repg5,path:'/pgRaga/id' },
  { id:6,name: "Green House", location: "Near Park Avenue", amenities: ["Hygienic Food", "R.O. Water", "Fully Furnished"], price: 5000, rating: 2, type: "Co-living",img: repg6 ,path:'/pgGreenHouse/id'},
  {id:7, name: "Pearl Hostel", location: "10th Street", amenities: ["Wi-Fi", "Fully Furnished", "Power Backup"], price: 5000, rating: 4, type: "Girls",img: repg7,path:'/pgPearl/id' },
  { id:8,name: "Lotus Residency", location: "MG Road", amenities: ["CCTV", "Wi-Fi", "R.O. Water"], price: 5000, rating: 3, type: "Boys" ,img: repg8,path:'/pgLotusHostel/id'},
  { id:8,name: "Sunrise PG", location: "Hinjawadi Phase 1", amenities: ["Hygienic Food", "Daily Newspaper", "Wi-Fi"], price: 5000, rating: 4, type: "Co-living",img: repg9,path:'/pgSunrise/id' },
  {id:10, name: "Mentro PG", location: "Hinjawadi Phase 1", amenities: ["Hygienic Food", "Daily Newspaper", "Wi-Fi"], price: 25000, rating: 5, type: "Boys",img: repg10,path:'/pgmentro/id' },
  { id:11,name: "Orovia PG", location: "Hinjawadi Phase 1", amenities: ["Hygienic Food", "Daily Newspaper", "Wi-Fi"], price: 5000, rating: 4, type: "Girls",img: repg11,path:'/pgorovia/id' },
  { id:12,name: "Vrindavan & Blessings Pg", location: "Near Park Avenue", amenities: ["Hygienic Food", "R.O. Water", "Fully Furnished"], price: 5000, rating: 2, type: "Co-living",img: repg12,path:'/pgVrindavan/id'  },
]

export default function PGList() {
  const { id } = useParams();
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [filters, setFilters] = useState({ type: "All" });

  const handleLoadMore = () => {
    setVisibleProperties((prev) => Math.min(prev + 3, filteredProperties.length));
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, type: e.target.value });
  };

  const filteredProperties = properties.filter(
    (property) => filters.type === "All" || property.type === filters.type
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Properties</h1>
      <p className="text-gray-600 mb-4">{`Available properties ${filteredProperties.length} and currently showcasing ${Math.min(visibleProperties, filteredProperties.length)}.`}</p>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Filter by Type:</label>
        <select
          value={filters.type}
          onChange={handleFilterChange}
          className="p-2 border rounded w-full text-lg font-bold text-blue-600 sm:w-64"
        >
          <option value="All">All</option>
          <option value="Girls">Girls</option>
          <option value="Boys">Boys</option>
          <option value="Co-living">Co-living</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.slice(0, visibleProperties).map((property, index) => (
          
          <div key={index} className="border rounded-lg shadow-md p-4">
             <img
                src={property.img}
                alt={property.name}
                className="w-[400px] h-[250px] m object-cover  object-center group-hover:scale-110 justify-center items-center transition-transform duration-300"
              />
            <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <div className="mb-2 flex flex-wrap gap-2">
              {property.amenities.map((amenity, i) => (
               
                
                   <span key={i} className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded">
                 {amenity}
               
                </span>
               
                
                
               
              ))}
                
            </div>
    
            <p className="text-blue-500 font-bold mb-2">Starting from: ₹{property.price}</p>
            <p className="text-yellow-500">{`⭐`.repeat(property.rating)}</p>
            {/* <Link to={`/${properties.path}/${properties.id}`} className="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 rounded">
              View Details
            </Link> */}
            <Link to={`${property.path}`}>
            <button className="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 rounded">
  View Details
</button>
</Link>
            

          </div>
        ))}
      </div>

      {visibleProperties < filteredProperties.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
      <div> {id}</div>
    </div>
  );
}
