import React from 'react';

// Import images
import childrenImg from '../../assets/ministries/children.jpeg';
import youthImg from '../../assets/ministries/youth.jpeg';
import menImg from '../../assets/ministries/men.jpeg';
import womenImg from '../../assets/ministries/women.jpeg';
import worshipImg from '../../assets/ministries/worship.jpeg';
import prayerImg from '../../assets/ministries/prayer.jpeg';
import outreachImg from '../../assets/ministries/outreach.jpeg';
import hospitalityImg from '../../assets/ministries/hospitality.jpeg';
import mediaImg from '../../assets/ministries/media.jpeg';

const ministries = [
  {
    title: 'Children’s Ministry',
    description: 'Raising a generation rooted in Christ through fun, worship, and biblical teaching.',
    image: childrenImg,
  },
  {
    title: 'Youth Ministry',
    description: 'Empowering youth to live boldly for Christ and impact their world through faith.',
    image: youthImg,
  },
  {
    title: 'Men’s Fellowship',
    description: 'Strengthening men through discipleship, mentorship, and spiritual accountability.',
    image: menImg,
  },
  {
    title: 'Women’s Ministry',
    description: 'Equipping women to grow in faith, leadership, and community service.',
    image: womenImg,
  },
  {
    title: 'Worship & Music',
    description: 'Leading the congregation in authentic worship through music and praise.',
    image: worshipImg,
  },
  {
    title: 'Intercessory Prayer',
    description: 'Standing in the gap through strategic and fervent prayer for the church and nation.',
    image: prayerImg,
  },
  {
    title: 'Evangelism & Outreach',
    description: 'Reaching the lost through community engagement and street evangelism.',
    image: outreachImg,
  },
  {
    title: 'Hospitality Ministry',
    description: 'Creating a warm, welcoming atmosphere for members and guests alike.',
    image: hospitalityImg,
  },
  {
    title: 'Media & Tech Ministry',
    description: 'Managing sound, visuals, livestreams, and technology to enhance worship and reach a digital audience.',
    image: mediaImg,
  },
];

function MinistryList() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-16">
      <div className="flex overflow-x-auto space-x-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-x-0 scrollbar-hide">
        {ministries.map((ministry, index) => (
          <div
            key={index}
            className="min-w-[85%] md:min-w-0 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={ministry.image}
              alt={ministry.title}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{ministry.title}</h3>
              <p className="text-gray-600">{ministry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MinistryList;
