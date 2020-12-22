import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';
import styled from 'styled-components';
import axios from 'axios';
import controller from '../images/controller.jpg';

const MainContainer = styled.div`
  height: 115vh;
  // background-color: #282828;
  background: url(${controller}) center center/cover no-repeat;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.75);
  object-fit: contain;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  align-items: center;
`;

const BirthdateContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const ButtonDiv = styled.div`
  display: -webkit-box;
  display: flex;

  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-flow: column;
`;

const ButtonATag = styled.a`
  width: 100%;
  max-width: 240px;
  height: 54px;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 900;
  color: #7FA7F4;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 0 0 1px inset rgba(236, 232, 225, 0.3);
  position: relative;
  margin: 10px 0;

  &:after {
    content: "";
    width: 1px;
    position: absolute;
    height: 8px;
    background: #0f1923;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
  }

  &:before {
    right: 0;
    left: initial;
    content: "";
    width: 1px;
    position: absolute;
    height: 8px;
    background: #0f1923;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
  }

  &:hover {
    color: #ece8e1;
  }
`;

const ButtonPTag = styled.p`
  margin: 0;
  height: 54px;
  line-height: 54px;
  box-sizing: border-box;
  z-index: 1;
  left: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ButtonBase = styled.span`
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  left: 0;
  border: 1px solid #7FA7F4;

  &:before {
    content: "";
    width: 2px;
    height: 2px;
    left: -1px;
    top: -1px;
    background: #0f1923;
    position: absolute;
    -webkit-transition: 0.3s ease-out all;
    transition: 0.3s ease-out all;
  }
`;

const ButtonText = styled.span`
  z-index: 4;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:after {
    content: "";
    width: 4px;
    height: 4px;
    right: 0;
    bottom: 0;
    background: #7FA7F4;
    position: absolute;
    -webkit-transition: 0.3s ease-out all;
    transition: 0.3s ease-out all;
    z-index: 5;
  }
`;

const UsernameWarning = styled.span`
  color: red;
`;

const Div = styled.div`
  margin-top: 10px;
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

const InvalidFormWarningDiv = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const InvalidFormText = styled.span`
  color: ${(props) => props.passwordColor ? props.passwordColor : `red`};
`;

const ValidFormText = styled.span`
  color: #7FA7F4;
`;

const ValidPasswordText = styled.span`
  color: #52ff28;
`;

