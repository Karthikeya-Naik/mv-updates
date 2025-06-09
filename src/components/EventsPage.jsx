// import React from "react";
// import { Link } from 'react-router-dom'; 
// import eve from '../assets/eve1.jpg';
// import evee from '../assets/eve2.jpg';
// import "./EventsPage.css";
// import upceve from '../assets/upceve-1.png';
// import td from '../assets/teamdynamics.jpeg';
// import iimb from '../assets/iimb.jpg';
// import bhu from '../assets/bhu.jpg';
// import ama from '../assets/amazon.jpg';
// import capgemini from '../assets/capgemini.jpg';
// import cio from '../assets/cio.jpg';
// import aic from '../assets/aic.jpeg';
// import dot from '../assets/dot.jpeg';
// import cii from '../assets/cii2.jpg';
// import cii2 from '../assets/CII.jpg';

// const upcomingEvents = [
//   {
//     title: "",
//     date: "",
//     description: "",
//     registrationLink: "",
//     image: dot
//   },
// ];

// const pastEvents = [
//   {
//     title: "Amazon: Mind Your Mind Program",
//     image: ama,
//     description: "A successful workshop on health and fitness at Amazon.",
//     detailLink: "/past-events"
//   },
//   {
//     title: "Aug2024: Team Dynamics Workshop",
//     image: td,
//     description: "We hosted a Team Dynamics workshop for 50 participants, focusing on collaboration, self-awareness, and holistic well-being to enhance teamwork and performance.",
//     detailLink: "/past-events"
//   },
// ];

// const industryConnects = [
//   {
//     title: "CAPGEMINI INNOVATION HEALTH ROUNTABLE",
//     image: capgemini,
//     description: "A seminar bringing together industry experts.",
//     detailLink: "/industry-connects" 
//   },
//   {
//     title: "SMART CIO SUMMIT 2024",
//     image: cio,
//     description: "A seminar bringing together industry experts.",
//     detailLink: "/industry-connects" 
//   },
// ];

// const StartupEcosystemConnects = [
//   {
//     title: " Department of Telecommunications, Ministry of Communication & IT (INDIA)",
//     image: dot,
//     description: "Invited as jury for a 30-hour “5G and 6G Hackathon” that brought together top talent from across India to develop cutting-edge 5G and 6G products and solutions.",
//     detailLink: "/StartupEcosystem-connects"
//   },

// ];

// const academiaConnects = [
//   {
//     title: "IIM Bengaluru",
//     image: iimb,
//     description: "Invited for a guest lecture on the topic 'Healthtech & Medtech is next Fintech'.",
//     detailLink: "/academia-connects"
//   },
//   {
//     title: "IIT BHU",
//     image: bhu,
//     description: "Invited as a speaker at their Annual Conference.",
//     detailLink: "/academia-connects"
//   },
// ];

// const chambersOfCommerce = [
//   {
//     title: "CII Indo Swedish Life Sciences Delegation",
//     image: cii2, // replace with the relevant image for the event
//     description: "Sarvesh Singh attended a dinner by AIC-GNITS Foundation, honoring a Swedish Life Sciences Delegation. The event featured leaders from Sweden and India, exploring collaborations in healthcare, biotech, and AI.",
//     detailLink: "/chambers-of-commerce"
//   },
//     {
//     title: "Health & Lifesciences Summit organised by Indo-French Chambers of Commerce & Industry (IFCCI)",
//     image: cii,
//     description: "This event spotlighted the contributions and initiatives of French and India entities, aiming to catalyze the growth and innovation within Health & Lifesciences sector.",
//     detailLink: "/chambers-of-commerce"
//   },
// ];

// const EventsPage = () => {
//   return (
//     <div className="events-page mb-20">
//       <h1 className="text-center text-3xl font-bold my-8">DISCOVER & RELIVE OUR EVENTS: WHERE INNOVATION MEETS INSPIRATION</h1>


