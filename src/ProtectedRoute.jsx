// ProtectedRoute.js
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect(); // Redirects to Auth0 login if not authenticated
    return null;
  }

  return children;
};

export default ProtectedRoute;
