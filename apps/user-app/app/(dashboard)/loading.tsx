import React from 'react';

const FancyLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ml-96">
      <div className="grid grid-cols-3 gap-1 w-16 h-16">
        <div className="w-4 h-4 bg-blue-500 animate-pulse"></div>
        <div className="w-4 h-4 bg-green-500 animate-pulse delay-100"></div>
        <div className="w-4 h-4 bg-red-500 animate-pulse delay-200"></div>
        <div className="w-4 h-4 bg-yellow-500 animate-pulse delay-300"></div>
        <div className="w-4 h-4 bg-purple-500 animate-pulse delay-400"></div>
        <div className="w-4 h-4 bg-pink-500 animate-pulse delay-500"></div>
        <div className="w-4 h-4 bg-indigo-500 animate-pulse delay-600"></div>
        <div className="w-4 h-4 bg-teal-500 animate-pulse delay-700"></div>
        <div className="w-4 h-4 bg-orange-500 animate-pulse delay-800"></div>
      </div>
    </div>
  );
};

export default FancyLoader;
