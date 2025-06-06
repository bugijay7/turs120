import React from 'react';
import missionImg from '../../assets/mission.jpeg'; // adjust the path as needed

function Mission() {
  return (
    <div className="max-w-[1200px] mx-auto px-1">
  

    <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 bg-white text-gray-800">
      {/* Text Section */}
      <div className="md:w-2/3 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-lg">
          At The Upper Room Sanctuary, our mission is to glorify God by
          nurturing a community of believers who live out the teachings of Jesus
          Christ. We are committed to making disciples, building faith,
          supporting families, and serving our community through love and truth.
        </p>
        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
          “Go therefore and make disciples of all nations, baptizing them in the
          name of the Father and of the Son and of the Holy Spirit.” <br />
          <span className="block mt-2 font-semibold">— Matthew 28:19 (ESV)</span>
        </blockquote>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3">
        <img
          src={missionImg}
          alt="Church mission"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
    </div>
  );
}

export default Mission;
