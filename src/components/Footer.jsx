import React from 'react';
import { Cpu, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-navy border-t border-mint-green/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-mint-green/10 border border-mint-green/30">
                <Cpu className="h-6 w-6 text-mint-green" />
              </div>
              <span className="text-2xl font-poppins font-bold text-white">
                VertexAI Solutions
              </span>
            </div>
            <p className="text-text-gray font-inter mb-6 leading-relaxed">
              Designing ethical, transparent AI tools to simplify your workflows—no hype, just results.
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-mint-green" />
              <span className="text-text-gray font-inter">hello@vertexaisolutions.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="block text-text-gray hover:text-mint-green transition-colors font-inter"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('why-choose-us').scrollIntoView({ behavior: 'smooth' })}
                className="block text-text-gray hover:text-mint-green transition-colors font-inter"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => document.getElementById('get-started').scrollIntoView({ behavior: 'smooth' })}
                className="block text-text-gray hover:text-mint-green transition-colors font-inter"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-mint-green mt-0.5" />
                <div>
                  <p className="text-white font-medium">Schedule a Call</p>
                  <p className="text-text-gray text-sm">Free 30-minute strategy session</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-mint-green mt-0.5" />
                <div>
                  <p className="text-white font-medium">Email Response</p>
                  <p className="text-text-gray text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-mint-green/20 mt-12 pt-8">
          <div className="bg-mint-green/5 border border-mint-green/20 rounded-lg p-6 mb-6">
            <h4 className="text-white font-poppins font-semibold mb-2">Important Notice</h4>
            <p className="text-text-gray font-inter text-sm leading-relaxed">
              VertexAI Solutions is a new agency focused on delivering measurable results. 
              All projects include a 30-day satisfaction guarantee. We believe in transparent 
              communication and will never make unrealistic promises about timeline or outcomes.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-gray text-sm font-inter">
              © 2024 VertexAI Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-text-gray hover:text-mint-green text-sm font-inter transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text-gray hover:text-mint-green text-sm font-inter transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;