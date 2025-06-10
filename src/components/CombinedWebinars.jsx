import React, { useState, useEffect } from "react";
import WebinarPage from "./WebinarPageTemplate";

const CombinedWebinars = () => {
  const [tnpWebinars, setTnpWebinars] = useState([]);
  const [ecWebinars, setEcWebinars] = useState([]);
  const [loading, setLoading] = useState({ tnp: true, ec: true });
  const [error, setError] = useState({ tnp: null, ec: null });

  const API_BASE_URL = 'https://backend.marichiventures.com/admin/pages';

  useEffect(() => {
    const fetchTnpWebinars = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/webinars.php?endpoint=webinars&group_id=1`);
        if (!response.ok) {
          throw new Error('Network response was not ok for TNP webinars');
        }
        const data = await response.json();
        
        // Transform API data to match the expected structure
        const transformedData = data.map(webinar => {
          const dateObj = new Date(webinar.date);
          
          return {
            id: parseInt(webinar.id),
            title: webinar.title,
            description: webinar.description,
            date: dateObj,
            time: formatTime(webinar.time), // Convert to AM/PM format
            duration: webinar.duration,
            status: webinar.status,
            isFirstUpcoming: webinar.isConfirmed === "true",
            image: webinar.image_url || 'https://backend.marichiventures.com/admin/pages/uploads/webinars/default.jpg', // Fallback image
            speaker: webinar.speaker,
            registrationLink: webinar.registration_link
          };
        });
        
        setTnpWebinars(transformedData);
        setLoading(prev => ({ ...prev, tnp: false }));
      } catch (error) {
        console.error("Error fetching TNP webinars:", error);
        setError(prev => ({ ...prev, tnp: error.message }));
        setLoading(prev => ({ ...prev, tnp: false }));
      }
    };

    const fetchEcWebinars = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/webinars.php?endpoint=webinars&group_id=2`);
        if (!response.ok) {
          throw new Error('Network response was not ok for EC webinars');
        }
        const data = await response.json();
        
        // Transform API data to match the expected structure for EC webinars
        const transformedData = data.map(webinar => {
          const dateObj = new Date(webinar.date);
          
          return {
            id: parseInt(webinar.id),
            title: webinar.title,
            description: webinar.description,
            date: dateObj,
            time: formatTime(webinar.time),
            duration: webinar.duration,
            status: webinar.status,
            isFirstUpcoming: webinar.isConfirmed === "true",
            image: webinar.image_url || 'https://backend.marichiventures.com/admin/pages/uploads/webinars/default.jpg', // Fallback image
            speaker: webinar.speaker,
            registrationLink: webinar.registration_link
          };
        });
        
        setEcWebinars(transformedData);
        setLoading(prev => ({ ...prev, ec: false }));
      } catch (error) {
        console.error("Error fetching EC webinars:", error);
        setError(prev => ({ ...prev, ec: error.message }));
        setLoading(prev => ({ ...prev, ec: false }));
      }
    };

    // Helper function to format time to AM/PM
    const formatTime = (timeStr) => {
      const [hours, minutes] = timeStr.split(':');
      const hour = parseInt(hours);
      const period = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${period}`;
    };

    fetchTnpWebinars();
    fetchEcWebinars();
  }, []);

  // Display loading state while either is loading
  if (loading.tnp || loading.ec) return <div>Loading webinars...</div>;
  
  // Display errors if any
  if (error.tnp || error.ec) {
    return (
      <div>
        {error.tnp && <div>Error loading TNP webinars: {error.tnp}</div>}
        {error.ec && <div>Error loading EC webinars: {error.ec}</div>}
      </div>
    );
  }

  return <WebinarPage tnpWebinars={tnpWebinars} ecWebinars={ecWebinars} />;
}

export default CombinedWebinars;