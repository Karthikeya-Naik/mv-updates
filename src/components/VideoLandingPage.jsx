import React from 'react';
import { Link } from 'react-router-dom';

const VideoLandingPage = () => {
  // Sample video course data with prices
  const videoCourses = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React JS in this introductory course.",
      thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlA_9ZMnuZR4T7t_JytU897ylMnw",
      price: 29.99
    },
    {
      id: 2,
      title: "JavaScript Concepts",
      description: "Master advanced JavaScript concepts and patterns.",
      thumbnail: "https://i.ytimg.com/vi/o1IaduQICO0/hq720.jpg?sqp=-oaymwEjCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAPFYl4pR1_xBnScQfjMj7zgYbm-w",
      price: 39.99
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      description: "A complete guide to becoming a full-stack web developer.",
      thumbnail: "https://i.ytimg.com/vi/3qBXWUpoPHo/hq720.jpg?sqp=-oaymwEdCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGZCIlZRCJDf2mbhmQnJbEEXGfXw",
      price: 49.99
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Video Courses</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videoCourses.map((course) => (
          <div key={course.id} className="course-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            <Link to={`/course/${course.id}`} className="group flex-grow">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              </div>
            </Link>
            <div className="p-4 flex justify-between items-center">
              <p className="text-lg font-semibold text-green-600">${course.price.toFixed(2)}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLandingPage;
