import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import { connect } from 'react-redux';
import LogInPage from '../LogInPage.js';
import Navbar from '../Navbar.js';

const LogIn = (props) => {
  return (
    <div>
      <Navbar />
      <LogInPage />
      <Footer />
    </div>
  )
}

export default LogIn;