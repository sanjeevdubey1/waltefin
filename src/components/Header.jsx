import React from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50  rounded-4xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center  ">
        <h1 className="text-2xl font-bold  text-yellow-600">Fincopx</h1>
        <nav className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-yellow-500 font-bold ">Home</a>
          <a href="#services" className="text-gray-700 hover:text-yellow-500 font-bold ">Services</a>
          <a href="/about" className="text-gray-700 hover:text-yellow-500 font-bold ">About Us</a>
          <a href="/terms" className="text-gray-700 hover:text-yellow-500  font-bold ">T&amp;C</a>
        </nav>
      </div>
    </header>
  );
};

