import React from 'react';
import heroBg from '../../assets/hero-bg.jpg';

function LatestSermon() {
  return (
    <section className="py-10 px-4 bg-black">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto h-auto md:h-[80vh] bg-transparent shadow-lg rounded overflow-hidden">

        {/* Section 1: Image + PREVIOUS/NEXT */}
        <div
          className="w-full md:w-1/3 relative flex justify-center items-center text-white h-64 md:h-auto"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-white bg-opacity-70 text-black p-4 rounded-r-md shadow">
            <h2 className="text-sm font-bold">PREVIOUS</h2>
            <h2 className="text-sm font-bold">NEXT</h2>
          </div>
        </div>

        {/* Section 2: Title + Date */}
        <div className="w-full md:w-1/3 p-6 flex flex-col justify-between bg-black">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Walking in the Spirit</h3>
          <p className="text-sm text-white font-semibold">May 25, 2025</p>
        </div>

        {/* Section 3: Description + Button */}
        <div className="w-full md:w-1/3 p-6 flex flex-col justify-between bg-black">
          <p className="text-sm text-white mb-4">
            In this powerful message, Pastor James unpacks Galatians 5 and the transformative walk of a Spirit-led life. 
            He explores how the fruit of the Spirit is not merely a checklist of Christian behavior, but the natural outcome of living in close relationship with the Holy Spirit. 
            Drawing deep insight from Paul’s letter, he challenges believers to move beyond legalism and into freedom, where grace empowers obedience. 
            Through real-life examples and practical application, Pastor James invites us to yield daily to the Spirit’s leading — experiencing peace, joy, and purpose like never before.
          </p>

          <a
            href="https://www.youtube.com/watch?v=3g0UgzwEgck"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

export default LatestSermon;
