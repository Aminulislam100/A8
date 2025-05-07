import React from 'react';
import Layer2 from '/Lawyer2.PNG'

const Lawyer2 = () => {
    return (
        <div>
            <div className="text-center bg-white rounded-3xl mb-8 py-20 xl:px-40 mx-4 xl:mx-40">
        <p className="font-extrabold text-3xl mb-4">Lawyer's Profile Details</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-md mx-4 xl:mx-40 my-10 p-10">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Image Section */}
        <div className="col-span-12 md:col-span-3 flex justify-center">
          <img
            src={Layer2}
            alt="Awlad Hossain"
            className="rounded-xl w-48 h-48 object-cover bg-gray-200"
          />
        </div>

        {/* Info Section */}
        <div className="col-span-12 md:col-span-9 space-y-4">
          {/* Experience badge */}
          <div>
            <span className="text-xs text-blue-600 bg-blue-100 font-medium px-3 py-1 rounded-full">
              5+ Years Experience
            </span>
          </div>

          {/* Name */}
          <p className="text-2xl font-bold text-black">Michael Brown</p>

          {/* Title and License */}
          <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
            <span>Dermatologist</span>
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m0-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              License No: D2345678
            </span>
          </div>

          {/* Availability */}
          <div className="text-sm">
            <span className="font-medium mr-2">Availability:</span>
            {["Sunday", "Monday", "Thursday"].map((day) => (
              <span
                key={day}
                className="text-[#FFA000] bg-[#FFA000]/10 border border-[#FFA000]/20 rounded-full px-3 py-1 text-xs font-medium mr-2"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Fee */}
          <div className="text-sm">
            <span className="font-medium mr-2">Consultation Fee:</span>
            <span className="text-green-600 font-bold">Taka : 273</span>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Lawyer2;