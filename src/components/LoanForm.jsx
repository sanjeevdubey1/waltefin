import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const phoneRegex = /^[6-9]\d{9}$/;

export const LoanForm = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: '',
    amount: '',
    email: ''
  });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!phoneRegex.test(formData.phone)) errs.phone = 'Invalid phone number';
    if (!formData.loanType) errs.loanType = 'Select a loan type';
    if (!formData.amount || formData.amount <= 0) errs.amount = 'Enter a valid loan amount';
    if (!formData.email.includes('@')) errs.email = 'Enter a valid email address';
    if (!acceptTerms) errs.terms = 'You must accept the terms and conditions';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["phone", "amount"].includes(name)) {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/movweakv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setVisible(false);
        setSubmitted(true);
        setFormData({ name: '', phone: '', loanType: '', amount: '', email: '' });
        setAcceptTerms(false);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => navigate('/'), 300);
  };

  const handleSuccessClose = () => {
    setSubmitted(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-cyan-200 to-black px-4 py-4 relative flex items-center justify-center overflow-auto">
      {visible && (
        <button
          onClick={handleClose}
          className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow z-50"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
      )}

      <AnimatePresence>
        {visible && (
          <motion.div
            className="w-full max-w-5xl bg-black shadow-2xl rounded-xl p-6 flex flex-col md:flex-row justify-between text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
          >
            <div className="w-full md:w-1/2 pr-4 hidden md:block">
              <h1 className="text-3xl font-bold text-yellow-600 mb-4">Fincopx Loans</h1>
              <p className="text-sm text-gray-200 mb-4">
                We help you get the best loan options tailored to your needs. Whether you're looking for a personal loan,
                business loan, or a home loan – our simple process ensures fast and transparent services. Enjoy seamless
                digital onboarding, expert assistance, and multiple lending partners under one platform.
              </p>
              <p className="text-xs text-gray-400">Boost your chances of approval by submitting accurate details. Get started now!</p>
            </div>

            <div className="w-full md:w-1/2 border-l border-gray-600 pl-4">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4" noValidate>
                {[{ label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '10-digit mobile number', maxLength: 10 },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email' },
                  { label: 'Loan Amount', name: 'amount', type: 'number', placeholder: 'Enter loan amount' }
                ].map(({ label, name, type, placeholder, maxLength }) => (
                  <div key={name}>
                    <label className="block text-sm mb-1" htmlFor={name}>{label}</label>
                    <input
                      id={name}
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={formData[name]}
                      required
                      maxLength={maxLength}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded text-sm ${errors[name] ? 'border-red-500' : ''}`}
                    />
                    {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
                  </div>
                ))}

                <div>
                  <label className="block text-sm mb-1" htmlFor="loanType">Loan Type</label>
                  <select
                    id="loanType"
                    name="loanType"
                    required
                    value={formData.loanType}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded text-sm ${errors.loanType ? 'border-red-500' : ''}`}
                  >
                    <option className='text-black' value="">Select</option>
                    <option className='text-black' value="Personal Loan">Personal Loan</option>
                    <option className='text-black' value="Business Loan">Business Loan</option>
                    <option className='text-black' value="Property Loan">Home Loan</option>
                  </select>
                  {errors.loanType && <p className="text-red-500 text-xs mt-1">{errors.loanType}</p>}
                </div>

                <div className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="terms" className="text-gray-300">
                    I accept the <Link to="/terms" className="underline text-blue-400 hover:text-blue-600">terms & conditions</Link>
                  </label>
                </div>
                {errors.terms && <p className="text-red-500 text-xs">{errors.terms}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-yellow-500 text-black px-8 py-2 rounded font-semibold hover:bg-yellow-600 transition text-sm flex items-center justify-center gap-2 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  )}
                  Submit Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {submitted && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-200 rounded-lg p-8 max-w-md text-center shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Thank you!</h3>
              <p className="mb-6 text-black">Your form is submitted successfully.</p>
              <button
                onClick={handleSuccessClose}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
