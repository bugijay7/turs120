import React from 'react';
import heroBg from '../../assets/hero-bg.jpg';
import EventsPreview from './EventsPreview';

function Hero() {
  return (
    <div className="relative">
      <div
        className="hero relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          height: '100vh',
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>

        <div className="hero-content text-neutral-content text-left px-4">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Welcome to The Upper Room
            </h1>

            <div className="mb-8 p-4 bg-white bg-opacity-10 rounded shadow-md border-l-4 border-primary">
              <p className="italic text-md">
                "They all joined together constantly in prayer, along with the women and Mary the mother of Jesus, and with his brothers." <br />
                <span className="font-semibold">— Acts 1:14 (NIV)</span>
              </p>
            </div>

            <button className="btn btn-secondary px-8">Join Us This Sunday</button>
          </div>
        </div>

        {/* Positioned at bottom-left */}
        <div className="absolute bottom-4 left-4">
          <EventsPreview />
        </div>
      </div>
    </div>
  );
}

export default Hero;   
