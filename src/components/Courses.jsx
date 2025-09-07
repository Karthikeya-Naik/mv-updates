// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
// import { Clock, BarChart2, User, Play, Briefcase, Mail, ExternalLink, ChevronLeft, BookOpen, Calendar, Globe, Tag, X, CreditCard, Phone, MapPin, Check, ArrowRight, IndianRupee } from 'lucide-react';
// import { useAuth0 } from "@auth0/auth0-react";
// const baseUrl = "https://backend.marichiventures.com/admin/pages/";

// // Enrollment/Purchase Modal Component (INR only)
// function EnrollmentModal({ isOpen, onClose, course, instructor }) {
//   const { user, isAuthenticated } = useAuth0();
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [formErrors, setFormErrors] = useState({});
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       // Load Razorpay script
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       script.onload = () => setRazorpayLoaded(true);
//       document.body.appendChild(script);

//       return () => {
//         if (document.body.contains(script)) {
//           document.body.removeChild(script);
//         }
//       };
//     }
//   }, [isOpen]);
//   // Pre-fill form with Auth0 user data when available
//   useEffect(() => {
//     if (isAuthenticated && user) {
//       setCustomerEmail(user.email || "");
//       setCustomerName(user.name || user.nickname || "");
//     }
//   }, [isAuthenticated, user, isOpen]);

//   if (!isOpen) return null;

//   // Constants for fees
//   const GST_RATE = 0.18; // 18%
//   const PLATFORM_FEE_RATE = 0.02; // 2%

//   const getBasePrice = () => {
//     // Get the price directly as INR (no conversion needed)
//     const price = course.discount_price ? parseFloat(course.discount_price.replace('₹', '').replace(',', '')) : parseFloat(course.price.replace('₹', '').replace(',', ''));
//     return Math.round(price);
//   };

//   const getPlatformFee = () => {
//     const basePrice = getBasePrice();
//     return Number((basePrice * PLATFORM_FEE_RATE).toFixed(2));
//   };

//   const getGSTOnPlatformFee = () => {
//     const platformFee = getPlatformFee();
//     return Number((platformFee * GST_RATE).toFixed(2));
//   };

//   const getTotalPrice = () => {
//     const basePrice = getBasePrice();
//     const platformFee = getPlatformFee();
//     const gstOnPlatformFee = getGSTOnPlatformFee();
//     return Number((basePrice + platformFee + gstOnPlatformFee).toFixed(2));
//   };

//   // Form validation
//   const validateForm = () => {
//     const errors = {};
//     if (!customerName.trim()) errors.name = "Name is required";
//     if (!customerEmail.trim()) errors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(customerEmail)) errors.email = "Email is invalid";
//     if (!customerPhone.trim()) errors.phone = "Phone number is required";
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle payment
//   const handlePayment = () => {
//     if (!validateForm()) return;

//     if (!razorpayLoaded) {
//       alert("Payment gateway is loading. Please try again in a moment.");
//       return;
//     }

//     const amount = getTotalPrice();
//     // Convert price to smallest currency unit (paise for INR)
//     const amountInSmallestUnit = Math.round(amount * 100);

//     const options = {
//       key: "rzp_live_LmqhBMB4dIMIaO", // Your Razorpay Key ID - LIVE
//       amount: amountInSmallestUnit,
//       currency: "INR",
//       name: course.title, // Display course title instead of company name
//       description: `Course Enrollment - ${course.level} Level | Duration: ${course.duration}`,
//       image: `${baseUrl}${course.thumbnail_url}`, // Optional: Add course thumbnail
//       handler: function (response) {
//         alert(
//           `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
//         );

//         const paymentData = {
//           paymentId: response.razorpay_payment_id,
//           courseTitle: course.title,
//           courseId: course.id,
//           amount: amount,
//           currency: "INR",
//           customerName: customerName,
//           customerEmail: customerEmail,
//           customerPhone: customerPhone,
//           instructorId: course.instructor_id,
//           instructorName: instructor ? instructor.name : 'Unknown'
//         };

//         console.log("Payment data:", paymentData);
        
