import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentGame } from '../actions/postActions.js';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

const CardsItemInfo = styled.div`
  padding: ${(props) => props.small === 'small__cards__item__text' ? '15px 30px 20px' : '20px 30px 30px'};
  background-color: #d5d5d5;
  text-align: center;
`;


const CardItem = ({ src, text, textClass = 'cards__item__text', label, path, fetchCurrentGame, classSize = 'cards__item__link' }) => {

  return (
    <div>
      <li className='cards__item' onClick={() => fetchCurrentGame(text)}>
        <Link className={classSize} to={path} >
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img className='cards__item__img' src={src} alt='Valorant'></img>
          </figure>
          <CardsItemInfo small={textClass}>
            <h5 className={textClass}>{text}</h5>
            <h4>Members: 20</h4>
          </CardsItemInfo>
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
