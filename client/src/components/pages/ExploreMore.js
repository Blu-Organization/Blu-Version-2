import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import DefaultPageTheme from '../Themes/DefaultPageTheme';
import ExplorePage from '../ExplorePage.js';

const ExploreMore = () => {

  return (
    <div>
      <DefaultPageTheme>
        <Navbar />
          <ExplorePage />
        <Footer />
      </DefaultPageTheme>
    </div>
  )
}

export default ExploreMore;
