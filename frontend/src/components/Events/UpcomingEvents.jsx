import React from 'react';
import event1 from '../../assets/event3.jpg';
import event2 from '../../assets/event1.jpg';
import event3 from '../../assets/event2.jpg';

const events = [
  {
    id: 1,
    image: event1,
    title: 'Youth Worship Night',
    date: 'Saturday, June 8, 2025',
    description: 'An evening of praise, dance, and spoken word for the youth to encounter God deeply.',
  },
  {
    id: 2,
    image: event2,
    title: 'Community Clean-Up',
    date: 'Sunday, June 15, 2025',
    description: 'Join us in serving Umoja estate with a church-led clean-up and food drive.',
  },
  {
    id: 3,
    image: event3,
    title: 'Women’s Prayer Breakfast',
    date: 'Saturday, June 22, 2025',
    description: 'A morning of prayer, fellowship, and testimonies led by the Women’s Ministry.',
  },
];

function UpcomingEvents() {
  return (
  <div className="py-12 px-4 md:px-16 bg-white text-gray-800">
  <h2 className="text-4xl font-bold text-center mb-10">UPCOMING EVENTS</h2>

  <div className="max-w-screen-xl mx-auto">
    <div className="grid gap-6 md:grid-cols-3">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-base-100 shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105"
        >
          <img src={event.image} alt={event.title} className="w-full h-[400px] object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  );
}

export default UpcomingEvents;
