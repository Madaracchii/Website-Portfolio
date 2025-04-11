import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 px-4 sm:px-6 md:px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Andraei Lo
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-2">
          Frontend Developer
        </p>
      </div>
    </header>
  );
};

export default Header;
