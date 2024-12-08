import React, { useState } from 'react';
import Button from "../SubComponents/Login/Button";
import { Link } from 'react-router-dom';

const locationData = {
  provinces: [
    { id: 'punjab', name: 'Punjab' },
    { id: 'sindh', name: 'Sindh' },
    { id: 'kpk', name: 'Khyber Pakhtunkhwa' },
    { id: 'balochistan', name: 'Balochistan' },
  ],
  cities: {
    punjab: ['Lahore', 'Faisalabad', 'Multan', 'Rawalpindi'],
    sindh: ['Karachi', 'Hyderabad', 'Sukkur'],
    kpk: ['Peshawar', 'Abbottabad', 'Mardan'],
    balochistan: ['Quetta', 'Gwadar', 'Turbat'],
  },
};

function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'customer',
    province: '',
    city: '',
  });

  const [availableCities, setAvailableCities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'province') {
      setAvailableCities(locationData.cities[value] || []);
      setFormData((prevData) => ({
        ...prevData,
        city: '', // Reset city selection when province changes
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up attempt:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div>
        <label htmlFor="fullName" className="block text-sm font-normal text-white mb-3">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          className="w-full max-w-xl rounded-full border border-stone-200 px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-normal text-white mb-3">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full max-w-xl rounded-full border border-stone-200 px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-normal text-white mb-3">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full max-w-xl rounded-full border border-stone-200 px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-normal text-white mb-3">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full max-w-xl rounded-full border border-stone-200 px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-normal text-white mb-3">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          className="w-full max-w-xl rounded-full border border-stone-200 px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      {/* Province Dropdown */}
      <div>
        <label htmlFor="province" className="block text-sm font-normal text-white mb-3">
          Province
        </label>
        <select
          id="province"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="w-full max-w-xl rounded-full border border-stone-200 px-6 py-3 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
          required
        >
          <option value="">Select Province</option>
          {locationData.provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div>
        <label htmlFor="city" className="block text-sm font-normal text-white mb-3">
          City
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full max-w-xl rounded-full border border-stone-200 px-6 py-3 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-yellow-400"
          required
          disabled={!formData.province} // Disable until a province is selected
        >
          <option value="">Select City</option>
          {availableCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <Button className="bg-yellow-400">Sign Up</Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-white">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-white hover:text-green-300">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpForm;
