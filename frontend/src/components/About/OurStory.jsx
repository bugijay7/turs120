import React from 'react';
import SectionHeading from '../SectionHeading';
import churchImage from '../../assets/our-story.jpeg'; // Make sure you have an image at this path

function OurStory() {
  return (
    <section className="mt-24 px-4 py-10 bg-white ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img 
          src={churchImage} 
          alt="The Upper Room Sanctuary" 
          className="w-full md:w-[40%] h-[300px] rounded-lg shadow-md object-cover"
        />

        <div className="md:w-1/2">
          <SectionHeading>Our Story</SectionHeading>
          <p className="text-gray-700 text-sm leading-relaxed">
            The Upper Room Sanctuary began with a vision for revival and restoration. What started as a small group gathering in a living room has grown into a thriving, Spirit-led community committed to worship, discipleship, and outreach.
            <br /><br />
            Founded on prayer and fueled by the Holy Spirit, the church has become a beacon of hope in the city. Our journey is marked by miracles, transformed lives, and a deep hunger for God’s presence. Every gathering is an opportunity to encounter Jesus and walk in purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
