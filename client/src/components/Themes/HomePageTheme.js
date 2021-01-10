import React from 'react';
import './Themes.css';

const HomePageTheme = ({children}) => {
  return (
    <>
      <div className="home-page-theme">
        <div className="polygon1"></div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default HomePageTheme;