// import React from "react";
// import { Link } from "react-router-dom";
// import { TbArrowBadgeRightFilled } from "react-icons/tb";
// import { RiArtboardFill } from "react-icons/ri";
// import { RiBarChart2Fill } from "react-icons/ri";
// import { IoBookSharp } from "react-icons/io5";
// import { ImBooks } from 'react-icons/im'
// import { MdManageSearch } from 'react-icons/md'
// import { GiMaterialsScience } from "react-icons/gi"
// import { FaPeopleArrows } from "react-icons/fa6";

// const Offerings = () => {
//     const data = [
//         {
//             item:"Training & Placement",
//             url:"/offerings/tnp",
//         },
//         {
//              item: "Staffing Solutions",
//              url:"/offerings/staffingsolutions",
//          },
//         {
//             item:"Career Counselling",
//             url:"/offerings/carrercounselling",
//         },
//         {
//             item:"Leadership Development",
//             url:"/offerings/leadership",
//         },
//         {
//             item:"Executive Coaching",
//             url:"/offerings/executivecoaching",
//         },
//         // {
//         //     item:"Executive Search",
//         //     url:"/offerings/executivesearch",
//         // },
//         {
//             item:"Strategic Consulting",
//             url:"/offerings/strategicconsulting",
//         },
//         // {
//         //     item: "Event Organization",
//         //     url:"/offerings/eventorganization",
//         // },  
//     ];

//     return (
//         <>
//             <div className="md:flex bg-fixed md:h-[710px] py-6 text-white "
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/7046164/pexels-photo-7046164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
//           backgroundPosition: "top right",
//         }}>
//         <div className="md:w-full md:max-w-screen md:px-[4rem]">
//           <h1 className=" text-4xl md:text-left text-center md:text-5xl mb-5  p-8">
//             OUR OFFERINGS
//             <div className="red-line mx-auto ml-[-6%] md:ml-[35%] mt-[1px] md:mt-[-1.5%] md:w-[500px] " ></div>
//             <span className="text-[18px]">"Click on Individual Offerings to get More Details"</span>
//           </h1>


//           {/* Grids */}
//           <div className="grid md:grid-cols-2 grid-cols-1 text-[18px] font-bold md:px-[10rem] sm:px-[7rem] px-[3rem] ">
//             {/* First column with buttons */}
            
//               <Link
//                 to='/offerings/tnp' 
//               >
//                 <div className="flex justify-center items-center border-2  rounded-[5px]  hover:cursor-pointer hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1  ">
//                   <TbArrowBadgeRightFilled className="text-[32px] mx-3" />
//                   <h1 className="">
//                   Training and Placement
//                 </h1>
//                 </div>
                
//               </Link>


//                <Link
//                 to='/offerings/staffingsolutions'
//               >
//                 <div className="flex justify-center items-center border-2 rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1  ">
                
//                   <RiBarChart2Fill className="text-[32px] mx-3" />
//                   <h1 className="">
//                   Staffing Solutions
//                 </h1>
//                 </div>
//               </Link> 
            
//               <Link
//                 to='/offerings/Leadership'
//               >
//                 <div className="flex justify-center  items-center border-2  rounded-[5px]  hover:cursor-pointer hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
               
//                   <RiArtboardFill className='text-[32px] mx-3' />
//                   <h1>
//                   Leadership Development
//                 </h1>
//                 </div>
//               </Link>
            
            
            
//               <Link
//                 to='/offerings/executivecoaching' 
//               >
//                 <div className="flex justify-center items-center border-2  rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
//                   <IoBookSharp className="text-[32px] mx-3" />
//                   <h1 className=" ">
//                   Executive Coaching
//                 </h1>
//                 </div>
//               </Link>
            


//             {/* Second column with buttons */}
          
//               <Link
//                 to='/offerings/carrercounselling'
                

//               >
//                 <div className="flex justify-center items-center border-2  rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
//                   <ImBooks className="text-[32px] mx-3" />
//                   <h1 className="">
//                   Career Counselling
//                 </h1>
//                 </div>
//               </Link>
            
            
//               {/* <Link
//                 to='/offerings/executivesearch'
                
