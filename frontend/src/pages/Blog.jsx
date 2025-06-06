import React from 'react';
import BlogHeader from '../components/Blog/BlogHeader';
import BlogList from '../components/Blog/BlogList';
import BlogGallery from '../components/Blog/BlogGallery';
import BlogCTA from '../components/Blog/BlogCTA';

function Blog() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-12 lg:px-20 space-y-16">
      <BlogHeader />
      <BlogList />
      <BlogGallery />
      <BlogCTA />
    </div>
  );
}

export default Blog;
