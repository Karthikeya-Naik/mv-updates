import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-center p-6">
      <h1
        className="text-7xl font-extrabold text-green-700 mb-4 drop-shadow-lg"
        data-aos="zoom-in"
      >
        404
      </h1>
      <p
        className="text-2xl text-green-600 mb-6 font-semibold"
        data-aos="fade-up"
      >
        Oops! The page you're looking for doesn't exist.
      </p>
      <p
        className="text-green-500 mb-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Redirecting to the homepage in{' '}
        <span className="font-bold text-green-700">{countdown}</span> seconds...
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-md hover:shadow-lg"
        data-aos="flip-up"
        data-aos-delay="500"
      >
        <FaHome className="text-xl" /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
