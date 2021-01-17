import React from 'react';
import './Themes.css';

const DefaultPageTheme = ({children}) => {

  return (
    <>
      <div className="default-page-theme">
        <main>{children}</main>
      </div>
    </>
  )
}

export default DefaultPageTheme;