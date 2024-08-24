import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent border-b border-secondary-color bg-opacity-35 fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-h3 font-bold text-white">
            <span className="font-title">Baymax</span>
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#section_1" className="text-white font-title text-menu uppercase">Home</a>
            <a href="#section_2" className="text-white font-title text-menu uppercase">Features</a>
            <a href="#section_3" className="text-white font-title text-menu uppercase">How it works</a>
            <a href="#section_4" className="text-white font-title text-menu uppercase">FAQs</a>
            <a href="#section_5" className="text-white font-title text-menu uppercase">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#section_1" className="block text-white font-title text-menu uppercase py-2 px-4">Home</a>
          <a href="#section_2" className="block text-white font-title text-menu uppercase py-2 px-4">Features</a>
          <a href="#section_3" className="block text-white font-title text-menu uppercase py-2 px-4">How it works</a>
          <a href="#section_4" className="block text-white font-title text-menu uppercase py-2 px-4">FAQs</a>
          <a href="#section_5" className="block text-white font-title text-menu uppercase py-2 px-4">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;