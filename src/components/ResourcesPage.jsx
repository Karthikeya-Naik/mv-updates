import React from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaNewspaper } from 'react-icons/fa';

const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Resources</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Blogs Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <FaBlog className="text-[#65B741] text-4xl mr-4" />
              <h2 className="text-2xl font-semibold">Blogs</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Dive into our collection of insightful articles covering industry trends, 
              expert perspectives, and thought-provoking analysis.
            </p>
            <Link 
              to="/resources/blogPosts"
              className="bg-[#65B741] text-white px-4 py-2 rounded hover:bg-[#54a332] transition-colors"
            >
              View Blogs
            </Link>
          </div>
        </div>

        {/* Newsletters Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <FaNewspaper className="text-[#65B741] text-4xl mr-4" />
              <h2 className="text-2xl font-semibold">Newsletters</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Stay informed with our curated newsletters featuring 
              in-depth reports, industry insights, and exclusive content.
            </p>
            <Link 
              to="/resources/newsletters"
              className="bg-[#65B741] text-white px-4 py-2 rounded hover:bg-[#54a332] transition-colors"
            >
              View Newsletters
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;