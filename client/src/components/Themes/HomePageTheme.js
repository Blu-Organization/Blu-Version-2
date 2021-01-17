import React from 'react';
import './Themes.css';
import styled, { keyframes } from 'styled-components';

const HomePageTheme = ({children}) => {

  return (
    <>
      <div className="home-page-theme">
        <main>{children}</main>
      </div>
    </>
  )
}

export default HomePageTheme;