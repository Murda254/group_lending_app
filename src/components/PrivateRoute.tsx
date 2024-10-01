import React from 'react';
import { Navigate } from 'react-router-dom';
/*import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';*/

interface PrivateRouteProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the children
  return <>{children}</>;
};

export default PrivateRoute;
