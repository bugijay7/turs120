import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function Contacts() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-[1200px] mx-auto space-y-16 py-16">

        {/* Section 1: Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-gray-900">
          {/* Phone Numbers */}
          <div className="border p-6 rounded-lg text-center shadow-md">
            <FaPhoneAlt className="text-3xl mx-auto mb-3 text-indigo-900" />
            <h3 className="text-xl font-semibold mb-2">Pastor on Duty</h3>
            <p>+254 700 123 456</p>
            <p>+254 701 456 789</p>
            <p>+254 702 987 654</p>
          </div>

          {/* Church Office Numbers */}
          <div className="border p-6 rounded-lg text-center shadow-md">
            <FaUserTie className="text-3xl mx-auto mb-3 text-indigo-900" />
            <h3 className="text-xl font-semibold mb-2">Church Office</h3>
            <p>+254 721 654 321</p>
            <p>+254 722 111 222</p>
            <p>+254 723 333 444</p>
          </div>

          {/* Emails */}
          <div className="border p-6 rounded-lg text-center shadow-md">
            <FaEnvelope className="text-3xl mx-auto mb-3 text-indigo-900" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p>info@upperroomsanctuary.org</p>
            <p>support@upperroomsanctuary.org</p>
            <p>contact@upperroomsanctuary.org</p>
          </div>
        </div>

        {/* Section 2: Contact Form + Social Links */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form className="space-y-4 w-full">
            <h2 className="text-2xl font-semibold text-indigo-900 mb-2">Send a Message</h2>
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded" required />
            <button
              type="submit"
              className="bg-indigo-900 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl font-semibold text-indigo-900">Follow Us On Social Media</h2>
            <p className="text-gray-700">
              Do you have any comment, questions, or suggestions? Leave us your message and we will be glad to get back to you…
            </p>
            <div className="flex flex-col gap-4 text-indigo-900 text-lg"> {/* font-size reduced */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaFacebookF className="text-xl" /> {/* font-size reduced */}
                <span>Let’s Connect on Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaInstagram className="text-xl" />
                <span>Follow us on Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaTwitter className="text-xl" />
                <span>Follow us on X</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaYoutube className="text-xl" />
                <span>Watch on YouTube</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaTiktok className="text-xl" />
                <span>Follow us on TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Multiple Locations */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-900 mb-6">Our Locations</h2>

            <div className="grid md:grid-cols-3 gap-8 text-gray-900">
            {/* Location 1 */}
      <div className="border p-6 rounded-lg shadow-md text-left bg-amber-500">
      
      <iframe
        title="Main Sanctuary Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.835878214333!2d36.8131!3d-1.3001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d123456789%3A0xabcdef1234567890!2sUpper%20Hill%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v123456789"
        width="100%"
        height="200"
        style={{ border: 0, marginTop: '1rem' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <FaMapMarkerAlt className="text-3xl mx-auto mb-3 text-indigo-900" />
      <h3 className="text-xl font-semibold mb-2">Main Sanctuary</h3>
      <p>Upper Hill Rd, Nairobi</p>
      <p>Next to City Mall</p>
    </div>

    {/* Location 2 */}
    <div className="border p-6 rounded-lg shadow-md text-left bg-lime-600">
     
      <iframe
        title="Eastlands Campus Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.752547651234!2d36.8811!3d-1.2895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f116abcdefg%3A0x987654321abcdef!2sJogoo%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v123456789"
        width="100%"
        height="200"
        style={{ border: 0, marginTop: '1rem' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       <FaMapMarkerAlt className="text-3xl mx-auto mb-3 text-indigo-900" />
      <h3 className="text-xl font-semibold mb-2">Eastlands Campus</h3>
      <p>Jogoo Rd, Nairobi</p>
      <p>Opposite Buruburu Police Station</p>
    </div>

    {/* Location 3 */}
    <div className="border p-6 rounded-lg shadow-md text-left bg-sky-700">
      
      <iframe
        title="Westlands Branch Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.820000000001!2d36.7987!3d-1.2645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18abcdef!2sWaiyaki%20Way%2C%20Nairobi!5e0!3m2!1sen!2ske!4v123456789"
        width="100%"
        height="200"
        style={{ border: 0, marginTop: '1rem' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <FaMapMarkerAlt className="text-3xl mx-auto mb-3 text-indigo-900" />
      <h3 className="text-xl font-semibold mb-2">Westlands Branch</h3>
      <p>Waiyaki Way, Nairobi</p>
      <p>Behind Sarit Centre</p>
    </div>

            </div>
        </div>

      </div>
    </div>
  );
}

export default Contacts;
