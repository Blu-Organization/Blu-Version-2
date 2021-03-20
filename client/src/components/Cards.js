import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';
import styled from 'styled-components';
import { textColor, primaryFont, typeScale } from '../utils/index';
import { BoxedTitle1 } from './subComponents/Titles.js';

const Cards = () => {
  return (
    <div className='cards'>
      <BoxedTitle1>New Valorant Teams</BoxedTitle1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/nrg.jpg'
              text='Energy Gaming'
              label='NRG'
              path='/gamelobby'
            />
            <CardItem
              src='images/blu.png'
              text='Buddies Like U'
              label='BLU'
              path='/gamelobby'
            />
            <CardItem
              src='images/c9.jpg'
              text='Cloud Gaming'
              label='C9'
              path='/gamelobby'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/TL.png'
              text='Team Liquid'
              label='TL'
              path='/gamelobby'
            />
            <CardItem
              src='images/faze.jpg'
              text='Faze Clan'
              label='FC'
              path='/gamelobby'
            />
            <CardItem
              src='images/100t.jpg'
              text='100 Thieves'
              label='100t'
              path='/gamelobby'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