//   {/* <div className="events-section">
//         <h2 className="text-2xl font-semibold mb-6">UPCOMING EVENTS</h2>
//         <div className="upcoming-events grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {upcomingEvents.slice(0, 3).map((event, index) => (
//             <div key={index} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8">
//               <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded mb-4" />
//               <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//               <p className="text-gray-600 mb-2">{event.date}</p>
//               <p className="text-gray-700 mb-4">{event.description}</p>
//               <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
//                 <button className="register-button text-white px-4 py-2 rounded hover: transition-colors duration-300">
//                   Register Now
//                 </button>
//               </a>
//             </div>
//           ))}
//           <Link to="/upcoming-events" className="text-blue-500 hover:underline">View More</Link>
//         </div>
//       </div>
//       */}
      

//       <div className="events-section mt-12">
//         <h2 className="text-2xl font-semibold mb-6">PAST EVENTS</h2>
//         <div className="past-events grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {pastEvents.slice(0, 3).map((event, index) => (
//             <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
//                 <img src={event.image} alt={event.title} className="w-full h-40 object-contain rounded mb-4" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//               <p className="text-gray-700">{event.description}</p>
//             </Link>
//           ))}
//           <Link to="/past-events" className="text-blue-500 hover:underline">View More</Link>
//         </div>
//       </div>

//       <div className="events-section mt-12">
//         <h2 className="text-2xl font-semibold mb-6">INDUSTRY CONNECTS</h2>
//         <div className="industry-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {industryConnects.slice(0, 3).map((event, index) => (
//             <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
//                 <img src={event.image} alt={event.title} className="w-full h-40 object-contain rounded mb-4" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//               <p className="text-gray-700">{event.description}</p>
//             </Link>
//           ))}
//           <Link to="/industry-connects" className="text-blue-500 hover:underline">View More</Link>
//         </div>
//       </div>

//       {/* Adding the new Chambers of Commerce Section */}
//       <div className="events-section mt-12">
//         <h2 className="text-2xl font-semibold mb-6">CHAMBERS OF COMMERCE</h2>
//         <div className="chambers-of-commerce grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {chambersOfCommerce.slice(0, 3).map((event, index) => (
//             <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="h-60 flex  justify-center overflow-hidden rounded mb-4">
//                 <img src={event.image} alt={event.title} className=" h-250  rounded mb-4"  />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//               <p className="text-gray-700">{event.description}</p>
//             </Link>
//           ))}
//           <Link to="/chambers-of-commerce" className="text-blue-500 hover:underline">View More</Link>
//         </div>
//       </div>

//       <div className="events-section mt-12">
//         <h2 className="text-2xl font-semibold mb-6">STARTUP ECOSYSTEM CONNECTS</h2>
//         <div className="academia-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {StartupEcosystemConnects.slice(0, 3).map((event, index) => (
//             <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
//                 <img src={event.image} alt={event.title} className="w-full h-40 object-contain rounded mb-4" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//               <p className="text-gray-700">{event.description}</p>
//             </Link>
//           ))}
//           <Link to="/StartupEcosystem-connects" className="text-blue-500 hover:underline">View More</Link>
//         </div>
//       </div>

//       <div className="events-section mt-12">
//         <h2 className="text-2xl font-semibold mb-6">ACADEMIA CONNECTS</h2>
//         <div className="academia-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {academiaConnects.slice(0, 3).map((event, index) => (
//             <Link key={index} to={event.detailLink} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
//                 <img src={event.image} alt={event.title} className="w-full h-40 object-contain rounded mb-4" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//               <p className="text-gray-700">{event.description}</p>
//             </Link>
//           ))}
//           <Link to="/academia-connects" className="text-blue-500 hover:underline">View More</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsPage;




// import React, { useState, useMemo } from "react";
// import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

// // Import images (same as before)
// import ama from '../assets/amazon.jpg';
// import td from '../assets/teamdynamics.jpeg';
// import iimb from '../assets/iimb.jpg';
// import bhu from '../assets/bhu.jpg';
// import capgemini from '../assets/capgemini.jpg';
// import cio from '../assets/cio.jpg';
// import dot from '../assets/dot.jpeg';
// import cii from '../assets/cii2.jpg';
// import cii2 from '../assets/CII.jpg';
// import mru from '../assets/mru.jpeg';
// import nmims from '../assets/nmims.jpeg';
// import cbit from '../assets/cbit.jpeg';
// import isb from '../assets/isb.jpeg';
// import evosmt from '../assets/evosmt.jpeg';
// import lda from '../assets/lda.jpeg';
// import msme from '../assets/msme.jpg';
// import f3 from '../assets/f3.jpg';
// import ftcci from '../assets/ftcci.jpeg';
// import Amista from '../assets/Amista.jpeg';
// import wh from '../assets/wh.jpeg';