//               >
//                 <div className="flex justify-center items-center border-2  rounded-[5px]  hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
//                   <MdManageSearch className="text-[32px] mx-3" />
//                   <h1 className=" ">
//                   Executive Search
//                 </h1>
//                 </div>
//               </Link> */}
            
            
//               {/* <Link
//                 to='/events'
               
//               >
//                 <div className="flex justify-center items-center border-2  rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
//                   <GiMaterialsScience className="text-[32px] mx-3" />
//                   <h1 className=" ">
//                   Data Sciences Summit
//                 </h1>
//                 </div>
//               </Link> */}
            
            
//               <Link
//                 to='/offerings/strategicconsulting'
//               >
//                 <div className="flex justify-center items-center border-2  rounded-[5px]   hover:scale-105 transition-transform duration-300 transform mx-2 p-7 my-1">
                
//                   <FaPeopleArrows className="text-[32px] mx-3" />
//                   <h1 className=" ">
//                   Strategic Consulting
//                 </h1>
//                 </div>
//               </Link>
//           </div>
//         </div>
//         </div>
            
//         </>

//     );
// };

// export default Offerings;





















import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { RiArtboardFill } from "react-icons/ri";
import { RiBarChart2Fill } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaPeopleArrows } from "react-icons/fa6";

// Custom animation styles
const customStyles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out;
}
`;

const Offerings = () => {
  const offeringsData = [
    {
      title: "Training & Placement",
      url: "/offerings/tnp",
      icon: <TbArrowBadgeRightFilled className="text-2xl" />,
      description: "Comprehensive training programs designed to enhance employability and placement opportunities.",
      details: "Industry-specific skill development, mock interviews, resume building, and placement assistance with our corporate partners across various sectors."
    },
    {
      title: "Staffing Solutions",
      url: "/offerings/staffingsolutions",
      icon: <RiBarChart2Fill className="text-2xl" />,
      description: "Connecting the right talent with the right opportunities to fulfill your organizational needs.",
      details: "Temporary staffing, permanent recruitment, contract-to-hire options, and executive search services tailored to your specific requirements."
    },
    {
      title: "Career Counselling",
      url: "/offerings/carrercounselling",
      icon: <ImBooks className="text-2xl" />,
      description: "Personalized guidance to help individuals make informed career decisions and achieve their goals.",
      details: "Assessments for aptitude and interest, career path planning, industry insights, and guidance for higher education and specialization options."
    },
    {
      title: "Leadership Development",
      url: "/offerings/leadership",
      icon: <RiArtboardFill className="text-2xl" />,
      description: "Programs focused on developing essential leadership skills and strategic thinking abilities.",
      details: "Workshops on team management, conflict resolution, strategic decision making, and effective communication for existing and aspiring leaders."
    },
    {
      title: "Executive Coaching",
      url: "/offerings/executivecoaching",
      icon: <IoBookSharp className="text-2xl" />,
      description: "One-on-one coaching for executives to enhance performance and achieve organizational objectives.",
      details: "Personalized sessions with experienced coaches focused on leadership styles, work-life balance, strategic vision, and performance optimization."
    },
    {
      title: "Strategic Consulting",
      url: "/offerings/strategicconsulting",
      icon: <FaPeopleArrows className="text-2xl" />,
      description: "Expert advice on business strategy, organizational development, and performance enhancement.",
      details: "Customized solutions for organizational restructuring, process optimization, market expansion strategies, and corporate culture transformation."
    },
  ];

  return (
    <>
      {/* Injecting the custom animation styles */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <div 
        className="min-h-screen py-16 text-white bg-fixed bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/7046164/pexels-photo-7046164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-down">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR OFFERINGS</h1>
            <div className="h-1 w-32 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl italic">
              "Click on Individual Offerings to get More Details"
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offeringsData.map((offering, index) => (
              <div
                key={index}
                className="h-full opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards"
                }}
              >
                <Link to={offering.url} className="block h-full">
                  <div className="bg-black bg-opacity-60 border border-gray-700 rounded-lg overflow-hidden h-full transform transition-all duration-300 hover:scale-105 hover:border-green-500 hover:shadow-lg">
                    <div className="p-6 h-full flex flex-col">
                      <div className="mb-4 flex items-center">
                        <div className="bg-green-600 p-3 rounded-full mr-4">
                          {offering.icon}
                        </div>
                        <h3 className="text-xl font-bold">{offering.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-3">{offering.description}</p>
                      <p className="text-gray-400 text-sm flex-grow mb-4">{offering.details}</p>
                      <div className="flex justify-end items-center text-green-400 font-medium group">
                        <span>Learn more</span>
                        <svg className="w-5 h-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerings;






















// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { TbArrowBadgeRightFilled } from "react-icons/tb";
// import { RiArtboardFill } from "react-icons/ri";
// import { RiBarChart2Fill } from "react-icons/ri";
// import { IoBookSharp } from "react-icons/io5";
// import { ImBooks } from "react-icons/im";
// import { FaPeopleArrows } from "react-icons/fa6";
// import { BsArrowRight, BsCheck2Circle } from "react-icons/bs";

// // Custom animation styles
// const customStyles = `
// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes fadeInDown {
//   from {
//     opacity: 0;
//     transform: translateY(-30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes pulse {
//   0% {
//     box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
//   }
//   70% {
//     box-shadow: 0 0 0 10px rgba(72, 187, 120, 0);
//   }
//   100% {
//     box-shadow: 0 0 0 0 rgba(72, 187, 120, 0);
//   }
// }

