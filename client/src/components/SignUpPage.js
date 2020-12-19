import React from 'react';
import './SignUpPage.css';
import styled from 'styled-components';

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


const SignUpPage = () => {
  return (
    <MainContainer>
    <div>
      <Title>Sign Up</Title>
    </div>
      <Form>
        <div class="form__group">
          <input type="input" class="form__field" placeholder="userName" name="userName" required />
          <label for="userName" class="form__label">User Name</label>
        </div>

        <div class="form__group">
          <input type="input" class="form__field" placeholder="FirstName" name="firstName" required />
          <label for="firstName" class="form__label">First Name</label>
        </div>

        <div class="form__group">
          <input type="input" class="form__field" placeholder="LastName" name="lastName" required />
          <label for="lastName" class="form__label">Last Name</label>
        </div>

        <div class="form__group">
          <input type="input" class="form__field" placeholder="Email" name="email" required />
          <label for="email" class="form__label">Email</label>
        </div>

        <div class="form__group">
          <input type="password" class="form__field" placeholder="password" name="password" required />
          <label for="password" class="form__label">Password</label>
        </div>

        <div class="form__group">
          <input type="password" class="form__field" placeholder="confirm password" name="confirm-password" required />
          <label for="confirm-password" class="form__label">Confirm Password</label>
        </div>

        <BirthdateContainer>
          <div class="form__group">
            <input type="input" class="form__field" placeholder="Month" name="month" required />
            <label for="month" class="form__label">Month</label>
          </div>
          <div class="form__group">
            <input type="number" class="form__field" placeholder="Day" name="day" required min="1" max="31"/>
            <label for="day" class="form__label">Day</label>
          </div>
          <div class="form__group">
            <input type="number" class="form__field" placeholder="Year" name="year" required />
            <label for="year" class="form__label">Year</label>
          </div>
        </BirthdateContainer>


      </Form>
      <ButtonDiv>
          <ButtonATag href="#">
            <ButtonPTag>
              <span class="bg"></span>
              <ButtonBase></ButtonBase>
              <ButtonText >Submit</ButtonText>
            </ButtonPTag>
          </ButtonATag>
        </ButtonDiv>
    </MainContainer>
  )
}

export default SignUpPage;