import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Course1 from '../assets/course1.mp4';
import Course2 from '../assets/course2.mp4';
import Course3 from '../assets/course3.mp4';
import Course4 from '../assets/course3.mp4';
import Course5 from '../assets/course1.mp4';
import Course6 from '../assets/course2.mp4';
import Course7 from '../assets/course2.mp4';
import Course8 from '../assets/course3.mp4';
import Course9 from '../assets/course1.mp4';

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Start with no video selected
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    // Fetch the course data based on courseId
    const fetchCourse = async () => {
      // Simulate fetching data based on courseId
      const coursesData = {
          1: {
        title: "React for Beginners",
        description: "Learn the basics of React.",
        videos: [
          { id: 1, title: "Introduction to React", videoUrl: Course1, question: "What is React?", options: ["A library", "A framework", "A language"], correctAnswer: "A library" },
          { id: 2, title: "Components and Props", videoUrl: Course2, question: "What is a component in React?", options: ["A function", "A UI element", "Both"], correctAnswer: "Both" },
          { id: 3, title: "State and Lifecycle", videoUrl: Course3, question: "What is state in React?", options: ["A function", "An object", "A component"], correctAnswer: "An object" },
        ]
      },
      2: {
        title: "Advanced JavaScript",
        description: "Master JavaScript concepts.",
        videos: [
          { id: 1, title: "Closures", videoUrl: Course4, question: "What is a closure?", options: ["A function", "A scope", "Both"], correctAnswer: "Both" },
          { id: 2, title: "Async Programming", videoUrl: Course5, question: "What does async mean?", options: ["Synchronous", "Asynchronous", "Sequential"], correctAnswer: "Asynchronous" },
          { id: 3, title: "Promises", videoUrl: Course6, question: "What is a Promise?", options: ["An object", "A function", "A syntax"], correctAnswer: "An object" },
        ]
      },
      3: {
        title: "Node.js Essentials",
        description: "Learn the fundamentals of Node.js.",
        videos: [
          { id: 1, title: "Introduction to Node.js", videoUrl: Course7, question: "What is Node.js?", options: ["A runtime", "A framework", "A library"], correctAnswer: "A runtime" },
          { id: 2, title: "Modules in Node.js", videoUrl: Course8, question: "What is a module?", options: ["A class", "A file", "A function"], correctAnswer: "A file" },
          { id: 3, title: "Event Loop", videoUrl: Course9, question: "What does the event loop do?", options: ["Runs sync code", "Handles async operations", "Stops execution"], correctAnswer: "Handles async operations" },
        ]
      }
    };
      setCourse(coursesData[courseId]);
    };

    fetchCourse();
  }, [courseId]);

  const handleVideoEnd = () => {
    setWatchedVideos((prev) => [...new Set([...prev, currentVideoIndex])]);
    setQuizCompleted(false);
  };

  const handleQuizSubmit = () => {
    const correctAnswer = course.videos[currentVideoIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setQuizCompleted(true);
    } else {
      alert("Incorrect answer. Please try again.");
    }
  };

  if (!course) return <div className="text-center text-lg font-semibold py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Course Title */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">{course.title}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Video Player Section */}
        <div className="lg:w-2/3">
          {currentVideoIndex !== null && (
            <>
              <div className="video-player mb-6">
                <video
                  controls
                  controlsList="nodownload"
                  className="w-full max-w-full rounded-lg shadow-lg"
                  src={course.videos[currentVideoIndex].videoUrl}
                  onEnded={handleVideoEnd}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Quiz Section */}
              <div className="quiz-section max-w-2xl mx-auto p-6 rounded-lg shadow-lg bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Quiz</h2>
                <p className="mb-2">{course.videos[currentVideoIndex].question}</p>
                <div className="space-y-2">
                  {course.videos[currentVideoIndex].options.map((option, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="mr-2"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                <button
                  onClick={handleQuizSubmit}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit Answer
                </button>
                {quizCompleted && (
                  <p className="text-green-500 mt-3">Correct! You can now proceed to the next video.</p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Sidebar: Course Videos List */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Course Videos</h2>
          <ul className="space-y-3">
            {course.videos.map((video, index) => (
              <li
                key={video.id}
                className={`cursor-pointer flex items-center justify-between p-4 rounded-lg shadow-md ${
                  currentVideoIndex === index ? 'bg-blue-100' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => {
                  setCurrentVideoIndex(index);
                  setSelectedAnswer(null);
                  setQuizCompleted(false);
                }}
              >
                <div className="flex items-center">
                  <span className="text-lg font-medium text-gray-700">{video.title}</span>
                </div>
                {watchedVideos.includes(index) && (
                  <span className="text-green-500 font-bold text-xl">✓</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
