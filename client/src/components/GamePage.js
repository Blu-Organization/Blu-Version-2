import React from 'react';
import './GamePage.css';

const GamePage = ({ currentGame }) => {
  return (
    <div className='gamelobby-container'>
      <div className='about-currentGame'>
        <a>
        <img className='' src='#' alt='#'></img>
        </a>
        <h1 className='gamelobby'>{currentGame}</h1>
        <h3>wsup this is a fake description about some game blah blah</h3>
      </div>
    </div>
  )
}

export default GamePage;