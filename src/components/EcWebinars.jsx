import WebinarPage from "./WebinarPageTemplate";

import ecup from "../assets/UpComingWebinars.jpg";



const EcWebinars = ()=>{
  const Ecwebinars = [
    {
      // Webinar date: 26th Feb 7pm to 8 pm with ANDY ( full name n pic- he will share later)
      id: 1,
      title: "Coaching for Corporate Success",
      description: "Drive growth, enhance leadership, and understand the difference between coaching and consulting.",
      date: new Date(2025, 1, 26 ),
      time: "7:00 PM",
      duration: "1 hour",
      isFirstUpcoming : true,
      image: ecup,
      speaker : "Andy",
      registrationLink: "https://forms.gle/2VvyeVa4mt3sZhjv7"
    },
    {
      id: 2,
      title: "Strategic Goal Setting through Coaching",
      description: "Align goals, enhance strategic thinking, and learn from executives achieving success.",
      date: new Date(2025, 2, ),
      time: "2:00 PM",
      duration: "1.5 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker :"",
      registrationLink: ""
    },
    {
      id: 3,
      title: "Enhancing Executive Presence Through Coaching",
      description: "Building confidence, communicating with impact, and refining leadership presence through coaching.",
      date: new Date(2025, 3, ),
      time: "11:00 AM",
      duration: "2 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 4,
      title: "Emotional Intelligence for Corporate Leaders",
      description: "Why EQ trumps IQ, coaching strategies for emotional regulation and empathy, and EQ applications in decision-making.",
      date: new Date(2025, 4, ),
      time: "3:00 PM",
      duration: "2 hours",
      isFirstUpcoming : false,
      image:ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 5,
      title: "Resilient Leadership: Thriving Under Pressure",
      description: "Leading through challenges, managing stress and uncertainty with coaching, and learning from corporate resilience examples.",
      date: new Date(2025, 5, ),
      time: "2:00 PM",
      duration: "3 hours",
      isFirstUpcoming : false,
      image:ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 6,
      title: "Executive Career Coaching: Planning Your Next Move",
      description: "Navigate transitions, bridge leadership gaps with coaching, and create a roadmap for long-term success.",
      date: new Date(2025, 6, ),
      time: "1:00 PM",
      duration: "2 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 7,
      title: "Leadership Excellence Through Coaching",
      description: "Enhance decision-making, team-building, and adaptability to manage high-stakes situations and inspire performance.",
      date: new Date(2025, 7, ),
      time: "11:00 AM",
      duration: "2.5 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 8,
      title: "Work-Life Synergy for Executives",
      description: "Redefine balance, prevent burnout with coaching, and sustain well-being while excelling.",
      date: new Date(2025, 8, ),
      time: "11:00 AM",
      duration: "2 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 9,
      title: "Coaching for Agile Leadership",
      description: "Lead transformation confidently, foster adaptability, and learn from executives who embraced change successfully.",
      date: new Date(2025, 9, ),
      time: "11:00 AM",
      duration: "2 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 10,
      title: "Building High-Performance Teams",
      description: "Empower, collaborate, boost morale, and learn from successful case studies.",
      date: new Date(2025, 10, ),
      time: "1:00 PM",
      duration: "2 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 11,
      title: "From Good to Great: Executive Coaching",
      description: "Uncover growth areas, unlock potential, and inspire with real-world leader transformations.",
      date: new Date(2025, 11, ),
      time: "1:00 PM",
      duration: "2 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker : "",
      registrationLink: ""
    },
    {
      id: 12,
      title: "Future-Ready Executive Coaching",
      description: "Stay competitive, embrace innovation, and prepare for the next decade of leadership.",
      date: new Date(2026, 0, ),
      time: "1:00 PM",
      duration: "2 hours",
      isFirstUpcoming : false,
      image: ecup,
      speaker : "",
      registrationLink: ""
    }
  ];

  return <>
  
      <WebinarPage webinars = {Ecwebinars}></WebinarPage>

  </>
}


export default EcWebinars;