// @keyframes float {
//   0% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(-8px);
//   }
//   100% {
//     transform: translateY(0px);
//   }
// }

// .animate-fade-in-up {
//   animation: fadeInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
// }

// .animate-fade-in-down {
//   animation: fadeInDown 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
// }

// .animate-pulse-green {
//   animation: pulse 2s infinite;
// }

// .animate-float {
//   animation: float 3s ease-in-out infinite;
// }

// .glassmorphism {
//   backdrop-filter: blur(10px);
//   background: rgba(0, 0, 0, 0.5);
//   border: 1px solid rgba(255, 255, 255, 0.1);
// }

// .card-shine {
//   position: relative;
//   overflow: hidden;
// }

// .card-shine::before {
//   content: '';
//   position: absolute;
//   top: -100%;
//   left: -100%;
//   width: 50%;
//   height: 200%;
//   background: linear-gradient(
//     to right,
//     rgba(255, 255, 255, 0) 0%,
//     rgba(255, 255, 255, 0.1) 100%
//   );
//   transform: rotate(25deg);
//   transition: transform 0.7s;
// }

// .card-shine:hover::before {
//   transform: rotate(25deg) translateX(300%);
// }

// .text-shadow {
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
// }

// .scroll-hint {
//   position: absolute;
//   bottom: 30px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 30px;
//   height: 50px;
//   border: 2px solid rgba(255, 255, 255, 0.7);
//   border-radius: 15px;
// }

// .scroll-hint::before {
//   content: '';
//   position: absolute;
//   top: 8px;
//   left: 50%;
//   width: 6px;
//   height: 6px;
//   margin-left: -3px;
//   background-color: #fff;
//   border-radius: 50%;
//   animation: scrollHint 2s infinite;
// }

// @keyframes scrollHint {
//   0% {
//     opacity: 1;
//     transform: translateY(0);
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(15px);
//   }
// }
// `;

