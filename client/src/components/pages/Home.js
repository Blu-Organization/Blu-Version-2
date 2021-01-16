import '../../App.css';
import HeroSection from '../HeroSection.js';
import React from 'react';
import Cards from '../Cards.js';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import HomePageTheme from '../Themes/HomePageTheme';

//test commit

const Home = () => {

  return (
    <div>
      <HomePageTheme >
        <Navbar />
        <HeroSection />
        <Cards />
        <Footer />
      </HomePageTheme>
    </div>
  )
}

export default Home;