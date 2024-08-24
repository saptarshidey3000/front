import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section flex justify-center items-center bg-gradient-to-r from-primary-color to-secondary-color relative overflow-hidden py-36" id="section_1">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h1 className="text-white text-center">Stay healthy and fit.</h1>
            <h6 className="text-center text-white">Your personal health care companion is here.</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;