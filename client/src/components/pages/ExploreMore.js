import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import Footer from '../Footer.js';

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
  padding-right: 10px;
  padding-left: 10px;
  border: solid 1px var(--primary);
  border-radius: 2px;
  transition: all 0.3s ease-out;
  vertical-align: middle;
`;

const ExploreMore = () => {
  return (
    <div>
        <div>
          <div className='exploremore'>
            <SearchForm>
              <input
                className='explore-input'
                name='explore'
                type='explore'
                placeholder='Explore BLU'
              />
              <SearchButton>
                <SearchLogo src='images/search.png' alt='search'></SearchLogo>
              </SearchButton>
            </SearchForm>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ExploreMore;
