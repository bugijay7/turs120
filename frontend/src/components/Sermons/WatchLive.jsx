import React from 'react';
import livestreamBg from '../../assets/livestream-bg.jpeg'; // Replace with your actual background image

function WatchLive() {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 px-6"
      style={{ backgroundImage: `url(${livestreamBg})` }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Join Us Live</h2>
        <p className="mb-6 text-lg">
          Experience the presence of God wherever you are. Join The Upper Room Sanctuary for a live worship service, teaching, and fellowship.
        </p>
        <a
          href="https://www.youtube.com/@TheUpperRoomSanctuary" // replace with your live stream link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300"
        >
          Watch Live
        </a>
      </div>
    </div>
  );
}

export default WatchLive;
