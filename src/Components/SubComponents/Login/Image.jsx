import React from 'react';
import pic1 from "../../../assets/pic1.png";
import Vector from "../../../assets/Vector.png";

function Image() {
  return (
    <div className="block w-full md:w-1/3 lg:w-2/5 relative mt-8"> {/* Make image visible on all devices */}
      {/* Background Image */}
      <img
        src={pic1}
        alt="Login Illustration"
        className="rounded-lg w-full h-auto"
      />

      {/* Icon with Text */}
      <div className="absolute flex flex-col items-start justify-center top-60 sm:top-72 md:top-72 left-4">
        <div className="bg-yellow-400 p-4 rounded-full">
          <img
            src={Vector}
            alt="Icon"
            className="w-8 h-8"
          />
        </div>
        <span className="mt-2 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          We are popular leaders in the agriculture market globally
        </span>
      </div>
    </div>
  );
}

export default Image;
