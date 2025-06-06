import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  return (
    <div className="navbar bg-white shadow-md max-w-[1200px] mx-auto fixed top-0 left-0 right-0 z-50 px-4 lg:px-8">
      
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <HiOutlineMenu className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/sermons">Sermons</Link></li>
            <li><Link to="/ministries">Ministries</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            {/* Resources Nested Dropdown on Mobile */}
            <li tabIndex={0}>
              <details className="group">
                <summary className="cursor-pointer select-none">Resources</summary>
                <ul className="p-2 bg-gray-900 text-white rounded-box mt-1 space-y-1">
                  <li><Link to="/prayer-requests">Prayer Requests</Link></li>
                  <li><Link to="/premarital-classes">Premarital Classes</Link></li>
                  <li><Link to="/pastoral-care-requests">Pastoral Care Requests</Link></li>
                  <li><Link to="/crisis-counselling-center">Crisis Counselling Center</Link></li>
                  <li><Link to="/baby-dedication">Baby Dedication</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/branches">Branches</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-2xl font-bold ml-3 lg:ml-0">
          Upper Room Sanctuary
        </Link>
      </div>

      {/* Navbar Center - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/about">About</Link></li>
          <li tabIndex={0}>
            <details>
              <summary className="cursor-pointer">Resources</summary>
              <ul className="p-2 bg-white text-black w-64 shadow-lg rounded-box z-50">
                <li><Link to="/prayer-requests">Prayer Requests</Link></li>
                <li><Link to="/premarital-classes">Premarital Classes</Link></li>
                <li><Link to="/pastoral-care-requests">Pastoral Care Requests</Link></li>
                <li><Link to="/crisis-counselling-center">Crisis Counselling Center</Link></li>
                <li><Link to="/baby-dedication">Baby Dedication</Link></li>
              </ul>
            </details>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Navbar End - Login/Register */}
      <div className="navbar-end hidden lg:flex gap-4">
        <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
        <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
      </div>
    </div>
  );
}

export default Navbar;
