
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Clock, BarChart2, User, DollarSign, Play, Briefcase, Mail, ExternalLink, ChevronLeft, BookOpen, Calendar, Globe, Tag } from 'lucide-react';

// const baseUrl = "https://backend.marichiventures.com/admin/pages/";
// export default function CourseDetailsPage() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [instructor, setInstructor] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Fetch courses data
//         const coursesResponse = await fetch(`${baseUrl}courses.php`);
//         const coursesData = await coursesResponse.json();
        
//         // Fetch instructors data
//         const instructorsResponse = await fetch(`${baseUrl}instructors.php`);
//         const instructorsData = await instructorsResponse.json();
        
//         if (coursesData.success && instructorsData.success) {
//           const foundCourse = coursesData.data.find(
//             (c) => c.id.toString() === courseId
//           );

//           if (foundCourse) {
//             setCourse(foundCourse);
            
//             const foundInstructor = instructorsData.data.find(
//               (i) => i.id === foundCourse.instructor_id.toString()
//             );
//             setInstructor(foundInstructor);
//           } else {
//             setError("Course not found");
//           }
//         } else {
//           setError("Error loading data");
//         }
//       } catch (err) {
//         setError("Failed to fetch data");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchData();
//   }, [courseId]);
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading course details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !course) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="bg-red-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold text-red-700 mb-2">Error</h2>
//           <p className="text-red-600">{error || "Course not found"}</p>
//           <button
//             className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
//             onClick={() => navigate("/")}
//           >
//             <ChevronLeft size={16} className="mr-1" />
//             Back to Courses
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Determine video source
//   const videoSource = course.video_file
//     ? `${baseUrl}${course.video_file_url}`
//     : course.video_url;

    
//   return (
//     <div className="bg-gray-50 mb-4 min-h-screen">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-green-600 to-green-500 text-white">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center">
//             <button
//               className="mr-4 bg-white/20 p-2 rounded-md hover:bg-white/30 transition"
//               onClick={() => navigate("/c")}
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div>
//               <h1 className="text-2xl font-bold">{course.title}</h1>
//               <p className="opacity-80 text-sm">
//                 {course.category} • {course.level}
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Left side - Video */}
//           <div className="w-full lg:w-2/3">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="relative aspect-video bg-black">
//                 {!isPlaying && (
//                   <div className="absolute inset-0">
//                     <img
//                       src={`${baseUrl}${course.thumbnail_url}`}
//                       alt={course.title}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/api/placeholder/800/450";
//                       }}
//                     />
//                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                       <button
//                         className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 transition transform hover:scale-110"
//                         onClick={() => setIsPlaying(true)}
//                       >
//                         <Play size={32} fill="white" />
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {isPlaying &&
//                   (course.video_url ? (
//                     <iframe
//                       src={videoSource}
//                       title={course.title}
//                       className="w-full h-full absolute inset-0"
//                       allowFullScreen
//                     ></iframe>
//                   ) : (
//                     <video
//                       src={videoSource}
//                       controls
//                       autoPlay
//                       className="w-full h-full absolute inset-0"
//                     ></video>
//                   ))}
//               </div>

//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-4">About this course</h2>
//                 <p className="text-gray-700 mb-6">{course.description}</p>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="flex items-center">
//                     <Clock size={20} className="text-green-600 mr-2" />
//                     <div>
//                       <p className="text-sm text-gray-500">Duration</p>
//                       <p className="font-medium">{course.duration}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center">
//                     <BarChart2 size={20} className="text-green-600 mr-2" />
//                     <div>
//                       <p className="text-sm text-gray-500">Level</p>
//                       <p className="font-medium">{course.level}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center">
//                     <Globe size={20} className="text-green-600 mr-2" />
//                     <div>
//                       <p className="text-sm text-gray-500">Language</p>
//                       <p className="font-medium">
//                         {course.language || "English"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Instructor and Course Details */}
//           <div className="w-full lg:w-1/3">
//             {/* Price Card */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
//               <div className="p-6">
//                 <div className="mb-4">
//                   {course.discount_price ? (
//                     <div className="flex items-center">
//                       <span className="text-3xl font-bold text-green-600">
//                         ${course.discount_price}
//                       </span>
//                       <span className="ml-2 text-lg text-gray-500 line-through">
//                         ${course.price}
//                       </span>
//                     </div>
//                   ) : (
//                     <span className="text-3xl font-bold text-green-600">
//                       ${course.price}
//                     </span>
//                   )}
//                 </div>

//                 <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition mb-4">
//                   Enroll Now
//                 </button>

//                 <div className="flex items-center justify-center text-gray-500 text-sm">
//                   <Calendar size={16} className="mr-1" />
//                   <span>
//                     Released: {new Date(course.created_at).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Instructor Card */}
//             {instructor && (
//               <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Instructor</h3>

//                   <div className="flex items-center mb-4">
//                     <img
//                       src={`${baseUrl}${instructor.profile_picture_url}`}
//                       alt={instructor.name}
//                       className="w-16 h-16 rounded-full object-cover mr-4"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/api/placeholder/150/150";
//                       }}
//                     />
//                     <div>
//                       <p className="font-bold text-lg">{instructor.name}</p>
//                       <p className="text-green-600 text-sm">
//                         {instructor.designation}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-gray-700 text-sm mb-4">{instructor.bio}</p>

//                   <div className="flex items-center text-gray-500 text-sm">
//                     <Mail size={16} className="mr-1" />
//                     <span>{instructor.email}</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Clock, BarChart2, User, DollarSign, Play, Briefcase, Mail, ExternalLink, ChevronLeft, BookOpen, Calendar, Globe, Tag, ChevronRight, ChevronLeft as ChevronLeftIcon, CheckCircle } from 'lucide-react';
import { useAuth0 } from "@auth0/auth0-react";

const baseUrl = "https://backend.marichiventures.com/admin/pages/";
const progressApiUrl = "https://backend.marichiventures.com/course-progress.php";

export default function CourseDetailsPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrollmentLoading, setEnrollmentLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [userProgress, setUserProgress] = useState({ progress_percentage: 0, last_session_completed: 0 });
  const [showCourseInfo, setShowCourseInfo] = useState(true);
  const { user, isAuthenticated } = useAuth0();

  // Fetch course data - runs once on mount
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);

        // Fetch courses data
        const coursesResponse = await fetch(`${baseUrl}courses.php`);
        const coursesData = await coursesResponse.json();
        
        // Fetch instructors data
        const instructorsResponse = await fetch(`${baseUrl}instructors.php`);
        const instructorsData = await instructorsResponse.json();
        
        // Fetch sessions data
        const sessionsResponse = await fetch(`${baseUrl}sessions.php?course_id=${courseId}`);
        const sessionsData = await sessionsResponse.json();
        
        if (coursesData.success && instructorsData.success) {
          const foundCourse = coursesData.data.find(
            (c) => c.id.toString() === courseId
          );

          if (foundCourse) {
            setCourse(foundCourse);
            
            const foundInstructor = instructorsData.data.find(
              (i) => i.id === foundCourse.instructor_id.toString()
            );
            setInstructor(foundInstructor);
            
            // Set sessions if available
            if (sessionsData.success) {
              setSessions(sessionsData.data);
            }
          } else {
            setError("Course not found");
          }
        } else {
          setError("Error loading data");
        }
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourseData();
  }, [courseId]); // Only depends on courseId

  // Separate useEffect for enrollment and progress - runs when auth state changes
  useEffect(() => {
    const fetchEnrollmentAndProgress = async () => {
      if (isAuthenticated && user && courseId) {
        try {
          setEnrollmentLoading(true);
          
          // Check if user is enrolled
          const enrollmentsResponse = await fetch(`https://backend.marichiventures.com/admin/pages/get_enrollments.php?user_email=${encodeURIComponent(user.email)}&course_id=${courseId}`);
          if (enrollmentsResponse.ok) {
            const enrollmentsData = await enrollmentsResponse.json();
            const enrolled = enrollmentsData.success && enrollmentsData.data.length > 0;
            setIsEnrolled(enrolled);
            
            // If enrolled, fetch user progress
            if (enrolled) {
              const progressResponse = await fetch(`${progressApiUrl}?user_email=${encodeURIComponent(user.email)}&course_id=${courseId}`);
              if (progressResponse.ok) {
                const progressData = await progressResponse.json();
                if (progressData.success) {
                  setUserProgress(progressData.data);
                  
                  // Set current session to the next uncompleted session
                  // Wait for sessions to be loaded first
                  if (sessions.length > 0) {
                    if (progressData.data.last_session_completed < sessions.length) {
                      setCurrentSessionIndex(progressData.data.last_session_completed);
                    } else {
                      // If all sessions are completed, set to the last session
                      setCurrentSessionIndex(sessions.length - 1);
                    }
                    
                    // Always show course info initially when page loads
                    setShowCourseInfo(true);
                  }
                }
              }
            }
          }
        } catch (err) {
          console.error("Error checking enrollment or progress:", err);
        } finally {
          setEnrollmentLoading(false);
        }
      } else {
        // Clear enrollment status if user is not authenticated
        setIsEnrolled(false);
        setUserProgress({ progress_percentage: 0, last_session_completed: 0 });
        setShowCourseInfo(true);
      }
    };
    
    fetchEnrollmentAndProgress();
  }, [isAuthenticated, user, courseId, sessions.length]);

  // Update user progress when session changes
  const updateProgress = async (sessionIndex) => {
    if (!isAuthenticated || !user) return;
    
    try {
      const response = await fetch(progressApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'update',
          user_email: user.email,
          course_id: parseInt(courseId),
          session_completed: sessionIndex + 1 // +1 because sessions are 1-indexed in DB
        })
      });
      
      const data = await response.json();
      if (data.success) {
        setUserProgress(data.data);
      }
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  // Modified handleNextSession - only update progress when clicking Next
  const handleNextSession = async () => {
    if (currentSessionIndex < sessions.length - 1) {
      // First, mark current session as completed if it's not already completed
      if (currentSessionIndex >= userProgress.last_session_completed) {
        await updateProgress(currentSessionIndex);
      }
      
      // Then move to next session
      const newIndex = currentSessionIndex + 1;
      setCurrentSessionIndex(newIndex);
    }
  };

  const handlePreviousSession = () => {
    if (currentSessionIndex > 0) {
      setCurrentSessionIndex(currentSessionIndex - 1);
    }
  };

  // Modified handleStartCourse to continue from the right session
  const handleStartCourse = () => {
    setShowCourseInfo(false);
    
    // Logic for determining which session to start/continue
    if (userProgress.last_session_completed === 0) {
      // No sessions completed yet, start from first session
      setCurrentSessionIndex(0);
    } else if (userProgress.last_session_completed >= sessions.length) {
      // All sessions completed, go to last session
      setCurrentSessionIndex(sessions.length - 1);
    } else {
      // Continue from the next uncompleted session
      setCurrentSessionIndex(userProgress.last_session_completed);
    }
  };

  // Modified handleMarkAsComplete for last session
  const handleMarkAsComplete = async () => {
    if (currentSessionIndex === sessions.length - 1) {
      // Mark the final session as completed
      await updateProgress(currentSessionIndex);
      // Optional: Show completion message or redirect
      alert("Congratulations! You've completed the course!");
    }
  };

  // Convert YouTube links into embed format
  const getEmbedUrl = (url) => {
    if (!url) return null;

    const match = url.match(/(?:v=|youtu\.be\/)([^&]+)/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-700 mb-2">Error</h2>
          <p className="text-red-600">{error || "Course not found"}</p>
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => navigate("/c")}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const currentSession = sessions[currentSessionIndex];
  const isLastSession = currentSessionIndex === sessions.length - 1;
  const progressPercentage = userProgress.progress_percentage;

  // Determine button text based on progress
  const getButtonText = () => {
    if (userProgress.last_session_completed === 0) {
      return "Start Course";
    } else if (userProgress.last_session_completed >= sessions.length) {
      return "Review Course";
    } else {
      return "Continue Learning";
    }
  };

  return (
    <div className="bg-gray-50 mb-4 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              className="mr-4 bg-white/20 p-2 rounded-md hover:bg-white/30 transition"
              onClick={() => navigate("/c")}
            >
              <ChevronLeft size={20} />
            </button>
            <div>
              <h1 className="text-2xl font-bold">{course.title}</h1>
              <p className="opacity-80 text-sm">
                {course.category} • {course.level}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Show loading state while checking enrollment */}
        {isAuthenticated && enrollmentLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">Checking enrollment status...</p>
            </div>
          </div>
        ) : isEnrolled ? (
          // Enrolled user view
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left side - Content Area */}
            <div className="w-full lg:w-2/3">
              {showCourseInfo ? (
                // Course information view
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative aspect-video bg-gray-800">
                    <img
                      src={`${baseUrl}${course.thumbnail_url}`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/800/450";
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">About this course</h2>
                    <p className="text-gray-700 mb-6">{course.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <Clock size={20} className="text-green-600 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">{course.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <BarChart2 size={20} className="text-green-600 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Level</p>
                          <p className="font-medium">{course.level}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Globe size={20} className="text-green-600 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Language</p>
                          <p className="font-medium">{course.language || "English"}</p>
                        </div>
                      </div>
                    </div>

                    {/* Start/Continue Course Button */}
                    <div className="mt-8">
                      <button
                        onClick={handleStartCourse}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition"
                      >
                        {getButtonText()}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Session view
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  {sessions.length > 0 ? (
                    <>
                      <div className="relative aspect-video bg-black">
                        {currentSession.video_url ? (
                          <iframe
                            src={getEmbedUrl(currentSession.video_url)}
                            title={currentSession.title}
                            className="w-full h-full absolute inset-0"
                            allowFullScreen
                          ></iframe>
                        ) : currentSession.video_file ? (
                          <video
                            src={`${baseUrl}${currentSession.video_file}`}
                            controls
                            autoPlay
                            className="w-full h-full absolute inset-0"
                          ></video>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                            <div className="text-center">
                              <p className="text-xl mb-4">No video available for this session</p>
                              <p className="text-gray-300">Please check back later</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-2xl font-bold">{currentSession.title}</h2>
                          <div className="text-sm text-gray-500">
                            Session {currentSessionIndex + 1} of {sessions.length}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6">{currentSession.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center">
                            <Clock size={20} className="text-green-600 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Duration</p>
                              <p className="font-medium">{currentSession.duration || 'Not specified'}</p>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <BarChart2 size={20} className="text-green-600 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Progress</p>
                              <p className="font-medium">{progressPercentage}% Complete</p>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <Globe size={20} className="text-green-600 mr-2" />
                            <div>
                              <p className="text-sm text-gray-500">Language</p>
                              <p className="font-medium">{course.language || "English"}</p>
                            </div>
                          </div>
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex justify-between mt-6">
                          <button
                            onClick={handlePreviousSession}
                            disabled={currentSessionIndex === 0}
                            className={`px-4 py-2 rounded-md flex items-center ${currentSessionIndex === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
                          >
                            <ChevronLeftIcon size={16} className="mr-1" />
                            Previous
                          </button>
                          
                          <button
                            onClick={isLastSession ? handleMarkAsComplete : handleNextSession}
                            className={`px-4 py-2 rounded-md flex items-center ${isLastSession ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-green-600 text-white hover:bg-green-700'}`}
                          >
                            {isLastSession ? "Finish Course" : "Next"}
                            {!isLastSession && <ChevronRight size={16} className="ml-1" />}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-6 text-center">
                      <h2 className="text-2xl font-bold mb-4">Sessions Coming Soon</h2>
                      <p className="text-gray-600">This course doesn't have any sessions yet. Please check back later.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right side - Sessions List and Progress */}
            <div className="w-full lg:w-1/3">
              {/* Progress Card - Always visible */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                  <h3 className="text-lg font-semibold">Your Progress</h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-700">Completed</span>
                    <span className="text-sm font-bold text-green-600">{progressPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {userProgress.last_session_completed} of {sessions.length} sessions completed
                  </p>
                  
                  {!showCourseInfo && (
                    <button
                      onClick={() => setShowCourseInfo(true)}
                      className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition"
                    >
                      View Course Info
                    </button>
                  )}
                </div>
              </div>

              {/* Sessions List - READ ONLY */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-green-600 to-green-500 text-white">
                  <h3 className="text-lg font-semibold">Course Sessions</h3>
                </div>
                
                <div className="p-4 max-h-96 overflow-y-auto">
                  {sessions.length > 0 ? (
                    <div className="space-y-2">
                      {sessions.map((session, index) => (
                        <div
                          key={session.id}
                          className={`p-3 rounded-lg transition-colors ${
                            index === currentSessionIndex && !showCourseInfo
                              ? 'bg-green-100 border-l-4 border-green-600'
                              : ''
                          } ${index < userProgress.last_session_completed ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
                          // Removed onClick - making it read-only
                        >
                          <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                              index < userProgress.last_session_completed 
                                ? 'bg-green-500 text-white' 
                                : index === currentSessionIndex && !showCourseInfo
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-600'
                            }`}>
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">{session.title}</p>
                              {session.duration && (
                                <p className="text-xs text-gray-500">{session.duration}</p>
                              )}
                            </div>
                            {index < userProgress.last_session_completed && (
                              <CheckCircle size={16} className="text-green-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">No sessions available yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Non-enrolled user view
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left side - Course Details */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative aspect-video bg-gray-800">
                  <img
                    src={`${baseUrl}${course.thumbnail_url}`}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/800/450";
                    }}
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About this course</h2>
                  <p className="text-gray-700 mb-6">{course.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Clock size={20} className="text-green-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{course.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <BarChart2 size={20} className="text-green-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Level</p>
                        <p className="font-medium">{course.level}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Globe size={20} className="text-green-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Language</p>
                        <p className="font-medium">{course.language || "English"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Instructor and Enrollment */}
            <div className="w-full lg:w-1/3">
              {/* Price Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <div className="mb-4">
                    {course.discount_price ? (
                      <div className="flex items-center">
                        <span className="text-3xl font-bold text-green-600">
                          ₹{course.discount_price}
                        </span>
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ₹{course.price}
                        </span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-green-600">
                        ₹{course.price}
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition mb-4">
                    Enroll Now
                  </button>

                  <div className="flex items-center justify-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    <span>
                      Released: {new Date(course.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instructor Card */}
              {instructor && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Instructor</h3>

                    <div className="flex items-center mb-4">
                      <img
                        src={`${baseUrl}${instructor.profile_picture_url}`}
                        alt={instructor.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/150/150";
                        }}
                      />
                      <div>
                        <p className="font-bold text-lg">{instructor.name}</p>
                        <p className="text-green-600 text-sm">
                          {instructor.designation}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-4">{instructor.bio}</p>

                    <div className="flex items-center text-gray-500 text-sm">
                      <Mail size={16} className="mr-1" />
                      <span>{instructor.email}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
