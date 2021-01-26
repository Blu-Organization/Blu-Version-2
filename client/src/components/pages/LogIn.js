import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import LogInPage from '../LogInPage.js';
import Navbar from '../Navbar.js';
import DefaultPageTheme from '../Themes/DefaultPageTheme';

const LogIn = (props) => {
  return (
    <div>
      <DefaultPageTheme>
        <Navbar />
        <LogInPage />
        <Footer />
      </DefaultPageTheme>
    </div>
  )
}

export default LogIn;