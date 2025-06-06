import React from 'react';
import visionImage from '../../assets/vision.jpeg'; // Update the path as needed

function Vision() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image on the left */}
        <div className="w-full md:w-1/2">
          <img
            src={visionImage}
            alt="Vision"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text on the right */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            At The Upper Room Sanctuary, our vision is to be a place where the power of the Holy Spirit moves freely, transforming lives and equipping believers to walk in their divine purpose. We aim to build a Christ-centered community rooted in prayer, worship, and discipleship, reaching generations for Jesus Christ.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
