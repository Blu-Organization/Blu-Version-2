import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import { connect } from 'react-redux';
import LogInPage from '../LogInPage.js';

const LogIn = (props) => {
  return (
    <div>
      <LogInPage />
      <Footer />
    </div>
  )
}

export default LogIn;