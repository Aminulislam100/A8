import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPages/ErrorPages';
import Home from '../components/Home/Home';
import Lawyer1 from '../components/LawyersDetais/Lawyer1';
import Lawyer2 from '../components/LawyersDetais/Lawyer2';
import Lawyer3 from '../components/LawyersDetais/Lawyer3';
import Lawyer4 from '../components/LawyersDetais/Lawyer4';
import Lawyer5 from '../components/LawyersDetais/Lawyer5';
import Lawyer6 from '../components/LawyersDetais/Lawyer6';
import Lawyer7 from '../components/LawyersDetais/Lawyer7';
import Lawyer8 from '../components/LawyersDetais/Lawyer8';
import Lawyer9 from '../components/LawyersDetais/Lawyer9';
import Lawyer10 from '../components/LawyersDetais/Lawyer10';

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
      path: "/lawyer/1",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer1,
      }]
    },
    {
      path: "/lawyer/2",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer2,
      }]
    },
    {
      path: "/lawyer/3",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer3,
      }]
    },
    {
      path: "/lawyer/4",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer4,
      }]
    },
    {
      path: "/lawyer/5",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer5,
      }]
    },
    {
      path: "/lawyer/6",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer6,
      }]
    },
    {
      path: "/lawyer/7",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer7,
      }]
    },
    {
      path: "/lawyer/8",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer8,
      }]
    },
    {
      path: "/lawyer/9",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer9,
      }]
    },
    {
      path: "/lawyer/10",
      Component: Root,
      children:[{
        index: true,
        Component: Lawyer10,
      }]
    },
  ]);

  export default router