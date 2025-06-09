import React from "react";
import {
  Calendar,
  MessageSquare,
  BookOpen,
  Video,
  ArrowRight,
  Library 
} from "lucide-react";
import events from "../assets/events_hero.png";
import webinars from "../assets/webinars_hero.png";
import blogs from "../assets/blogs_hero.png";
import newsletters from "../assets/newsletters_hero.png";
import courses from "../assets/courses_hero.png";

import { Link } from "react-router-dom";

export default function ActivitiesHeroSection() {
  // Simplified activity cards data with only essential fields
  const activityCards = [
    {
      id: 1,
      title: "Events",
      description: "In-person networking opportunities",
      icon: Calendar,
      image: events,
      link: "/events",
      under: "Happenings",
    },
    {
      id: 2,
      title: "Webinars",
      description: "Interactive online learning sessions",
      icon: Video,
      image: webinars,
      link: "/webinars",
      under: "Happenings",
    },
    {
      id: 3,
      title: "Blog Posts",
      description: "Expert articles on industry trends",
      icon: BookOpen,
      image: blogs,
      link: "/resources/blogs",
      under: "Resources",
    },
    {
      id: 4,
      title: "Newsletters",
      description: "Monthly insights in your inbox",
      icon: MessageSquare,
      image: newsletters,
      link: "/resources/newsletters",
      under: "Resources",
    },
    {
      id: 5,
      title: "Courses",
      description: "Expand your skills with our courses",
      icon: Library,
      image: courses,
      link: "/c",
      under: "Happenings",
    },
  ];

  // Function to determine text color based on category
  const getCategoryColor = (category) => {
    switch (category) {
      case "Happenings":
        return "text-blue-600";
      case "Resources":
        return "text-amber-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-green-50 to-white py-8">
        <div className="container mx-auto px-4">
          {/* Hero content */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Stay Connected with Our Regular Activities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our monthly resources designed to help you grow, learn,
              and connect with our community
            </p>
          </div>

          {/* Activity cards grid - improved responsive grid */}
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-6">
            {activityCards.map((card) => {
              const IconComponent = card.icon;
              const categoryColorClass = getCategoryColor(card.under);

              return (
                <div
                  key={card.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                >
                  {/* Top Image Section */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Icon badge */}
                    <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                      <IconComponent className="text-green-600" size={20} />
                    </div>
                  </div>

                  {/* Content Section Below Image */}
                  <div className="p-4 flex flex-col flex-grow">
                    {/* Title and Description */}
                    <h3 className="font-bold text-lg mb-2 text-green-600 group-hover:translate-x-1 transition-transform duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">
                      {card.description}
                    </p>
                    
                    {/* Category indicator */}
                    <div className="mt-auto">
                      <p className={`${categoryColorClass} text-xs font-medium mb-3`}>
                        Under: {card.under}
                      </p>

                      {/* CTA Button */}
                      <Link
                        to={card.link}
                        className="flex items-center justify-between w-full px-3 py-2 text-green-600 font-medium rounded-lg bg-green-50 hover:bg-green-100 transition-all duration-300"
                      >
                        <span>View All</span>
                        <ArrowRight
                          size={16}
                          className="transform group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center my-10">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-6 text-gray-600 text-base tracking-wide uppercase font-medium">
          Our Work Speaks
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </>
  );
}