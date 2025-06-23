import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import Services from './Services';
import Partners from './Partners';
import { Link } from 'react-router-dom';
export const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <div
        className="relative min-h-[90vh] w-full bg-gradient-to-br from-black via-cyan-500/30 to-black text-white flex flex-col items-center justify-center text-center px-6"
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-3 leading-tight">
            Your Trusted Home Loan DSA in Navi Mumbai & Panvel — <span className="text-yellow-400">FinCopX</span>
          </h1>
          <p className="text-yellow-100 text-lg sm:text-xl mb-4 font-medium">
            Personal, Business & Home Loan through top banks and NBFCs.
          </p>
          <p className="text-white text-base sm:text-lg mb-8 max-w-2xl font-mono mx-auto">
            Serving Navi Mumbai, Kharghar, Kamothe & Panvel. No middlemen. No false claims.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
            aria-label='apply now '
              onClick={() => navigate('/apply')}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base shadow-lg transition"
            >
              Apply Now
            </button>
            <a
              href="tel:+918424020461"
              className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base transition"
            >
              Talk to Us
            </a>
            <button
            aria-label='emi calculator'
              onClick={() => navigate('/emi-calculator')}
              className="bg-white hover:bg-gray-200 text-black font-semibold px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base"
            >
              EMI Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <Partners />

      {/* Services */}
      <Services />

      {/* Contact Section */}
      <section
        id="contactus"
        className="bg-gradient-to-r from-cyan-50 to-cyan-100 py-10 px-6 text-center rounded-t-3xl shadow-inner"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Let’s Talk Finance</h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          We’ve helped over <span className="font-semibold text-yellow-600">2000+</span> clients find the right loan solutions. Let’s find yours.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <a
            href="tel:+918424020461"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition"
          >
            Call Now: +91 8424020461
          </a>
          <a
            href="mailto:fincopx@gmail.com"
            className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-full border border-gray-300 shadow transition"
          >
            Email Us: fincopx@gmail.com
          </a>
        </div>
        <p className="text-sm text-gray-500">We’re available Mon–Sat, 10am–7pm</p>
        <Link className='text-sm text-gray-500 underline ' to='/blogs' >Blogs</Link>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-50 text-center text-sm text-gray-500 py-4">
        © 2025 FincopX. All rights reserved.
      </footer>
    </div>
  );
};
