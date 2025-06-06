import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // import useNavigate

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // initialize navigate

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submitting form:', form);

    try {
      const res = await axios.post('http://localhost:3000/api/members/register', form);
      console.log('Server response:', res.data);
      setMessage('Registration successful! Redirecting to login...');

      // Clear form (optional)
      setForm({ name: '', email: '', password: '' });

      // Redirect after short delay (e.g. 2 seconds)
      setTimeout(() => {
        navigate('/login');  // change this to your login route
      }, 2000);

    } catch (err) {
      console.error('Registration error:', err);
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="w-full h-[90vh] flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-[700px] p-10 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-4xl font-bold mb-6 text-center">Register</h2>
        {message && (
          <p className={`text-sm mb-4 text-center ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
