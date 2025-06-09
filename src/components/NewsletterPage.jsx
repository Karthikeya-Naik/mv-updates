import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const newsletters = [
  {
    id: 1,
    title: "Tech Innovation Quarterly",
    previewText:
      "Exploring groundbreaking technologies reshaping our digital landscape...",
    date: "Summer 2024",
    coverImage: "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg",
    fullPdfLink: "/",
    category: "Technology",
  },
  {
    id: 2,
    title: "Global Leadership Insights",
    previewText:
      "Exclusive interviews with top executives on navigating modern business challenges...",
    date: "Spring 2024",
    coverImage: "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg",
    fullPdfLink: "/",
    category: "Business",
  },
  {
    id: 3,
    title: "Sustainability Trends Report",
    previewText:
      "Comprehensive analysis of environmental innovations and corporate sustainability strategies...",
    date: "Winter 2024",
    coverImage: "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg",
    fullPdfLink: "/",
    category: "Environment",
  },
];

const NewsletterPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories for filter
  const categories = ["All", ...new Set(newsletters.map((nl) => nl.category))];

  // Memoized filtered newsletters
  const filteredNewsletters = useMemo(() => {
    return newsletters.filter((newsletter) => {
      const matchesSearch =
        newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        newsletter.previewText
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        newsletter.date.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "" ||
        selectedCategory === "All" ||
        newsletter.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8 mb-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Newsletters</h1>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto flex flex-row justify-between mb-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search newsletters..."
            className="w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65B741]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <select
          className="w-1/4 md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65B741]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* No Results State */}
      {filteredNewsletters.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No newsletters found matching your search or filter.
        </div>
      )}

      {/* Newsletter Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredNewsletters.map((newsletter) => (
          <div
            key={newsletter.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative">
              <img
                src={newsletter.coverImage}
                alt={newsletter.title}
                className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-semibold">{newsletter.title}</h3>
                <p className="text-sm mt-2">{newsletter.previewText}</p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{newsletter.title}</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">{newsletter.date}</p>
                <span className="text-sm bg-[#65B741] text-white px-2 py-1 rounded">
                  {newsletter.category}
                </span>
              </div>
              <div className="mt-4">
                <a
                  href={newsletter.fullPdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-[#65B741] text-white px-4 py-2 rounded hover:bg-[#54a332] transition-colors"
                >
                  Read Full Newsletter
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsletterPage;
