import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import SignUpPage from '../SignUpPage';
import Navbar from '../Navbar.js';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <SignUpPage />
      <Footer />
    </div>
  )
}

export default SignUp;