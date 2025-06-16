import React, { useState } from 'react';
import {
  Briefcase,
  Home,
  User,
  Building,
  ShieldCheck,
  ThumbsUp,
  Clock,
  Users,
  ArrowRight,
  PhoneCall,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import {useNavigate } from 'react-router-dom';
import {X} from "lucide-react"


export const Service = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      icon: <Home size={28} />,
      title: 'Home Loans',
      description:
        'We provide home loan assistance for buying or building residential property.',
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Business Loans',
      description:
        'We help arrange business loans to support working capital or expansion needs.',
    },
    {
      icon: <User size={28} />,
      title: 'Personal Loans',
      description:
        'We assist individuals in securing personal loans for various financial goals.',
    },
    {
      icon: <Building size={28} />,
      title: 'Loan Against Property',
      description:
        'We support in getting secured loans by mortgaging your property.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Insurance',
      description:
        'We help clients explore insurance plans that suit their needs.',
    },
  ];

  const benefits = [
    {
      icon: <ThumbsUp size={22} />,
      text: 'Trusted loan facilitation with multiple partners',
    },
    {
      icon: <Clock size={22} />,
      text: 'Time-saving process with guided documentation',
    },
    {
      icon: <Users size={22} />,
      text: 'Support for salaried, self-employed & businesses',
    },
    {
      icon: <ShieldCheck size={22} />,
      text: 'Secure & confidential handling of data',
    },
  ];

  const steps = [
    { icon: <PhoneCall size={20} />, text: 'Submit basic details' },
    { icon: <FileText size={20} />, text: 'Get a call from our team' },
    { icon: <ArrowRight size={20} />, text: 'Share required documents' },
    { icon: <CheckCircle2 size={20} />, text: 'Application is processed' },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
const navigate = useNavigate()
  return (
    <section className="min-h-screen bg-black text-white px-6 py-12">
          <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-gray-500 hover:text-red-500"
        title="Close"
      >
        <X className="w-6 h-6" />
      </button>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-500">Our Services</h1>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Fincopx offers assistance in getting the right financial products that match your needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-3xl mx-auto space-y-4 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-yellow-600 rounded-xl shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center px-4 py-4 text-left focus:outline-none"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-black p-2 rounded-full text-yellow-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <span className="text-black text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out bg-white text-black px-6 ${
                openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 opacity-0 py-0'
              } overflow-hidden`}
            >
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl text-yellow-400 font-bold mb-4">Why Choose Fincopx?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg">
              <div className="text-yellow-400">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl text-yellow-400 font-bold mb-4 text-center">How It Works</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg transition duration-300 hover:bg-yellow-600 hover:text-black"
            >
              <div className="text-yellow-400">{step.icon}</div>
              <p className="text-gray-300 font-medium">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="text-center mt-12">
        <h2 className="text-xl font-bold text-yellow-500">Need Help Applying?</h2>
        <p className="text-gray-300 mt-2">Fill out the contact form or reach out to our team for assistance.</p>
        <button onClick={ ()=>navigate('/apply')} className="mt-4 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
  );
};
