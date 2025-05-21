// Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
