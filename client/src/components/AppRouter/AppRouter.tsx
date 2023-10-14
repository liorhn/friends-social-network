import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../Login/Login';

const router = createBrowserRouter([
  {path: '/login', element: <Login />},
  {},
]);

export function AppRouter() {
  return (
   <RouterProvider router={router} />
  );
}
