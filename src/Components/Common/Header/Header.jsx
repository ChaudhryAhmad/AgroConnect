import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../../assets/Logo.png";
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0A690E] shadow-lg w-full">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          {/* Button for smaller screens */}
          <div className="block lg:hidden">
            <button
              className="text-white hover:text-yellow-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            {/* Logo Image */}
            <NavLink to="/">
              <img 
                src={Logo} 
                alt="Logo" 
                className="h-10 w-10 mr-2" 
              />
            </NavLink>
            
            {/* Logo Text */}
            <NavLink to="/" className="text-2xl text-white font-agbluma">
              AgroConnect
            </NavLink>
          </div>

          {/* Links for large screens (768px and above) */}
          <div className="hidden lg:flex space-x-4">
            <NavLink
              to="/"
              className="text-white hover:text-yellow-400 transition duration-300 hover:scale-[1.1] px-3 py-2"
              style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:text-yellow-400 transition duration-300 hover:scale-[1.1] px-3 py-2"
              style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}
            >
              About
            </NavLink>
            <NavLink
              to="/faq"
              className="text-white hover:text-yellow-400 transition duration-300 hover:scale-[1.1] px-3 py-2"
              style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}
            >
              FAQs
            </NavLink>
            <NavLink
              to="/termsandconditions"
              className="text-white hover:text-yellow-400 transition duration-300 hover:scale-[1.1] px-3 py-2"
              style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}
            >
              Terms and Conditions
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white hover:text-yellow-400 transition duration-300 hover:scale-[1.1] px-3 py-2"
              style={({ isActive }) => (isActive ? { color: 'yellow' } : {})}
            >
              Contact
            </NavLink>
          </div>

          {/* Dropdown Menu for smaller screens */}
          {menuOpen && (
            <div className="absolute top-16 inset-x-0 bg-white shadow-md rounded-md w-full py-2 lg:hidden">
              <NavLink
                to="/"
                className="block px-4 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className="block px-4 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/termsandconditions"
                className="block px-4 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Terms and Conditions
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-green-800 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          )}

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-yellow-400 hover:scale-[1.1]">
              <FaShoppingCart className="h-6 w-6" />
            </button>
            <NavLink to="/login" className="text-white hover:text-yellow-400 hover:scale-[1.1]">
              <FaUser className="h-6 w-6" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
