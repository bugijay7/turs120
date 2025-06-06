import React from 'react';
import eventImg from '../../assets/featured-event.jpeg'; // Replace with your actual image path

function FeaturedEvents() {
  return (
    <div className="py-16 px-4 md:px-20 bg-white-50">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Event</h2>
      <div className="flex flex-col lg:flex-row items-center gap-12 bg-orange-500 shadow-xl rounded-xl overflow-hidden">
        <img
          src={eventImg}
          alt="Featured Event"
          className="w-full lg:w-1/2 h-80 object-cover"
        />
        <div className="p-8 lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-2">Upper Room Annual Worship Encounter</h3>
          <p className="text-sm text-gray-500 mb-4">September 20–22, 2025</p>
          <p className="text-gray-700 mb-6">
            Join the Upper Room Sanctuary family for a powerful 3-day worship experience filled with
            passionate praise, sound teaching, and deep spiritual renewal. Come and encounter God's presence like never before.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedEvents;
