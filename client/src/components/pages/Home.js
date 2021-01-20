import '../../App.css';
import HeroSection from '../HeroSection.js';
import React, { useEffect } from 'react';
import Cards from '../Cards.js';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import HomePageTheme from '../Themes/HomePageTheme';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions/postActions.js';
import { bindActionCreators } from 'redux';

//test commit

const Home = ({ fetchCurrentUser }) => {

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      fetchCurrentUser(foundUser.username);
    }
  }, [fetchCurrentUser]);

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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCurrentUser
  }, dispatch )
}

export default connect(() => ({}), mapDispatchToProps)(Home);