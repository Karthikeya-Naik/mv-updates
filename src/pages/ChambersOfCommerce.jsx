import React from "react";
import EventItem from "../components/EventItem";
import cii from '../assets/cii1.jpeg'; 
import ci from '../assets/cii2.jpg';
import msme from '../assets/msme.jpg';
import f3 from '../assets/f3.jpg';

const chambersOfCommerce = [
  {
    title: "CII Indo Swedish Life Sciences Delegation",
    description: "An event featuring a delegation focused on life sciences collaborations between India and Sweden.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7248947438080679937", // External URL
    image: cii
  },
  
  {
    title: "Health & Lifesciences Summit organised by Indo-French Chambers of Commerce & Industry (IFCCI)",
    description: "This event spotlighted the contributions and initiatives of French and India entities, aiming to catalyze the growth and innovation within Health & Lifesciences sector.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7262763215896420353", // External URL
    image: ci
  },
   {
    title: "FTCCI CEO FORUM",
    description: "This prestigious event brought together CEOs, Decision Makers, Policy Makers, Government Officials, Industry Leaders to discuss on the theme 'Bridging the credit gap through improving confidence in lending for MSMEs'. Deputy Governor of RBI (Reserve Bank of India) also shared his views during the event.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7264510762809778178", // External URL
    image: f3
  },

  // Add more Chambers of Commerce events here if needed
];

const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    marginBottom: '100px',
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

const ChambersOfCommerce = () => {
  return (
    <div style={styles.container} className="events-page">
      <h1 style={styles.heading} className="text-center text-4xl font-bold my-8">Chambers of Commerce Events</h1>
      <div style={styles.grid} className="chambers-of-commerce grid grid-cols-1 sm:grid-cols-2 gap-8">
        {chambersOfCommerce.map((event, index) => (
          <div key={index} className="event-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-60 flex items-center justify-center overflow-hidden rounded mb-4">
              <img src={event.image} alt={event.title} className="w-full  object-contain rounded mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-700">{event.description}</p>
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChambersOfCommerce;
