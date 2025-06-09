import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Clock, BarChart2, User, DollarSign, Play, Briefcase, Mail, ExternalLink, ChevronLeft, BookOpen, Calendar, Globe, Tag } from 'lucide-react';

const baseUrl = "https://backend.marichiventures.com/admin/pages/";


// Main Courses Page Component
export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const navigate = useNavigate();
  
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
          setCourses(coursesData.data);
          setInstructors(instructorsData.data);
          setError(null);
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
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  // Filter courses based on search and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.short_description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-700 mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 mb-4 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="mt-2 opacity-80">Expand your skills with our expert-led courses</p>
        </div>
      </header>
      
      {/* Tabs */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex">
            <button 
              className={`px-6 py-4 font-medium flex items-center ${activeTab === 'courses' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('courses')}
            >
              <BookOpen size={18} className="mr-2" />
              Courses
            </button>
            <button 
              className={`px-6 py-4 font-medium flex items-center ${activeTab === 'instructors' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('instructors')}
            >
              <User size={18} className="mr-2" />
              Instructors
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        {activeTab === 'courses' ? (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold mb-4 md:mb-0">Available Courses</h2>
              
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
                {/* Category Filter */}
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    instructors={instructors} 
                    onClick={() => navigate(`/c/${course.id}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructors.map(instructor => (
                <InstructorCard key={instructor.id} instructor={instructor} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Course Card Component
function CourseCard({ course, instructors, onClick }) {
  const instructor = instructors.find(i => i.id === course.instructor_id.toString());
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={`${baseUrl}${course.thumbnail_url}`} 
          alt={course.title}
          className="h-48 w-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/api/placeholder/400/200";
          }}
        />
        <div className="absolute top-0 right-0 m-2">
          <span className={`px-2 py-1 text-xs font-bold rounded ${course.is_published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {course.is_published ? 'Published' : 'Draft'}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3">
            <Play size={24} className="text-green-600" />
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center space-x-2 mb-3">
          <Tag size={16} className="text-green-600" />
          <span className="text-green-600 text-sm font-medium">
            {course.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 h-12">{course.short_description}</p>
        
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
            <User size={16} className="text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-medium">{instructor ? instructor.name : 'Unknown Instructor'}</p>
            <p className="text-xs text-gray-500">{instructor ? instructor.designation : ''}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            {course.duration}
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <BarChart2 size={16} className="mr-1" />
            {course.level}
          </div>
        </div>
        
        <div className="pt-3 border-t flex justify-between items-center">
          <div>
            {course.discount_price ? (
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="text-lg font-bold text-green-600">{course.discount_price}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${course.price}</span>
              </div>
            ) : (
              <div className="flex items-center">
                <DollarSign size={16} className="text-green-600" />
                <span className="text-lg font-bold text-green-600">${course.price}</span>
              </div>
            )}
          </div>
          
          <button 
            className="flex items-center text-green-600 hover:text-green-800 font-medium"
            onClick={onClick}
          >
            View Details
            <ExternalLink size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Instructor Card Component
function InstructorCard({ instructor }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 text-center">
        <div className="mb-4">
          <img 
            src={`${baseUrl}${instructor.profile_picture_url}`} 
            alt={instructor.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/api/placeholder/150/150";
            }}
          />
        </div>
        
        <h3 className="text-xl font-bold">{instructor.name}</h3>
        <p className="text-green-600 mb-2">{instructor.designation}</p>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{instructor.bio}</p>
        
        <div className="text-gray-500 text-sm mb-4 flex items-center justify-center">
          <Mail size={16} className="mr-1" />
          {instructor.email}
        </div>
        
        <button className="w-1/2 mx-auto  bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-2 px-4 rounded-md hover:opacity-90 transition flex items-center justify-center">
          <Briefcase size={16} className="mr-2" />
          View Courses
        </button>
      </div>
    </div>
  );
}

