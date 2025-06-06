import React from 'react';

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path
            d="M32 2L12 18v44h40V18L32 2zM22 58v-16h8v16h-8zm20 0h-8v-16h8v16zm-4-30-6-6-6 6h4v12h4V28h4z"
            fill="currentColor"
          />
          <rect x="28" y="34" width="8" height="8" fill="currentColor" />
          <path
            d="M32 6l-6 6h4v8h4v-8h4l-6-6z"
            fill="currentColor"
          />
        </svg>
        <p>
         Uper Room Sanctuary
          <br />
          Empowering lives through the Word of God
          <br />
          © {new Date().getFullYear()} All rights reserved
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Worship Services</h6>
        <a className="link link-hover">Sunday Worship - 10:00 AM</a>
        <a className="link link-hover">Bible Study - Wed 7:00 PM</a>
        <a className="link link-hover">Prayer Night - Fri 6:30 PM</a>
        <a className="link link-hover">Youth Service</a>
      </nav>

      <nav>
        <h6 className="footer-title">Connect</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Leadership</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Events</a>
      </nav>

      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Sermons</a>
        <a className="link link-hover">Give Online</a>
        <a className="link link-hover">Volunteer</a>
        <a className="link link-hover">Newsletter</a>
      </nav>
    </footer>
  );
}

export default Footer;
