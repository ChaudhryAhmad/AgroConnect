import React from "react";
import { NavLink } from "react-router-dom";

function Button({ variant, children }) {
  if (variant === "button") {
    return (
      <button className="bg-yellow-400 uppercase font-semibold text-stone-800 py-2 px-11 inline-block transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 rounded-full">
        {children}
      </button>
    );
  }

  if (variant === "navlink") {
    return (
      <div className="flex bg-white rounded-full w-80 mx-auto p-1 justify-between items-center mb-2">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `w-[20] h-9 ml-3 px-10 py-1 rounded-xl ${
              isActive ? "bg-yellow-400" : ""
            }`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `w-[20] h-9 mr-4 px-10 py-1 rounded-xl ${
              isActive ? "bg-yellow-400" : ""
            }`
          }
        >
          Register
        </NavLink>
      </div>
    );
  }

  return null; // Default fallback if no valid variant is provided
}

export default Button;