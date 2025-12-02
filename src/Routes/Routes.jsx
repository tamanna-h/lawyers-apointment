import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Bookings from '../pages/Bookings/Bookings';
import LawyerDetails from '../pages/LawyerDetails/LawyerDetails';
import Blogs from '../pages/Blogs/Blogs';

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
        loader: () => fetch('lawyersData.json'),
        Component: Bookings
      },
      {
        path: "/lawyerDetails/:id",
        loader: () => fetch('lawyersData.json'),
        Component: LawyerDetails
      },
      {
        path: "/Blogs",
        loader: () => fetch('blogs.json'),
        Component: Blogs
      }
    ],
  },
]);

