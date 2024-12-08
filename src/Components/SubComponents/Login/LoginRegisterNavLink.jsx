import React from 'react'
import { NavLink } from 'react-router-dom'

function LoginRegisterNavlink() {
  return (
          
           <div className="flex bg-white rounded-full w-80 mx-auto p-1  justify-between items-center mb-2">
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
             Sign up
           </NavLink>
         </div>
  )
}

export default LoginRegisterNavlink