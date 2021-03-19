import React from 'react';
import styled from 'styled-components';
import {
  textColor,
  neutrals,
  colors,
  primaryFont,
  secondaryFont,
  typeScale,
} from '../../utils/index';

const LargeTitle = styled.h1`
  font-family: ${primaryFont};
  font-style: normal;
  font-size: ${typeScale.header1};
  padding-right: 25px;
  width: 100%;
`;

const Title1 = ({ children }) => {
  return <LargeTitle>{children}</LargeTitle>;
};

export default Title1;
