import './HeroSection.css';
import '../App.css';
import React from 'react';
import Button from './subComponents/Button.js';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
          Get Started
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >
          Watch Demo
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
