import React from 'react';
import { CheckCircle, DollarSign, User, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "No cookie-cutter solutions",
      description: "Every tool is custom-built for your specific workflows and requirements."
    },
    {
      icon: DollarSign,
      title: "Pricing transparency",
      description: "No hidden fees or surprise costs. You'll know exactly what you're paying for upfront."
    },
    {
      icon: User,
      title: "Founder-led development",
      description: "Direct access to the founder ensures full accountability and personal attention."
    },
    {
      icon: Shield,
      title: "30-day satisfaction guarantee",
      description: "We stand behind our work. Not satisfied? We'll make it right or refund your investment."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-dark-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl font-inter text-text-gray max-w-3xl mx-auto">
            We're building our reputation one satisfied client at a time. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-light-navy rounded-xl border border-mint-green/20 hover:border-mint-green/40 transition-all duration-300 hover:transform hover:translate-y-[-4px] group"
              >
                <div className="flex-shrink-0 p-3 bg-mint-green/10 rounded-lg border border-mint-green/30 group-hover:bg-mint-green/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-mint-green" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-text-gray font-inter leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-mint-green/5 border border-mint-green/20 rounded-xl">
            <h3 className="text-xl font-poppins font-semibold text-white mb-2">
              Starting Fresh, Building Right
            </h3>
            <p className="text-text-gray font-inter max-w-2xl">
              As a new agency, we're laser-focused on delivering exceptional results for our early clients. 
              Your success becomes our portfolio and reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;