import React, { useState, useEffect, useMemo } from "react";
import { FaExternalLinkAlt, FaLink, FaCalendarAlt } from "react-icons/fa";
import UpcomingEvents from "./UpcomingEvents";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('all'); // 'all' or 'upcoming'

  const BASE_URL = "https://backend.marichiventures.com/admin/pages/events-api.php";
  const UPCOMING_BASE_URL = "https://backend.marichiventures.com/admin/pages/upcoming-events-api.php";
  const IMAGE_BASE_URL = "https://backend.marichiventures.com/admin/pages/uploads/events";
  const UPCOMING_IMAGE_BASE_URL = "https://backend.marichiventures.com/admin/pages/uploads/upcoming-events";
  const DEFAULT_IMAGE = "https://backend.marichiventures.com/admin/pages/uploads/upcoming-events/default_event_image.jpg";

  // Fetch events data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // Fetch past events
        const eventsResponse = await fetch(BASE_URL);
        if (!eventsResponse.ok) {
          throw new Error(`Failed to fetch past events: ${eventsResponse.statusText}`);
        }
        const eventsData = await eventsResponse.json();
        
        // Fetch upcoming events
        const upcomingResponse = await fetch(UPCOMING_BASE_URL);
        if (!upcomingResponse.ok) {
          throw new Error(`Failed to fetch upcoming events: ${upcomingResponse.statusText}`);
        }
        const upcomingData = await upcomingResponse.json();

        if (eventsData.success && upcomingData.success) {
          setEvents(eventsData.events || []);
          setUpcomingEvents(upcomingData.upcomingEvents || []);
        } else {
          throw new Error(eventsData.message || upcomingData.message || 'Failed to load events');
        }
      } catch (err) {
        setError(`Unable to load events: ${err.message}`);
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  // Extract unique categories from the events based on current view mode
  const categories = useMemo(() => {
    let relevantEvents = viewMode === 'all' ? events : upcomingEvents;
    const categorySet = new Set(relevantEvents.map(event => event.category || 'Uncategorized'));
    return ['All', ...Array.from(categorySet)];
  }, [events, upcomingEvents, viewMode]);

  // Filter events based on search and category
  const filteredEvents = useMemo(() => {
    const relevantEvents = viewMode === 'all' ? events : upcomingEvents;
    
    return relevantEvents.filter(event => {
      const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (event.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, events, upcomingEvents, viewMode]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  const handleRegistration = () => {
    const feeText = selectedEvent.fee && selectedEvent.fee.toLowerCase().includes('free') 
      ? 'for free' 
      : `(Fee: ${selectedEvent.fee})`;
    alert(`Registration for "${selectedEvent.title}" ${feeText} will be processed shortly.`);
  };

  // Reset category when changing view modes
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    setActiveCategory('All');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#65B741] to-[#54a332] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Marichi Ventures Events</h1>
            <p className="text-xl opacity-90">
              Discover & relive our events: where innovation meets inspiration. Use the category filter to view events specific to your area of interest.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* View Mode Selection */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-md p-1 flex">
            <button
              onClick={() => handleViewModeChange('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                viewMode === 'all'
                  ? 'bg-[#65B741] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => handleViewModeChange('upcoming')}
              className={`px-6 py-2 rounded-full transition-all flex items-center ${
                viewMode === 'upcoming'
                  ? 'bg-[#65B741] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaCalendarAlt className="mr-2" /> Upcoming Events
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65B741] focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs px-4 py-1 sm:text-sm sm:px-6 sm:py-2 lg:text-base lg:px-8 lg:py-3 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-[#65B741] text-white'
                  : 'bg-[#eafce2] text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#65B741]"></div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-500 mb-2">Error loading events</h3>
            <p className="text-gray-700">{error}</p>
          </div>
        )}

        {/* Events Display */}
        {!loading && !error && (
          <>
            {viewMode === 'upcoming' ? (
              <UpcomingEvents 
                events={filteredEvents} 
                handleEventClick={handleEventClick}
                IMAGE_BASE_URL={UPCOMING_IMAGE_BASE_URL} 
              />
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                  <article
                    key={event.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <img
                        src={event.image ? `${IMAGE_BASE_URL}/${event.image}` : DEFAULT_IMAGE}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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
                        </button>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {event.category || 'Uncategorized'}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}

        {/* No results message */}
        {!loading && !error && filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No events found</h3>
            <p className="text-gray-500">
              {viewMode === 'upcoming' 
                ? "No upcoming events scheduled at the moment" 
                : "Try adjusting your search or filter settings"
              }
            </p>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedEvent.image ? `${viewMode === 'upcoming' ? UPCOMING_IMAGE_BASE_URL : IMAGE_BASE_URL}/${selectedEvent.image}` : DEFAULT_IMAGE} 
                alt={selectedEvent.title} 
                className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
              />
              <button 
                onClick={closeEventDetails}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                ✕
              </button>
              {selectedEvent.isUpcoming && (
                <div className="absolute top-4 left-4 bg-[#65B741] text-white px-3 py-1 rounded-lg">
                  Upcoming Event
                </div>
              )}
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{selectedEvent.title}</h2>
              <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
              
              {selectedEvent.details && (
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: selectedEvent.details }}></p>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {selectedEvent.location && (
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Location</h3>
                    <p className="text-gray-600">{selectedEvent.location}</p>
                  </div>
                )}
                {selectedEvent.date && (
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Date</h3>
                    <p className="text-gray-600">{selectedEvent.date}</p>
                  </div>
                )}
                {selectedEvent.fee && (
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Registration Fee</h3>
                    <p className="text-gray-600">{selectedEvent.fee}</p>
                  </div>
                )}
              </div>
              
              {selectedEvent.isUpcoming && selectedEvent.registrationOpen && (
                <div className="mb-6">
                  <button
                    onClick={handleRegistration}
                    className="bg-[#65B741] hover:bg-[#54a332] text-white font-medium px-6 py-3 rounded-lg shadow-md transition-colors flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    {selectedEvent.fee && selectedEvent.fee.toLowerCase().includes('free') 
                      ? 'Register Now (Free)' 
                      : `Register Now (${selectedEvent.fee})`}
                  </button>
                </div>
              )}
              
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
                <p className="text-gray-600">No additional resources available for this event.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;