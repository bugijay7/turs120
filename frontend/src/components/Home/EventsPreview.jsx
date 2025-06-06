import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this is enabled in your app

function EventsPreview() {
  return (
    <section className="  bg-transparent">
      <div className="max-w-3xl mx-auto text-center">
        
        <div className="flex items-center bg-base-100 w-[500px] h-[130px] mx-auto shadow-md rounded overflow-hidden">
          {/* Left Section: Vertical "FEATURED" */}
          <div className="flex-shrink-0 w-8 h-full flex items-right justify-center  text-gray-500  rotate-180 [writing-mode:vertical-rl]">
            FEATURED
          </div>

          {/* Middle Section: Event Info */}
          <div className="flex-1 text-left px-4">
            <h3 className="text-lg font-bold mb-2">UPCOMING EVENTS</h3>
            <p className="text-md">Prayer Night</p>
          </div>

          {/* Right Section: Arrow link */}
          <div className="flex-shrink-0 pr-4">
            <Link to="/events" className="text-2xl text-primary hover:underline">
              →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;
