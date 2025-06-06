import React from 'react';

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-semibold mb-3 text-gray-800">
      {children}
    </h2>
  );
}

export default SectionHeading;
