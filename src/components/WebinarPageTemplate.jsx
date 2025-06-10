import React, { useState } from "react";
import { CalendarDays, Clock, ChevronLeft, ChevronRight, Youtube } from "lucide-react";
import { FaMicrophone } from "react-icons/fa";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  differenceInDays,
  isAfter,
  isBefore,
  startOfDay,
  addHours
} from "date-fns";

const WebinarPage = ({ tnpWebinars, ecWebinars }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [activeTab, setActiveTab] = useState("all");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Helper function to calculate days to go
  const getDaysToGo = (date) => {
    const today = startOfDay(new Date());
    const eventDate = startOfDay(new Date(date));
    return differenceInDays(eventDate, today);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedDate(new Date());
    setCurrentMonth(new Date());
  };

  const toggleDescription = (webinarId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [webinarId]: !prev[webinarId]
    }));
  };

  const getWebinarTiming = (webinar) => {
    const now = new Date();
    const webinarDate = new Date(webinar.date);
    
    const [hours, minutes, period] = webinar.time.match(/(\d+):(\d+)\s*(AM|PM)/).slice(1);
    let startHours = parseInt(hours);
    if (period === 'PM' && startHours !== 12) startHours += 12;
    if (period === 'AM' && startHours === 12) startHours = 0;
    
    webinarDate.setHours(startHours);
    webinarDate.setMinutes(parseInt(minutes));
    
    const durationHours = parseInt(webinar.duration);
    const endDate = addHours(webinarDate, durationHours);
    
    if (isBefore(now, webinarDate)) {
      return { status: "upcoming", isLive: false, endTime: endDate };
    } else if (isAfter(now, endDate)) {
      return { status: "past", isLive: false, endTime: endDate };
    } else {
      return { status: "upcoming", isLive: true, endTime: endDate };
    }
  };

  const handleRegisterClick = (registrationLink) => {
    if (!registrationLink) {
      alert("Stay tuned for Confirmation Dates");
      return;
    }
    window.open(registrationLink, '_blank');
  };

  const formatDate = (date, status, isFirstUpcoming) => {
    if (status === "upcoming") {
      if (isFirstUpcoming) {
        return format(date, "MMMM d, yyyy");
      } else {
        return format(date, "MMMM yyyy");
      }
    }
    return format(date, "MMMM d, yyyy");
  };

  const calculateTimeRange = (startTime, duration) => {
    const [time, period] = startTime.split(' ');
    const [hours, minutes] = time.split(':');
    let startHours = parseInt(hours);
    
    if (period === 'PM' && startHours !== 12) startHours += 12;
    if (period === 'AM' && startHours === 12) startHours = 0;
    
    const baseDate = new Date();
    baseDate.setHours(startHours, parseInt(minutes), 0);
    
    const endDate = addHours(baseDate, parseInt(duration));
    
    const endHours = endDate.getHours();
    const endMinutes = endDate.getMinutes();
    
    let endPeriod = 'AM';
    let displayEndHours = endHours;
    
    if (endHours >= 12) {
      endPeriod = 'PM';
      if (endHours > 12) displayEndHours -= 12;
    }
    if (endHours === 0) displayEndHours = 12;
    
    const endTimeStr = `${displayEndHours}:${endMinutes.toString().padStart(2, '0')} ${endPeriod}`;
    
    return `${startTime} - ${endTimeStr} (IST)`;
  };

  const isEcWebinar = (webinar) => {
    return ecWebinars && ecWebinars.some(ec => ec.id === webinar.id);
  };

  const WebinarCard = ({ webinar }) => {
    const timing = getWebinarTiming(webinar);
    const isUpcoming = timing.status === "upcoming";
    const isExpanded = expandedDescriptions[webinar.id];
    const daysToGo = getDaysToGo(webinar.date);
    const isToday = daysToGo === 0;
    const timeRange = calculateTimeRange(webinar.time, parseInt(webinar.duration));
    const isExecutiveCoaching = isEcWebinar(webinar);

    return (
      <div className="mb-6 bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="grid md:grid-cols-3 gap-4 p-6">
          <div className="md:col-span-1 relative h-40 md:h-48 flex items-center justify-center overflow-hidden rounded-lg bg-gray-100">
            {isUpcoming || isExecutiveCoaching ? (
              <img
                src={webinar.image}
                className="w-full h-full object-cover rounded-lg"
                alt={webinar.title}
                onError={(e) => { e.target.src = 'https://backend.marichiventures.com/admin/pages/uploads/webinars/default.jpg'; }}
              />
            ) : (
              <iframe
                className="w-full h-full rounded-lg"
                src={webinar.registrationLink}
                title="Webinar Recording"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
            <div className="absolute top-1 right-1 bg-white/90 px-4 py-1 text-xs font-semibold uppercase rounded-full shadow-md">
              {isUpcoming && (
                <span className={
                  timing.isLive ? "text-yellow-800" :
                  isToday ? "text-green-800" :
                  "text-blue-800"
                }>
                  {timing.isLive ? "LIVE NOW" :
                   isToday ? "LIVE TODAY" :
                   `${daysToGo} ${daysToGo === 1 ? 'DAY' : 'DAYS'} TO GO`}
                </span>
              )}
              {!isUpcoming && (
                <span className="text-red-800">PAST</span>
              )}
            </div>
          </div>

          <div className={`md:col-span-2 flex flex-col ${isUpcoming ? "justify-between space-y-3" : "items-center justify-center text-center space-y-4"}`}>
            <h3 className="text-2xl font-bold text-gray-900">{webinar.title}</h3>

            {webinar.speaker && (
              <p className="flex items-center text-sm text-gray-700 font-medium">
                <FaMicrophone className="mr-2 text-green-500" />
                Speaker: <span className="ml-1 text-gray-900">{webinar.speaker}</span>
              </p>
            )}

            {isUpcoming && (
              <>
                <div className="relative">
                  <p className={`text-base text-gray-700 ${isExpanded ? "" : "line-clamp-2 md:line-clamp-none"}`}>
                    {webinar.description}
                  </p>
                  <button 
                    className="text-green-600 text-sm font-medium mt-1 md:hidden"
                    onClick={() => toggleDescription(webinar.id)}
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                </div>

                <div className="space-y-2 text-sm text-gray-800">
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-2 text-green-600" />
                    <span>{formatDate(webinar.date, timing.status, webinar.isFirstUpcoming)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{timeRange}</span>
                  </div>
                </div>
              </>
            )}

            <div>
              {isUpcoming ? (
                <button
                  onClick={() => handleRegisterClick(webinar.registrationLink)}
                  className="bg-green-600 text-white text-base px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition"
                >
                  {timing.isLive ? "Join Now" : "Register"}
                </button>
              ) : !isExecutiveCoaching ? (
                <button
                  onClick={() => handleRegisterClick(webinar.registrationLink)}
                  className="bg-red-600 text-white text-base px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-red-700 transition"
                >
                  <Youtube size={20} /> View Recording
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getAllWebinars = () => {
    const allWebinars = [...(tnpWebinars || []), ...(ecWebinars || [])];
    return allWebinars.map(webinar => ({
      ...webinar,
      ...getWebinarTiming(webinar)
    }));
  };

  const getTnpWebinars = () => {
    return (tnpWebinars || []).map(webinar => ({
      ...webinar,
      ...getWebinarTiming(webinar)
    }));
  };

  const getEcWebinars = () => {
    return (ecWebinars || []).map(webinar => ({
      ...webinar,
      ...getWebinarTiming(webinar)
    }));
  };

  const getCalendarDays = () => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start, end });
  };

  const getFilteredWebinars = () => {
    let currentWebinars = [];
    switch(activeTab) {
      case "tnp":
        currentWebinars = tnpWebinars || [];
        break;
      case "ec":
        currentWebinars = ecWebinars || [];
        break;
      case "all":
        currentWebinars = [...(tnpWebinars || []), ...(ecWebinars || [])];
        break;
      default:
        currentWebinars = [];
    }

    const processedWebinars = currentWebinars.map(webinar => ({
      ...webinar,
      ...getWebinarTiming(webinar)
    }));
    return {
      upcoming: processedWebinars.filter(w => w.status === "upcoming"),
      past: processedWebinars.filter(w => w.status === "past")
    };
  };

  const getCurrentWebinars = () => {
    let webinars = [];
    switch(activeTab) {
      case "tnp":
        webinars = tnpWebinars || [];
        break;
      case "ec":
        webinars = ecWebinars || [];
        break;
      case "all":
        webinars = [...(tnpWebinars || []), ...(ecWebinars || [])];
        break;
      default:
        webinars = [];
    }
    
    return webinars.map(webinar => ({
      ...webinar,
      ...getWebinarTiming(webinar)
    }));
  };

  const webinarsWithStatus = (() => {
    switch(activeTab) {
      case "tnp":
        return getTnpWebinars();
      case "ec":
        return getEcWebinars();
      default:
        return getAllWebinars();
    }
  })();

  const { upcoming, past } = getFilteredWebinars();
  const currentWebinars = getCurrentWebinars();
  
  const todayWebinars = currentWebinars.filter(w => 
    isSameDay(new Date(w.date), new Date())
  );
  
  const selectedWebinar = currentWebinars.find(w => 
    isSameDay(new Date(w.date), selectedDate)
  );

  const SelectedWebinarDetails = ({ selectedWebinar }) => {
    const timing = getWebinarTiming(selectedWebinar);
    const daysToGo = getDaysToGo(selectedWebinar.date);
    const isToday = daysToGo === 0;
    const isExecutiveCoaching = isEcWebinar(selectedWebinar);
    const timeRange = calculateTimeRange(selectedWebinar.time, parseInt(selectedWebinar.duration));

    return (
      <div className="bg-white border rounded-lg p-4 mt-4">
        <h2 className="text-lg font-semibold mb-4">Selected Webinar</h2>
        <div className="space-y-4">
          {timing.status === "past" && !isExecutiveCoaching ? (
            <>
              <h3 className="font-semibold text-lg">{selectedWebinar.title}</h3>
              {selectedWebinar.speaker && (
                <p className="flex items-center text-sm text-gray-700 font-medium">
                  <FaMicrophone className="mr-2 text-green-500" />
                  Speaker: <span className="ml-1 text-gray-900">{selectedWebinar.speaker}</span>
                </p>
              )}
              <div className="w-full aspect-video">
                <iframe
                  src={selectedWebinar.registrationLink}
                  title="Webinar Recording"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : (
            <div className="flex gap-4 items-center">
              <img 
                src={selectedWebinar.image} 
                alt={selectedWebinar.title} 
                className="w-20 h-20 object-cover rounded-full flex-shrink-0"
                onError={(e) => { e.target.src = 'https://backend.marichiventures.com/admin/pages/uploads/webinars/default.jpg'; }}
              />
              <div>
                <h3 className="font-semibold text-lg">{selectedWebinar.title}</h3>
                {selectedWebinar.speaker && (
                  <p className="flex items-center text-sm text-gray-700 font-medium">
                    <FaMicrophone className="mr-2 text-green-500" />
                    Speaker: <span className="ml-1 text-gray-900">{selectedWebinar.speaker}</span>
                  </p>
                )}
                <div className="mt-2">
                  <span className={`text-sm font-medium rounded-full px-3 py-1 ${
                    timing.isLive ? "bg-yellow-100 text-yellow-800" :
                    isToday ? "bg-green-100 text-green-800" :
                    timing.status === "past" ? "bg-red-100 text-red-800" :
                    "bg-blue-100 text-blue-800"
                  }`}>
                    {timing.isLive ? "LIVE NOW" :
                     isToday ? "LIVE TODAY" :
                     timing.status === "past" ? "PAST" :
                     `${daysToGo} ${daysToGo === 1 ? 'day' : 'days'} to go`}
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {(timing.status === "upcoming" || (timing.status === "past" && isExecutiveCoaching)) && (
            <>
              <p className="text-sm text-gray-600">{selectedWebinar.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  {formatDate(selectedWebinar.date, timing.status, selectedWebinar.isFirstUpcoming)}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {timeRange}
                </div>
              </div>
            </>
          )}

          {timing.status === "upcoming" ? (
            <button
              onClick={() => handleRegisterClick(selectedWebinar.registrationLink)}
              className="w-full mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              {timing.isLive ? "Join Now" : "Register"}
            </button>
          ) : !isExecutiveCoaching ? (
            <div className="flex items-center">
              <a
                href={selectedWebinar.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border text-white bg-red-600 hover:bg-red-700 rounded-md transition"
              >
                <Youtube className="w-5 h-5" />
                <span>View Recording</span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6 mb-4">
      <h1 className="text-3xl font-bold mb-2">Webinars</h1>
      <p className="text-gray-600 mb-8">
        By default, all webinars are displayed below—use the category filter to view webinars specific to your area of interest.
      </p>

      <div className="bg-white z-10 pb-4 border-b">
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => handleTabChange("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "all" ? "bg-green-200 text-green-800" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Webinars
          </button>
          <button
            onClick={() => handleTabChange("tnp")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "tnp" ? "bg-green-200 text-green-800" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            R-Programming Webinars
          </button>
          <button
            onClick={() => handleTabChange("ec")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "ec" ? "bg-green-200 text-green-800" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Executive Coaching Webinars
          </button>
        </div>

        {todayWebinars.length > 0 && (
          <div className="bg-gradient-to-br from-white to-green-50/50 border border-green-100 rounded-2xl shadow-sm mb-6 overflow-hidden">
            <div className="px-6 py-4 border-b border-green-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl shadow-sm">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Happening Today</h2>
                    <p className="text-sm text-gray-600 mt-1">Join our live sessions and learn from experts</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium text-sm shadow-sm">
                  {todayWebinars.length} Live {todayWebinars.length === 1 ? 'Session' : 'Sessions'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div className="order-1 lg:order-2">
          <div className="bg-white border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Schedule</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-medium">{format(currentMonth, "MMMM yyyy")}</span>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                  {day}
                </div>
              ))}
              {getCalendarDays().map((day, idx) => {
                const hasWebinar = webinarsWithStatus.some((w) => isSameDay(w.date, day));
                const webinarOnDay = webinarsWithStatus.find((w) => isSameDay(w.date, day));
                const timing = webinarOnDay ? getWebinarTiming(webinarOnDay) : null;
                const isToday = isSameDay(day, new Date());
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(day)}
                    className={`p-2 text-sm rounded-lg transition-colors
                      ${!isSameMonth(day, currentMonth) ? "text-gray-400" : "text-gray-800"}
                      ${
                        hasWebinar && timing?.status === "past"
                          ? "bg-red-100 text-red-700"
                          : hasWebinar && timing?.status === "upcoming"
                            ? timing?.isLive
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                            : isToday
                              ? "bg-blue-200 text-blue-900 font-bold"
                              : ""
                      }
                      ${isSameDay(day, selectedDate) ? "border-2 border-green-500" : ""}
                      hover:bg-gray-100
                    `}
                  >
                    {format(day, "d")}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedWebinar && (
            <SelectedWebinarDetails selectedWebinar={selectedWebinar} />
          )}
        </div>

        <div className="order-2 lg:order-1 lg:col-span-2">
          <div>
            <h2 className="text-xl font-semibold mb-6">Upcoming Webinars</h2>
            {upcoming.map((webinar) => (
              <WebinarCard key={webinar.id} webinar={webinar} />
            ))}

            {upcoming.length === 0 && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">No Upcoming Webinars</h3>
                <p className="text-sm mt-1">
                  Stay tuned for upcoming webinars and events! Sign up for updates to be notified when new sessions are available.
                </p>
              </div>
            )}

            {past.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-6 mt-12">Past Webinars</h2>
                {past.map((webinar) => (
                  <WebinarCard key={webinar.id} webinar={webinar} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarPage;