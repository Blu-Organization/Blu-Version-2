import React, { useState } from 'react';
import styled from 'styled-components';
import './LandingPage.css';
import LandingPageTheme from './Themes/LandingPageTheme';

const LandingContainerDiv = styled.div`
  margin-right: 180px;
  margin-left: 180px;
  margin-top: 100px;
  height: 90vh;

  @media (max-width: 960px) {
    margin: 50px;
  }

`;

const WelcomeTextContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const DemoLogIn = styled.button`
  width: 160px;
  height: 40px;
  background: #7089FF;
  border-radius: 20px;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.5s ease;

  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
    background: #ed70ed;
  }
`;

const Header = styled.h1`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 57px;

  @media (max-width: 960px) {
    font-size: 28px;
    line-height: 37px;
  }
`;

const Text = styled.p`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 35px;

  @media (max-width: 960px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

const MainDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LandingPage = () => {
  return (
    <LandingContainerDiv>
      <MainDisplayContainer>
        <WelcomeTextContainer>
          <Header>
            Welcome to Blu! Get Started with Blu today.
          </Header>
          <Text>We are here to connect like minded gamers to create social groups and parties before launching into a game. Come sign up and join millions of users today!</Text>
          <DemoLogIn>Demo Log In</DemoLogIn>
        </WelcomeTextContainer>
        <div className="main-picture"></div>
      </MainDisplayContainer>
    </LandingContainerDiv>
  )
}

export default LandingPage;