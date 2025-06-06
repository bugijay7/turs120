import React, { useState } from 'react';

function PremaritalClassesForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    groom: '',
    bride: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://turs120.onrender.com/api/premarital', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Application submitted successfully!');
        setFormData({
          title: '',
          description: '',
          date: '',
          time: '',
          location: '',
          groom: '',
          bride: '',
        });
      } else {
        const errorData = await response.json();
        setStatusMessage('Error: ' + (errorData.message || 'Failed to submit'));
      }
    } catch (error) {
      setStatusMessage('Network error: ' + error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-rose-700 mb-6">Pre-Marital Counselling Classes Application</h1>

      <form onSubmit={handleSubmit} className="space-y-6 text-gray-800">
        {[
          { label: 'Class Title', name: 'title', type: 'text' },
          { label: 'Description', name: 'description', type: 'text' },
          { label: 'Date', name: 'date', type: 'date' },
          { label: 'Time', name: 'time', type: 'time' },
          { label: 'Location', name: 'location', type: 'text' },
          { label: "Groom's Full Name", name: 'groom', type: 'text' },
          { label: "Bride's Full Name", name: 'bride', type: 'text' },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block font-medium mb-1" htmlFor={name}>{label}</label>
            <input
              id={name}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-rose-300"
              placeholder={label}
            />
          </div>
        ))}

        <button
          type="submit"
          className="mt-8 bg-rose-600 text-white py-2 px-6 rounded-md hover:bg-rose-700 transition duration-300"
        >
          Submit Application
        </button>
      </form>

      {statusMessage && <p className="mt-4 text-center text-rose-600">{statusMessage}</p>}
    </div>
  );
}

export default PremaritalClassesForm;
