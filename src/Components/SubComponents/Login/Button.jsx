import React from "react";

function Button({ children}) {
  return (
      <button className={`bg-yellow-400 uppercase font-semibold text-stone-800 py-2 px-11 inline-block transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 rounded-full`}>
        {children}
      </button>
  );
}

export default Button;
