import React from 'react';
import testimony1 from '../../assets/testimony1.jpeg';
import testimony2 from '../../assets/testimony2.jpeg';
import testimony3 from '../../assets/testimony3.jpeg';

const testimonies = [
  {
    image: testimony1,
    name: 'Mercy Wanjiku',
    quote: 'The sermons have transformed my prayer life. I now walk in greater faith and purpose.',
  },
  {
    image: testimony2,
    name: 'John Otieno',
    quote: 'Every message feels like it’s tailor-made for me. My family has grown so much spiritually.',
  },
  {
    image: testimony3,
    name: 'Grace Mutua',
    quote: 'The Word at Upper Room Sanctuary helped me find healing and hope during a dark season.',
  },
];

function SermonTestimonies() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonies from Our Community</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonies.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 mx-auto mb-4 object-cover rounded-full"
            />
            <p className="italic text-gray-700 mb-4">"{item.quote}"</p>
            <p className="font-semibold text-gray-900">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SermonTestimonies;
