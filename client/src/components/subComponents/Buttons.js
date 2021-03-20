import React from 'react';
import './Button.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { textColor, colors } from '../../utils/index.js';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='sign-up'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
        {children}
      </button>
    </Link>
  );
};

const ButtonDiv = styled.div`
  display: -webkit-box;
  display: flex;
  z-index: 20;

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
  color: ${textColor[100]};
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 0 1px inset rgb(80 149 255);
  position: relative;
  margin: 10px 0;
  z-index: 20;

  &:after {
    content: '';
    width: 1px;
    position: absolute;
    height: 8px;
    background: white;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  &:before {
    right: 0;
    left: initial;
    content: '';
    width: 1px;
    position: absolute;
    height: 8px;
    background: white;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
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
  z-index: 20;
`;

const ButtonBase = styled.span`
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  left: 0;
  border: 1px solid ${textColor[100]};
  z-index: 20;

  &:before {
    content: '';
    width: 2px;
    height: 2px;
    left: -1px;
    top: -1px;
    background: #7089ff;
    position: absolute;
    -webkit-transition: 0.3s ease-out all;
    transition: 0.3s ease-out all;
  }
`;

const ButtonText = styled.span`
  color: ${(props) => (props.color ? props.color : `${textColor[100]}`)};
  z-index: 4;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  z-index: 20;

  &:after {
    content: '';
    width: 4px;
    height: 4px;
    right: 0;
    bottom: 0;
    background: black;
    position: absolute;
    -webkit-transition: 0.3s ease-out all;
    transition: 0.3s ease-out all;
    z-index: 5;
  }
`;

const Button2 = ({ location, onClick, text, onMouseOver, color }) => {
  return (
    <ButtonDiv>
      <ButtonATag href='#' onClick={(e) => e.preventDefault()}>
        <ButtonPTag>
          <span className='bg'></span>
          <ButtonBase></ButtonBase>
          <Link to={location}>
            <ButtonText
              color={color}
              onMouseOver={onMouseOver}
              onClick={onClick}>
              {text}
            </ButtonText>
          </Link>
        </ButtonPTag>
      </ButtonATag>
    </ButtonDiv>
  );
};

export { Button, Button2 };
