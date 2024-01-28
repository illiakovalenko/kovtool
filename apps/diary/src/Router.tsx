import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Spectrum from './pages/spectrum';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Test</div>,
  },
  {
    path: 'spectrum',
    element: <Spectrum />,
  },
]);

export default () => <RouterProvider router={router} />;
