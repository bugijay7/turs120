import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Events from './pages/Events';
import Ministries from './pages/Ministries';
import Donate from './pages/Donate';
import Sermons from './pages/Sermons';
import Blog from './pages/Blog';
import Register from './pages/Register';
import Login from './pages/Login';

import Footer from './components/Footer';

import './index.css'; // Ensure you have a CSS file for global styles
import Navbar from './components/Navbar';
import PremaritalClasses from './pages/PremaritalClasses';
import PastoralCareRequests from './pages/PastoralCareRequests';
import BabyDedicationClass from './pages/BabyDedicationClass';
import PrayerRequests from './pages/PrayerRequests';
import CrisisCounsellingCenter from './pages/CrisisCounsellingCenter'; // Assuming you have this page

function App() {
  return (
      <Router>
      <Navbar /> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/events" element={<Events />} />
      <Route path="/ministries" element={<Ministries />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/sermons" element={<Sermons />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Home />} /> {/* Fallback route */}
      <Route path="/register" element={<Register />} /> {/* Placeholder for registration */}
      <Route path="/login" element={<Login />} /> {/* Placeholder for login */}
      <Route path="/prayer-requests" element={<PrayerRequests />} /> {/* Placeholder for prayer requests */}
      <Route path="/premarital-classes" element={<PremaritalClasses />} /> {/* Placeholder for premarital classes */}
      <Route path="/pastoral-care-requests" element={<PastoralCareRequests />} /> {/* Placeholder for pastoral care requests */}
      <Route path="/crisis-counselling-center" element={<CrisisCounsellingCenter />} /> {/* Placeholder for leadership */}
      <Route path="/baby-dedication" element={<BabyDedicationClass />} /> {/* Placeholder for baby dedication */}
      </Routes>
      <Footer />
      </Router>
  )
}

export default App
