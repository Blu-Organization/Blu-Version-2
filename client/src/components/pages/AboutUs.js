import React from 'react';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import AboutUsPage from '../AboutUsPage.js';
import DefaultPageTheme from '../Themes/DefaultPageTheme';

const AboutUs = () => {
  return (
    <div>
      <DefaultPageTheme>
        <Navbar />
        <AboutUsPage />
        <Footer />
      </DefaultPageTheme>
    </div>
  );
};

export default AboutUs;
