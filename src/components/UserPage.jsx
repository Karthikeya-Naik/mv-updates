// import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const UserPage = () => {
//   const [coursesView, setCoursesView] = useState(false);
//   const [paymentHistory, setPaymentHistory] = useState(false);
//   const [editButton, setEditButton] = useState(false);
//   const { user } = useAuth0();
//   const persistedUser = user;

//   return (
//     <>
//       <div className="flex flex-col gap-12 items-start min-h-screen bg-gray-200 px-6 md:px-44">
//         {/* Profile Section */}
//         <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-3xl shadow-lg w-full flex flex-col md:flex-row md:items-center justify-between p-8 space-y-6 md:space-y-0 md:space-x-8 transform hover:scale-105 transition duration-300 ease-in-out mt-8">
//           {/* Profile Picture and Name */}
//           <div className="flex flex-row items-center space-x-6 w-full md:w-auto">
//             <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-gray-100 shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
//               <img
//                 src={persistedUser?.picture}
//                 alt="User Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <h1 className="text-4xl font-bold text-gray-700 tracking-wide">
//                 {persistedUser?.name}
//               </h1>
//               <p className="text-gray-500">{persistedUser?.email}</p>
//             </div>
//           </div>

//           {/* Edit Profile Button */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
//             <button
//               className="bg-gray-100 text-gray-700 font-semibold px-10 py-3 rounded-full shadow-md hover:bg-gray-700 hover:text-gray-100 transition duration-300 transform hover:scale-105"
//               onClick={() => setEditButton(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="w-full flex flex-row gap-6 items-stretch mb-10">
//           {/* Left Menu */}
//           <div className="flex flex-col w-full md:w-[30%] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-100 rounded-xl shadow-lg p-6 space-y-6">
//             {/* Courses Section */}
//             <div className="flex flex-col items-center text-center space-y-4">
//               <div className="border-b-2 border-gray-600 w-full pb-2">
//                 <h1 className="text-2xl font-semibold text-gray-300 tracking-wide">
//                   Learning
//                 </h1>
//               </div>
//               <div
//                 className="w-full rounded-lg p-2 transition transform hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-gray-800 shadow-md duration-300 ease-in-out cursor-pointer"
//                 onClick={() => {
//                   setCoursesView(true);
//                   setPaymentHistory(false);
//                 }}
//               >
//                 <p className="text-lg font-medium text-gray-200">My Courses</p>
//               </div>
//             </div>

//             {/* Payments Section */}
//             <div className="flex flex-col items-center text-center space-y-4">
//               <div className="border-b-2 border-gray-600 w-full pb-2">
//                 <h1 className="text-2xl font-semibold text-gray-300 tracking-wide">
//                   Payments
//                 </h1>
//               </div>
//               <div
//                 className="w-full rounded-lg p-2 transition transform hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-gray-800 shadow-md duration-300 ease-in-out cursor-pointer"
//                 onClick={() => {
//                   setPaymentHistory(true);
//                   setCoursesView(false);
//                 }}
//               >
//                 <p className="text-lg font-medium text-gray-200">Payment History</p>
//               </div>
//             </div>
//           </div>

//           {/* Courses View */}
//           {coursesView && (
//             <div className="flex-grow p-6 bg-gray-100 rounded-xl shadow-lg w-full">
//               <h1 className="text-3xl font-semibold text-gray-700 mb-6">
//                 My Courses
//               </h1>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Course Card */}
//                 <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
//                   <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                     Web Development Bootcamp
//                   </h2>
//                   <p className="text-gray-600 mb-2">Progress: 60%</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5">
//                     <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
//                   </div>
//                   <div className="flex mt-4 space-x-4 text-sm">
//                     <button className="text-blue-500 font-medium">Continue</button>
//                     <span className="text-gray-400">|</span>
//                     <button className="text-gray-500">View Certificate</button>
//                   </div>
//                 </div>

//                 {/* Add more course cards as needed */}
//               </div>
//             </div>
//           )}

//           {/* Payment History View */}
//           {paymentHistory && (
//             <div className="flex-grow p-6 bg-gray-100 rounded-xl shadow-lg w-full">
//               <h1 className="text-3xl font-semibold text-gray-700 mb-6">
//                 Payment History
//               </h1>

//               <div className="space-y-4">
//                 {/* Payment Card */}
//                 <div className="bg-white border rounded-lg p-6 shadow-md">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Web Development Bootcamp</h2>
//                       <p className="text-gray-600">Transaction ID: WD-2024-001</p>
//                       <p className="text-gray-500">March 15, 2024</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-2xl font-bold text-gray-800">$499</p>
//                       <span className="text-green-500">Completed</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Add more payment history cards as needed */}
//               </div>
//             </div>
//           )}

//           {/* Edit Profile Modal */}
//           {editButton && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                   Edit Profile
//                 </h2>
//                 <div className="mb-4">
//                   <label className="block text-gray-600">Name:</label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     defaultValue={persistedUser?.name}
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-600">Email:</label>
//                   <input
//                     type="email"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                     defaultValue={persistedUser?.email}
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-600">Phone number:</label>
//                   <input
//                     type="tel"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-600">Profile Picture:</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                   />
//                 </div>
//                 <div className="flex justify-end gap-4">
//                   <button
//                     className="px-4 py-2 bg-gray-500 text-white rounded-lg"
//                     onClick={() => setEditButton(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//                     onClick={() => setEditButton(false)}
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserPage;



import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { 
  User, 
  Book, 
  CreditCard, 
  ChevronRight, 
  Edit2, 
  Check, 
  X, 
  Upload, 
  Award
} from "lucide-react";

