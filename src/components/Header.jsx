import React, { useState } from 'react';
import FCX from '../assets/FCX.png';
import { Menu, X } from 'lucide-react'; // Icons for open/close
import { Link } from 'react-router-dom';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky mr-2 ml-2 top-0 z-50 ">
      <div className="max-w-[84rem] rounded-bl-3xl rounded-br-3xl   mb-2.5 bg-black mx-auto px-4 py-2 flex justify-between items-center h-[75px]    shadow-sm shadow-cyan-100 
    ">

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
            const to = ['/', '/service', '/about', '/contactus', '/terms' ];
            return (
              <Link
                key={text}
                to={to[index]}
                className="text-white bg-transparent  font-semibold hover:text-pink-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-black p-2 px-3 rounded-3xl"
              >
                {text}
              </Link>
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
        <Link to="/" className="block text-pink-100 py-2 hover:text-yellow-500 font-bold">Home</Link>
        <Link to="/service" className="block text-pink-100 py-2 hover:text-yellow-500 font-bold">Services</Link>
        <Link to="/about" className="block text-pink-100 py-2 hover:text-yellow-500 font-bold">About Us</Link>
        <Link className="block text-pink-100 py-2 hover:text-yellow-500 font-bold" to="/contactus">Contact Us</Link>
        <Link to="/terms" className="block text-pink-100 py-2 hover:text-yellow-500 font-bold">T&amp;C</Link>
      </div>
    </header>
  );
};
