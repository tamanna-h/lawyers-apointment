import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Bookings from '../pages/Bookings/Bookings';
import LawyerDetails from '../pages/LawyerDetails/LawyerDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        loader: () => fetch('lawyersData.json'),
        path: "/",
        Component: Home
      },
      {
        path: "/bookings",
        Component: Bookings
      },
      {
        path: "/lawyerDetails/:id",
        Component: LawyerDetails
      }
    ],
  },
]);