//         // Send confirmation to your server
//         fetch('https://backend.marichiventures.com/course-enrollment.php', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(paymentData),
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log('Enrollment recorded:', data);
//           onClose();
//         })
//         .catch(error => {
//           console.error('Error recording enrollment:', error);
//         });
//       },
//       prefill: {
//         name: customerName,
//         email: customerEmail,
//         contact: customerPhone,
//       },
//       theme: {
//         color: "#16a34a", // Green color matching your theme
//       },
//       notes: {
//         courseId: course.id,
//         courseTitle: course.title,
//         courseCategory: course.category,
//         courseDescription: course.short_description,
//         courseLevel: course.level,
//         courseDuration: course.duration,
//         instructor: instructor ? instructor.name : 'Unknown',
//         instructorDesignation: instructor ? instructor.designation : '',
//         basePrice: `₹ ${getBasePrice()}`,
//         platformFee: `₹${getPlatformFee()} (2%)`,
//         gstOnPlatformFee: `₹${getGSTOnPlatformFee()} (18%)`,
//         totalAmount: `₹${getTotalPrice()}`,
//         customer_name: customerName,
//         enrollment_date: new Date().toISOString(),
//       },
//     };

//     try {
//       const paymentObject = new window.Razorpay(options);
//       paymentObject.on("payment.failed", function (response) {
//         console.error("Payment failed:", response.error);
//         alert(`Payment failed: ${response.error.description}`);
//       });
//       paymentObject.open();
//     } catch (err) {
//       console.error("Razorpay initialization error:", err);
//       alert("Unable to initialize payment. Please try again later.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-xl font-bold text-green-700">{course.title}</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="p-4">
//           <p className="text-gray-600 mb-4">
//             {course.duration} | {course.level} Level | Complete Access to Course
//           </p>

//           {/* Customer details form */}
//           <div className="mb-4 space-y-3">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//                 className="w-full p-2 border rounded-md capitalize"
//                 placeholder="Full Name"
//               />
//               {formErrors.name && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
//               )}
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 value={customerEmail}
//                 onChange={(e) => {if (!isAuthenticated) setCustomerEmail(e.target.value.toLowerCase());}}
//                 className="w-full p-2 border rounded-md lowercase"
//                 placeholder="you@example.com"
//                 readOnly={isAuthenticated} // Make read-only if authenticated
//                 style={isAuthenticated ? { backgroundColor: '#f9fafb', cursor: 'not-allowed' } : {}}
//               />
//               {formErrors.email && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
//               )}
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 value={customerPhone}
//                 onChange={(e) => setCustomerPhone(e.target.value)}
//                 className="w-full p-2 border rounded-md"
//                 placeholder="Your phone number"
//               />
//               {formErrors.phone && (
//                 <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
//               )}
//             </div>
//           </div>

//           {/* Price Display */}
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="text-2xl font-bold text-green-700">
//               ₹{getBasePrice()}
//             </div>
//           </div>

//           {/* Price Breakdown */}
//           <div className="space-y-2 mb-4">
//             <div className="flex justify-between">
//               <span>Base Price:</span>
//               <span>₹{getBasePrice()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Platform Fee (2%):</span>
//               <span>₹{getPlatformFee()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>GST on Platform Fee (18%):</span>
//               <span>₹{getGSTOnPlatformFee()}</span>
//             </div>
//             <div className="flex justify-between font-bold border-t pt-2 mt-2">
//               <span>Total Amount:</span>
//               <span>₹{getTotalPrice()}</span>
//             </div>
//           </div>

//           <button
//             onClick={handlePayment}
//             className="flex-1 px-6 py-3 bg-[#65B741] text-white rounded-lg hover:bg-[#54a332] transition-colors font-medium flex items-center justify-center gap-2 w-full"
//           >
//             <IndianRupee className="mr-2" />
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main Courses Page Component
// export default function Courses() {
//   const [courses, setCourses] = useState([]);
//   const [instructors, setInstructors] = useState([]);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState('courses');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
  
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         const coursesResponse = await fetch(`${baseUrl}courses.php`);
//         const coursesData = await coursesResponse.json();
        
//         const instructorsResponse = await fetch(`${baseUrl}instructors.php`);
//         const instructorsData = await instructorsResponse.json();
        
//         if (coursesData.success && instructorsData.success) {
//           setCourses(coursesData.data);
//           setInstructors(instructorsData.data);
//           setError(null);
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
//   }, []);

//   const categories = ['All', ...new Set(courses.map(course => course.category))];

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                          course.short_description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const handleEnrollment = async (courseId) => {
//     const course = courses.find(c => c.id === courseId);
//     setSelectedCourse(course);
//     setShowEnrollmentModal(true);
//   };

//   const closeEnrollmentModal = () => {
//     setShowEnrollmentModal(false);
//     setSelectedCourse(null);
//   };
  
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }
  
