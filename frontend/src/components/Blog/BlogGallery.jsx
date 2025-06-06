import React from 'react';
import img1 from '../../assets/blogGallery/1.jpeg';
import img2 from '../../assets/blogGallery/2.jpeg';
import img3 from '../../assets/blogGallery/3.jpeg';
import img4 from '../../assets/blogGallery/4.jpeg';
import img5 from '../../assets/blogGallery/5.jpeg';
import img6 from '../../assets/blogGallery/6.jpeg';
import img7 from '../../assets/blogGallery/7.jpeg';
import img8 from '../../assets/blogGallery/8.jpeg';
import img9 from '../../assets/blogGallery/9.jpeg';
import img10 from '../../assets/blogGallery/10.jpeg';
import img11 from '../../assets/blogGallery/11.jpeg';
import img12 from '../../assets/blogGallery/12.jpeg';

function BlogGallery() {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Blog Gallery ${index + 1}`}
              className="h-auto max-w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogGallery;
