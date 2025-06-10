
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

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
              src={event.image ? `${IMAGE_BASE_URL}/${event.image}` : 'path/to/placeholder-image.jpg'} // Fallback image
              alt={event.title || "Event Image"}
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
            <p className="text-gray-600 mb-4 line-clamp-2">
              {event.description || "No description available"}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <button
                onClick={() => handleEventClick(event)}
                className="flex items-center text-[#65B741] hover:text-[#54a332] transition-colors"
              >
                <FaExternalLinkAlt className="mr-2" /> View Details
                <span className="ml-4 text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {event.category || "Uncategorized"}
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