//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="bg-red-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold text-red-700 mb-2">Error</h2>
//           <p className="text-red-600">{error}</p>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="bg-gray-50 mb-4 min-h-screen">
//       <header className="bg-gradient-to-r from-green-600 to-green-500 text-white">
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold">Courses</h1>
//           <p className="mt-2 opacity-80">Expand your skills with our expert-led courses</p>
//         </div>
//       </header>
      
//       <div className="bg-white shadow">
//         <div className="container mx-auto px-4">
//           <div className="flex">
//             <button 
//               className={`px-6 py-4 font-medium flex items-center ${activeTab === 'courses' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('courses')}
//             >
//               <BookOpen size={18} className="mr-2" />
//               Courses
//             </button>
//             <button 
//               className={`px-6 py-4 font-medium flex items-center ${activeTab === 'instructors' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
//               onClick={() => setActiveTab('instructors')}
//             >
//               <User size={18} className="mr-2" />
//               Instructors
//             </button>
//           </div>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 py-6">
//         {activeTab === 'courses' ? (
//           <div>
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//               <h2 className="text-2xl font-bold mb-4 md:mb-0">Available Courses</h2>
              
//               <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
//                 <select 
//                   className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                 >
//                   {categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
                
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search courses..."
//                     className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                   <div className="absolute left-3 top-2.5 text-gray-400">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {filteredCourses.length > 0 ? (
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {filteredCourses.map(course => (
//                   <CourseCard 
//                     key={course.id} 
//                     course={course} 
//                     instructors={instructors} 
//                     isEnrolled={enrolledCourses.includes(course.id)}
//                     onEnroll={() => handleEnrollment(course.id)}
//                     onClick={() => navigate(`/c/${course.id}`)}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12">
//                 <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Our Instructors</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {instructors.map(instructor => (
//                 <InstructorCard key={instructor.id} instructor={instructor} />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {showEnrollmentModal && selectedCourse && (
//         <EnrollmentModal
//           isOpen={showEnrollmentModal}
//           onClose={closeEnrollmentModal}
//           course={selectedCourse}
//           instructor={instructors.find(i => i.id.toString() === selectedCourse.instructor_id.toString())}
//         />
//       )}
//     </div>
//   );
// }

// // Course Card Component (INR only)
// function CourseCard({ course, instructors, isEnrolled, onEnroll, onClick }) {
//   const instructor = instructors.find(i => i.id.toString() === course.instructor_id.toString());
  
//   // Helper function to extract price value from string
//   const getPriceValue = (priceString) => {
//     if (!priceString) return 0;
//     return parseFloat(priceString.replace('₹', '').replace(',', ''));
//   };
  
//   return (
//     <div 
//       className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
//       onClick={onClick}
//     >
//       <div className="relative">
//         <img 
//           src={`${baseUrl}${course.thumbnail_url}`} 
//           alt={course.title}
//           className="h-48 w-full object-cover"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = "/api/placeholder/400/200";
//           }}
//         />
//         <div className="absolute top-0 right-0 m-2">
//           <span className={`px-2 py-1 text-xs font-bold rounded ${course.is_published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
//             {course.is_published ? 'Published' : 'Draft'}
//           </span>
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
//           <div className="bg-white/90 rounded-full p-3">
//             <Play size={24} className="text-green-600" />
//           </div>
//         </div>
//       </div>
      
//       <div className="p-5">
//         <div className="flex items-center space-x-2 mb-3">
//           <Tag size={16} className="text-green-600" />
//           <span className="text-green-600 text-sm font-medium">
//             {course.category}
//           </span>
//         </div>
        
//         <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
        
//         <p className="text-gray-600 mb-4 line-clamp-2 h-12">{course.short_description}</p>
        
//         <div className="flex items-center mb-4">
//           <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
//             <User size={16} className="text-gray-600" />
//           </div>
//           <div>
//             <p className="text-sm font-medium">{instructor ? instructor.name : 'Unknown Instructor'}</p>
//             <p className="text-xs text-gray-500">{instructor ? instructor.designation : ''}</p>
//           </div>
//         </div>
        
//         <div className="flex justify-between items-center mb-3">
//           <div className="flex items-center text-sm text-gray-500">
//             <Clock size={16} className="mr-1" />
//             {course.duration}
//           </div>
          
//           <div className="flex items-center text-sm text-gray-500">
//             <BarChart2 size={16} className="mr-1" />
//             {course.level}
//           </div>
//         </div>
        
//         <div className="pt-3 border-t">
//           {isEnrolled ? (
//             <button 
//               className="w-full flex items-center justify-center text-green-600 hover:text-green-800 font-medium py-2"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onClick();
//               }}
//             >
//               View Course
//               <ExternalLink size={16} className="ml-1" />
//             </button>
//           ) : (
//             <div className="flex justify-between items-center">
//               <div>
//                 {course.discount_price ? (
//                   <div className="flex items-center">
//                     <IndianRupee size={16} className="text-green-600" />
//                     <span className="text-lg font-bold text-green-600">{getPriceValue(course.discount_price)}</span>
//                     <span className="ml-2 text-sm text-gray-500 line-through">₹{getPriceValue(course.price)}</span>
//                   </div>
//                 ) : (
//                   <div className="flex items-center">
//                     <IndianRupee size={16} className="text-green-600" />
//                     <span className="text-lg font-bold text-green-600">{getPriceValue(course.price)}</span>
//                   </div>
//                 )}
//               </div>
              
//               <button 
//                 className="px-4 py-2 bg-[#65B741] text-white rounded-lg hover:bg-[#54a332] transition-colors font-medium flex items-center justify-center gap-2 text-sm"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onEnroll();
//                 }}
//               >
//                 Enroll Now
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Instructor Card Component
// function InstructorCard({ instructor }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       <div className="p-6 text-center">
//         <div className="mb-4">
//           <img 
//             src={`${baseUrl}${instructor.profile_picture_url}`} 
//             alt={instructor.name}
//             className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "/api/placeholder/150/150";
//             }}
//           />
//         </div>
        
//         <h3 className="text-xl font-bold">{instructor.name}</h3>
//         <p className="text-green-600 mb-2">{instructor.designation}</p>
        
//         <p className="text-gray-600 text-sm mb-4 line-clamp-3">{instructor.bio}</p>
        
//         <div className="text-gray-500 text-sm mb-4 flex items-center justify-center">
//           <Mail size={16} className="mr-1" />
//           {instructor.email}
//         </div>
        
//         <button className="w-1/2 mx-auto bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-2 px-4 rounded-md hover:opacity-90 transition flex items-center justify-center">
//           <Briefcase size={16} className="mr-2" />
//           View Courses
//         </button>
//       </div>
//     </div>
//   );
// }


















import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Clock, BarChart2, User, Play, Briefcase, Mail, ExternalLink, ChevronLeft, BookOpen, Calendar, Globe, Tag, X, CreditCard, Phone, MapPin, Check, ArrowRight, IndianRupee } from 'lucide-react';
import { useAuth0 } from "@auth0/auth0-react";

const baseUrl = "https://backend.marichiventures.com/admin/pages/";

// Enrollment/Purchase Modal Component (INR only)
function EnrollmentModal({ isOpen, onClose, course, instructor }) {
  const { user, isAuthenticated } = useAuth0();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setRazorpayLoaded(true);
      document.body.appendChild(script);
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  // Pre-fill form with Auth0 user data when available
  useEffect(() => {
    if (isAuthenticated && user) {
      setCustomerEmail(user.email || "");
      setCustomerName(user.name || user.nickname || "");
    }
  }, [isAuthenticated, user, isOpen]);

  if (!isOpen) return null;

  // Constants for fees
  const GST_RATE = 0.18; // 18%
  const PLATFORM_FEE_RATE = 0.02; // 2%

  const getBasePrice = () => {
    // Get the price directly as INR (no conversion needed)
    const price = course.discount_price ? parseFloat(course.discount_price.replace('₹', '').replace(',', '')) : parseFloat(course.price.replace('₹', '').replace(',', ''));
    return Math.round(price);
  };

  const getPlatformFee = () => {
    const basePrice = getBasePrice();
    return Number((basePrice * PLATFORM_FEE_RATE).toFixed(2));
  };

  const getGSTOnPlatformFee = () => {
    const platformFee = getPlatformFee();
    return Number((platformFee * GST_RATE).toFixed(2));
  };

  const getTotalPrice = () => {
    const basePrice = getBasePrice();
    const platformFee = getPlatformFee();
    const gstOnPlatformFee = getGSTOnPlatformFee();
    return Number((basePrice + platformFee + gstOnPlatformFee).toFixed(2));
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!customerName.trim()) errors.name = "Name is required";
    if (!customerEmail.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(customerEmail)) errors.email = "Email is invalid";
    if (!customerPhone.trim()) errors.phone = "Phone number is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle payment
  const handlePayment = () => {
    if (!validateForm()) return;
    if (!razorpayLoaded) {
      alert("Payment gateway is loading. Please try again in a moment.");
      return;
    }

    const amount = getTotalPrice();
    // Convert price to smallest currency unit (paise for INR)
    const amountInSmallestUnit = Math.round(amount * 100);

    const options = {
      key: "rzp_live_LmqhBMB4dIMIaO", // Your Razorpay Key ID - LIVE
      amount: amountInSmallestUnit,
      currency: "INR",
      name: course.title, // Display course title instead of company name
      description: `Course Enrollment - ${course.level} Level | Duration: ${course.duration}`,
      image: `${baseUrl}${course.thumbnail_url}`, // Optional: Add course thumbnail
      handler: function (response) {
        alert(
          `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );

        const paymentData = {
          paymentId: response.razorpay_payment_id,
          courseTitle: course.title,
          courseId: course.id,
          amount: amount,
          currency: "INR",
          customerName: customerName,
          customerEmail: customerEmail,
          customerPhone: customerPhone,
          instructorId: course.instructor_id,
          instructorName: instructor ? instructor.name : 'Unknown'
        };

        console.log("Payment data:", paymentData);
        
        // Send confirmation to your server
        fetch('https://backend.marichiventures.com/course-enrollment.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Enrollment recorded:', data);
          onClose();
        })
        .catch(error => {
          console.error('Error recording enrollment:', error);
        });
      },
      prefill: {
        name: customerName,
        email: customerEmail,
        contact: customerPhone,
      },
      theme: {
        color: "#16a34a", // Green color matching your theme
      },
      notes: {
        courseId: course.id,
        courseTitle: course.title,
        courseCategory: course.category,
        courseDescription: course.short_description,
        courseLevel: course.level,
        courseDuration: course.duration,
        instructor: instructor ? instructor.name : 'Unknown',
        instructorDesignation: instructor ? instructor.designation : '',
        basePrice: `₹ ${getBasePrice()}`,
        platformFee: `₹${getPlatformFee()} (2%)`,
        gstOnPlatformFee: `₹${getGSTOnPlatformFee()} (18%)`,
        totalAmount: `₹${getTotalPrice()}`,
        customer_name: customerName,
        enrollment_date: new Date().toISOString(),
      },
    };

    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        alert(`Payment failed: ${response.error.description}`);
      });
      paymentObject.open();
    } catch (err) {
      console.error("Razorpay initialization error:", err);
      alert("Unable to initialize payment. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-green-700">{course.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-gray-600 mb-4">
            {course.duration} | {course.level} Level | Complete Access to Course
          </p>

          {/* Customer details form */}
          <div className="mb-4 space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-2 border rounded-md capitalize"
                placeholder="Full Name"
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => {if (!isAuthenticated) setCustomerEmail(e.target.value.toLowerCase());}}
                className="w-full p-2 border rounded-md lowercase"
                placeholder="you@example.com"
                readOnly={isAuthenticated} // Make read-only if authenticated
                style={isAuthenticated ? { backgroundColor: '#f9fafb', cursor: 'not-allowed' } : {}}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Your phone number"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
              )}
            </div>
          </div>

          {/* Price Display */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-2xl font-bold text-green-700">
              ₹{getBasePrice()}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Base Price:</span>
              <span>₹{getBasePrice()}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee (2%):</span>
              <span>₹{getPlatformFee()}</span>
            </div>
            <div className="flex justify-between">
              <span>GST on Platform Fee (18%):</span>
              <span>₹{getGSTOnPlatformFee()}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total Amount:</span>
              <span>₹{getTotalPrice()}</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="flex-1 px-6 py-3 bg-[#65B741] text-white rounded-lg hover:bg-[#54a332] transition-colors font-medium flex items-center justify-center gap-2 w-full"
          >
            <IndianRupee className="mr-2" />
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Courses Page Component
export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrollmentsLoading, setEnrollmentsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('courses');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  // Fetch courses and instructors data - runs once on mount
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        
        const coursesResponse = await fetch(`${baseUrl}courses.php`);
        const coursesData = await coursesResponse.json();
        
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
    
    fetchCourseData();
  }, []); // No dependencies - runs once

  // Separate useEffect for enrollments - runs when auth state changes
  useEffect(() => {
    const fetchEnrollments = async () => {
      if (isAuthenticated && user) {
        try {
          setEnrollmentsLoading(true);
          const enrollmentsResponse = await fetch(`https://backend.marichiventures.com/admin/pages/get_enrollments.php?user_email=${encodeURIComponent(user.email)}`);
          if (enrollmentsResponse.ok) {
            const enrollmentsData = await enrollmentsResponse.json();
            console.log("Enrollments data:", enrollmentsData);
            
            if (enrollmentsData.success) {
              const enrolledCourseIds = enrollmentsData.data.map(enrollment => parseInt(enrollment.course_id));
              console.log("Enrolled course IDs:", enrolledCourseIds);
              setEnrolledCourses(enrolledCourseIds);
            }
          } else {
            console.error("Failed to fetch enrollments:", enrollmentsResponse.status);
          }
        } catch (err) {
          console.error("Error fetching enrollments:", err);
        } finally {
          setEnrollmentsLoading(false);
        }
      } else {
        // Clear enrollments if user is not authenticated
        setEnrolledCourses([]);
      }
    };
    
    fetchEnrollments();
  }, [isAuthenticated, user]);

  const categories = ['All', ...new Set(courses.map(course => course.category))];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.short_description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEnrollment = async (courseId) => {
    const course = courses.find(c => c.id === courseId);
    setSelectedCourse(course);
    setShowEnrollmentModal(true);
  };

  const closeEnrollmentModal = () => {
    setShowEnrollmentModal(false);
    setSelectedCourse(null);
  };

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
      <header className="bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="mt-2 opacity-80">Expand your skills with our expert-led courses</p>
        </div>
      </header>
      
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
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
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
                {filteredCourses.map(course => {
                  const isEnrolled = enrolledCourses.includes(parseInt(course.id));
                  
                  return (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      instructors={instructors} 
                      isEnrolled={isEnrolled}
                      enrollmentsLoading={enrollmentsLoading}
                      isAuthenticated={isAuthenticated}
                      onEnroll={() => handleEnrollment(course.id)}
                      onClick={() => navigate(`/c/${course.id}`)}
                    />
                  );
                })}
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

      {showEnrollmentModal && selectedCourse && (
        <EnrollmentModal
          isOpen={showEnrollmentModal}
          onClose={closeEnrollmentModal}
          course={selectedCourse}
          instructor={instructors.find(i => i.id.toString() === selectedCourse.instructor_id.toString())}
        />
      )}
    </div>
  );
}

