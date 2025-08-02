import React from 'react';
import prayerCellImg from '../../assets/ministries/cells.jpeg';

function FeaturedMinistries() {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-[1200px] mx-auto bg-transparent shadow-lg rounded overflow-hidden flex flex-col md:flex-row h-auto md:h-[80vh]">

        {/* Section 1: Image + LABELS */}
        <div
          className="relative w-full md:w-1/3 h-[300px] md:h-auto flex justify-center items-center text-white"
          style={{
            backgroundImage: `url(${prayerCellImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-white bg-opacity-80 text-black p-3 rounded-r-md shadow">
            <h2 className="text-xs md:text-sm font-bold">COMMUNITY</h2>
            <h2 className="text-xs md:text-sm font-bold">PRAYER</h2>
          </div>
        </div>

        {/* Section 2: Title */}
        <div className="w-full md:w-1/3 p-4 md:p-6 flex flex-col justify-center bg-black">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">Prayer Cell Groups</h3>
          <p className="text-sm md:text-base text-white font-semibold">Building Spiritual Families</p>
        </div>

        {/* Section 3: Description + CTA */}
        <div className="w-full md:w-1/3 p-4 md:p-6 flex flex-col justify-between bg-black">
          <p className="text-sm md:text-base text-white mb-4">
            Our Prayer Cell Groups are the heartbeat of connection and intercession in our church. 
            Small, home-based gatherings that meet weekly for prayer, Bible study, and fellowship. These groups provide a safe space to grow spiritually, build deep relationships, and support one another.
          </p>

          <a
            href="#"
            className="btn btn-outline self-start text-white border-white border px-4 py-2 mt-2 hover:bg-white hover:text-black transition duration-300"
          >
            Join a Group
          </a>
        </div>

      </div>
    </section>
  );
}

export default FeaturedMinistries;
