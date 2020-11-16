import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>
        Search For Popular Games
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/league.png'
              text='League Of Legends'
              label='MOBA'
              path='/newsfeed'
            />
            <CardItem
              src='images/overwatch.jpg'
              text='Overwatch'
              label='First Person Shooter'
              path='/newsfeed'
            />
            <CardItem
              src='images/val.jpg'
              text='Valorant'
              label='First Person Shooter'
              path='/newsfeed'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/val.jpg'
              text='Valorant'
              label='First Person Shooter'
              path='/newsfeed'
            />
            <CardItem
              src='images/overwatch.jpg'
              text='Overwatch'
              label='First Person Shooter'
              path='/newsfeed'
            />
            <CardItem
              src='images/league.png'
              text='League Of Legends'
              label='MOBA'
              path='/newsfeed'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;