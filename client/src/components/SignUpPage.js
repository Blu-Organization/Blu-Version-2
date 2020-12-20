import React, { useState } from 'react';
import './SignUpPage.css';
import styled from 'styled-components';
import axios from 'axios';

const MainContainer = styled.div`
  height: 100vh;
  background-color: #282828;
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
  color: ${(props) => props.used ? `red` : `#9b9b9b`};
`;


const SignUpPage = () => {

  const [username, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);
  const [usernameTaken, setUsernameTaken] = useState(false);

  const checkValidUsername = (username) => {

    //check if username exisits inside our users database pool.
      //if so continue to say username already taken
      //if the username is not taken then say username available!
    axios.get('/api/user', {
      params: {
        username
      }
    })
    .then((res) => {
      console.log(res.data.rowCount)
      if (res.data.rowCount > 0) {
        setUsernameTaken(true);
      } else {
        setUsernameTaken(false);
      }
    })
    .catch((err) => {
      console.error(err);
    })
  }

  const notValidUserName = () => {
    if (usernameTaken) {
      return (
        <UsernameWarning>Username is already taken!</UsernameWarning>
      )
    }
  }

  const createNewUser = (username, firstname,lastname, email, password, month, day, year ) => {

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
      console.log('successfully added user!');
    })
    .catch((err) => {
      console.error(err);
    })
  }

  return (
    <MainContainer>
    <div>
      <Title>Sign Up</Title>
    </div>
      <Form>
        <FormGroup className="form__group">
          <FormInput used={usernameTaken} type="input" className="form__field" placeholder="userName" name="userName" required onChange={(e) => {setUserName(e.target.value); checkValidUsername(e.target.value)}} />
          <FormLabel used={usernameTaken} for="userName" className="form__label">User Name</FormLabel>
          <Div>
            {notValidUserName()}
          </Div>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="input" className="form__field" placeholder="FirstName" name="firstName" required onChange={(e) => setFirstName(e.target.value)} />
          <FormLabel for="firstName" className="form__label">First Name</FormLabel>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="input" className="form__field" placeholder="LastName" name="lastName" required onChange={(e) => setLastName(e.target.value)} />
          <FormLabel for="lastName" className="form__label">Last Name</FormLabel>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="input" className="form__field" placeholder="Email" name="email" required onChange={(e) => setEmail(e.target.value)} />
          <FormLabel for="email" className="form__label">Email</FormLabel>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="password" className="form__field" placeholder="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          <FormLabel for="password" className="form__label">Password</FormLabel>
        </FormGroup>

        <FormGroup className="form__group">
          <FormInput type="password" className="form__field" placeholder="confirm password" name="confirm-password" required />
          <FormLabel for="confirm-password" className="form__label">Confirm Password</FormLabel>
        </FormGroup>

        <BirthdateContainer>
          <FormGroup className="form__group">
            <FormInput type="number" className="form__field" placeholder="Month" name="month" min="1" max="12"required onChange={(e) => setMonth(e.target.value)} />
            <FormLabel for="month" className="form__label">Month</FormLabel>
          </FormGroup>
          <FormGroup className="form__group">
            <FormInput type="number" className="form__field" placeholder="Day" name="day" required min="1" max="31" onChange={(e) => setDay(e.target.value)} />
            <FormLabel for="day" className="form__label">Day</FormLabel>
          </FormGroup>
          <FormGroup className="form__group">
            <FormInput type="number" className="form__field" placeholder="Year" name="year" required onChange={(e) => setYear(e.target.value)} />
            <FormLabel for="year" className="form__label">Year</FormLabel>
          </FormGroup>
        </BirthdateContainer>


      </Form>
      <ButtonDiv>
          <ButtonATag href="#">
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
    </MainContainer>
  )
}

export default SignUpPage;