const UserPage = () => {
  const [activeView, setActiveView] = useState("none");
  const [showEditModal, setShowEditModal] = useState(false);
  const { user } = useAuth0();
  const persistedUser = user;

  return (
    <>
      <div className="flex flex-col gap-12 items-start min-h-screen bg-gray-100 px-4 py-8 md:px-16 lg:px-32">
        {/* Profile Section */}
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl shadow-xl w-full flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 space-y-6 md:space-y-0 md:space-x-8 transform hover:scale-102 transition duration-300 ease-in-out mt-4">
          {/* Profile Picture and Name */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md transform hover:scale-105 transition duration-300 ease-in-out bg-white">
              <img
                src={persistedUser?.picture || "https://via.placeholder.com/150"}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {persistedUser?.name || "User Name"}
              </h1>
              <div className="flex items-center justify-center md:justify-start mt-1 text-blue-100">
                <User size={16} className="mr-2" />
                <p>{persistedUser?.email || "user@example.com"}</p>
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="flex items-center justify-center md:justify-end">
            <button
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-100 transition duration-300 transform hover:scale-105 flex items-center"
              onClick={() => setShowEditModal(true)}
            >
              <Edit2 size={18} className="mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col md:flex-row gap-6 items-stretch mb-10">
          {/* Left Menu */}
          <div className="flex flex-col w-full md:w-1/4 bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Menu Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>
            
            {/* Menu Items */}
            <div className="flex flex-col py-2">
              <button 
                className={`flex items-center px-4 py-3 hover:bg-gray-100 transition-colors ${activeView === "courses" ? "bg-indigo-50 border-l-4 border-indigo-500 text-indigo-600" : "text-gray-700"}`}
                onClick={() => setActiveView("courses")}
              >
                <Book size={20} className={`mr-3 ${activeView === "courses" ? "text-indigo-500" : "text-gray-500"}`} />
                <span className="font-medium">My Courses</span>
                <ChevronRight size={18} className="ml-auto" />
              </button>
              
              <button 
                className={`flex items-center px-4 py-3 hover:bg-gray-100 transition-colors ${activeView === "payments" ? "bg-indigo-50 border-l-4 border-indigo-500 text-indigo-600" : "text-gray-700"}`}
                onClick={() => setActiveView("payments")}
              >
                <CreditCard size={20} className={`mr-3 ${activeView === "payments" ? "text-indigo-500" : "text-gray-500"}`} />
                <span className="font-medium">Payment History</span>
                <ChevronRight size={18} className="ml-auto" />
              </button>

              {/* You could add more menu items here */}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-grow bg-white rounded-xl shadow-lg overflow-hidden">
            {activeView === "none" && (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500 p-6">
                <p className="text-xl font-medium">Select an option from the menu</p>
              </div>
            )}

            {/* Courses View */}
            {activeView === "courses" && (
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Book size={22} className="text-indigo-500 mr-2" />
                  <h1 className="text-2xl font-semibold text-gray-800">My Courses</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Course Card 1 */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                    <div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-xl relative">
                      <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-semibold text-indigo-600">
                        In Progress
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">Web Development Bootcamp</h2>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <div className="text-sm">Progress: 60%</div>
                      </div>
                        
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <button className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                          Continue
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                        <button className="text-gray-500 flex items-center hover:text-gray-700">
                          <Award size={16} className="mr-1" />
                          Certificate
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Course Card 2 */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                    <div className="h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-t-xl relative">
                      <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-semibold text-purple-600">
                        Completed
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design Masterclass</h2>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <div className="text-sm">Progress: 100%</div>
                      </div>
                        
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <button className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                          Review
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                        <button className="text-gray-500 flex items-center hover:text-gray-700">
                          <Award size={16} className="mr-1" />
                          Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment History View */}
            {activeView === "payments" && (
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <CreditCard size={22} className="text-indigo-500 mr-2" />
                  <h1 className="text-2xl font-semibold text-gray-800">Payment History</h1>
                </div>

                <div className="space-y-4">
                  {/* Payment Card 1 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">Web Development Bootcamp</h2>
                        <p className="text-gray-500 text-sm mt-1">Transaction ID: WD-2024-001</p>
                        <p className="text-gray-500 text-sm mt-1">March 15, 2024</p>
                      </div>
                      <div className="mt-4 md:mt-0 text-left md:text-right">
                        <p className="text-2xl font-bold text-gray-800">$499</p>
                        <span className="inline-flex items-center text-green-500 text-sm mt-1">
                          <Check size={14} className="mr-1" />
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Card 2 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">UI/UX Design Masterclass</h2>
                        <p className="text-gray-500 text-sm mt-1">Transaction ID: UX-2024-042</p>
                        <p className="text-gray-500 text-sm mt-1">February 3, 2024</p>
                      </div>
                      <div className="mt-4 md:mt-0 text-left md:text-right">
                        <p className="text-2xl font-bold text-gray-800">$349</p>
                        <span className="inline-flex items-center text-green-500 text-sm mt-1">
                          <Check size={14} className="mr-1" />
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Edit Profile Modal */}
        {showEditModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Edit Profile
                </h2>
                <button 
                  onClick={() => setShowEditModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Profile Picture</label>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={persistedUser?.picture || "https://via.placeholder.com/150"} 
                      alt="Current profile" 
                      className="w-16 h-16 rounded-full object-cover border border-gray-200"
                    />
                    <div className="flex-1">
                      <label className="cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <Upload size={16} className="mr-2" />
                        Upload new image
                        <input type="file" accept="image/*" className="hidden" />
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue={persistedUser?.name}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue={persistedUser?.email}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="flex justify-end gap-4 mt-8">
                <button
                  className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-medium"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                  onClick={() => setShowEditModal(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserPage;
