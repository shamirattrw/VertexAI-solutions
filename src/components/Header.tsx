import React from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-electric-blue/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-electric-blue to-neon-purple">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-poppins font-bold text-white">
              VertexAI Solutions
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-electric-blue transition-colors font-inter">
              Services
            </a>
            <a href="#results" className="text-gray-300 hover:text-electric-blue transition-colors font-inter">
              Results
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-electric-blue transition-colors font-inter">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-300 hover:text-electric-blue transition-colors font-inter">
              Contact
            </a>
            <button className="bg-gradient-to-r from-electric-blue to-neon-purple text-white px-6 py-2 rounded-full font-medium hover:scale-105 transform transition-all duration-200">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-electric-blue/20">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#services" className="text-gray-300 hover:text-electric-blue transition-colors font-inter">
                Services
              </a>
              <a href="#results" className="text-gray-300 hover:text-electric-blue transition-colors font-inter">
                Results
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-electric-blue transition-colors font-inter">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-300 hover:text-electric-blue transition-colors font-inter">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;