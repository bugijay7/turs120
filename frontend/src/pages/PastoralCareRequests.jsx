import React, { useState } from 'react';
import axios from 'axios';

function PastoralCareRequests() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Adjust URL to your backend API endpoint
      await axios.post('https://turs120.onrender.com/api/pastoralCare', formData);
      setSuccess('Your pastoral care request has been submitted successfully.');
      setFormData({ title: '', description: '', date: '', time: '', location: '' }); // reset form
    } catch (err) {
      setError('Failed to submit request. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 py-16 font-sans mt-10">
      <h1 className="text-3xl font-bold mb-4">Pastoral Care Requests</h1>
      <h3 className="text-xl font-semibold mb-2">Resources to help you</h3>
      <p className="mb-6">
        If you're in need of spiritual support, guidance, or prayer, we are here for you.
        Please fill out the form below to submit your Pastoral Care request and a member of our team will reach out to you.
      </p>

      <h3 className="text-xl font-semibold mb-4">Pastoral Care Request Form</h3>

      {success && <p className="mb-4 text-green-600">{success}</p>}
      {error && <p className="mb-4 text-red-600">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
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
            placeholder="e.g. Prayer Request"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Provide details about your request"
          ></textarea>
        </div>

        <div>
          <label htmlFor="date" className="block font-medium mb-1">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="time" className="block font-medium mb-1">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="location" className="block font-medium mb-1">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="e.g. Room 101"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 font-semibold rounded transition ${
            loading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white'
          }`}
        >
          {loading ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}

export default PastoralCareRequests;
