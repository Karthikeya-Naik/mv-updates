import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import your Auth context

const RedirectToLogin = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Get authentication status

  useEffect(() => {
    if (isAuthenticated) {
      // If the user is authenticated, navigate to the Subscribers List
      navigate('/subscribers-list');
    } else {
      // If not authenticated, redirect to login
      window.location.href = 'https://backend.marichiventures.com/login.php';
    }
  }, [isAuthenticated, navigate]);

  return null; // Render nothing while redirecting
};

export default RedirectToLogin;
