import React from 'react';
import img1 from '../../assets/event1.jpg';
import img2 from '../../assets/event2.jpg';
import img3 from '../../assets/event3.jpg';
import img4 from '../../assets/event4.jpg';

const events = [
  {
    title: 'Morning Devotion',
    description: 'Weekdays from 7 - 8 AM (Online)',
    image: img1,
  },
  {
    title: 'Monday Night Prayers',
    description: 'Every Monday from 6:30 PM (All campuses & Online)',
    image: img2,
  },
  {
    title: 'Bible Marathon',
    description: 'Every first week of the month (Tue–Fri, 6:30 PM)',
    image: img3,
  },
  {
    title: 'Kesha',
    description: 'Last Friday monthly at Innercore Campus & Online',
    image: img4,
  },
];

function ServicesCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-gray-50">
      {events.map((event, index) => (
        <a
          key={index}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={event.image}
            alt={event.title}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {event.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {event.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ServicesCards;
