import React from 'react';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';
import styled from 'styled-components';
import DefaultPageTheme from '../Themes/DefaultPageTheme';

const TestDiv = styled.div`
  height: 90vh;
`;

const CreateTeam = () => {
  return (
    <div>
      <DefaultPageTheme>
        <Navbar />
        <TestDiv></TestDiv>
        <Footer />
      </DefaultPageTheme>
    </div>
  )
}

export default CreateTeam;