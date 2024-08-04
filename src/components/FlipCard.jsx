import { useState } from "react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Perspective wrapper */}
      <div className="relative w-64 h-40 perspective" onClick={handleFlip}>
        <div
          className={`absolute w-full h-full transition-transform duration-1000 transform-style-3d ${
            isFlipped ? "rotate-x-180" : ""
          }`}
        >
          {/* Front Side */}
          <div
            className={`absolute w-full h-full flex items-center justify-center bg-blue-500 rounded-lg shadow-lg backface-hidden ${
              isFlipped ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white">Front Side</h2>
              <p className="text-gray-200">Click to flip</p>
            </div>
          </div>

          {/* Back Side */}
          <div
            className={`absolute w-full h-full flex items-center justify-center bg-red-500 rounded-lg shadow-lg backface-hidden rotate-x-180 ${
              isFlipped ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white">Back Side</h2>
              <p className="text-gray-200">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
