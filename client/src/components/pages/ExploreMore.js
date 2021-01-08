import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../Footer.js';
import Navbar from '../Navbar.js';

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

  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(true);
  const [users, setUsers] = useState([{ userName: 'John123', firstName: 'John', lastName: 'Doe'}, { userName: 'Jane123', firstName: 'Jane', lastName: 'Smith'}, { userName: 'Sarah123', firstName: 'Sarah', lastName: 'Connor'}, { userName: 'Steve123', firstName: 'Steven', lastName: 'Universe'}]);
  const [games, setGames] = useState([{ gameName: 'League of Legends' }, { gameName:'BattleField' } , { gameName: 'Among Us' }, { gameName: 'Fortnite' } , { gameName: 'Escape From Tarkov' }, { gameName: 'Valorant' }]);

  const [loggedIn, setLoggedIn] = useState(true);

  //axios calls
  const getUsersAndGames = (string) => {
    axios.all([
      axios.get(`/searchUsers/${string}`),
      axios.get(`/searchGames/${string}`)
    ])
    .then(axios.spread((searchUsers, searchGames) => {
      setUsers(searchUsers.data);
      setGames(searchGames.data);
    }))
  }

  //handle input change
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  }

  //handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //axios calls and state update
    getUsersAndGames(searchText);
    //render result lists
    //setIsSearching(true);
  }

  const searchResults = () => {
    //render results drop down
    if (isSearching) {
      return (
        <div>
          <p>
            Users:
          </p>
          <ul>
            {users.map((user, index) => {
              return(
                <p>{user.userName} ({user.firstName} {user.lastName})</p>
              )
            })}
          </ul>
          <p>
            Games:
          </p>
          <ul>
            {games.map((game, index) => {
              return(
                <p>{game.gameName}</p>
              )
            })}
          </ul>
        </div>
      )
    }
  }

  const newsFeed = () => {
    //render results drop down
    if (loggedIn) {
      return (
        <div>
          <p>LOGGED IN - News Feed</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>NOT LOGGED IN - News Feed</p>
        </div>
      )
    }
  }


  return (
    <div>
      <Navbar />
        <div>
          <div className='exploremore'>
            <SearchForm onSubmit={(e) => {handleFormSubmit(e)}}>
              <input
                className='explore-input'
                onChange={(e) => handleInputChange(e)}
                name='explore'
                type='explore'
                placeholder='Explore BLU'
              />
              <SearchButton type='submit'>
                <SearchLogo src='images/search.png' alt='search'></SearchLogo>
              </SearchButton>
            </SearchForm>
            {searchResults()}
            {newsFeed()}
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ExploreMore;
