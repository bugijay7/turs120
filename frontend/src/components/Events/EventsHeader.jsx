import React from 'react';
import eventHero from '../../assets/event-bg.jpeg'; // Replace with your own image

function EventsHeader() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-[75vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={eventHero}
            alt="Church Event"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Don't Miss Our Upcoming Events!</h1>
            <p className="py-6">
              Stay engaged with spirit-filled gatherings, youth activities, community outreach,
              worship nights, and more. There's something for every member of the family to grow and serve.
            </p>
            <button className="btn btn-primary">Explore Events</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Midweek & Monthly Services</h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Morning Devotion</h3>
              <p className="text-gray-600">Weekdays 7 - 8AM (Online)</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Monday Night Prayers</h3>
              <p className="text-gray-600">Every Monday from 6:30 PM (All Campuses & Online)</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Bible Marathon</h3>
              <p className="text-gray-600">
                Every first week of the month, Tuesday to Friday from 6:30 PM (All Campuses & Online)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Kesha</h3>
              <p className="text-gray-600">Every last Friday of the month (Innercore Campus & Online)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsHeader;
