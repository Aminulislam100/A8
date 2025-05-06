// Navbar.jsx
import React from 'react';
import logo from '../../assets/logo-footer.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <span className="text-xl font-bold">Law.BD</span>
      </div>

      <div className="flex items-center space-x-6 text-lg font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-600" : ""}>Home</NavLink>
        <NavLink to="/appointments" className={({ isActive }) => isActive ? "text-green-600" : ""}>My Bookings</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-green-600" : ""}>Blogs</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-600" : ""}>Contact</NavLink>
      </div>

      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium">
        Contact Now
      </button>
    </nav>
  );
};

export default Navbar;
