import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import LandingPage from '../LandingPage.js';
import Navbar from '../Navbar.js';
import LandingPageTheme from '../Themes/LandingPageTheme';

const Landing = (props) => {
  return (
    <div>
      <LandingPageTheme>
        <Navbar />
        <LandingPage />
      </LandingPageTheme>
      <Footer />
    </div>
  )
}

export default Landing;