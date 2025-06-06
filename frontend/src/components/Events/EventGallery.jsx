import React from 'react';
import img1 from '../../assets/gallery/img1.jpeg';
import img2 from '../../assets/gallery/img2.jpeg';
import img3 from '../../assets/gallery/img3.jpeg';
import img4 from '../../assets/gallery/img4.jpeg';
import img5 from '../../assets/gallery/img5.jpeg';
import img6 from '../../assets/gallery/img6.jpeg';
import img7 from '../../assets/gallery/img7.jpeg';
import img8 from '../../assets/gallery/img8.jpeg';
import img9 from '../../assets/gallery/img9.jpeg';
import img10 from '../../assets/gallery/img10.jpeg';
import img11 from '../../assets/gallery/img11.jpeg';
import img12 from '../../assets/gallery/img12.jpeg';

const EventGallery = () => {
  const columns = [
    [img1, img2, img3],
    [img4, img5, img6],
    [img7, img8, img9],
    [img10, img11, img12],
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {col.map((img, imgIndex) => (
              <div key={imgIndex}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={img}
                  alt={`Event ${colIndex * 3 + imgIndex + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
