import React from 'react';

function VolunteerCTA() {
  return (
    <div className="bg-white py-16 px-6 text-center rounded-lg my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
        Join Us in Making a Difference
      </h2>
      <p className="text-lg text-orange-700 mb-6 max-w-2xl mx-auto">
        Your time and skills can bring light to someone's life. Become a part of our volunteer community and help us serve with love, compassion, and purpose.
      </p>
      <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300">
        Sign Up to Volunteer
      </button>
    </div>
  );
}

export default VolunteerCTA;
