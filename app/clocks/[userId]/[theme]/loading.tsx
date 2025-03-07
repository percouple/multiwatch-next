import React from 'react';

// Tailwind CSS Spinner Component
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;