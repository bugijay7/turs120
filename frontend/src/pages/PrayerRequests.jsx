import React, { useState } from 'react';

function PrayerRequests() {
  const [formData, setFormData] = useState({
    requesterName: '',
    title: '',
    description: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const requestDate = new Date().toISOString().split('T')[0];

  try {
    const res = await fetch('https://turs120.onrender.com/api/prayerrequests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Remove the Authorization header here
      },
      body: JSON.stringify({ ...formData, requestDate }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to submit request');
    }

    const result = await res.json();
    setFormData({ requesterName: '', title: '', description: '' });
    setSuccessMessage('Prayer request submitted successfully.');
    setErrorMessage('');
  } catch (err) {
    setErrorMessage(err.message || 'There was an error submitting your request.');
    setSuccessMessage('');
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };
  


  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">Prayer Requests</h1>
      <h3 className="text-xl font-semibold mb-2">Resources to help you</h3>
      <p className="mb-6">
        We believe in the power of prayer and would love to stand with you in faith.
        Please use the form below to share your prayer needs. Our team will be praying with you.
      </p>

      <h3 className="text-xl font-semibold mb-4">Prayer Request Form</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="requesterName" className="block font-medium mb-1">Your Name</label>
          <input
            type="text"
            id="requesterName"
            name="requesterName"
            value={formData.requesterName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="title" className="block font-medium mb-1">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium mb-1">Your Prayer Request</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
        >
          Submit Request
        </button>
      </form>

      {successMessage && <p className="mt-4 text-green-600 font-medium">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-600 font-medium">{errorMessage}</p>}
    </div>
  );
}

export default PrayerRequests;
