import React from 'react';
import FIN from '../../assets/home-loans-navi-mumbai.webp'
export const BlogHomeLoanOptions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-pink-50">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Top 5 Home Loan Options for First-Time Buyers in Navi Mumbai (2025)
      </h1>

      {/* Meta Info */}
      <p className="text-sm text-gray-500 text-center mb-8">
        Written by FinCopX Team • June 2025
      </p>

      {/* Featured Image */}
      <img
      
        src={FIN}
        alt="Home Loans in Navi Mumbai"
        className="rounded-lg shadow mb-8 w-full h-auto object-cover"
        loading="eager"
      />

      {/* Introduction */}
      <p className="mb-6 text-lg">
        If you're a first-time home buyer in Navi Mumbai, choosing the right loan can be overwhelming. With so many banks and NBFCs offering different terms, we've compiled the top 5 home loan options that offer flexibility, affordability, and trust.
      </p>

      {/* Loan Options */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. HDFC Home Loan</h2>
          <p>Offers competitive interest rates starting at 8.25%, flexible tenure up to 30 years, and quick digital processing for salaried applicants.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. SBI Home Loan</h2>
          <p>Ideal for government employees and salaried professionals. Comes with zero prepayment penalties and balance transfer options.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. ICICI Bank Home Loan</h2>
          <p>Known for its fast processing and doorstep documentation collection. Good for young professionals buying 1BHK/2BHK flats.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. LIC Housing Finance</h2>
          <p>Perfect for self-employed buyers. Offers fixed and floating rate options with minimal processing fees.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. PNB Housing</h2>
          <p>Provides attractive schemes for women borrowers and joint loans. Pre-approved balance transfer facility available.</p>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Q: What is the minimum CIBIL score required?</h3>
            <p>A score above 700 is ideal, but some NBFCs accept applications with 650+ with higher rates.</p>
          </div>
          <div>
            <h3 className="font-semibold">Q: Can I get a loan with a co-applicant?</h3>
            <p>Yes, co-applicants can improve your loan eligibility, especially with combined income proof.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-yellow-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Need Expert Help Choosing a Loan?</h3>
        <p className="mb-4 text-gray-700">Talk to our advisors or apply directly through our secure portal.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/apply" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold">
            Apply Now
          </a>
          <a href="tel:+918424020461" className="border border-yellow-500 text-yellow-600 hover:bg-yellow-200 px-6 py-3 rounded-full font-semibold">
            Talk to Us
          </a>
        </div>
      </div>
    </div>
  );
};
