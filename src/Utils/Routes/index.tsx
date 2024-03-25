// Routes.js or Routes.jsx

import React from 'react';
import { useRoutes, Navigate, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage';

function Routes() {
  const routes = useRoutes([
    { path: '/', element: <LandingPage/> }, 
    { path: '*', element: <Navigate to="/" /> }, // Redirect to home for unknown routes
  ]);

  return routes;
}

export default Routes;
