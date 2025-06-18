import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const phoneRegex = /^[6-9]\d{9}$/;
const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const aadharRegex = /^\d{12}$/;

export const LoanForm = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    loanType: '',
    amount: '',
    occupation: '',
    pan: '',
    aadhar: '',
  });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!phoneRegex.test(formData.phone)) errs.phone = 'Invalid phone number';
    if (!(formData.age >= 18 && formData.age <= 100)) errs.age = 'Age must be between 18 and 100';
    if (!formData.loanType) errs.loanType = 'Select a loan type';
    if (!formData.amount || formData.amount <= 0) errs.amount = 'Enter a valid loan amount';
    if (!formData.occupation.trim()) errs.occupation = 'Occupation is required';
    if (!panRegex.test(formData.pan.toUpperCase())) errs.pan = 'Invalid PAN format';
    if (formData.aadhar && !aadharRegex.test(formData.aadhar)) errs.aadhar = 'Invalid Aadhar number';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pan') {
      setFormData({ ...formData, [name]: value.toUpperCase() });
    } else if (['phone', 'aadhar', 'age', 'amount'].includes(name)) {
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
        setFormData({
          name: '',
          phone: '',
          age: '',
          loanType: '',
          amount: '',
          occupation: '',
          pan: '',
          aadhar: '',
        });
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
    setTimeout(() => navigate(-1), 300);
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
            className="w-full max-w-3xl bg-black shadow-2xl rounded-xl p-6 flex flex-col justify-between text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
          >
            <div>
              <h1 className="text-3xl font-bold text-yellow-600 text-center mb-1 tracking-wide">Fincopx</h1>
              <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">Loan Enquiry Form</h2>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow" noValidate>
              {[
                { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name' },
                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '10-digit mobile number', maxLength: 10 },
                { label: 'Age', name: 'age', type: 'number', placeholder: 'Your age (18-100)' },
                { label: 'Loan Amount', name: 'amount', type: 'number', placeholder: 'Enter loan amount' },
                { label: 'PAN Number', name: 'pan', type: 'text', placeholder: 'ABCDE1234F', maxLength: 10 },
                { label: 'Aadhar Number (Optional)', name: 'aadhar', type: 'text', placeholder: '12-digit Aadhar number', maxLength: 12 },
              ].map(({ label, name, type, placeholder, maxLength }) => (
                <div key={name}>
                  <label className="block text-sm mb-1" htmlFor={name}>{label}</label>
                  <input
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={formData[name]}
                    required={name !== 'aadhar'}
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
                  <option value="">Select</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Business Loan">Business Loan</option>
                  <option value="Property Loan">Property Loan</option>
                </select>
                {errors.loanType && <p className="text-red-500 text-xs mt-1">{errors.loanType}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="occupation">Occupation</label>
                <select
                  id="occupation"
                  name="occupation"
                  required
                  value={formData.occupation}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded text-sm ${errors.occupation ? 'border-red-500' : ''}`}
                >
                  <option value="">Select occupation</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Business">Business</option>
                  <option value="Others">Others</option>
                </select>
                {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>}
              </div>
            </form>

            <div className="flex flex-col items-center gap-2 mt-4 w-full">
              <Link to="/terms" className="text-blue-600 underline hover:text-blue-800 transition text-xs">
                Read Terms & Conditions ©
              </Link>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full sm:w-auto bg-yellow-500 text-black px-8 py-2 rounded font-semibold hover:bg-yellow-600 transition text-sm flex items-center justify-center gap-2 ${
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
