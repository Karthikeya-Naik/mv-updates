import React, { useState } from "react";

const EventItem = ({ title, image, date, description, details, video, registrationLink }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDetails = () => {
    setShowMore(!showMore);
  };

  const containerStyle = {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    marginBottom: '16px'
  };

  const imgStyle = {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '16px'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '8px'
  };

  const dateStyle = {
    color: '#4a5568',
    marginBottom: '8px'
  };

  const descriptionStyle = {
    color: '#2d3748',
    marginBottom: '16px'
  };

  const buttonStyle = {
    color: '#3182ce',
    textDecoration: 'underline',
    cursor: 'pointer',
    marginRight: '10px'
  };

  const registerButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#3182ce',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle} className="event-item">
      {video ? (
        <div style={{ width: '100%', marginBottom: '16px' }}>
          <iframe
            src={video}
            frameBorder="0"
            allowFullScreen
            title={title}
            style={{ width: '100%', height: '315px', borderRadius: '8px' }}
          ></iframe>
        </div>
      ) : (
        image && <img src={image} alt={title} style={imgStyle} />
      )}
      <h3 style={titleStyle}>{title}</h3>
      {date && <p style={dateStyle}>{date}</p>}
      <p style={descriptionStyle}>{description}</p>
      {showMore && <p style={descriptionStyle}>{details}</p>}
      <button
        style={buttonStyle}
        onClick={toggleDetails}
      >
        {showMore ? "View Less" : "View More"}
      </button>
      {registrationLink && (
        <a
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            backgroundColor: '#65B741',
            color: 'white', 
            padding: '10px 20px',
            borderRadius: '4px',
            textAlign: 'center',
            transition: 'background-color 0.3s ease',
            width: 'fit-content'
          }}
          className="register-button"
        >
          Register Now
        </a>
      )}
    </div>
  );
};

export default EventItem;