// const Offerings = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const offeringsData = [
//     {
//       title: "Training & Placement",
//       url: "/offerings/tnp",
//       icon: <TbArrowBadgeRightFilled className="text-2xl" />,
//       description: "Comprehensive training programs designed to enhance employability and placement opportunities.",
//       details: "Industry-specific skill development, mock interviews, resume building, and placement assistance with our corporate partners across various sectors.",
//       benefits: ["95% placement rate", "Industry expert mentors", "Skill certification", "Corporate partnerships"],
//       color: "from-green-600 to-green-800"
//     },
//     {
//       title: "Staffing Solutions",
//       url: "/offerings/staffingsolutions",
//       icon: <RiBarChart2Fill className="text-2xl" />,
//       description: "Connecting the right talent with the right opportunities to fulfill your organizational needs.",
//       details: "Temporary staffing, permanent recruitment, contract-to-hire options, and executive search services tailored to your specific requirements.",
//       benefits: ["Pre-vetted candidates", "Industry specialization", "Quick turnaround", "Retention guarantee"],
//       color: "from-green-500 to-teal-600"
//     },
//     {
//       title: "Career Counselling",
//       url: "/offerings/carrercounselling",
//       icon: <ImBooks className="text-2xl" />,
//       description: "Personalized guidance to help individuals make informed career decisions and achieve their goals.",
//       details: "Assessments for aptitude and interest, career path planning, industry insights, and guidance for higher education and specialization options.",
//       benefits: ["Personalized roadmaps", "Psychometric testing", "Industry insights", "Education planning"],
//       color: "from-teal-500 to-green-600"
//     },
//     {
//       title: "Leadership Development",
//       url: "/offerings/leadership",
//       icon: <RiArtboardFill className="text-2xl" />,
//       description: "Programs focused on developing essential leadership skills and strategic thinking abilities.",
//       details: "Workshops on team management, conflict resolution, strategic decision making, and effective communication for existing and aspiring leaders.",
//       benefits: ["Experiential learning", "Case studies", "360° feedback", "Peer networking"],
//       color: "from-green-600 to-emerald-700"
//     },
//     {
//       title: "Executive Coaching",
//       url: "/offerings/executivecoaching",
//       icon: <IoBookSharp className="text-2xl" />,
//       description: "One-on-one coaching for executives to enhance performance and achieve organizational objectives.",
//       details: "Personalized sessions with experienced coaches focused on leadership styles, work-life balance, strategic vision, and performance optimization.",
//       benefits: ["Confidential sessions", "Performance metrics", "Behavioral assessments", "Growth tracking"],
//       color: "from-emerald-500 to-green-600"
//     },
//     {
//       title: "Strategic Consulting",
//       url: "/offerings/strategicconsulting",
//       icon: <FaPeopleArrows className="text-2xl" />,
//       description: "Expert advice on business strategy, organizational development, and performance enhancement.",
//       details: "Customized solutions for organizational restructuring, process optimization, market expansion strategies, and corporate culture transformation.",
//       benefits: ["Data-driven approach", "Industry benchmarking", "Implementation support", "ROI measurement"],
//       color: "from-green-500 to-emerald-600"
//     },
//   ];

