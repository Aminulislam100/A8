import React from 'react';

import heroBg from '../../assets/banner-img-1.png';

const Hero = () => {
    return (
        <div>
            <section
  className="py-20 text-center px-4 text-white w-10/12 rounded-2xl h-120 mx-auto"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
        <h1 className="text-4xl font-bold mb-4 mt-20">It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
        <p className="text-xs max-w-2xl mx-auto">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.        </p>
        
      </section>
        </div>
    );
};

export default Hero;