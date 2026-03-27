
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user } = useAuth();

  if (!user) return <Navigate to='/login' />;
  
  if (adminOnly && user.email !== 'malikawaisbabar143@gmail.com') {
    return <Navigate to='/' />;
  }

  return children;
}
