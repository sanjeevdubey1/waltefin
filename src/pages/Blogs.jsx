import React from 'react';
import { Link } from 'react-router-dom';

const blogList = [
  {
  title: "Top 5 Home Loan Options for First-Time Buyers in Navi Mumbai (2025)",
  slug: "home-loan-options",
  date: "June 10, 2025",
  description: "Explore Navi Mumbai's top 5 home loan options with details on rates, terms, and benefits for first-time buyers.",
  image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Top Business Loan Tips in 2025",
    slug: "business-loan-tips",
    date: "June 23, 2025",
    description: "Avoid mistakes and learn how to qualify faster with our business loan tips.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // business finance
  },
  {
  

  title: "Best Home Loan Provider in Panvel: Why FincoX Stands Out",
  slug: "best-home-loan-provider",
  date: "July 2025",
  description: "Looking for the best home loan provider in Panvel? Discover why FincoX is the top choice with low interest rates, fast approvals, and personalized service.",
  image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80",
  
},
 {
  

  title: "How to Improve Your CIBIL Score Fast in 2025",
  slug: "how-to-improve-cibil-score-india",
  date: "July 2025",
  description: "Learn 15+ proven tips to improve your CIBIL score fast in India. Boost your credit health, get easier loan approvals, and secure better interest rates in 2025.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
}, {
  

  title: "How to Get a Home Loan in India: Complete Guide 2025",
  slug: "how-to-get-a-home-loan-india",
  date: "July 2025",
  description: "Step-by-step guide on how to get a home loan in India in 2025. Learn about eligibility, documents, process, and tips to improve approval chances.",
  image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
}


  
];

const Blogs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Hero Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
          📘 FincopX Finance & Loan Blogs
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore expert tips, loan insights, and financial guidance for individuals, agents, and businesses.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogList.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-800 mb-1">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
              <Link
                to={`/blog/${blog.slug}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
