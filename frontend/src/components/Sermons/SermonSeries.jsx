import React from 'react';
import series1 from '../../assets/sermon-series1.jpeg';
import series2 from '../../assets/sermon-series2.jpeg';
import series3 from '../../assets/sermon-series3.jpeg';
import series4 from '../../assets/sermon-series4.jpeg'; // <-- Add this image to your assets folder

const seriesData = [
  {
    title: 'Walking in the Spirit',
    description: 'A powerful 4-part series exploring how believers can live a Spirit-led life with biblical clarity and daily application.',
    image: series1,
  },
  {
    title: 'Kingdom Living',
    description: 'Learn what it means to be part of God’s kingdom on earth—living with purpose, authority, and grace.',
    image: series2,
  },
  {
    title: 'Faith Over Fear',
    description: 'This series equips the church to overcome anxiety and uncertainty by trusting in God’s promises.',
    image: series3,
  },
  {
    title: 'The Power of Prayer',
    description: 'Discover the transformative power of prayer in your daily life and how to develop an intimate connection with God.',
    image: series4,
  },
];

function SermonSeries() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Sermon Series</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
        {seriesData.map((series, index) => (
          <div key={index} className="bg-white shadow-lg overflow-hidden">
            <img
              src={series.image}
              alt={series.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-lime-900">{series.title}</h3>
              <p className="text-black text-sm">{series.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SermonSeries;
