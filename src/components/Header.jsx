import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-navy/90 backdrop-blur-md border-b border-mint-green/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-mint-green/10 border border-mint-green/30">
              <Cpu className="h-6 w-6 text-mint-green" />
            </div>
            <span className="text-2xl font-poppins font-bold text-white">
              VertexAI Solutions
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-text-gray hover:text-mint-green transition-colors font-inter"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-text-gray hover:text-mint-green transition-colors font-inter"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('get-started')}
              className="text-text-gray hover:text-mint-green transition-colors font-inter"
            >
              Get Started
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-mint-green text-dark-navy px-6 py-2 rounded-full font-medium hover:bg-mint-green/90 hover:scale-105 transform transition-all duration-200"
            >
              Explore Our Approach
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-mint-green/20">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-text-gray hover:text-mint-green transition-colors font-inter text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-text-gray hover:text-mint-green transition-colors font-inter text-left"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('get-started')}
                className="text-text-gray hover:text-mint-green transition-colors font-inter text-left"
              >
                Get Started
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-mint-green text-dark-navy px-6 py-2 rounded-full font-medium hover:bg-mint-green/90 text-left w-fit"
              >
                Explore Our Approach
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;