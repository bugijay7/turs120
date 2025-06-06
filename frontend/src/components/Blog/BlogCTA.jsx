import React from 'react';
import { FaChurch, FaEnvelope, FaArrowRight } from 'react-icons/fa';

function BlogCTA() {
  return (
    <div className="max-w-[1200px] mx-auto p-4  bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-12 px-6 text-center rounded-lg mt-10 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Stay Connected with The Upper Room Sanctuary Church
      </h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Be the first to read powerful messages, testimonies, and reflections that inspire. Join our mailing list or attend one of our life-changing services.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href="#services"
          className="bg-white text-indigo-900 px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-gray-200 transition"
        >
          <FaChurch /> Join a Service
        </a>
        <a
          href="#subscribe"
          className="border border-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-white hover:text-indigo-900 transition"
        >
          <FaEnvelope /> Subscribe to Blog
        </a>
      </div>
    </div>
  );
}

export default BlogCTA;
