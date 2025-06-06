import React from 'react';

const otherLeaders = [
  { id: 1, name: 'Wanjiku Mwangi', title: 'Worship Director', img: '/assets/leadership/janeDoe.jpeg' },
  { id: 2, name: 'Mwangi Njoroge', title: 'Youth Pastor', img: '/assets/leadership/johnSmith.jpeg' },
  { id: 3, name: 'Akinyi Odhiambo', title: "Children's Ministry", img: '/assets/leadership/emilyJohnson.jpeg' },
  { id: 4, name: 'Kamau Karanja', title: 'Outreach Coordinator', img: '/assets/leadership/michaelBrown.jpeg' },
  { id: 5, name: 'Njeri Wambui', title: "Womens Ministry", img: '/assets/leadership/sarahLee.jpeg' },
  { id: 6, name: 'Otieno Oduor', title: "Men’s Ministry", img: '/assets/leadership/davidWilson.jpeg' },
  { id: 7, name: 'Chebet Jepkosgei', title: 'Prayer Coordinator', img: '/assets/leadership/lindaDavis.jpeg' },
  { id: 8, name: 'Kiptoo Kipruto', title: 'Tech Director', img: '/assets/leadership/jamesMiller.jpeg' },
];

function Leadership() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      {/* Senior Pastor */}
      <div className="flex flex-col md:flex-row gap-10 mb-16 items-start">
        <img
          src="/assets/leadership/seniorpastor.jpeg"
          alt="Senior Pastor"
          className="w-[250px] h-[300px] object-cover shadow-md"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-2">Rev. Joseph Mwangi</h2>
          <h3 className="text-xl text-gray-600 mb-4">Senior Pastor</h3>
          <p className="text-gray-700">
            Rev. Joseph Mwangi has faithfully shepherded The Upper Room Sanctuary for over 15 years,
            leading with vision, compassion, and a heart for community transformation. His teaching
            inspires growth in faith and discipleship. With a deep commitment to the Word of God,
            he has mentored leaders, fostered a culture of prayer, and cultivated a spiritually vibrant
            congregation. Under his leadership, the church has launched various ministries, including outreach
            initiatives, leadership development programs, and youth empowerment forums. Rev. Mwangi is also a
            sought-after conference speaker known for his insight into spiritual maturity, kingdom service,
            and servant leadership. His unwavering dedication continues to shape the spiritual direction
            of the church and impact lives both locally and nationally.
          </p>
        </div>
      </div>

      {/* Lead Pastor */}
      <div className="flex flex-col md:flex-row-reverse gap-10 mb-16 items-start">
        <img
          src="/assets/leadership/leadPastor.jpeg"
          alt="Lead Pastor"
          className="w-[250px] h-[300px] object-cover shadow-md"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-2">Pastor Grace Njeri</h2>
          <h3 className="text-xl text-gray-600 mb-4">Lead Pastor</h3>
          <p className="text-gray-700">
            Pastor Grace Njeri oversees ministry development and outreach programs. She brings
            a deep passion for youth empowerment, women's ministry, and community engagement, helping
            to build a vibrant and inclusive church family. Her leadership has been instrumental in
            establishing mentorship structures, mobilizing resources for the less fortunate, and
            organizing impactful evangelistic events. Known for her nurturing spirit and wisdom, Pastor Njeri
            also leads intercessory prayer teams and provides pastoral care to families and individuals. Through her tireless
            dedication, she continues to inspire hope, foster spiritual growth, and encourage active
            participation in the life and mission of The Upper Room Sanctuary.
          </p>
        </div>
      </div>

      {/* Other Leaders */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center">Our Leadership Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {otherLeaders.map(({ id, name, title, img }) => (
            <div key={id} className="flex flex-col items-center text-center">
              <img
                src={img}
                alt={name}
                className="w-[220px] h-[260px] object-cover shadow-md mb-4"
              />
              <h4 className="font-semibold text-lg">{name}</h4>
              <p className="text-gray-600">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leadership;
