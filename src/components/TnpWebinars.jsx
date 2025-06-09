import WebinarPage from "./WebinarPageTemplate";

import tnpw1 from "../assets/tnpw1.jpg";
import tnpup from "../assets/tnpup.jpg";


const TnpWebinars = ()=>{
  const Tnpwebinars = [
    {
          // Webinar 1 : 5th Feb : 9:30am -10:30am IST
    id: 1,
    title: "What is R and Why You Should Learn R ",
    description: "Join our webinar to discover what R is and why it's essential for data analysis, statistics, and machine learning.",
    date: new Date(2025, 1, 5),
    time: "9:30 AM",
    duration: "1 hour",
    status: "upcoming",
    isFirstUpcoming : true,
    image: tnpw1,
    speaker : "",
    registrationLink: "https://forms.gle/UijRonEqmfBR1tmM8"
  },
  {
    
    
    id: 2,
    title: "Writing Your First R Program",
    description: "Learn the fundamentals of R and write your first script for data analysis with ease!",
    date: new Date(2025, 2, ),
    time: "10:00 AM",
    duration: "2 hours",
    status: "upcoming",
    isFirstUpcoming : false,
    image: tnpup,
    speaker : "",
      registrationLink: ""
    },
    {
      id: 3,
      title: "R-Guru Open House",
      description: "Connect with R experts, ask questions, and explore best practices in an interactive session!",
      date: new Date(2025, 3, ),
      time: "1:00 PM",
      duration: "1.5 hours",
      status: "upcoming",
      isFirstUpcoming : false,
      image: tnpup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 4,
      title: "R Made Easier for SAS Programmers",
      description: "Learn key R functions and techniques to transition seamlessly from SAS!",
      date: new Date(2025, 4, ),
      time: "2:00 PM",
      duration: "1.5 hours",
      status: "upcoming",
      isFirstUpcoming : false,
      image: tnpup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 5,
      title: "SAS to R Tips",
      description: "Discover essential tips and tricks for transitioning from SAS to R and enhance your data analysis skills!",
      date: new Date(2025, 5, ),
      time: "10:00 AM",
      duration: "1 hour",
      status: "upcoming",
      isFirstUpcoming : false,
      image: tnpup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 6,
      title: "R and Pharmaverse",
      description: "Discover how R is transforming the pharmaceutical industry for advanced statistical analysis and drug development.",
      date: new Date(2025, 6, ),
      time: "11:00 AM",
      duration: "2 hours",
      status: "upcoming",
      isFirstUpcoming : false,
      image: tnpup,
      speaker : "",
      registrationLink: ""
    },
    // {
    //   id: 7,
    //   title: "TypeScript Deep Dive",
    //   description: "Advanced TypeScript features and practical applications",
    //   date: new Date(2025, 0, 30),
    //   time: "11:00 AM",
    //   duration: "2 hours",
    //   status: "upcoming",
    //   image: "https://randomuser.me/api/portraits/men/6.jpg",
    // speaker : "",
    //   registrationLink: "https://example.com/register/typescript"
    // },
    
    // {
    //   id: 8,
    //   title: "React Native Masterclass",
    //   description: "Building cross-platform mobile applications with React Native",
    //   date: new Date(2025, 1, 10),
    //   time: "2:00 PM",
    //   duration: "3 hours",
    //   status: "upcoming",
    //   image: "https://randomuser.me/api/portraits/women/7.jpg",
    // speaker : "",
    //   registrationLink: "https://example.com/register/react-native"
    // },
    // {
    //   id: 9,
    //   title: "Web Security Best Practices",
    //   description: "Essential security concepts for modern web applications",
    //   date: new Date(2025, 1, 15),
    //   time: "1:00 PM",
    //   duration: "2 hours",
    //   status: "upcoming",
    //   image: "https://randomuser.me/api/portraits/women/9.jpg",
    // speaker : "",
    //   registrationLink: "https://example.com/register/web-security"
    // },
    // {
    //   id: 10,
    //   title: "Docker for Developers",
    //   description: "Containerization basics and Docker deployment strategies",
    //   date: new Date(2025, 1, 20),
    //   time: "11:00 AM",
    //   duration: "2.5 hours",
    //   status: "upcoming",
    //   image: "https://randomuser.me/api/portraits/men/10.jpg",
    // speaker : "",
    //   registrationLink: "https://example.com/register/docker"
    // },
  ]

  return <>
  
      <WebinarPage webinars = {Tnpwebinars}></WebinarPage>

  </>
}


export default TnpWebinars;