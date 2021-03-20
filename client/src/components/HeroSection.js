import './HeroSection.css';
import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button2 } from './subComponents/index';
import { gsap } from 'gsap';
import {
  textColor,
  primaryFont,
  secondaryFont,
  typeScale,
} from '../utils/index';

const LengthOfButton = styled.div`
  width: 250px;
`;

const NewTeamText = styled.span`
  color: ${(props) => (props.color ? props.color : `${textColor[100]}`)};
  font-family: ${secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: ${typeScale.paragraph};
  line-height: 35px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: all 4s ease;
  pointer-events: none;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const TextContainerCover = styled.div`
  transition: all 2s ease;

  @media (max-width: 500px) {
    padding: 40px 35px 20px;
  }

  @media (max-width: 440px) {
    width: 100%;
    padding: 40px;
    margin-left: 0;
  }
`;

const HeroSection = () => {
  let button1 = useRef(null);
  let button2 = useRef(null);
  const [showTeamText, setShowTeamText] = useState(false);
  const [showDemoText, setShowDemoText] = useState(false);

  useEffect(() => {
    gsap.from([button1, button2], 0.8, {
      delay: 0.8,
      ease: 'power3.out',
      y: 70,
      stagger: {
        amount: 0.15,
      },
    });
  }, [button1, button2]);

  const showMessage = () => {
    if (showTeamText) {
      return (
        <NewTeamText color='#BDF3FF' show={showTeamText}>
          Create a Valorant Team and start inviting your friends to build a
          roster. You can also search for friends / players to join your team
          based on roles / characters.
        </NewTeamText>
      );
    }
    if (showDemoText) {
      return (
        <NewTeamText color='#F5DBE2' show={showDemoText}>
          To find out how to use Blu, watch the demo video provided to learn how
          to get started and begin climbing the leaderboards today!
        </NewTeamText>
      );
    }
  };

  return (
    <div className='hero-container'>
      <div className='valorant-background-container'>
        <div className='valorant-background'>
          <div className='valorant-background-cover'></div>
        </div>
      </div>
      <div className='hero-btns'>
        <div className='hero-content-containter'>
          <div className='button-containers'>
            <div className='line-wrap'>
              <div ref={(el) => (button1 = el)}>
                <Button2
                  color='#BDF3FF'
                  location={'sign-up'}
                  text={'Create a Team'}
                  onMouseOver={() => {
                    setShowTeamText(true);
                    setShowDemoText(false);
                  }}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </div>
            <div className='line-wrap'>
              <div ref={(el) => (button2 = el)}>
                <Button2
                  color='#F5DBE2'
                  location={'sign-up'}
                  onMouseOver={() => {
                    setShowDemoText(true);
                    setShowTeamText(false);
                  }}
                  text={'Watch Demo'}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </div>
          </div>
          <div className='create-new-team-text-container'>
            <TextContainerCover className='text-container-cover'>
              {showMessage()}
            </TextContainerCover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
