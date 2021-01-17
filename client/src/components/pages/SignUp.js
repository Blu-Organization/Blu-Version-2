import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import SignUpPage from '../SignUpPage';
import Navbar from '../Navbar.js';
import DefaultPageTheme from '../Themes/DefaultPageTheme';

const SignUp = () => {
  return (
    <div>
      <DefaultPageTheme>
        <Navbar />
        <SignUpPage />
        <Footer />
      </DefaultPageTheme>
    </div>
  )
}

export default SignUp;