import React from 'react';
import logo from '../../assets/logo-footer.png'
import face from '../../assets/face.PNG'
import linked from '../../assets/in.PNG'
import twit from '../../assets/twit.PNG'
import you from '../../assets/you.PNG'

const Footer = () => {
    return (
      <div className='bg-black text-white pt-20 pb-10'>
      <div className='max-w-6xl mx-auto flex flex-col items-center'>
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Law.BD</span>
        </div>
        
        <ul className="flex space-x-6 text-sm mt-5">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">My-Bookings</li>
          <li className="hover:text-green-600 cursor-pointer">Blogs</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>
        
        <div className='flex space-x-4 items-center mt-10'>
          <a href="#"><img src={face} alt="Facebook" /></a>
          <a href="#"><img src={twit} alt="Twitter" /></a>
          <a href="#"><img src={linked} alt="LinkedIn" /></a>
          <a href="#"><img src={you} alt="YouTube" /></a>
        </div>
      </div>
    </div>
    
    );
};

export default Footer;