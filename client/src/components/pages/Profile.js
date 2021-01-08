import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import ProfilePage from '../ProfilePage';
import Navbar from '../Navbar.js';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfilePage />
      <Footer />
    </div>
  )
}

export default Profile;

