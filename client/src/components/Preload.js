import React from 'react';
import './Preload.css';

const Preload = () => {
  return (
    <div className="preload">
    <div className="loading">
      <div className="bounceball"></div>
      <div className="loading-text">Blu is currently loading...</div>
      <div className="bounceball"></div>
    </div>
  </div>
  )
}

export default Preload;