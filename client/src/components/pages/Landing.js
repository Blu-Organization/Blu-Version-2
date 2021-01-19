import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import LandingPage from '../LandingPage.js';
import Navbar from '../Navbar.js';
import LandingPageTheme from '../Themes/LandingPageTheme';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions/postActions.js';
import { bindActionCreators } from 'redux';

const Landing = ({ fetchCurrentUser }) => {


  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      fetchCurrentUser(foundUser.username);
    }
  }, [fetchCurrentUser]);


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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCurrentUser
  }, dispatch )
}

export default connect(() => ({}), mapDispatchToProps)(Landing);