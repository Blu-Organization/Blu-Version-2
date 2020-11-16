import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const CardItem = () => {
  return (
    <div>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img className='cards__item__img' src='/' alt='Valorant'></img>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'></h5>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default CardItem;
