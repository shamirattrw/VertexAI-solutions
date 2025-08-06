import React from 'react';
import { Settings, MessageCircle, BarChart3, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Custom Workflow Automation",
      description: "Free audit to identify repetitive tasks",
      benefits: [
        "Eliminate manual data entry",
        "Streamline approval processes", 
        "Connect your existing tools"
      ]
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots",
      description: "No-code solutions for 24/7 customer support",
      benefits: [
        "Handle common inquiries instantly",
        "Integrate with your knowledge base",
        "Escalate complex issues to humans"
      ]
    },
    {
      icon: BarChart3,
      title: "Process Analytics",
      description: "Identify bottlenecks and optimization opportunities",
      benefits: [
        "Track process efficiency",
        "Spot improvement areas",
        "Make data-driven decisions"
      ]
    },
    {
      icon: Zap,
      title: "Smart Integrations",
      description: "Connect your tools for seamless data flow",
      benefits: [
        "Sync data between platforms",
        "Reduce context switching",
        "Maintain single source of truth"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-light-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl font-inter text-text-gray max-w-3xl mx-auto">
            We focus on practical AI solutions that deliver measurable improvements to your business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-dark-navy p-8 rounded-2xl border border-mint-green/20 hover:border-mint-green/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-mint-green/10 rounded-lg border border-mint-green/30 mr-4 group-hover:bg-mint-green/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-mint-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-mint-green font-inter font-medium">
                      → {service.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-text-gray font-inter">
                      <div className="w-2 h-2 bg-mint-green rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-gray font-inter">
            Each service includes a comprehensive discovery phase to understand your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;