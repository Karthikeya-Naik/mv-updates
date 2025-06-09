import React from "react";
import { Link } from "react-router-dom";
import iimb from "../assets/iimb.jpg";
import bhu from "../assets/bhu.jpg";
import mru from "../assets/mru.jpeg";
import nmims from "../assets/nmims.jpeg";
import cbit from "../assets/cbit.jpeg";
import isb from "../assets/isb.jpeg";


const academiaConnects = [
  {
    title: "IIM Bengaluru",
    image: iimb, // Placeholder image
    url: "https://www.facebook.com/photo.php?fbid=122101444340504739&set=a.122101444952504739&type=3",
    description: "Invited for a guest lecture on the topic 'Healthtech & Medtech is next Fintech'."
  },
  {
    title: "IIT BHU",
    image: bhu, // Placeholder image
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122101439696504739%26set%3Da.122101439786504739%26type%3D3&width=200&show_text=true&height=517&appId",
    description: "Invited as a speaker at their Annual Conference."
  },
  {
    title: "CBIT (Chaitanya Bharathi Institute of Technology)",
    image: cbit, // Placeholder image
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122103472418504739%26set%3Da.122103472682504739%26type%3D3&width=400&show_text=true&height=552&appId",
    description: "Faculty Development Workshop"
  },
  {
    title: "MRU (Malla Reddy University)",
    image: mru, // Placeholder image
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122104132268504739%26set%3Da.122104132346504739%26type%3D3&width=400&show_text=true&height=353&appId",
    description: "Invited to their ideathon session for startup ideas."
  },
 
   {
    title: "NMIMS",
    image: nmims, // Placeholder image
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122104137452504739%26set%3Da.122104137662504739%26type%3D3&width=300&show_text=true&height=502&appId",
    description: "NMIMIS ANNUAL LEADERS CONCLAVE"
  },
   {
    title: "ISB HYDERABAD",
    image: isb, // Placeholder image
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122101447964504739%26set%3Da.122101448186504739%26type%3D3&width=900&show_text=true&height=887&appId",
    description: "ISB Vision Venture"
  },
  
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
  },
  linkCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    height: 'auto', // Adjusted height
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '200px', // Set a max-height for consistency
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  linkText: {
    color: '#007bff',
    textDecoration: 'underline'
  }
};

const AcademiaConnects = () => {
  return (
    <div style={styles.container} className="events-page">
      <h1 style={styles.heading} className="text-center text-4xl font-bold my-8">Academia Connects</h1>
      <div style={styles.grid} className="academia-connects">
        {academiaConnects.map((event, index) => (
          <div
            key={index}
            className="event-item"
            style={styles.linkCard}
          >
            <img
              src={event.image}
              alt={event.title}
              style={styles.image}
            />
            <a href={event.url} target="_blank" rel="noopener noreferrer" style={styles.linkText}>
              View Post
            </a>
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademiaConnects;
