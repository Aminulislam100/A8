import React from 'react';
import robot404 from '../../assets/robot404.PNG'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <img src={robot404} alt="404 Robot" className="w-96 mb-6" />
      <h1 className="text-3xl font-bold text-pink-600 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
       
    </div>
    <Footer></Footer>
    </>
  );
};

export default ErrorPage;
