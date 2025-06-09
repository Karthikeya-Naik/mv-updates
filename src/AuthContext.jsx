import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to verify session with the backend
  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch('https://backend.marichiventures.com/check_session.php', {
          credentials: 'include', // Include cookies in the request
        });
        const data = await response.json();
        if (data.isAuthenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Session verification failed:", error);
      }
    };
    verifySession();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
