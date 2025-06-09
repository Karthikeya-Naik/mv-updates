import React from "react";
import EventItem from "../components/EventItem";
import capgemini from '../assets/capgemini.jpg';
import cio from '../assets/cio.jpg';
import evosmt from '../assets/evosmt.jpeg';
import lda from '../assets/lda.jpeg';

const industryConnects = [
  {
    title: "SMART CIO SUMMIT 2024",
    description: "A summit that brought together top CIOs from around the world to discuss innovations and trends in IT and digital transformation.",
    details: "The event featured keynote speeches from industry leaders, panel discussions on future technologies, and networking sessions that fostered collaboration among CIOs. Key topics included AI integration, cybersecurity challenges, and cloud infrastructure strategies.",
    image: cio 
  },
  {
    title: "HR Evolution Summit",
    description: "Sarvesh Singh was invited at HR Evolution Summit organized by FICCI. Theme of the summit was 'Adapting to Evolving Workplaces, Workforce, Work Output and Work Ethos'.",
    details: "The HR Evolution Summit, organized by FICCI, explored adapting to evolving workplaces, workforce, work output, and work ethos. It focused on future-proofing HR with technology, fostering trust through ethics, supporting mental health, and navigating labor code implementation for business success.",
    image: evosmt,
   
  },
  {
    title: "CAPGEMINI INNOVATION HEALTH ROUNDTABLE",
    description: "An exclusive roundtable where Capgemini's thought leaders and healthcare executives explored digital innovations in the healthcare sector.",
    details: "The roundtable focused on the impact of technology on patient care, operational efficiency, and the future of healthcare data management. The discussion included emerging technologies such as telemedicine, AI in diagnostics, and blockchain in healthcare data security.",
    image: capgemini
  },
  {
    title: "MASTERCLASS ON LEADERSHIP IN DIGITAL AGE",
    description: "Masterclass on Leadership in Digital Age at Tech Mahindra organized by Hyderabad Software Enterprises Association and Mahindra University - School Of Management",
    details: "The discussion focused on the evolving demands of leadership in today's fast-changing world. The session emphasized the importance of creating an environment grounded in trust, safety, and empowerment. The MINDSPACE   framework was explored, highlighting key principles for effective leadership: ensuring work is   Meaningful  , promoting   Interdependence   among team members, Nurturing their growth, offering clear Direction, fostering Safety, driving   Progress   through measurable milestones, keeping efforts Aligned with organizational goals, building   Cohesion  , and   Empowering   individuals to take ownership. Sarvesh Singh session touched on   executive coaching  ,   leadership development  ,   mentoring  , and   strategic consulting  .",
    image: lda,
   
  },
  // Add more industry connects events here
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

const IndustryConnects = () => {
  return (
    <div style={styles.container} className="events-page">
      <h1 style={styles.heading} className="text-center text-4xl font-bold my-8">Industry Connects</h1>
      <div style={styles.grid} className="industry-connects grid grid-cols-1 sm:grid-cols-2 gap-8">
        {industryConnects.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            description={event.description}
            details={event.details}
            image={event.image}
           
          />
        ))}
      </div>
    </div>
  );
};

export default IndustryConnects;
