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
import smallBorder from '../../images/smallborder.svg';
import extrasmallBorder from '../../images/extrasmallborder.svg';

const LargeTitle = styled.h1`
  font-family: ${primaryFont};
  font-style: normal;
  font-size: ${typeScale.header1};
  padding-right: 25px;
  width: 100%;
`;

const BoxedTitle = styled.h1`
  position: absolute;
  color: ${textColor[200]};
  font-family: ${primaryFont};
  font-weight: 600;
  font-size: ${typeScale.header1};
  line-height: 40px;
  text-align: center;
  z-index: 31;
  left: 30.5%;
  top: 2%;
  text-shadow: 0px 15px 5px rgba(0, 0, 0, 0.1),
    10px 20px 5px rgba(0, 0, 0, 0.05), -10px 20px 5px rgba(0, 0, 0, 0.05);
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

const Title1 = ({ children }) => {
  return <LargeTitle>{children}</LargeTitle>;
};

const BoxedTitle1 = ({ children }) => {
  return <BoxedTitle>{children}</BoxedTitle>;
};

export { Title1, BoxedTitle1 };
