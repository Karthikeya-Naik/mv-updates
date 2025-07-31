import React, { useState } from "react";
import { FaExternalLinkAlt, FaCalendarAlt, FaUserPlus } from "react-icons/fa";
import EventRegistrationModal from "./EventRegistrationModal";

const DEFAULT_IMAGE = "https://backend.marichiventures.com/admin/pages/uploads/upcoming-events/default_event_image.jpg";

const UpcomingEvents = ({ events, handleEventClick, IMAGE_BASE_URL }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <article
            key={event.id}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48">
              <img
                src={event.image ? `${IMAGE_BASE_URL}/${event.image}` : DEFAULT_IMAGE}
                alt={event.title || "Event Image"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-0 right-0 bg-[#65B741] text-white px-3 py-1 rounded-bl-lg">
                Upcoming
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#65B741] transition-colors">
                {event.title || "Untitled Event"}
              </h3>
              
              {event.date && (
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <FaCalendarAlt className="mr-2 text-[#65B741]" />
                  <span>{event.date}</span>
                </div>
              )}
              
              {event.fee && (
                <div className="flex items-center text-gray-600 mb-2 text-sm">
                  <span className="font-medium">Fee:</span>
                  <span className="ml-1">{event.fee}</span>
                </div>
              )}
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {event.description || "No description available"}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <button
                  onClick={() => handleEventClick(event)}
                  className="flex items-center text-[#65B741] hover:text-[#54a332] transition-colors text-sm"
                >
                  <FaExternalLinkAlt className="mr-2" /> View Details
                </button>
                
                {event.registrationOpen && (
                  <button
                    onClick={() => handleRegisterClick(event)}
                    className="flex items-center bg-[#65B741] hover:bg-[#54a332] text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
                  >
                    <FaUserPlus className="mr-2" /> Register
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {showRegistrationModal && selectedEvent && (
        <EventRegistrationModal
          event={selectedEvent}
          onClose={() => setShowRegistrationModal(false)}
          IMAGE_BASE_URL={IMAGE_BASE_URL}
          DEFAULT_IMAGE={DEFAULT_IMAGE}
        />
      )}
    </>
  );
};

export default UpcomingEvents;