//   return (
//     <>
//       {/* Injecting the custom animation styles */}
//       <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
//       <div 
//         ref={sectionRef}
//         className="relative min-h-screen py-20 text-white bg-fixed bg-cover overflow-hidden"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/7046164/pexels-photo-7046164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
//           backgroundPosition: "center"
//         }}
//       >
//         {/* Animated background particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(10)].map((_, i) => (
//             <div 
//               key={i}
//               className="absolute rounded-full bg-green-500 opacity-10 animate-float"
//               style={{
//                 width: `${Math.random() * 100 + 50}px`,
//                 height: `${Math.random() * 100 + 50}px`,
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animationDuration: `${Math.random() * 5 + 5}s`
//               }}
//             />
//           ))}
//         </div>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
//             <div className="inline-block relative mb-6">
//               <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow relative z-10">
//                 OUR OFFERINGS
//               </h1>
//               <div className="absolute left-0 bottom-0 h-3 w-full bg-gradient-to-r from-green-400 to-green-700 rounded-full transform -translate-y-2"></div>
//             </div>
//             <p className="text-xl italic text-gray-200 max-w-2xl mx-auto">
//               "Tailored solutions to empower your professional journey and organizational success"
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {offeringsData.map((offering, index) => (
//               <div
//                 key={index}
//                 className="h-full opacity-0 animate-fade-in-up"
//                 style={{
//                   animationDelay: `${index * 0.1 + 0.3}s`,
//                   animationFillMode: "forwards"
//                 }}
//                 onMouseEnter={() => setActiveCard(index)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 <Link to={offering.url} className="block h-full group">
//                   <div className={`card-shine glassmorphism rounded-xl overflow-hidden h-full transform transition-all duration-500 ${activeCard === index ? 'scale-105 shadow-2xl' : 'scale-100'}`}>
//                     {/* Card header with gradient */}
//                     <div className={`h-2 w-full bg-gradient-to-r ${offering.color}`}></div>
                    
//                     <div className="p-6 h-full flex flex-col">
//                       <div className="mb-5 flex items-center">
//                         <div className={`p-3 rounded-lg bg-gradient-to-br ${offering.color} shadow-lg mr-4 transform transition-transform duration-500 ${activeCard === index ? 'scale-110 animate-pulse-green' : ''}`}>
//                           {offering.icon}
//                         </div>
//                         <h3 className="text-2xl font-bold tracking-tight group-hover:text-green-400 transition-colors duration-300">
//                           {offering.title}
//                         </h3>
//                       </div>
                      
//                       <p className="text-gray-200 mb-4 font-medium">{offering.description}</p>
                      
//                       <p className="text-gray-300 text-sm flex-grow mb-4">{offering.details}</p>
                      
//                       {/* Benefits list */}
//                       <div className="mb-4">
//                         <h4 className="text-green-400 font-semibold mb-2 text-sm uppercase tracking-wider">Key Benefits</h4>
//                         <div className="grid grid-cols-2 gap-2">
//                           {offering.benefits.map((benefit, i) => (
//                             <div key={i} className="flex items-center text-xs text-gray-300">
//                               <BsCheck2Circle className="text-green-500 mr-1 flex-shrink-0" />
//                               <span>{benefit}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between mt-2">
//                         <div className={`w-2 h-2 rounded-full bg-green-500 ${activeCard === index ? 'animate-pulse-green' : ''}`}></div>
//                         <div className="flex justify-end items-center text-green-400 font-medium group">
//                           <span className="mr-1 transition-all duration-300 group-hover:mr-2">Explore</span>
//                           <BsArrowRight className="transform transition-all duration-500 group-hover:translate-x-1" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
          
//           {/* Scroll hint */}
//           <div className="flex justify-center mt-16">
//             <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 rounded-full text-white font-bold tracking-wide hover:shadow-lg hover:from-green-700 hover:to-green-900 transition-all duration-300 transform hover:-translate-y-1">
//               Schedule a Consultation
//             </button>
//           </div>
          
//           <div className="scroll-hint"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Offerings;

































// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { TbArrowBadgeRightFilled } from "react-icons/tb";
// import { RiArtboardFill } from "react-icons/ri";
// import { RiBarChart2Fill } from "react-icons/ri";
// import { IoBookSharp } from "react-icons/io5";
// import { ImBooks } from "react-icons/im";
// import { FaPeopleArrows } from "react-icons/fa6";
// import { BsArrowRight, BsCheck2Circle } from "react-icons/bs";

// // Simplified animation styles
// const customStyles = `
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .animate-fade-in {
//   animation: fadeIn 0.5s ease forwards;
// }

// .glassmorphism {
//   backdrop-filter: blur(10px);
//   background: rgba(0, 0, 0, 0.6);
//   border: 1px solid rgba(255, 255, 255, 0.1);
// }

// .text-shadow {
//   text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
// }
// `;

// const Offerings = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const offeringsData = [
//     {
//       title: "Training & Placement",
//       url: "/offerings/tnp",
//       icon: <TbArrowBadgeRightFilled className="text-2xl" />,
//       description: "Comprehensive training programs designed to enhance employability and placement opportunities.",
//       details: "Industry-specific skill development, mock interviews, resume building, and placement assistance with our corporate partners across various sectors.",
//       benefits: ["95% placement rate", "Industry expert mentors", "Skill certification", "Corporate partnerships"],
//       color: "bg-green-600"
//     },
//     {
//       title: "Staffing Solutions",
//       url: "/offerings/staffingsolutions",
//       icon: <RiBarChart2Fill className="text-2xl" />,
//       description: "Connecting the right talent with the right opportunities to fulfill your organizational needs.",
//       details: "Temporary staffing, permanent recruitment, contract-to-hire options, and executive search services tailored to your specific requirements.",
//       benefits: ["Pre-vetted candidates", "Industry specialization", "Quick turnaround", "Retention guarantee"],
//       color: "bg-green-600"
//     },
//     {
//       title: "Career Counselling",
//       url: "/offerings/carrercounselling",
//       icon: <ImBooks className="text-2xl" />,
//       description: "Personalized guidance to help individuals make informed career decisions and achieve their goals.",
//       details: "Assessments for aptitude and interest, career path planning, industry insights, and guidance for higher education and specialization options.",
//       benefits: ["Personalized roadmaps", "Psychometric testing", "Industry insights", "Education planning"],
//       color: "bg-green-600"
//     },
//     {
//       title: "Leadership Development",
//       url: "/offerings/leadership",
//       icon: <RiArtboardFill className="text-2xl" />,
//       description: "Programs focused on developing essential leadership skills and strategic thinking abilities.",
//       details: "Workshops on team management, conflict resolution, strategic decision making, and effective communication for existing and aspiring leaders.",
//       benefits: ["Experiential learning", "Case studies", "360° feedback", "Peer networking"],
//       color: "bg-green-600"
//     },
//     {
//       title: "Executive Coaching",
//       url: "/offerings/executivecoaching",
//       icon: <IoBookSharp className="text-2xl" />,
//       description: "One-on-one coaching for executives to enhance performance and achieve organizational objectives.",
//       details: "Personalized sessions with experienced coaches focused on leadership styles, work-life balance, strategic vision, and performance optimization.",
//       benefits: ["Confidential sessions", "Performance metrics", "Behavioral assessments", "Growth tracking"],
//       color: "bg-green-600"
//     },
//     {
//       title: "Strategic Consulting",
//       url: "/offerings/strategicconsulting",
//       icon: <FaPeopleArrows className="text-2xl" />,
//       description: "Expert advice on business strategy, organizational development, and performance enhancement.",
//       details: "Customized solutions for organizational restructuring, process optimization, market expansion strategies, and corporate culture transformation.",
//       benefits: ["Data-driven approach", "Industry benchmarking", "Implementation support", "ROI measurement"],
//       color: "bg-green-600"
//     },
//   ];

//   return (
//     <>
//       {/* Injecting the custom animation styles */}
//       <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
//       <div 
//         ref={sectionRef}
//         className="relative py-16 text-white bg-fixed bg-cover"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/7046164/pexels-photo-7046164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
//           backgroundPosition: "center"
//         }}
//       >
//         <div className="container mx-auto px-6 relative z-10">
//           <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
//             <h1 className="text-4xl text-green-500 md:text-5xl font-bold mb-4 text-shadow">
//               OUR OFFERINGS
//             </h1>
//             <p className="text-lg text-green-200 max-w-2xl mx-auto">
//               Tailored solutions to empower your professional journey and organizational success
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {offeringsData.map((offering, index) => (
//               <div
//                 key={index}
//                 className="opacity-0 animate-fade-in h-full"
//                 style={{
//                   animationDelay: `${index * 0.1 + 0.3}s`,
//                   animationFillMode: "forwards"
//                 }}
//                 onMouseEnter={() => setActiveCard(index)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 <Link to={offering.url} className="block h-full">
//                   <div className=" border border-white rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
//                     {/* Card header */}
                    
                    
//                     <div className="p-5 h-full flex flex-col">
//                       <div className="mb-4 flex items-center">
//                         <div className={`p-2 rounded-lg ${offering.color} mr-3`}>
//                           {offering.icon}
//                         </div>
//                         <h3 className="text-xl font-bold tracking-tight hover:text-green-400 transition-colors duration-300">
//                           {offering.title}
//                         </h3>
//                       </div>
                      
//                       <p className="text-gray-200 mb-3 font-medium">{offering.description}</p>
                      
//                       <p className="text-gray-300 text-sm flex-grow mb-3">{offering.details}</p>
                      
//                       {/* Benefits list */}
//                       <div className="mb-3">
//                         <h4 className="text-green-400 font-semibold mb-2 text-sm uppercase tracking-wider">Key Benefits</h4>
//                         <div className="grid grid-cols-2 gap-2">
//                           {offering.benefits.map((benefit, i) => (
//                             <div key={i} className="flex items-center text-xs text-gray-300">
//                               <BsCheck2Circle className="text-green-500 mr-1 flex-shrink-0" />
//                               <span>{benefit}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-end mt-2">
//                         <div className="flex items-center text-green-400 font-medium group">
//                           <span className="mr-1">Explore</span>
//                           <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
          
//           <div className="flex justify-center mt-12">
//             <button className="px-5 py-2 bg-green-600 rounded-md text-white font-semibold tracking-wide hover:bg-green-700 transition-all duration-300">
//               Schedule a Consultation
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Offerings;