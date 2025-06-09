import React from 'react';
import HDFC from '../assets/hdfc.jpg';
import KOTAK from '../assets/Kotak.jpg';
import IDFC from '../assets/idfc.jpg';
import IDBI from '../assets/idbi.jpg';
import ANDRO from '../assets/andro.png'

export const HeroSection = () => {
  const bankLogos = [
    { name: 'HDFC', url: HDFC },
    { name: 'Kotak', url: KOTAK },
    { name: 'IDFC', url: IDFC },
    { name: 'IDBI', url: IDBI },
  ];

  const services = [
    'Property Loans',
    'Business Loans',
    'Personal Loans',
    'Quick Loan Approvals',
    'Low Interest Rates',
    'Insurance'
  ];

  const reviews = [
    {
      name: 'Rahul Sharma',
      rating: 5,
      comment: 'Fincopx helped me get a business loan quickly and with great support!',
    },
    {
      name: 'Priya Singh',
      rating: 4,
      comment: 'Smooth process and excellent customer service for my personal loan.',
    },
    {
      name: 'Amit Verma',
      rating: 5,
      comment: 'Best rates and timely response for my property loan application.',
    },
  ];

  const renderStars = (count) => {
    return [...Array(count)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.04 9.397c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.97z" />
      </svg>
    ));
  };

  return (
    <div>
  {/* Hero Banner */}
<div className="relative bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop')] bg-cover bg-center h-screen w-full">
  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-white text-5xl font-bold mb-4">Welcome to Fincopx</h1>
    <p className="text-white text-xl mb-8 max-w-3xl">
      Your Trusted Partner for Property, Business & Personal Loans
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => window.location.href = '/apply'}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full"
      >
        Apply Now
      </button>
      <button
        onClick={() => window.location.href = '/emi-calculator'}
        className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-full"
      >
        EMI Calculator
      </button>
    </div>
  </div>
</div>


      {/* Banks Logos Section */}
      <section className="py-10 bg-gray-50">
        <h2 className="text-center text-3xl font-semibold mb-8">Our Partner Banks</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 px-6">
          {bankLogos.map((bank) => (
            <img
              key={bank.name}
              src={bank.url}
              alt={bank.name}
              className="h-16 object-contain hover:grayscale-0 transition duration-300"
              title={bank.name}
            />
          ))}
        </div>
      </section>

      {/* Channel Partner Section */}
      <section className="py-10 bg-white px-6">
        <h2 className="text-center text-3xl font-semibold mb-4">Our Channel Partner</h2>
        <div className="flex flex-col items-center">
          <img
            src={ANDRO}
            alt="Andromeda"
            className="h-20 mb-4 object-contain"
          />
          <p className="text-gray-600 max-w-xl text-center">
            We are proud to be associated with <span className="font-semibold text-black">Andromeda</span>,
            India’s largest loan distributor, enabling access to top banks and unmatched loan deals.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8">Our Services</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {services.map((service) => (
            <li
              key={service}
              className="bg-yellow-50 border border-yellow-400 rounded-lg py-6 px-4 font-semibold text-yellow-700 shadow-md"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-10 bg-gray-50 px-6 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8">What Our Customers Say</h2>
        <div className="space-y-8">
          {reviews.map(({ name, rating, comment }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <div className="mb-2">{renderStars(rating)}</div>
              <p className="text-gray-700 italic mb-4">"{comment}"</p>
              <p className="font-semibold text-gray-900 text-right">- {name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
