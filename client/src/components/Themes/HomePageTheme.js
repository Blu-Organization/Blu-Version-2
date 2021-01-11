import React from 'react';
import './Themes.css';

const HomePageTheme = ({children}) => {
  return (
    <>
      <div className="home-page-theme">
        <div className="polygon1"></div>
        <div className="polygon2"></div>
        <div className="polygon3"></div>
        <div className="polygon4"></div>
        <div className="ellipse20"></div>
        <div className="ellipse21"></div>
        <div className="ellipse22"></div>
        <div className="ellipse23"></div>
        <div className="ellipse24"></div>
        <div className="ellipse25"></div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default HomePageTheme;