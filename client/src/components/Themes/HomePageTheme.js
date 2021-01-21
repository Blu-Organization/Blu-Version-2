import React from 'react';
import './Themes.css';

const HomePageTheme = ({children}) => {

  return (
    <>
      <div className="home-page-theme">
        <div className="rect-143"></div>
        <div className="rect-144"></div>
        <div className="rect-147"></div>
        <div className="rect-148"></div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default HomePageTheme;