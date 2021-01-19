import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentGame } from '../actions/postActions.js';
import { bindActionCreators } from 'redux';

const CardItem = ({ src, text, label, path, fetchCurrentGame }) => {
  return (
    <div>
      <li className='cards__item' onClick={() => fetchCurrentGame(text)}>
        <Link className='cards__item__link' to={path} >
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img className='cards__item__img' src={src} alt='Valorant'></img>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
          </div>
        </Link>
      </li>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCurrentGame
  }, dispatch )
}

export default connect(() => ({}), mapDispatchToProps)(CardItem);
