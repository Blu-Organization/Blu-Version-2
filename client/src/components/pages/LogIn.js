import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import { connect } from 'react-redux';

const LogIn = (props) => {
  return (
    <div>
      <h1 className='log-in'>Log In</h1>
      <Footer />
    </div>
  )
}

export default LogIn;