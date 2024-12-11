import React, { useState } from "react";
import Button from "../../Components/Common/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const locationData = {
  provinces: [
    { id: "punjab", name: "Punjab" },
    { id: "sindh", name: "Sindh" },
    { id: "kpk", name: "Khyber Pakhtunkhwa" },
    { id: "balochistan", name: "Balochistan" },
  ],
  cities: {
    punjab: ["Lahore", "Faisalabad", "Multan", "Rawalpindi"],
    sindh: ["Karachi", "Hyderabad", "Sukkur"],
    kpk: ["Peshawar", "Abbottabad", "Mardan"],
    balochistan: ["Quetta", "Gwadar", "Turbat"],
  },
};

const API_URL = "http://127.0.0.1:8000";

function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "customer", // Default value
    province: "",
    city: "",
  });

  const [availableCities, setAvailableCities] = useState([]);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "province") {
      setAvailableCities(locationData.cities[value] || []);
      setFormData((prevData) => ({
        ...prevData,
        city: "",
      }));
    }

    if (name === "password") {
      validatePassword(value);
    }

    if (name === "confirmPassword") {
      validateConfirmPassword(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== formData.password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      passwordError ||
      confirmPasswordError ||
      !validateEmail(formData.email) ||
      !validatePhone(formData.phone)
    ) {
      alert("Please fix the errors before submitting.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/users/`, formData);

      if (response.status === 201) {
        alert("Registration successful!");
        localStorage.setItem("authToken", response.data.token);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        `Error: ${
          error.response?.data?.detail || "An unexpected error occurred."
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-normal text-white mb-3">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          className="w-full max-w-xl rounded-full border px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-normal text-white mb-3">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full max-w-xl rounded-full border px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {!validateEmail(formData.email) && (
          <p className="text-yellow-400 text-sm">Invalid email format.</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-normal text-white mb-3">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full max-w-xl rounded-full border px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        {!validatePhone(formData.phone) && (
          <p className="text-yellow-400 text-sm">Invalid phone number format.</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-normal text-white mb-3">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full max-w-xl rounded-full border px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
        />
        {passwordError && <p className="text-yellow-400 text-sm">{passwordError}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-normal text-white mb-3">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          className="w-full max-w-xl rounded-full border px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {confirmPasswordError && (
          <p className="text-yellow-400 text-sm">{confirmPasswordError}</p>
        )}
      </div>

      {/* Province */}
      <div>
        <label htmlFor="province" className="block text-sm font-normal text-white mb-3">
          Province
        </label>
        <select
          id="province"
          name="province"
          required
          className="w-full max-w-xl rounded-full border px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          value={formData.province}
          onChange={handleChange}
        >
          <option value="">Select Province</option>
          {locationData.provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="block text-sm font-normal text-white mb-3">
          City
        </label>
        <select
          id="city"
          name="city"
          required
          className="w-full max-w-xl rounded-full border px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          value={formData.city}
          onChange={handleChange}
          disabled={!formData.province}
        >
          <option value="">Select City</option>
          {availableCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* User Type */}
      <div>
        <label htmlFor="userType" className="block text-sm font-normal text-white mb-3">
          User Type
        </label>
        <select
          id="userType"
          name="userType"
          className="w-full max-w-xl rounded-full border px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400"
          value={formData.userType}
          onChange={handleChange}
        >
          <option value="customer">Customer</option>
          <option value="farmer">Farmer</option>
          <option value="dealer">Dealer</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button variant="button" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </div>

      {/* Sign In Link */}
      <div className="text-center">
        <p className="text-sm text-white">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-white hover:text-green-300">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpForm;