import React from 'react';
import styled from 'styled-components'

const Form = styled.form`
  height: 90vh;
`;

const SignUpPage = () => {
  return (
    <>
      <Form>
        <input type="text" name="firstName" placeHolder="first name"></input>
        <input type="text" name="lastName" placeHolder="last name"></input>
      </Form>
    </>
  )
}

export default SignUpPage;