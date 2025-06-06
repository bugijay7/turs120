import React from 'react';
import prayerCellImg from '../../assets/ministries/cells.jpeg'; // replace with a more specific image if available

function FeaturedMinistries() {
  return (
    <section className="py-16 px-6 bg-black h-[80vh]">
      <div className="flex max-w-[1200px] mx-auto h-full bg-transparent shadow-lg rounded overflow-hidden">

        {/* Section 1: Image + LABELS */}
        <div
          className="w-1/3 relative flex justify-center items-center text-white"
          style={{
            backgroundImage: `url(${prayerCellImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-glass text-black p-4 rounded-r-md shadow">
            <h2 className="text-sm font-bold">COMMUNITY</h2>
            <h2 className="text-sm font-bold">PRAYER</h2>
          </div>
        </div>

        {/* Section 2: Title */}
        <div className="w-1/3 p-6 flex flex-col justify-between">
          <h3 className="text-5xl font-bold text-white mb-2">Prayer Cell Groups</h3>
          <p className="text-sm text-white font-semibold">Building Spiritual Families</p>
        </div>

        {/* Section 3: Description + CTA */}
        <div className="w-1/3 p-6 flex flex-col justify-between">
          <p className="text-sm text-white mb-4">
            Our Prayer Cell Groups are the heartbeat of connection and intercession in our church. 
            Small, home-based gatherings that meet weekly for prayer, Bible study, and fellowship, these groups provide a safe space to grow spiritually, build deep relationships, and support one another in everyday life.
            Whether you're new or seasoned in faith, there's a group for you to belong and thrive in.
          </p>

          <a
            href="#"
            className="btn btn-outline self-start text-white border-white border px-4 py-2 hover:bg-white hover:text-black transition duration-300"
          >
            Join a Group
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMinistries;
