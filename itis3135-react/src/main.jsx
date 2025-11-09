import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/Home.jsx';
import IntroductionPage from './pages/Introduction.jsx';
import ContractPage from './pages/Contract.jsx';

// Define the routes for the application
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App serves as the overall layout wrapper (Header/Footer stay constant)
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'introduction',
        element: <IntroductionPage />,
      },
      {
        path: 'contract',
        element: <ContractPage />,
      },
    ],
  },
], {
  // FIX: Sets the base path for deployment in a subfolder (e.g., GitHub Pages)
  basename: '/skumar51/itis3135/itis3135-react/'
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);