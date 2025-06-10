import React from 'react';
import { Briefcase, Home, User, Zap, Percent } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Home size={32} />, title: 'Property Loans' },
    { icon: <Briefcase size={32} />, title: 'Business Loans' },
    { icon: <User size={32} />, title: 'Personal Loans' },
    { icon: <Zap size={32} />, title: 'Quick Loan Approvals' },
    { icon: <Percent size={32} />, title: 'Low Interest Rates' },
  ];

  return (
    <section id='services' className=" py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">Empowering you with the right financial solutions</p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="text-yellow-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