// // Consolidated Events Array (same as before, with allEvents)
// const allEvents = [
//   {
//     id: "1",
//     title: "Amazon: Mind Your Mind Program",
//     image: ama,
//     description: "A comprehensive workshop focusing on health and fitness at Amazon.",
//     details: "The workshop included expert talks on health, live fitness demonstrations, and a Q&A session about mental and physical well-being. Participants engaged in interactive sessions that explored holistic approaches to workplace wellness, focusing on stress management, nutrition, and physical fitness strategies.",
//     location: "Amazon Headquarters, Bangalore",
//     category: "Past Events"
//   },
//   {
//     id: "2",
//     title: "Aug2024: Team Dynamics Workshop",
//     image: td,
//     description: "We hosted a Team Dynamics workshop for 50 participants, focusing on collaboration, self-awareness, and holistic well-being to enhance teamwork and performance.",
//     details: "We conducted a comprehensive Team Dynamics workshop for 50 participants from 10 AM to 4 PM, focusing on collaboration and self-awareness. Through Enneagram exercises, case studies, and group discussions, participants gained deep insights into effective teamwork. The workshop highlighted tips on holistic well-being, emphasizing the critical importance of mental and physical health in building cohesive teams.",
//     location: "Marichi Ventures Training Center",
//     category: "Past Events"
//   },
//   {
//     id: "3",
//     title: "Health & Fitness Workshop at Amista",
//     image: Amista,
//     description: "An engaging session on health and wellness at Amista.",
//     details: "Participants learned about wellness strategies, nutrition tips, and stress management techniques.",
//     detailLink: "/past-events",
//     category: "Past Events"
//   },
//   {
//     id: "4",
//     title: "Health & Fitness Workshop at WeHub",
//     image: wh,
//     description: "A dynamic workshop on fitness and well-being at WeHub.",
//     details: "Topics covered included fitness routines, mental health awareness, and healthy eating habits.",
//     detailLink: "/past-events",
//     category: "Past Events"
//   },
//   {
//     id: "5",
//     title: "Leadership Workshop with FTCCI",
//     image: ftcci,
//     description: "An engaging workshop on Interaction, Networking, and Leadership Connection, hosted by FTCCI.",
//     details: "Our workshop, 'Interaction, Networking, and Connection as a Leader,' focused on the power of networking as a core leadership skill. Participants gained practical tools to create connections, foster impactful interactions, and build networks that drive growth, collaboration, and lasting success.",
//     detailLink: "/past-events",
//     category: "Past Events"
//   },
//   {
//     id: "6",
//     title: "CAPGEMINI INNOVATION HEALTH ROUNDTABLE",
//     image: capgemini,
//     description: "An exclusive roundtable where Capgemini's thought leaders and healthcare executives explored digital innovations in the healthcare sector.",
//     details: "The roundtable focused on the impact of technology on patient care, operational efficiency, and the future of healthcare data management. The discussion included emerging technologies such as telemedicine, AI in diagnostics, and blockchain in healthcare data security.",
//     category: "Industry Connects"
//   },
//   {
//     id: "7",
//     title: "SMART CIO SUMMIT 2024",
//     image: cio,
//     description: "A summit that brought together top CIOs from around the world to discuss innovations and trends in IT and digital transformation.",
//     details: "The event featured keynote speeches from industry leaders, panel discussions on future technologies, and networking sessions that fostered collaboration among CIOs. Key topics included AI integration, cybersecurity challenges, and cloud infrastructure strategies.",
//     detailLink: "/industry-connects",
//     category: "Industry Connects"
//   },
//   {
//     id: "8",
//     title: "HR Evolution Summit",
//     image: evosmt,
//     description: "Sarvesh Singh was invited at HR Evolution Summit organized by FICCI. Theme of the summit was 'Adapting to Evolving Workplaces, Workforce, Work Output and Work Ethos'.",
//     details: "The HR Evolution Summit, organized by FICCI, explored adapting to evolving workplaces, workforce, work output, and work ethos. It focused on future-proofing HR with technology, fostering trust through ethics, supporting mental health, and navigating labor code implementation for business success.",
//     detailLink: "/industry-connects",
//     category: "Industry Connects"
//   },
//   {
//     id: "9",
//     title: "MASTERCLASS ON LEADERSHIP IN DIGITAL AGE",
//     image: lda,
//     description: "Masterclass on Leadership in Digital Age at Tech Mahindra organized by Hyderabad Software Enterprises Association and Mahindra University - School Of Management.",
//     details: "The discussion focused on the evolving demands of leadership in today's fast-changing world. The session emphasized the importance of creating an environment grounded in trust, safety, and empowerment. The MINDSPACE framework was explored, highlighting key principles for effective leadership.",
//     detailLink: "/industry-connects",
//     category: "Industry Connects"
//   },
//   {
//     id: "10",
//     title: "IIM Bengaluru",
//     image: iimb,
//     description: "Invited for a guest lecture on the topic 'Healthtech & Medtech is next Fintech'.",
//     details: "Guest lecture at IIM Bengaluru",
//     link: "https://www.facebook.com/photo.php?fbid=122101444340504739&set=a.122101444952504739&type=3",
//     category: "Academia Connects"
//   },
//   {
//     id: "11",
//     title: "IIT BHU",
//     image: bhu,
//     description: "Invited as a speaker at their Annual Conference.",
//     link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122101439696504739%26set%3Da.122101439786504739%26type%3D3&width=200&show_text=true&height=517&appId",
//     detailLink: "/academia-connects",
//     category: "Academia Connects"
//   },
//   {
//     id: "12",
//     title: "CBIT (Chaitanya Bharathi Institute of Technology)",
//     image: cbit,
//     description: "Faculty Development Workshop",
//     link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122103472418504739%26set%3Da.122103472682504739%26type%3D3&width=400&show_text=true&height=552&appId",
//     detailLink: "/academia-connects",
//     category: "Academia Connects"
//   },
//   {
//     id: "13",
//     title: "MRU (Malla Reddy University)",
//     image: mru,
//     description: "Invited to their ideathon session for startup ideas.",
//     link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122104132268504739%26set%3Da.122104132346504739%26type%3D3&width=400&show_text=true&height=353&appId",
//     detailLink: "/academia-connects",
//     category: "Academia Connects"
//   },
//   {
//     id: "14",
//     title: "NMIMS",
//     image: nmims,
//     description: "NMIMIS ANNUAL LEADERS CONCLAVE",
//     link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122104137452504739%26set%3Da.122104137662504739%26type%3D3&width=300&show_text=true&height=502&appId",
//     detailLink: "/academia-connects",
//     category: "Academia Connects"
//   },
//   {
//     id: "15",
//     title: "ISB HYDERABAD",
//     image: isb,
//     description: "ISB Vision Venture",
//     link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122101447964504739%26set%3Da.122101448186504739%26type%3D3&width=900&show_text=true&height=887&appId",
//     detailLink: "/academia-connects",
//     category: "Academia Connects"
//   },
//   {
//     id: "16",
//     title: "CII Indo Swedish Life Sciences Delegation",
//     image: cii2,
//     description: "Sarvesh Singh attended a dinner by AIC-GNITS Foundation, honoring a Swedish Life Sciences Delegation. The event featured leaders from Sweden and India, exploring collaborations in healthcare, biotech, and AI.",
//     details: "Indo Swedish Life Sciences Delegation ",
//     link: "https://www.linkedin.com/feed/update/urn:li:activity:7248947438080679937",
//     category: "Chambers of Commerce"
//   },
//   {
//     id: "17",
//     title: "Health & Lifesciences Summit organised by Indo-French Chambers of Commerce & Industry (IFCCI)",
//     image: cii,
//     description: "This event spotlighted the contributions and initiatives of French and India entities, aiming to catalyze the growth and innovation within Health & Lifesciences sector.",
//     link: "https://www.linkedin.com/feed/update/urn:li:activity:7262763215896420353",
//     detailLink: "/chambers-of-commerce",
//     category: "Chambers of Commerce"
//   },
//   {
//     id: "18",
//     title: "FTCCI CEO FORUM",
//     image: f3,
//     description: "This prestigious event brought together CEOs, Decision Makers, Policy Makers, Government Officials, Industry Leaders to discuss on the theme 'Bridging the credit gap through improving confidence in lending for MSMEs'. Deputy Governor of RBI (Reserve Bank of India) also shared his views during the event.",
//     link: "https://www.linkedin.com/feed/update/urn:li:activity:7264510762809778178",
//     detailLink: "/chambers-of-commerce",
//     category: "Chambers of Commerce"
//   },
//   {
//     id: "19",
//     title: "Department of Telecommunications, Ministry of Communication & IT (INDIA)",
//     image: dot,
//     description: "Invited as jury for a 30-hour 5G and 6G Hackathon that brought together top talent from across India to develop cutting-edge 5G and 6G products and solutions.",
//     detailLink: "/StartupEcosystem-connects",
//     category: "StartupEcosystemConnects"
//   },
//   // ... (previous events array remains the same)
// ];

