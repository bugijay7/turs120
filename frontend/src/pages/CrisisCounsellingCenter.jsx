import React, { useState } from 'react';

function CrisisCounsellingCenter() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://turs120.onrender.com/api/crisis-counselling', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setMessage('Your request has been submitted successfully.');
        setFormData({
          title: '',
          description: '',
          date: '',
          time: '',
          location: ''
        });
      } else {
        setMessage('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-sans leading-relaxed text-gray-800 mt-20">
      <h1 className="text-3xl font-bold mb-2">Crisis Counselling Centre</h1>
      <h3 className="text-xl font-semibold mb-4">Resources to help you</h3>

      <p className="mb-2">
        Our Crisis Counselling Centre is back and we are offering counselling <strong className="text-red-600">for FREE</strong>! Counselling involves therapy, on a talk-basis, that aims to help people develop self-understanding and make positive change. You can come as an individual or even as a family.
      </p>
      <p className="mb-2">
        We are open at our Kangundo Rd Campus from <strong className="text-red-600">Monday to Friday</strong> at <strong className="text-red-600">9am to 1pm</strong>.
      </p>
      <p className="mb-2">
        Please tell a friend to tell a friend. Sharing is caring.
      </p>
      <p className="mb-6">
        <strong className="text-red-600">Contact:</strong> +254 736 551172
      </p>

      <h3 className="text-xl font-semibold mb-4">Crisis Counselling Request Form</h3>

      <form onSubmit={handleSubmit} className="max-w-md bg-white shadow-md p-6 rounded-lg space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-red-300"
          ></textarea>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-1">Preferred Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
        >
          Submit Request
        </button>

        {message && (
          <p className="mt-4 text-sm text-green-600 font-medium">{message}</p>
        )}
      </form>
    </div>
  );
}

export default CrisisCounsellingCenter;
