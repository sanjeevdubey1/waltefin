import React, { useState } from 'react';
import FCX from '../assets/FCX.png';
import { Menu, X } from 'lucide-react'; // Icons for open/close

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky mt-2.5 top-0 z-50 ">
      <div className="max-w-[84rem] rounded-3xl  mb-2.5 bg-cyan-50/35 mx-auto px-4 py-2 flex justify-between items-center h-[75px]    shadow-sm shadow-cyan-100 
    hover:shadow-md hover:shadow-cyan-200 transition duration-300 ease-in-out">

        {/* Logo Box */}
        <div className="bg-black rounded-3xl h-[60px] flex items-center justify-center ">
          <img
            src={FCX}
            alt="Fincopx Logo"
            className="h-30 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Services', 'About Us', 'Contact Us' , 'T&C'].map((text, index) => {
            const hrefs = ['/', '#services', '/aboutus', '#contactus', '/terms' ];
            return (
              <a
                key={text}
                href={hrefs[index]}
                className="text-white bg-transparent  font-semibold hover:text-pink-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-black p-2 px-3 rounded-3xl"
              >
                {text}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden bg-black px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <a href="/" className="block text-pink-100 py-2 hover:text-yellow-500 font-bold">Home</a>
        <a href="#services" className="block text-pink-100 py-2 hover:text-yellow-500 font-bold">Services</a>
        <a href="/aboutus" className="block text-pink-100 py-2 hover:text-yellow-500 font-bold">About Us</a>
        <a href="/terms" className="block text-pink-100 py-2 hover:text-yellow-500 font-bold">T&amp;C</a>
        <a className="block text-pink-100 py-2 hover:text-yellow-500 font-bold" href="#contactus">Contact Us</a>
      </div>
    </header>
  );
};
