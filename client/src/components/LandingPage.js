import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions/postActions.js';
import { bindActionCreators } from 'redux';
import { textColor, colors, primaryFont, secondaryFont, typeScale } from '../utils/index.js';

const LandingContainerDiv = styled.div`
  margin-right: 150px;
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
  background: ${colors.primary};
  border-radius: 20px;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
  font-size: ${typeScale.paragraph};
  transition: all 0.5s ease;
  color: ${textColor[100]};

  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
    background: #f84343;
  }
`;

const Header = styled.h1`
  font-family: ${primaryFont};
  font-style: normal;
  font-weight: bold;
  font-size: ${typeScale.header1};
  line-height: 57px;
  display: inline-block;
  color: ${textColor[100]};

  @media (max-width: 960px) {
    font-size: ${typeScale.header3};
    line-height: 37px;
  }
`;

const HeaderColored = styled(Header)`
  background: -webkit-linear-gradient(355.72deg, #103783 -17.15%, #9BAFD9 104.24%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.p`
  font-family: ${secondaryFont};
  font-style: normal;
  font-weight: 300;
  font-size: ${typeScale.header5};
  line-height: 35px;
  color: ${textColor[100]};

  @media (max-width: 960px) {
    font-size: ${typeScale.paragraph};
    line-height: 25px;
  }
`;

const MainDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  @media (max-width: 885px) {
    flex-direction: column;
  }
`;

const MainMirror = styled.div`
  transform: ${(props) => props.hover ? 'matrix(1, 0, 0, 1, 0, 0)' : '(1, 0.16, -0.16, 1, 0, 0) rotateY(-20deg) rotateX(20deg)'};
  transition: all 1s ease;

  @media (max-width: 1200px) {
    margin-left: 50px;
  }

  @media (max-width: 960px) {
    margin-top: 200px;
    transition: all 1s ease;
  }

  @media (max-width: 885px) {
    margin-top: 50px;
    margin-left: 5px;
  }
`;

const SidePicture = styled.div`
  transform: ${(props) => props.hover ? 'matrix(1, 0, 0, 1, 0, 0)' : '(1, 0.16, -0.16, 1, 0, 0) rotateY(-20deg) rotateX(20deg)'};

  @media (max-width: 420px) {
    width: 300px;
  }

`;

const SidePictureMirror = styled.div`
  transform: ${(props) => props.hover ? 'matrix(1, 0, 0, 1, 0, 0)' : '(1, 0.16, -0.16, 1, 0, 0) rotateY(-20deg) rotateX(20deg)'};

  @media (max-width: 1200px) {
    margin-left: 50px;
  }

  @media (max-width: 885px) {
    position: unset;
    padding: 8px;
  }

  @media (max-width: 420px) {
    width: 300px;
    margin: 15px 15px 30px 15px;
  }
`;

const Div = styled.div`
  margin-top: 50px;
`;

const LandingPage = ({ fetchCurrentUser }) => {

  const [hover, setHover] = useState(false);

  return (
    <LandingContainerDiv>
      <MainDisplayContainer>
        <WelcomeTextContainer>
          <Header>
            Welcome to <HeaderColored>Blu!</HeaderColored> Created for Valorant player's from all around the world.
          </Header>
          <Text>Blu allows Valorant players to form teams and compete for rank. You can join a team or create your own Valorant team and find a team to play against in your own team rank level.</Text>
          <Link className="demo-log-in-button" to='/home' onClick={() => fetchCurrentUser('Demo-User')}>
            <DemoLogIn>Demo Log In</DemoLogIn>
          </Link>
        </WelcomeTextContainer>
        <Div>
          <SidePictureMirror hover={hover} className="side-picture-mirror">
            <SidePicture hover={hover} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className="side-picture"></SidePicture>
          </SidePictureMirror>
        </Div>
        <MainMirror hover={hover} className="main-picture-mirror">
          <div onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} className="main-picture"></div>
        </MainMirror>
      </MainDisplayContainer>
    </LandingContainerDiv>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCurrentUser
  }, dispatch )
}

export default connect(() => ({}), mapDispatchToProps)(LandingPage);