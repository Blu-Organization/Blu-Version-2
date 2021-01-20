import React, { useState } from 'react';
import styled from 'styled-components';
import Button2 from './subComponents/Button2.js';
import controller from '../images/controller2.svg';
import './LogInPage.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions/postActions.js';
import { bindActionCreators } from 'redux';

const LengthOfButton = styled.div`
  width: 250px;
`;

const LogInPageContainer = styled.div`
  height: 90vh;
`;

const Title = styled.h1`
  color: black;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  padding: 100px 20px 20px 20px;

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
  border-bottom: ${(props) => props.used ? `2px solid red;` : `2px solid black;`};
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
  color: ${(props) => props.used ? `red` : `#d3cece`};
`;

const Div = styled.div`
  margin-top: 10px;
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

const InvalidFormText = styled.span`
  color: red;
`;

const LogInPage = ({ fetchCurrentUser }) => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [actPassword, setActPassword] = useState('');
  const [location, setLocation] = useState('log-in');
  const [unknownUser, setUnknownUser] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [wrongpass, setWrongpass] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [userData, setUserData] = useState('');

  const checkUserLogIn = (username) => {

    //Check if username exists in database first to decide if we should check for the password validation.

    axios.get('/api/userUsername', {
      params: {
        username
      }
    })
    .then((res) => {
      if (res.data.rowCount > 0) {
        setUnknownUser(false);
        setActPassword(res.data.rows[0].password);
        setUserData(res.data.rows[0]);
      } else {
        setUnknownUser(true);
      }
    })
    .catch((err) => {
      console.error(err);
    })

  }

  const unknownUsernameText = () => {
    if (unknownUser)
    return (
      <Div>
        <InvalidFormText>This username does not exist.</InvalidFormText>
      </Div>
    )
  }

  const passwordValidation = (password) => {
    if (!unknownUser) {
      if (password === actPassword) {
        setPasswordCheck(true);
        setWrongpass(false);
        handleLocation();
        fetchCurrentUser(username);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        setPasswordCheck(false);
        setWrongpass(true);
      }
    }
  }

  const wrongPasswordText = () => {
    if (!passwordCheck && wrongpass && buttonClicked) {
      return (
        <Div>
          <InvalidFormText>Please enter the correct password.</InvalidFormText>
        </Div>
      )
    }
  }

  const handleLocation = (password) => {
    if (password === actPassword) {
      setLocation('exploremore');
    } else {
      setLocation('log-in');
    }
  }

  return (
    <LogInPageContainer>
      <Title>Log In</Title>
      <Form>
          <FormGroup className="form__group">
            <FormInput used={unknownUser} type="input" className="form__field" placeholder="userName" name="userName" required onChange={(e) => {setUserName(e.target.value); checkUserLogIn(e.target.value);}} value={username} />
            <FormLabel used={unknownUser} htmlFor="userName" className="form__label">Username</FormLabel>
            <Div>
              {unknownUsernameText()}
            </Div>
          </FormGroup>

          <FormGroup className="form__group">
            <FormInput type="password" className="form__field" placeholder="password" name="password" required onChange={(e) => {setPassword(e.target.value); handleLocation(e.target.value);}} value={password} />
            <FormLabel htmlFor="password" className="form__label">Password</FormLabel>
            <Div>
              {wrongPasswordText()}
            </Div>
          </FormGroup>
      </Form>
      <div>
        <Button2 location={location} text={'Log In'} onClick={() => { passwordValidation(password); setButtonClicked(true);}}></Button2>
        <LengthOfButton></LengthOfButton>
      </div>
      <div className="empty-icon-container">

        <div className="animation-container">
        <Img className="bounce" src={controller} alt='controller'></Img>
        <Img2 className="bounce2" src={controller} alt='controller'></Img2>
        <Img3 className="bounce3" src={controller} alt='controller'></Img3>
        <Img4 className="bounce4" src={controller} alt='controller'></Img4>
        <Img5 className="bounce5" src={controller} alt='controller'></Img5>
          <div className="pebble1"></div>
          <div className="pebble2"></div>
          <div className="pebble3"></div>
          <div className="sun"></div>
        </div>
      </div>
    </LogInPageContainer>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCurrentUser
  }, dispatch )
}



export default connect(() => ({}), mapDispatchToProps)(LogInPage);