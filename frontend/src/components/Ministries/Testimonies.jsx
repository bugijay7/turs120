import React from 'react';

const testimonies = [
  {
    name: 'Mary Wambui',
    testimony:
      'God has truly transformed my life through the ministry at The Upper Room Sanctuary. I found healing, purpose, and a new family in Christ.',
  },
  {
    name: 'Peter Otieno',
    testimony:
      'Being part of the worship team reignited my passion for music and deepened my relationship with God. This church is home.',
  },
  {
    name: 'Grace Nyambura',
    testimony:
      'The mentorship program helped me grow spiritually and professionally. I am grateful for the support and encouragement.',
  },
  {
    name: 'Samuel Kiptoo',
    testimony:
      'Through the outreach ministry, I’ve seen lives changed in the community. It’s a blessing to be used by God to impact others.',
  },
];

function Testimonies() {
  return (
    <div className="max-w-[1000px] mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Testimonies</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonies.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="italic text-gray-800 mb-4">“{item.testimony}”</p>
            <h4 className="font-semibold text-right text-gray-600">— {item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonies;
