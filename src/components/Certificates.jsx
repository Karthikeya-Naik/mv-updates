import React, { useState, useEffect } from 'react';

const IMAGE_BASE_URL = "https://backend.marichiventures.com/admin/pages/uploads/certificates";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://backend.marichiventures.com/admin/pages/certificates.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch certificates');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched certificates:', data);
        setCertificates(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching certificates:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading certificates...</div>;
  }

  if (error) {
    return <div className="text-center py-8">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 mb-7">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                {cert.certificate_title}
              </h2>
              <div className="flex justify-center items-center">
                <div 
                  className="w-full max-w-md h-96 flex justify-center items-center"
                >
                  <img
                    src={`${IMAGE_BASE_URL}/${cert.certificate_image}`}
                    alt={`${cert.certificate_title} Certificate`}
                    className="object-contain w-full h-full rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
