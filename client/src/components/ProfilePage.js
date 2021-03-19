import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title1 from './subComponents/Title1.js';

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
