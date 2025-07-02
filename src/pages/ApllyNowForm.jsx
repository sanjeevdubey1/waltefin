import React from "react";

const ApplyNowForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Enquiry Form
        </h1>

        <div className="w-full h-[700px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSci2LDm61j10Aas76smTiXv3doAm45Xg4QoCIVAwN5QTxqdIg/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Loan Application Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ApplyNowForm;
