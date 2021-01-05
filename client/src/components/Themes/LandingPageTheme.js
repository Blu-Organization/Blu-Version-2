import React from 'react';
import './Themes.css';

const LandingPageTheme = ({children}) => {
  return (
    <>
      <div className="landing-page-blobs">
        <main>{children}</main>
      </div>
    </>
  )
}

export default LandingPageTheme;