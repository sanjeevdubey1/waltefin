import React from 'react';
import { Building2, Landmark, Briefcase, Home, ShieldCheck, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {X} from 'lucide-react'
const AboutUs = () => {
  const handleClose=useNavigate()
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-6xl space-y-10">
         <button
                  onClick={()=>handleClose(-1)}
                  className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow z-50"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-600 mb-4">About Us</h1>
          <p className="text-lg text-gray-200">
            We are a trusted <span className="text-yellow-500 font-semibold">DSA partner of Andromeda</span>, offering 
            reliable <span className="text-yellow-500 font-semibold">Home loan services in Navi Mumbai And Panvel location</span> 
          
          </p>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 text-center">
          <div className="bg-neutral-900 rounded-xl p-6 shadow-lg">
            <Briefcase size={32} className="mx-auto text-yellow-600 mb-2" />
            <h3 className="text-xl font-semibold text-yellow-500">Business Loans</h3>
            <p className="text-sm text-gray-300">Flexible loans for your growing business.</p>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 shadow-lg">
            <Home size={32} className="mx-auto text-yellow-600 mb-2" />
            <h3 className="text-xl font-semibold text-yellow-500">Home Loans</h3>
            <p className="text-sm text-gray-300">Affordable home loans with fast approvals.</p>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 shadow-lg">
            <Landmark size={32} className="mx-auto text-yellow-600 mb-2" />
            <h3 className="text-xl font-semibold text-yellow-500">Loan Against Property</h3>
            <p className="text-sm text-gray-300">Get loans secured against your property.</p>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 shadow-lg">
            <Building2 size={32} className="mx-auto text-yellow-600 mb-2" />
            <h3 className="text-xl font-semibold text-yellow-500">Personal Loans</h3>
            <p className="text-sm text-gray-300">Quick personal loans with minimal documents.</p>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 shadow-lg">
            <ShieldCheck size={32} className="mx-auto text-yellow-600 mb-2" />
            <h3 className="text-xl font-semibold text-yellow-500">Insurance Services</h3>
            <p className="text-sm text-gray-300">Secure your life and assets with top insurance options.</p>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 shadow-lg">
            <MapPin size={32} className="mx-auto text-yellow-600 mb-2" />
            <h3 className="text-xl font-semibold text-yellow-500">Panvel Office</h3>
            <p className="text-sm text-gray-300">Visit our corporate office in Panvel, Navi Mumbai.</p>
          </div>
        </div>

        {/* Info Paragraph */}
        <div className="bg-neutral-900 p-6 rounded-xl shadow-inner">
          <p className="text-gray-300 text-md leading-relaxed">
            As a proud <span className="text-yellow-500 font-semibold">corporate DSA tied up with Andromeda</span>,
            we’ve remapped and integrated our DSA system with their backend for seamless loan processing.
            We assist customers in <span className="text-yellow-500 font-semibold">getting home loans, personal loans,
            business loans, LAP</span> (Loan Against Property), and insurance services.
            <br /><br />
            Our focus is on delivering <span className="text-yellow-500 font-semibold">quick approvals</span>, 
            <span className="text-yellow-500 font-semibold">minimal documentation</span>, and 
            <span className="text-yellow-500 font-semibold">professional support</span> from start to finish.
            If you're looking for a <span className="text-yellow-500 font-semibold">trusted home loan DSA in Navi Mumbai</span> 
            or <span className="text-yellow-500 font-semibold">business loans in Panvel</span>, we are here to help.
          </p>
        </div>

        {/* SEO Footer Content */}
        <div className="text-center text-gray-400 text-sm mt-10">
          <p>
            Keywords: <span className="text-yellow-500">Home Loan DSA Navi Mumbai</span>, 
            <span className="text-yellow-500"> Business Loans Panvel</span>, 
            <span className="text-yellow-500"> Loan Agent Navi Mumbai</span>, 
            <span className="text-yellow-500"> LAP Loan Provider</span>, 
            <span className="text-yellow-500"> Personal Loan Navi Mumbai</span>, 
            <span className="text-yellow-500"> Insurance Agents Panvel</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
