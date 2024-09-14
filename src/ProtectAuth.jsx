
import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import { useAuth } from './Contexte';
const ProtectedRoute = ({children}) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to= 'sign' />
  }

  return children ;
};

export default ProtectedRoute;