// const EventsPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Categories from unique event categories
//   const categories = ['All', ...new Set(allEvents.map(event => event.category))];

//   // Filtering logic
//   const filteredEvents = useMemo(() => {
//     return allEvents.filter(event => {
//       const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
//       const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             event.description.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [activeCategory, searchQuery]);

//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeEventDetails = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-[#65B741] to-[#54a332] py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center text-white">
//             <h1 className="text-5xl font-bold mb-4">Marichi Ventures Events</h1>
//             <p className="text-xl opacity-90">
//             Discover & relive our events: where innovation meets inspiration. Use the category filter to view events specific to your area of interest.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         {/* Categories */}
//         <div className="flex flex-wrap gap-2 justify-center mb-12">
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`text-xs px-4 py-1 sm:text-sm sm:px-6 sm:py-2 lg:text-base lg:px-8 lg:py-3 rounded-full transition-all ${
//                 activeCategory === category
//                   ? 'bg-[#65B741] text-white'
//                   : 'bg-[#eafce2] text-gray-600 hover:bg-gray-100'
//               }`}
              
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Events Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredEvents.map(event => (
//             <article
//               key={event.id}
//               className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//             >
//               <div className="relative h-48">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 group-hover:text-[#65B741] transition-colors">
//                   {event.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
//                 <div className="flex items-center justify-between text-sm text-gray-500">
//                   <button 
//                     onClick={() => handleEventClick(event)}
//                     className="flex items-center text-[#65B741] hover:text-[#54a332] transition-colors"
//                   >
//                     <FaExternalLinkAlt className="mr-2" /> View Details 
//                     <span className="ml-4 text-xs bg-gray-100 px-2 py-1 rounded-full">
//                       {event.category}
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {filteredEvents.length === 0 && (
//           <div className="text-center py-12">
//             <h3 className="text-2xl font-bold text-gray-400 mb-2">No events found</h3>
//             <p className="text-gray-500">Try adjusting your search or filter settings</p>
//           </div>
//         )}
//       </div>

//       {/* Event Details Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="relative">
//               <img 
//                 src={selectedEvent.image} 
//                 alt={selectedEvent.title} 
//                 className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
//               />
//               <button 
//                 onClick={closeEventDetails}
//                 className="absolute top-4 right-4 bg-white rounded-full px-1 shadow-lg hover:bg-gray-100"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="p-8">
//               <h2 className="text-3xl font-bold mb-4">{selectedEvent.title}</h2>
//               <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-4">Event Details</h3>
//                 <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: selectedEvent.details }}></p>
//               </div>
//               {/* Additional Links Section */}
//               {(selectedEvent.link || selectedEvent.detailLink) && (
//                 <div className="mt-6">
//                   <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
//                   <div className="space-y-2">
//                     {selectedEvent.link && (
//                       <a 
//                         href={selectedEvent.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className="flex items-center text-[#65B741] hover:text-[#54a332] transition-colors"
//                       >
//                         <FaLink className="mr-2" /> Event Link
//                       </a>
//                     )}
                    
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventsPage;


import React, { useState, useEffect, useMemo } from "react";
import { FaExternalLinkAlt, FaLink, FaCalendarAlt } from "react-icons/fa";
import UpcomingEvents, { upcomingEventsData } from "./UpcomingEvents";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState('all'); // 'all' or 'upcoming'

  const BASE_URL = "https://backend.marichiventures.com/admin/pages/events-api.php";
  const IMAGE_BASE_URL = "https://backend.marichiventures.com/admin/pages/uploads/events";

  // Fetch events data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        
        if (data.success) {
          setEvents(data.events);
        } else {
          throw new Error(data.message || 'Unknown error');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  // Extract unique categories from the events
  const categories = useMemo(() => {
    // Show categories based on the current view mode
    if (viewMode === 'all') {
      const categorySet = new Set(events.map(event => event.category));
      return ['All', ...Array.from(categorySet)];
    } else {
      // For upcoming events, get categories from upcomingEventsData
      const categorySet = new Set(upcomingEventsData.map(event => event.category));
      return ['All', ...Array.from(categorySet)];
    }
  }, [events, viewMode]);

  // Filter events based on search and category
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, events]);

  // Filter upcoming events based on categories
  const filteredUpcomingEvents = useMemo(() => {
    return upcomingEventsData.filter(event => {
      const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  const handleRegistration = (event) => {
    // Registration logic will go here
    alert(`Registration for "${selectedEvent.title}" will be processed shortly.`);
    // In a real implementation, this would redirect to a registration form or API call
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
            {/* Always show "All Events" tab for navigation */}
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
        {/* <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65B741] focus:border-transparent"
            />
          </div>
        </div> */}

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
        {loading && viewMode === 'all' && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#65B741]"></div>
          </div>
        )}

        {/* Error state */}
        {error && viewMode === 'all' && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-500 mb-2">Error loading events</h3>
            <p className="text-gray-700">{error}</p>
          </div>
        )}

        {/* Events Grid - Regular Events */}
        {viewMode === 'all' && !loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <article
                key={event.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={`${IMAGE_BASE_URL}/${event.image}`}
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
                      <span className="ml-4 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {event.category}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Upcoming Events Grid */}
        {viewMode === 'upcoming' && (
          <>
            <UpcomingEvents 
              events={filteredUpcomingEvents} 
              handleEventClick={handleEventClick} 
              IMAGE_BASE_URL={IMAGE_BASE_URL} 
            />
          </>
        )}

        {/* No results message */}
        {viewMode === 'all' && !loading && !error && filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search or filter settings</p>
          </div>
        )}

        {viewMode === 'upcoming' && filteredUpcomingEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No upcoming events found</h3>
            <p className="text-gray-500">Try adjusting your search or filter settings</p>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={`${IMAGE_BASE_URL}/${selectedEvent.image}`} 
                alt={selectedEvent.title} 
                className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
              />
              <button 
                onClick={closeEventDetails}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{selectedEvent.title}</h2>
              <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
              {selectedEvent.details && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: selectedEvent.details }}></p>
                </div>
              )}
              {selectedEvent.location && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">{selectedEvent.location}</p>
                </div>
              )}
              {selectedEvent.date && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">Date</h3>
                  <p className="text-gray-600">{selectedEvent.date}</p>
                </div>
              )}
              {/* Registration Button */}
              {selectedEvent.isUpcoming && selectedEvent.registrationOpen && (
                <div className="mt-6">
                  <button
                    onClick={handleRegistration}
                    className="bg-[#65B741] hover:bg-[#54a332] text-white font-medium px-6 py-3 rounded-lg shadow-md transition-colors flex items-center"
                  >
                    Register Here
                  </button>
                </div>
              )}
              {/* Additional Links Section */}
              {selectedEvent.link && (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
                  <div className="space-y-2">
                    <a 
                      href={selectedEvent.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-[#65B741] hover:text-[#54a332] transition-colors"
                    >
                      <FaLink className="mr-2" /> Event Link
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;