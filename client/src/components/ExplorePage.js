import React, { useState } from 'react';
import styled from 'styled-components';
import './ExplorePage.css';

const SearchForm = styled.form`
  margin: 0 auto;
  text-align: center;
`;

const SearchLogo = styled.img`
  height: 28px;
`;

const SearchButton = styled.button`
  background-color: transparent;
  color: #7FA7F4;
  padding-top: 4px;
  padding-bottom: 3px;
  padding-right: 8px;
  padding-left: 8px;
  border: solid 1px var(--primary);
  border-radius: 4px;
  transition: all 0.3s ease-out;
  vertical-align: middle;
`;

const Title = styled.h1`
  color: rgb(30, 97, 97);
  width: 100%;
  border-bottom: 1px solid rgba(231, 231, 231, 0.5);
  line-height: 0.1em;
  margin: 10px 0px 20px;
  letter-spacing: 5px;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px;
`;

const TitleText = styled.span`
  background: rgb(10 10 20);
`;

const ExplorePage = () => {
  return (
    <div>
      <div className='exploremore'>
        <SearchForm>
          <input
            className='explore-input'
            // onChange={(e) => handleInputChange(e)}
            name='explore'
            type='explore'
            placeholder='Explore BLU'
          />
          <SearchButton type='submit'>
            <SearchLogo src='images/search.png' alt='search'></SearchLogo>
          </SearchButton>
        </SearchForm>
        <Title>
          <TitleText>hello</TitleText>
        </Title>
      </div>
    </div>
  )
}

export default ExplorePage;