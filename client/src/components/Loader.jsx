import React from "react";
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-[999]">
      <div className="flex items-center">
        {/* Spinner */}
        <svg
          className="w-16 h-16 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M4 12a8 8 0 0 1 16 0" fill="none" />
        </svg>
        <div className="font-bold text-white text-3xl ml-3">
          Data Processing...
        </div>
      </div>
    </div>
  );
};

export default Loader;
