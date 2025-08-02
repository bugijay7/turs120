import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/report-bg.jpg'; // make sure path is correct

function MissionPreview() {
  const cardData = [
    { title: 'Worship', description: 'Praise and worship gatherings' },
    { title: 'Prayer', description: 'Intercessory prayer meetings' },
    { title: 'Discipleship', description: 'Growing in faith and truth' },
    { title: 'Outreach', description: 'Serving the community' },
  ];

  return (
    <section className="bg-transparent px-6 py-16 max-w-[1200px] mx-auto space-y-16">

     {/* Section One: Four Cards - no gaps */}
<div className="flex flex-row flex-wrap gap-0">
  {cardData.map((card, index) => (
    <div
      key={index}
      className="bg-gray-600 text-white w-[45vw] h-[45vw] min-w-[140px] max-w-[200px] flex flex-col items-start justify-center shadow-md p-2 sm:p-4"
      style={{ margin: 0 }}
    >
      <h4 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">{card.title}</h4>
      <p className="text-xs sm:text-sm text-left">{card.description}</p>
    </div>
  ))}
</div>


      {/* Section Two: Mission Statement */}
      <div className="flex flex-row items-start flex-wrap justify-between max-w-[1400px] text-left">
        {/* Left section */}
        <div className="text-left">
          <p className="text-sm text-gray-600">WELCOME</p>
          <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
        </div>

        {/* Right section */}
        <p className="text-sm text-gray-700 max-w-xl text-left leading-relaxed">
          At The Upper Room, our mission is to build a house of prayer for all nations — a community deeply rooted in worship, love, and the Word of God.
          We exist to glorify Jesus Christ by living out His teachings and making disciples who passionately pursue His presence and purpose.
          Through fellowship and service, we aim to impact lives and transform communities with the love of Christ.
        </p>
      </div>

      {/* Section Three: Background Image with Text and Button */}
      <div
        className="relative rounded overflow-hidden text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-12 space-y-4 text-center">
          <h3 className="text-3xl font-bold">Read Our Latest Report</h3>
          <p className="text-lg">Be updated with our blog</p>
          <Link to="/blog" className="btn btn-outline mt-2">
            Visit Blog
          </Link>
        </div>
      </div>

    </section>
  );
}

export default MissionPreview;
