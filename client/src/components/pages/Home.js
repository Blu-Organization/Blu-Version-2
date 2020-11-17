import '../../App.css';
import HeroSection from '../HeroSection.js';
import React from 'react';
import Cards from '../Cards.js';
import Footer from '../Footer.js';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home;