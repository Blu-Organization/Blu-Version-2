import './HeroSection.css';
import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button2 from './subComponents/Button2.js';
import { gsap } from 'gsap';

//test commit for forked

const LengthOfButton = styled.div`
  width: 250px;
`;

const NewTeamText = styled.span`
  color: ${(props) => props.color ? props.color : 'white'};
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 35px;
  transition: all 4s ease;
  opacity: ${(props) => props.show ? 1 : 0};
  pointer-events: none;
`;

const TextContainerCover = styled.div`
  transition: all 2s ease;
  opacity: ${(props) => props.show ? 1 : 0};

`;

const DemoVidText = styled(NewTeamText)`
  color: black;
`;

const HeroSection = () => {

  let button1 = useRef(null);
  let button2 = useRef(null);
  const [showMountains, setShowMountains] = useState(false);
  const [showCircles, setShowCircles] = useState(false);

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
      <div className="valorant-background-container">
        <div className="valorant-background">
          <div className="valorant-background-cover"></div>
        </div>
      </div>
      <div className='hero-btns'>
        <div className="hero-content-containter">
        <div className='button-containers'>
            <div className="line-wrap" >
              <div ref={el => (button1 = el)}>
                <Button2 color='#BDF3FF' location={'sign-up'} text={'Create a Team'} onMouseOver={() => setShowMountains(true)}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </div>
            <div className="line-wrap" >
              <div ref={el => (button2 = el)} >
                <Button2 color='#F5DBE2' location={'sign-up'} onMouseOver={() => setShowCircles(true)} text={'Watch Demo'}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </div>
          </div>
          <div className="create-new-team-text-container">
            <TextContainerCover show={showMountains} className="text-container-cover">
              <NewTeamText color='#BDF3FF' show={showMountains} >Create a Valorant Team and start inviting your friends to build a roster. You can also search for friends / players to join your team based on roles / characters.</NewTeamText>
            </TextContainerCover>
          </div>
        </div>
      </div>
      {/* <div className="create-new-team-text-container">
          <DemoVidText show={showCircles} >To find out how to use Blu, watch the demo video provided to learn how to get started and begin climbing the leaderboards today!</DemoVidText>
        </div> */}
    </div>
  )
}

export default HeroSection;