// Course Card Component (INR only)
function CourseCard({ course, instructors, isEnrolled, enrollmentsLoading, isAuthenticated, onEnroll, onClick }) {
  const instructor = instructors.find(i => i.id.toString() === course.instructor_id.toString());

  // Helper function to extract price value from string
  const getPriceValue = (priceString) => {
    if (!priceString) return 0;
    return parseFloat(priceString.replace('₹', '').replace(',', ''));
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
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
        
        <div className="pt-3 border-t">
          {/* Show loading state while checking enrollment status */}
          {isAuthenticated && enrollmentsLoading ? (
            <div className="w-full flex items-center justify-center py-2">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-green-500"></div>
              <span className="ml-2 text-sm text-gray-500">Checking enrollment...</span>
            </div>
          ) : isEnrolled ? (
            <button 
              className="w-full flex items-center justify-center text-green-600 hover:text-green-800 font-medium py-2"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              Go to Course
              <ExternalLink size={16} className="ml-1" />
            </button>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                {course.discount_price ? (
                  <div className="flex items-center">
                    <IndianRupee size={16} className="text-green-600" />
                    <span className="text-lg font-bold text-green-600">{getPriceValue(course.discount_price)}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">₹{getPriceValue(course.price)}</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <IndianRupee size={16} className="text-green-600" />
                    <span className="text-lg font-bold text-green-600">{getPriceValue(course.price)}</span>
                  </div>
                )}
              </div>
              
              <button 
                className="px-4 py-2 bg-[#65B741] text-white rounded-lg hover:bg-[#54a332] transition-colors font-medium flex items-center justify-center gap-2 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onEnroll();
                }}
              >
                Enroll Now
              </button>
            </div>
          )}
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
        
        <button className="w-1/2 mx-auto bg-gradient-to-r from-green-600 to-green-700 text-white font-medium py-2 px-4 rounded-md hover:opacity-90 transition flex items-center justify-center">
          <Briefcase size={16} className="mr-2" />
          View Courses
        </button>
      </div>
    </div>
  );
}
