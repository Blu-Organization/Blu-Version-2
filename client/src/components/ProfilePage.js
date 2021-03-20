import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Title1 } from './subComponents/Titles.js';

const ProfileContainerDiv = styled.div`
  color: #fff;
  height: 90vh;
`;

const ProfilePage = () => {
  return (
    <ProfileContainerDiv>
      <Title1>hello</Title1>
    </ProfileContainerDiv>
  );
};

export default ProfilePage;
