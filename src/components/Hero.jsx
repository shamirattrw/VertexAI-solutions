import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-navy overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-mint-green rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-mint-green/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-mint-green rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-mint-green/60 rounded-full animate-pulse delay-700"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-mint-green/5 via-transparent to-mint-green/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-slide-up">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-mint-green/10 border border-mint-green/30 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-mint-green mr-2" />
            <span className="text-sm font-inter text-mint-green font-medium">
              Launching in 2024 | Currently onboarding first clients
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
            Bespoke AI Automation for{' '}
            <span className="text-mint-green">
              Ambitious Businesses
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-inter text-text-gray mb-12 max-w-4xl mx-auto leading-relaxed">
            We design ethical, transparent AI tools to simplify your workflows—no hype, just results.
          </p>

          {/* CTA Button */}
          <button 
            onClick={scrollToServices}
            className="group bg-mint-green text-dark-navy px-8 py-4 rounded-full font-semibold text-lg hover:bg-mint-green/90 hover:scale-105 transform transition-all duration-300 animate-float shadow-lg hover:shadow-mint-green/30"
          >
            <span className="flex items-center justify-center">
              Explore Our Approach
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-mint-green mb-2">Custom Built</div>
              <p className="text-text-gray font-inter">Every solution tailored to your needs</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-mint-green mb-2">Transparent</div>
              <p className="text-text-gray font-inter">No hidden fees or false promises</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-mint-green mb-2">Ethical AI</div>
              <p className="text-text-gray font-inter">Responsible automation practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;