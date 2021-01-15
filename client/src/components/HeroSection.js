import './HeroSection.css';
import '../App.css';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from './subComponents/Button.js';
import Button2 from './subComponents/Button2.js';
import { gsap } from 'gsap';

//test commit for forked

const LengthOfButton = styled.div`
  width: 250px;
`;

const HeroSection = () => {

  let button1 = useRef(null);
  let button2 = useRef(null);

  useEffect(() => {
    gsap.from([button1, button2], 0.8, {
      delay: .8,
      ease: "power3.out",
      y: 70,
      stagger: {
        amount: 0.15
      }
    })

  }, [button1, button2])

  return (
    <div className='hero-container'>
      <div className='hero-btns'>
        <div className="hero-content-containter">
          <span className="hero-text">To get started click "Get Started" to create an account with Blu!</span>
          <div className='button-containers'>
            <div className="line-wrap" >
              <div ref={el => (button1 = el)}>
                <Button2 location={'sign-up'} onClick={() => console.log('hello')} text={'Get Started'}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </div>
            <div className="line-wrap" >
              <div ref={el => (button2 = el)} >
                <Button2 location={'sign-up'} onClick={() => console.log('hello!!!!')} text={'Watch Demo'}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </div>
          </div>
          <span className="hero-text">To see a preview of what Blu is all about, click "Watch Demo" to watch a live demo.</span>
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