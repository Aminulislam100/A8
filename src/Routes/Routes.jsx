import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPages/ErrorPages';
import Home from '../components/Home/Home';
import Appointments from '../components/Appointments/Appointments'
import Lawyer1 from '../components/LawyersDetails/DoctorDetails';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        index: true,
        Component: Home,
      }],
    },
    {
      path: "/appointments",
      Component: Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        index: true,
        Component: Appointments
      }]
    },
    {
      path: "/lawyer/1",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer1,
      }]
    },
  ]);

  export default router