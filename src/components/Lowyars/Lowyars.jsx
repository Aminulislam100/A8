import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Lowyars = () =>{ 
    const [showAll, setShowAll] = useState(false);
    const [layers, setLayers] = useState([]);
    
      useEffect(() => {
        fetch('/layers.json')
          .then((response) => response.json())
          .then((data) => setLayers(data.data))
          .catch((error) => console.error('Error fetching lawyer data:', error));
      }, []);
    
      const displayedLawyers = showAll ? layers : layers.slice(0, 6);


    return (
        <div>
            <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Best Lawyers</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-7/12 gap-6  mx-auto">
          {displayedLawyers.length > 0 ? (
            displayedLawyers.map((lawyer, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-4 h-45 flex border">
                <img src={lawyer.Image} alt="Lawyer Icon" className="rounded-full w-26 h-26 mb-4" />
                <div>
                  <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                    Available
                  </span>
                  <span className="inline-block mt-2 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                    {lawyer.Experience} Experience
                  </span>
                  <h3 className="font-semibold text-lg">{lawyer.Name}</h3>
                  <p className="text-sm text-gray-600">{lawyer.title}</p>
                  <p className="text-sm text-gray-500">{lawyer.Speciality}</p>
                  <p className="text-sm text-gray-500">License No: {lawyer.LicenseNumber}</p>

                  <Link
          to={`lawyer/${lawyer.id}`}
          className="text-[20px] font-bold text-[#176AE5] border-2 border-[#176AE5] rounded-full w-full block py-3 hover:bg-[#176AE5] hover:text-white duration-300 text-center"
        >
          View Details
        </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading lawyers...</p>
          )}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
          >
            {showAll ? 'Show Less' : 'View All Lawyers'}
          </button>
        </div>
      </section>
        </div>
    );
};

export default Lowyars;