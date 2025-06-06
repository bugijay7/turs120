import React, { useState } from 'react';
import axios from 'axios';
import babyImage from '../assets/baby-dedication.jpeg'; // Image for the class

const BabyDedicationClass = () => {
  const [formData, setFormData] = useState({
    babyName: '',
    fatherName: '',
    motherName: '',
    dedicationDate: '',
    pastorInCharge: '',
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input Changed - name: ${name}, value: ${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form submitted with data:', formData);

    const parentsNames = `${formData.fatherName} & ${formData.motherName}`;

    const submissionData = {
      babyName: formData.babyName,
      parentsNames,
      dedicationDate: formData.dedicationDate,
      pastorInCharge: formData.pastorInCharge || 'TBD',
    };

    console.log('Data to submit:', submissionData);

    try {
      setLoading(true);

      const response = await axios.post(
        'https://turs120.onrender.com/api/babyDedication',
        submissionData
      );

      console.log('Response from server:', response.data);

      setStatusMessage('Application submitted successfully!');

      setFormData({
        babyName: '',
        fatherName: '',
        motherName: '',
        dedicationDate: '',
        pastorInCharge: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);

      if (error.response) {
        console.error('Server responded with status:', error.response.status);
        console.error('Response data:', error.response.data);
        setStatusMessage('Failed to submit application. Please try again.');
      } else if (error.request) {
        console.error('No response received:', error.request);
        setStatusMessage('No response from server. Please check your connection.');
      } else {
        console.error('Error setting up request:', error.message);
        setStatusMessage('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-20">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">Baby Dedication Class</h1>
      <img
        src={babyImage}
        alt="Baby Dedication Class"
        className="w-full h-auto rounded-lg shadow-md mb-6"
      />

      <p className="text-gray-700 mb-4">
        Welcoming a newborn is a joyful and cherished moment for every family. At The Upper Room Sanctuary,
        we believe in the significance of dedicating our children to God’s guidance and care.
      </p>
      <p className="text-gray-700 mb-4">
        We offer a <strong>Baby Dedication Class</strong> to help parents understand the spiritual
        significance and commitments involved in this special ceremony.
      </p>
      <p className="text-gray-700 mb-6">
        If you’re interested in dedicating your child, we kindly invite you to attend this special class beforehand.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Application Form</h2>

        <div>
          <label className="block text-gray-600 mb-1">Father's Full Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter father's full name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Mother's Full Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter mother's full name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Child's Full Name:</label>
          <input
            type="text"
            name="babyName"
            value={formData.babyName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter child's full name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Child's Date of Birth:</label>
          <input
            type="date"
            name="dedicationDate"
            value={formData.dedicationDate}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Pastor in Charge:</label>
          <input
            type="text"
            name="pastorInCharge"
            value={formData.pastorInCharge}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter pastor's name (optional)"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>

        {statusMessage && (
          <p className="mt-4 text-center text-pink-700 font-semibold">{statusMessage}</p>
        )}
      </form>
    </div>
  );
};

export default BabyDedicationClass;
