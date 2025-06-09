import React from "react";
import EventItem from "../components/EventItem";
import "../components/EventsPage.css";
import eve1 from '../assets/eve1.jpg';
import eve2 from '../assets/eve2.jpg';
import upceve from '../assets/upceve-1.png';

const upcomingEvents = [
  { 
    title: "Leadership Development Program 2024-25",
    date: "28,29-September-2024",
    description: "Leadership Development Program 2024-25.",
    details: "Join our Two Days Intensive Workshop",
    registrationLink: "https://tally.so/r/mRR5WK",
    image: upceve 
  },
  
  // Add more upcoming events here
];

const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
    minHeight: 'calc(100vh - 100px)', // Adjust based on footer height
    boxSizing: 'border-box'
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '20px 0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  }
};

const UpcomingEvents = () => {
  return (
    <div style={styles.container} className="events-page">
      <h1 style={styles.heading}>Upcoming Events</h1>
      <div style={styles.grid} className="upcoming-events">
        {upcomingEvents.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
            details={event.details}
            image={event.image}
            registrationLink={event.registrationLink}  // Pass registration link here
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
