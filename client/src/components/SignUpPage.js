import React, { useState } from 'react';
import './SignUpPage.css';
import styled from 'styled-components';
import axios from 'axios';
import Button2 from './subComponents/Button2.js';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions/postActions.js';
import { bindActionCreators } from 'redux';
import smallBorder from '../images/smallborder.svg';
import extrasmallBorder from '../images/extrasmallborder.svg';

const LengthOfButton = styled.div`
  width: 250px;
`;

const MainContainer = styled.div`
  height: 105vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  object-fit: contain;

  @media (max-width: 1243px) {
    height: 150vh;
  }

  @media (max-width: 830px) {
    height: 220vh;
  }

  @media (max-width: 375px) {
    height: 260vh;
  }
`;

const ContentContainer = styled.div`
  position: relative;
`;

const Title = styled.h1`
position: absolute;
color: #F5DBE2;
font-family: SF Pro Display;
font-style: italic;
font-weight: 600;
font-size: 45px;
line-height: 40px;
text-align: center;
z-index: 31;
left: 30.5%;
top: 2%;
text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
10px 20px 5px rgba(0,0,0,0.05),
-10px 20px 5px rgba(0,0,0,0.05);
background: url(${smallBorder}) no-repeat;
height: 80px;
width: 660px;
padding: 15px;
transition: all 1s ease;

@media (max-width: 1240px) {
  left: 23.5%;
}

@media (max-width: 960px) {
  left: 15.5%;
}

@media (max-width: 800px) {
  font-size: 25px;
  height: 50px;
  width: 390px;
  padding: 5px;
  background: url(${extrasmallBorder}) no-repeat;
  top: 4%;
}

@media (max-width: 500px) {
  width: 290px;
  top: 2%;
}
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
  font-size: 15px;

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
  border-bottom: ${(props) => props.used ? `2px solid red;` : `2px solid #EFEFEF;`};
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

const WelcomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #13090c1f;
  padding: 40px;
`;

const WelcomeText = styled.span`
  color: white;
  font-weight: 600;
  font-family: SF Pro Display;
  font-size: 25px;
  line-height: 40px;
  text-align: center;
  max-width: 800px;
  margin-top: 4em;
`;


const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  flex-wrap: wrap;
  border-top: 1px solid #EFEFEF;
  border-bottom: 1px solid #EFEFEF;
}
`;

const DisplayCard = styled.div`
  width: 350px;
  height: 470px;
  background: linear-gradient(169.98deg,#5c5b89 2.82%,#9b938d 96.25%);
  border-radius: 10px;
  transition: all 0.5s ease;
  margin: 2em;

  &:hover {
    box-shadow: 15px 20px 4px rgba(0, 0, 0, 0.31);
  }
`;

const DisplayTitleContainer = styled.div`
  text-align: center;
  margin: 2em 4em;
`;

const DisplayTitle = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #e1e1e1;
  text-align: center;
`;

const DisplayEntryContainer = styled.div`
  margin: 1em 2em;
`;

const DisplayCardSteps = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #dbcaff;
  margin-right: 5px;
`;

const DisplayCardText = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;
  color: #e1e1e1;
`;

const FormContainer = styled.div`
  margin-top: 5em;
