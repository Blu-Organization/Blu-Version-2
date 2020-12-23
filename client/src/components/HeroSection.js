import './HeroSection.css';
import '../App.css';
import React from 'react';
import styled from 'styled-components';
import Button from './subComponents/Button.js';
import Button2 from './subComponents/Button2.js';

const LengthOfButton = styled.div`
  width: 250px;
`;

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='hero-btns'>
        <div className='button-containers'>
          <div>
            <Button2 location={'sign-up'} onClick={() => console.log('hello!!!!')} text={'Get Started'}></Button2>
            <LengthOfButton></LengthOfButton>
          </div>
          <div>
            <Button2 location={'sign-up'} onClick={() => console.log('hello!!!!')} text={'Watch Demo'}></Button2>
            <LengthOfButton></LengthOfButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;


{/* <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
              Get Started
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >
              Watch Demo
            </Button>
        </div> */}