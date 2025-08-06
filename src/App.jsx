import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import GetStarted from './components/GetStarted.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-dark-navy">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;