import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';
import styled from 'styled-components';

const Title = styled.h1`
  color: #f6f6f6;
`;

const Cards = () => {
  return (
    <div className='cards'>
      <Title>
        Search For Popular Games
      </Title>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/league.png'
              text='League Of Legends'
              label='MOBA'
              path='/gamelobby'
            />
            <CardItem
              src='images/overwatch.jpg'
              text='Overwatch'
              label='First Person Shooter'
              path='/gamelobby'
            />
            <CardItem
              src='images/val.jpg'
              text='Valorant'
              label='First Person Shooter'
              path='/gamelobby'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/amongus.jpg'
              text='Among Us'
              label='Party, social deduction'
              path='/gamelobby'
            />
            <CardItem
              src='images/tarkov.jpg'
              text='Escape From Tarkov'
              label='First Person Shooter'
              path='/gamelobby'
            />
            <CardItem
              src='images/callofduty.jpg'
              text='Call of Duty'
              label='First Person Shooter'
              path='/gamelobby'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;