const SignUpPage = () => {

  const [username, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);

  const [invalidUsername, setinvalidUsername] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);
  const [emptyForm, setEmptyForm] = useState(false);
  const [usernameLength, setUsernameLength] = useState(false);
  const [createdUser, setCreatedUser] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [validMonth, setValidMonth] = useState(false);
  const [validDay, setValidDay] = useState(false);
  const [validYear, setValidYear] = useState(false);

  //USERNAME VALIDATION

  const checkValidUsername = (username) => {

    //CHECK #1: SEE IF USERNAME IS BETWEEN 4 - 25 CHARACTERS LONG
    if (username.length >= 4 && username.length <= 25) {
      setUsernameLength(false);
      setinvalidUsername(false);

      //CHECK #2: SEE IF THE USERNAME EXISTS IN DATABASE
        //check if username exisits inside our users database pool.
        //if so continue to say username already taken
        //if the username is not taken then say username available!

      axios.get('/api/userUsername', {
        params: {
          username
        }
      })
      .then((res) => {
        if (res.data.rowCount > 0) {
          setUsernameTaken(true);
          setinvalidUsername(true);
        } else {
          setUsernameTaken(false);
          setinvalidUsername(false);
        }
      })
      .catch((err) => {
        console.error(err);
      })
    } else {
      setUsernameLength(true);
      setinvalidUsername(true);
    }
  }

  const notValidUserName = () => {
    if (usernameLength) {
      return (
        <UsernameWarning>Usernames must be between 4 and 25 characters!</UsernameWarning>
      )
    }
    if (usernameTaken) {
      return (
        <UsernameWarning>Username is already taken!</UsernameWarning>
      )
    }
  }

  //EMAIL VALIDATION

  const checkValidEmail = (email) => {

    axios.get('/api/userEmail', {
      params: {
        email
      }
    })
    .then((res) => {
      if (res.data.rowCount > 0) {
        setEmailTaken(true);
      } else {
        setEmailTaken(false);
      }
    })
    .catch((err) => {
      console.error(err);
    })

    let generic = email.substr(email.indexOf('@'));
    let afterPeriod = generic.substr(generic.indexOf('.') + 1);
    if (email[0] === '@') {
      setInvalidEmail(true);
    } else if (email[email.indexOf('@') + 1] === '.') {
      setInvalidEmail(true);
    } else if (!generic.includes('.')) {
      setInvalidEmail(true);
    } else if (afterPeriod.length < 2) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }
  }

  const notValidEmail = () => {
    if (invalidEmail) {
      return (
        <UsernameWarning>Please enter a valid email!</UsernameWarning>
      )
    }
    if (emailTaken) {
      return (
        <UsernameWarning>Email is already taken!</UsernameWarning>
      )
    }
  }

  const invalidFormText = () => {
    if (invalidUsername || invalidEmail || emailTaken || invalidPassword) {
      return (
        <InvalidFormWarningDiv>
          <InvalidFormText>One or more fields are incorrect!</InvalidFormText>
        </InvalidFormWarningDiv>
      )
    } else if (emptyForm) {
      return (
        <InvalidFormWarningDiv>
          <InvalidFormText>Form is empty please provide more info!</InvalidFormText>
        </InvalidFormWarningDiv>
      )
    }
  }

  //PASSWORD VALIDATION

  const checkPasswordStrength = (password) => {
    if (password.length < 5) {
      setPasswordStrength('Password Strength: Weak');
      setPasswordColor('red');
    } else if (password.length >= 5 && password.length <= 10) {
      setPasswordStrength('Password Strength: Fair');
      setPasswordColor('#ff9628');
    } else {
      setPasswordStrength('Password Strength: Strong')
      setPasswordColor('#52ff28');
    }
  }

  const checkPasswordMatch = (confirmPassword) => {
    if (confirmPassword === password) {
      setPasswordMatch(true);
      setInvalidPassword(false);
    } else {
      setPasswordMatch(false);
      setInvalidPassword(true);
    }
  }

  const checkPreviousPasswordMatch = (prevPassword) => {
    if (prevPassword === confirmPassword) {
      setPasswordMatch(true);
      setInvalidPassword(false);
    } else {
      setPasswordMatch(false);
      setInvalidPassword(true);
    }
  }

  const passwordMatchText = () => {
    if (password.length > 0 || confirmPassword.length > 0) {
      if (passwordMatch) {
        return (
          <Div>
            <ValidPasswordText>Passwords match!</ValidPasswordText>
          </Div>
        )
      } else {
        return (
          <Div>
            <InvalidFormText>Passwords do not match. Please try again</InvalidFormText>
          </Div>
        )
      }
    }
  }

  //MONTH VALIDATION

  const checkValidMonth = (month) => {
    if (month > 0 && month <= 12) {
      setValidMonth(true);
    } else {
      setValidMonth(false);
    }
  }

  const monthText = () => {
    if (month !== 0) {
      if (!validMonth) {
        return (
          <Div>
              <InvalidFormText>Please enter a valid Month!</InvalidFormText>
          </Div>
        )
      } else {
        return (
          <Div></Div>
        )
      }
    }
  }

  //DAY VALIDATION

  const checkValidDay = (day) => {
    if (day > 0 && day <= 31) {
      setValidDay(true);
    } else {
      setValidDay(false);
    }
  }

  const dayText = () => {
    if (day !== 0) {
      if (!validDay) {
        return (
          <Div>
              <InvalidFormText>Please enter a valid Day!</InvalidFormText>
          </Div>
        )
      } else {
        return (
          <Div></Div>
        )
      }
    }
  }

  //YEAR VALIDATION

  const checkValidYear = (year) => {
    if (year > 1900 && year <= 2020) {
      setValidYear(true);
    } else {
      setValidYear(false);
    }
  }

  const yearText = () => {
    if (year !== 0) {
      if (!validYear) {
        return (
          <Div>
              <InvalidFormText>Please enter a valid Year!</InvalidFormText>
          </Div>
        )
      } else {
        return (
          <Div></Div>
        )
      }
    }
  }

  const createNewUser = (username, firstname,lastname, email, password, month, day, year ) => {
    if (username.length && firstname.length && lastname.length && email.length && password.length) {
      if (!invalidUsername || invalidEmail) {
        axios.post('/api/postUser', {
          username,
          firstname,
          lastname,
          email,
          password,
          month,
          day,
          year
        })
        .then((res) => {
          setEmptyForm(false);
          setCreatedUser(true);
          console.log('successfully added user!');
        })
        .catch((err) => {
          console.error(err);
        })
      }
    } else {
      setEmptyForm(true);
    }
  }

  const successfullyCreatedUser = () => {
    if (createdUser) {
      return (
        <InvalidFormWarningDiv>
          <ValidFormText>Successfully Created Account!</ValidFormText>
        </InvalidFormWarningDiv>
      )
    }
  }

  return (
    <MainContainer>
    <div>
      <Title>Create Account</Title>
    </div>
      <Form>
        <FormGroup className="form__group">
          <FormInput used={invalidUsername} type="input" className="form__field" placeholder="userName" name="userName" required onChange={(e) => {setUserName(e.target.value); checkValidUsername(e.target.value)}} />
          <FormLabel used={invalidUsername} htmlFor="userName" className="form__label">User Name</FormLabel>
          <Div>
            {notValidUserName()}
          </Div>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="input" className="form__field" placeholder="FirstName" name="firstName" required onChange={(e) => setFirstName(e.target.value)} />
          <FormLabel htmlFor="firstName" className="form__label">First Name</FormLabel>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="input" className="form__field" placeholder="LastName" name="lastName" required onChange={(e) => setLastName(e.target.value)} />
          <FormLabel htmlFor="lastName" className="form__label">Last Name</FormLabel>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput used={invalidEmail} type="input" className="form__field" placeholder="Email" name="email" required onChange={(e) => {setEmail(e.target.value);checkValidEmail(e.target.value)}} />
          <FormLabel used={invalidEmail} htmlFor="email" className="form__label">Email</FormLabel>
          <Div>
            {notValidEmail()}
          </Div>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="password" className="form__field" placeholder="password" name="password" required onChange={(e) => {setPassword(e.target.value); checkPasswordStrength(e.target.value); checkPreviousPasswordMatch(e.target.value);}} />
          <FormLabel htmlFor="password" className="form__label">Password</FormLabel>
          <Div>
            <InvalidFormText passwordColor={passwordColor}>
              {passwordStrength}
            </InvalidFormText>
          </Div>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="password" className="form__field" placeholder="confirm password" name="confirm-password" required onChange={(e) => {setConfirmPassword(e.target.value);checkPasswordMatch(e.target.value);}} />
          <FormLabel htmlFor="confirm-password" className="form__label">Confirm Password</FormLabel>
          <Div>
            {passwordMatchText()}
          </Div>
        </FormGroup>

        <BirthdateContainer>
          <FormGroup className="form__group">
            <FormInput type="number" className="form__field" placeholder="Month" name="month" min="1" max="12"required onChange={(e) => {setMonth(e.target.value); checkValidMonth(e.target.value);}} />
            <FormLabel htmlFor="month" className="form__label">Month</FormLabel>
            <Div>
              {monthText()}
            </Div>
          </FormGroup>
          <FormGroup className="form__group">
            <FormInput type="number" className="form__field" placeholder="Day" name="day" required min="1" max="31" onChange={(e) => {setDay(e.target.value); checkValidDay(e.target.value);}} />
            <FormLabel htmlFor="day" className="form__label">Day</FormLabel>
            <Div>
              {dayText()}
            </Div>
          </FormGroup>
          <FormGroup className="form__group">
            <FormInput type="number" className="form__field" placeholder="Year" name="year" required onChange={(e) => {setYear(e.target.value); checkValidYear(e.target.value);}} />
            <FormLabel htmlFor="year" className="form__label">Year</FormLabel>
            <Div>
              {yearText()}
            </Div>
          </FormGroup>
        </BirthdateContainer>

      </Form>
      <ButtonDiv>
        <ButtonATag href="#" onClick={(e) => e.preventDefault()}>
          <ButtonPTag>
            <span className="bg"></span>
            <ButtonBase></ButtonBase>
              <ButtonText onClick={() =>
                createNewUser(
                  username,
                  firstname,
                  lastname,
                  email,
                  password,
                  month,
                  day,
                  year
                )}>Submit
              </ButtonText>
          </ButtonPTag>
        </ButtonATag>
        </ButtonDiv>
        {successfullyCreatedUser()}
        {invalidFormText()}
    </MainContainer>
  )
}

export default SignUpPage;