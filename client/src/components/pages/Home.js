import '../../App.css';
import HeroSection from '../HeroSection.js';
import React from 'react';
import Cards from '../Cards.js';
import Footer from '../Footer.js';

const Home = () => {

  //reminder to fix this function with barba.js
  const preloaderFunc = () => {
    const preload = document.querySelector('.preload');
    preload.classList.remove('preload-finish');
    setTimeout(() => {
      preload.classList.add('preload-finish');
    }, 2000);
  }

  return (
    <div>
      <HeroSection preloaderFunc={preloaderFunc}/>
      <Cards preloaderFunc={preloaderFunc}/>
      <Footer />
    </div>
  )
}

export default Home;