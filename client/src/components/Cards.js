import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';
import styled from 'styled-components';
import smallBorder from '../images/smallborder.svg';
import extrasmallBorder from '../images/extrasmallborder.svg';


const Title = styled.h1`
  position: absolute;
  color: #F5DBE2;
  font-family: SF Pro Display;
  font-style: italic;
  font-weight: 600;
  font-size: 45px;
  line-height: 40px;
  text-align: center;
  z-index: 31;
  left: 30.5%;
  top: 2%;
  text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
  10px 20px 5px rgba(0,0,0,0.05),
  -10px 20px 5px rgba(0,0,0,0.05);
  background: url(${smallBorder}) no-repeat;
  height: 80px;
  width: 660px;
  padding: 15px;
  transition: all 1s ease;

  @media (max-width: 1240px) {
    left: 23.5%;
  }

  @media (max-width: 960px) {
    left: 15.5%;
  }

  @media (max-width: 800px) {
    font-size: 25px;
    height: 50px;
    width: 390px;
    padding: 5px;
    background: url(${extrasmallBorder}) no-repeat;
    top: 4%;
  }

  @media (max-width: 500px) {
    width: 290px;
    top: 2%;
  }
`;

const Cards = () => {
  return (
    <div className='cards'>
      <Title>
        Newly Created Valorant Teams
      </Title>
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
  )
}

export default Cards;