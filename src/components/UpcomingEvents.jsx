import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

// Sample upcoming events data
export const upcomingEventsData = [
  {
    id: "upcoming-1",
    title: "AI Innovation Summit 2025",
    description: "Join industry leaders to explore the latest advancements in artificial intelligence and machine learning.",
    details: "The AI Innovation Summit brings together thought leaders, researchers, and practitioners to discuss cutting-edge developments in artificial intelligence. Sessions will cover machine learning algorithms, neural networks, AI ethics, and practical applications across industries.",
    image: "event1.jpg", // Using placeholder image
    category: "Technology",
    location: "Tech Hub, Bangalore",
    date: "May 15, 2025",
    link: "https://example.com/ai-summit",
    isUpcoming: true,
    registrationOpen: true
  },
  {
    id: "upcoming-2",
    title: "Sustainable Finance Conference",
    description: "Explore sustainable investment strategies and ESG practices reshaping the financial landscape.",
    details: "This conference focuses on environmental, social, and governance (ESG) criteria in financial decision-making. Learn about sustainable investment opportunities, green bonds, impact investing, and regulatory developments in the field of sustainable finance.",
    image: "event2.jpg", // Using placeholder image
    category: "Finance",
    location: "Financial District, Mumbai",
    date: "June 3, 2025",
    link: "https://example.com/sustainable-finance",
    isUpcoming: true,
    registrationOpen: true
  },
  {
    id: "upcoming-3",
    title: "Healthcare Innovation Workshop",
    description: "An interactive workshop focusing on digital transformation in healthcare and medical technology advancements.",
    details: "This workshop will cover telemedicine solutions, AI in diagnostics, wearable medical devices, and healthcare data management. Participants will engage in hands-on sessions to develop innovative solutions for current healthcare challenges.",
    image: "event3.jpg", // Using placeholder image
    category: "Healthcare",
    location: "Medical Research Center, Delhi",
    date: "July 12, 2025",
    link: "https://example.com/healthcare-workshop",
    isUpcoming: true,
    registrationOpen: true
  }
];

const UpcomingEvents = ({ events, handleEventClick, IMAGE_BASE_URL }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map(event => (
        <article
          key={event.id}
          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="relative h-48">
            <img
              src={`${IMAGE_BASE_URL}/${event.image}`}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-0 right-0 bg-[#65B741] text-white px-3 py-1 rounded-bl-lg">
              Upcoming
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#65B741] transition-colors">
              {event.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <button 
                onClick={() => handleEventClick(event)}
                className="flex items-center text-[#65B741] hover:text-[#54a332] transition-colors"
              >
                <FaExternalLinkAlt className="mr-2" /> View Details 
                <span className="ml-4 text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {event.category}
                </span>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default UpcomingEvents;