`;


const SignUpPage = ({ fetchCurrentUser }) => {

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
  const [logInTime, setLogInTime] = useState(false);

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
    if (year > 1900 && year <= 2021) {
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

  //Able to log in without complete form.
  //Fix this please.

  const createNewUser = (username, firstname,lastname, email, password, month, day, year ) => {
    if (username.length && firstname.length && lastname.length && email.length && password.length && month > 0 && day > 0 && year > 0) {
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
          setLogInTime(true);
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

  const storeUser = () => {
    let user = {
        username,
        firstname,
        lastname,
        email,
        password,
        month,
        day,
        year
    }

    //set the user into the local storage
    localStorage.setItem('user', JSON.stringify(user));
    fetchCurrentUser(username);
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

  const titleSwitch = () => {
    if (!logInTime) {
      return (
        <div>
          <Title>Create Account!</Title>
        </div>
      )
    } else {
      return (
        <Title>Account Created!</Title>
      )
    }
  }

  const formContent = () => {
    if (!logInTime) {
      return (
        <>
          <Form>
          <FormContainer></FormContainer>
          <FormGroup className="form__group">
            <FormInput used={invalidUsername} type="input" className="form__field" placeholder="userName" name="userName" required onChange={(e) => {setUserName(e.target.value); checkValidUsername(e.target.value)}} value={username} />
            <FormLabel used={invalidUsername} htmlFor="userName" className="form__label">Username</FormLabel>
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
                  {createNewUser(
                    username,
                    firstname,
                    lastname,
                    email,
                    password,
                    month,
                    day,
                    year
                  ); storeUser();}}>Submit
                </ButtonText>
            </ButtonPTag>
          </ButtonATag>
        </ButtonDiv>
          {successfullyCreatedUser()}
          {invalidFormText()}
        </>
      )
    } else {
      return (
        <>
          <WelcomeDiv>
            <WelcomeText>Welcome to the Blu family! Start exploring the best Valorant Teams or create your own roster and schedule a match between another team!</WelcomeText>
          </WelcomeDiv>
          <DisplayContainer>
            <DisplayCard>
              <DisplayTitleContainer>
                <DisplayTitle>
                  Create a new Valorant Team
                </DisplayTitle>
              </DisplayTitleContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #1:</DisplayCardSteps>
                <DisplayCardText>Choose a team name to represent your roster!</DisplayCardText>
              </DisplayEntryContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #2:</DisplayCardSteps>
                <DisplayCardText>Choose a 3 letter team tag.</DisplayCardText>
              </DisplayEntryContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #3:</DisplayCardSteps>
                <DisplayCardText>Invite your Valorant friends and add them to your team/roster.</DisplayCardText>
              </DisplayEntryContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #4:</DisplayCardSteps>
                <DisplayCardText>Select specific roles for each player / champion to help organize your roster before competing.</DisplayCardText>
              </DisplayEntryContainer>
              <div>
                <Button2 color="#F5DBE2" location={''} text={'Create a Team'}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </DisplayCard>
            <DisplayCard>
              <DisplayTitleContainer>
                <DisplayTitle>
                  Join an existing Valorant Team
                </DisplayTitle>
              </DisplayTitleContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #1:</DisplayCardSteps>
                <DisplayCardText>Explore Valorant teams that are actively recruiting. </DisplayCardText>
              </DisplayEntryContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #2:</DisplayCardSteps>
                <DisplayCardText>After choosing a Valorant team, send the team a request to join the roster. </DisplayCardText>
              </DisplayEntryContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #3:</DisplayCardSteps>
                <DisplayCardText>If the team accepts your request, then you’re all set! Start chatting with your team and begin competing!</DisplayCardText>
              </DisplayEntryContainer>
              <div>
                <Button2 color="#F5DBE2" location={''} text={'Find a Team'}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </DisplayCard>
            <DisplayCard>
              <DisplayTitleContainer>
                <DisplayTitle>
                  Some important tips and rules!
                </DisplayTitle>
              </DisplayTitleContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #1:</DisplayCardSteps>
                <DisplayCardText>Bring the competetive spirit and drive.</DisplayCardText>
              </DisplayEntryContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #2:</DisplayCardSteps>
                <DisplayCardText>Strive to reach to the top of the leaderboards!</DisplayCardText>
              </DisplayEntryContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #3:</DisplayCardSteps>
                <DisplayCardText>No rude, racial slurs, or bullying will be accepted.</DisplayCardText>
              </DisplayEntryContainer>
              <DisplayEntryContainer>
                <DisplayCardSteps>Step #4:</DisplayCardSteps>
                <DisplayCardText>Always have fun and enjoy this platform!</DisplayCardText>
              </DisplayEntryContainer>
              <div>
                <Button2 color="#F5DBE2" location={''} text={'Explore More'}></Button2>
                <LengthOfButton></LengthOfButton>
              </div>
            </DisplayCard>
          </DisplayContainer>
        </>
      )
    }
  }

  return (
    <MainContainer>
    <ContentContainer>
      {titleSwitch()}
      {formContent()}
    </ContentContainer>
    </MainContainer>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCurrentUser
  }, dispatch )
}

export default connect(() => ({}), mapDispatchToProps)(SignUpPage);