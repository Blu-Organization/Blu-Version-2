import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Button2 from './subComponents/Button2.js';
import controller from '../images/controller2.svg';
import './LogInPage.css';

const LengthOfButton = styled.div`
  width: 250px;
`;

const LogInPageContainer = styled.div`
  height: 90vh;
  background: #090f16;
`;

const Title = styled.h1`
  color: #f6f6f6;
  text-align: center;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const FakeTitle = styled(Title)`
  padding: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  align-items: center;
`;

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 50%;
`;

const FormInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: ${(props) => props.used ? `2px solid red;` : `2px solid #9b9b9b;`};
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-top: 10px;

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: ${(props) => props.used ? `linear-gradient(to right, red, red)` : `linear-gradient(to right, #7FA7F4, #63eb97)`};
    border-image-slice: 1;
  }
`;

const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${(props) => props.used ? `red` : `#b2b2b2`};
`;

const Div = styled.div`
  margin-top: 10px;
`;

const controllerClouds = keyframes`
  // 0% {
  //   top: 15%;
  //   left: 0%;
  // }

  // 100% {
  //   left: 130%;
  // }
  from {
    top: 15%;
    left: 0%;
    transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  to {
    bottom: 0%;
    left: 130%;
    transform: rotate(360deg) translateX(150px) rotate(-180deg);
  }
`;

const bounceAnim = keyframes`
  0%, 10% { bottom: 50%; }

  100% { bottom: 0%; }
`;

const spinAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  filter: invert(99%) sepia(7%) saturate(172%) hue-rotate(199deg) brightness(116%) contrast(93%);
`;

const Img2 = styled.img`
  filter: invert(94%) sepia(98%) saturate(579%) hue-rotate(276deg) brightness(90%) contrast(92%);
`;

const Img3 = styled.img`
  filter: invert(93%) sepia(67%) saturate(3151%) hue-rotate(187deg) brightness(90%) contrast(85%);
`;

const Img4 = styled.img`
  filter: invert(80%) sepia(24%) saturate(740%) hue-rotate(198deg) brightness(92%) contrast(88%);
`;

const Img5 = styled.img`
  filter: invert(69%) sepia(9%) saturate(6281%) hue-rotate(191deg) brightness(99%) contrast(93%);
`;

const LogInPage = (props) => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LogInPageContainer>
      <Title>Log In</Title>
      <Form>
          <FormGroup className="form__group">
            <FormInput type="input" className="form__field" placeholder="userName" name="userName" required onChange={(e) => {setUserName(e.target.value);}} value={username} />
            <FormLabel htmlFor="userName" className="form__label">Username</FormLabel>
            <Div>
              <FakeTitle>{username}</FakeTitle>
            </Div>
          </FormGroup>

          <FormGroup className="form__group">
            <FormInput type="password" className="form__field" placeholder="password" name="password" required onChange={(e) => {setPassword(e.target.value);}} value={password} />
            <FormLabel htmlFor="password" className="form__label">Password</FormLabel>
            <Div>
              <FakeTitle>{password}</FakeTitle>
            </Div>
          </FormGroup>
      </Form>
      <div>
        <Button2 location={'exploremore'} text={'Log In'}></Button2>
        <LengthOfButton></LengthOfButton>
      </div>
      <div class="empty-icon-container">

        <div class="animation-container">
        <Img className="bounce" src={controller} alt='controller'></Img>
        <Img2 className="bounce2" src={controller} alt='controller'></Img2>
        <Img3 className="bounce3" src={controller} alt='controller'></Img3>
        <Img4 className="bounce4" src={controller} alt='controller'></Img4>
        <Img5 className="bounce5" src={controller} alt='controller'></Img5>
          <div class="pebble1"></div>
          <div class="pebble2"></div>
          <div class="pebble3"></div>
        </div>
      </div>
    </LogInPageContainer>
  )
}

export default LogInPage;