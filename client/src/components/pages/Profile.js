import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import ProfilePage from '../ProfilePage';
import Navbar from '../Navbar.js';
import DefaultPageTheme from '../Themes/DefaultPageTheme';

const Profile = () => {
  return (
    <div>
      <DefaultPageTheme>
        <Navbar />
        <ProfilePage />
        <Footer />
      </DefaultPageTheme>
    </div>
  );
};

export default Profile;
