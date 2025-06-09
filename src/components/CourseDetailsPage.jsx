
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Clock, BarChart2, User, DollarSign, Play, Briefcase, Mail, ExternalLink, ChevronLeft, BookOpen, Calendar, Globe, Tag } from 'lucide-react';

const baseUrl = "https://backend.marichiventures.com/admin/pages/";
export default function CourseDetailsPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch courses data
        const coursesResponse = await fetch(`${baseUrl}courses.php`);
        const coursesData = await coursesResponse.json();
        
        // Fetch instructors data
        const instructorsResponse = await fetch(`${baseUrl}instructors.php`);
        const instructorsData = await instructorsResponse.json();
        
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
    
    fetchData();
  }, [courseId]);
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
            onClick={() => navigate("/")}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  // Determine video source
  const videoSource = course.video_file
    ? `${baseUrl}${course.video_file_url}`
    : course.video_url;

    
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
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Video */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative aspect-video bg-black">
                {!isPlaying && (
                  <div className="absolute inset-0">
                    <img
                      src={`${baseUrl}${course.thumbnail_url}`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/800/450";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button
                        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 transition transform hover:scale-110"
                        onClick={() => setIsPlaying(true)}
                      >
                        <Play size={32} fill="white" />
                      </button>
                    </div>
                  </div>
                )}

                {isPlaying &&
                  (course.video_url ? (
                    <iframe
                      src={videoSource}
                      title={course.title}
                      className="w-full h-full absolute inset-0"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={videoSource}
                      controls
                      autoPlay
                      className="w-full h-full absolute inset-0"
                    ></video>
                  ))}
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
                      <p className="font-medium">
                        {course.language || "English"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Instructor and Course Details */}
          <div className="w-full lg:w-1/3">
            {/* Price Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <div className="mb-4">
                  {course.discount_price ? (
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-green-600">
                        ${course.discount_price}
                      </span>
                      <span className="ml-2 text-lg text-gray-500 line-through">
                        ${course.price}
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-green-600">
                      ${course.price}
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
      </div>
    </div>
  );
}
