
import React from "react";
import { Link } from "react-router-dom";
import dot11 from "../assets/dot11.jpeg";
import aic from "../assets/aic.jpeg";

const startupConnects = [
  {
    title: " Department of Telecommunications, Ministry of Communication & IT (INDIA)",
    image: dot11,
    description: "Invited as jury for a 30-hour “5G and 6G Hackathon” that brought together top talent from across India to develop cutting-edge 5G and 6G products and solutions.",
     url:"https://www.linkedin.com/posts/marichi-ventures_prizes-ceo-ceo-activity-7246405429876948992-YitZ/?utm_source=share&utm_medium=member_android",
  },
];

const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    maxWidth: '1200px',
    minHeight: 'calc(100vh - 100px)', 
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
    height: 'auto',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '200px',
    objectFit: 'contain',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  linkText: {
    color: '#007bff',
    textDecoration: 'underline'
  }
};

const StartupConnects = () => {
  return (
    <div style={styles.container} className="events-page">
      <h1 style={styles.heading} className="text-center text-4xl font-bold my-8">STARTUP ECOSYSTEM CONNECTS</h1>
      <div style={styles.grid} className="startup-connects">
        {startupConnects.map((startup, index) => (
          <div
            key={index}
            className="startup-item"
            style={styles.linkCard}
          >
            <img
              src={startup.image}
              alt={startup.title}
              style={styles.image}
            />
            <a href={startup.url} target="_blank" rel="noopener noreferrer" style={styles.linkText}>
              View Post
            </a>
            <h3 className="text-xl font-semibold mb-2">{startup.title}</h3>
            <p className="text-gray-700">{startup.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupConnects;
