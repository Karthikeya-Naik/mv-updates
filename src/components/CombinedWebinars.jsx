import React, { useState, useEffect } from "react";
import WebinarPage from "./WebinarPageTemplate";
import tnpw1 from "../assets/tnpw1.jpg";
import tnpup from "../assets/tnpup.jpg";
import ecup from "../assets/UpComingWebinars.jpg";
import Andy from "../assets/andy2.png";
import franceseco from "../assets/Franceseco2.png";
import kseniya from "../assets/kseniya3.png";

const CombinedWebinars = () => {
  const [tnpWebinars, setTnpWebinars] = useState([]);
  const [ecWebinars, setEcWebinars] = useState([]);
  const [loading, setLoading] = useState({ tnp: true, ec: true });
  const [error, setError] = useState({ tnp: null, ec: null });

  const API_BASE_URL = 'https://backend.marichiventures.com/admin/pages';
  const IMAGE_BASE_URL = `${API_BASE_URL}/uploads/webinars`;

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
          // Parse date from YYYY-MM-DD format to Date object
          const dateObj = new Date(webinar.date);
          
          // Determine image based on status or use default
          const imageToUse = webinar.status === "past" ? tnpw1 : tnpup;
          
          return {
            id: parseInt(webinar.id),
            title: webinar.title,
            description: webinar.description,
            date: dateObj,
            time: webinar.time.substring(0, 5) + " AM", // Convert "09:30:00" to "9:30 AM"
            duration: webinar.duration,
            status: webinar.status,
            isFirstUpcoming: webinar.isConfirmed === "true", // Map isConfirmed to isFirstUpcoming
            image: imageToUse, // Use local image paths instead of API paths
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
          // Parse date from YYYY-MM-DD format to Date object
          const dateObj = new Date(webinar.date);
          
          // Determine image based on speaker or use default
          let imageToUse = ecup;
          if (webinar.speaker.includes("Andy")) {
            imageToUse = Andy;
          } else if (webinar.speaker.includes("Franceseco")) {
            imageToUse = franceseco;
          } else if (webinar.speaker.includes("Kseniya")) {
            imageToUse = kseniya;
          }
          
          // Extract time in AM/PM format
          const timeStr = webinar.time.substring(0, 5);
          const hour = parseInt(timeStr.split(':')[0]);
          const ampm = hour >= 12 ? "PM" : "AM";
          const hour12 = hour % 12 || 12;
          const formattedTime = `${hour12}:${timeStr.split(':')[1]} ${ampm}`;
          
          return {
            id: parseInt(webinar.id),
            title: webinar.title,
            description: webinar.description,
            date: dateObj,
            time: formattedTime,
            duration: webinar.duration,
            status: webinar.status,
            isFirstUpcoming: webinar.isConfirmed === "true", // Map isConfirmed to isFirstUpcoming
            image: imageToUse,
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