import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-between items-center min-h-screen bg-yellow-100">
    {/* Left Section */}
    <div className="flex flex-col justify-center items-start p-10 space-y-5 w-1/2">
      <h1 className="text-5xl font-bold leading-tight text-gray-900">
        Saving <span className="text-yellow-600">Nature</span> & Fighting <span className="text-yellow-600">Climate</span> Change Together.
      </h1>
      <p className="text-gray-700">1.7M+ members of our charity organization</p>
      <div className="flex items-center space-x-3">
        <input 
          type="email" 
          placeholder="Enter your e-mail" 
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <button className="px-5 py-2 bg-yellow-500 text-white rounded-md">
          Subscribe
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="relative w-1/2 h-screen">
      <img 
        src="/path-to-your-image.png" 
        alt="Desert" 
        className="object-cover h-full w-full" 
      />
      <div className="absolute top-10 right-10 bg-white p-2 rounded-md shadow-lg">
        <img 
          src="/path-to-your-avatar.jpg" 
          alt="Volunteer" 
          className="w-12 h-12 rounded-full" 
        />
        <p>We & Our Volunteers</p>
      </div>
      <div className="absolute bottom-10 left-10 bg-white p-2 rounded-md shadow-lg">
        <p>Join us in fighting environmental problems</p>
      </div>
      <div className="absolute bottom-10 right-10 flex space-x-3">
        <a href="#" className="text-gray-600 hover:text-yellow-500">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-yellow-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div></>
    
  );
};

export default HeroSection;
