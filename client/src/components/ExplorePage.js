import React, { useState } from 'react';
import styled from 'styled-components';
import './ExplorePage.css';
import CardItem from './CardItem.js';

const MainContentContainer = styled.div`
  margin: 0 60px;
`;

const SearchForm = styled.form`
  margin: 0 auto 40px auto;
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

const TitleContainer = styled.div`
  margin 20px;
`;

const Title = styled.h1`
  color: #EFEFEF;
  min-width: 190px;
  margin: 10px 0px 25px;
  letter-spacing: 2px;
  text-shadow: rgba(0,0,0,0.4) 0px 2px 2px;
`;

const LeaderboardTitle = styled(Title)`
  min-width: 380px;
`;

const ExploreMore = styled.h1`
  color: #EFEFEF;
  min-width: 182px;
  text-align: center;
  line-height: 0em;
  letter-spacing: 2px;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px;
`;

const ExploreMoreText = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background: #101025;
    border-radius: 6px;
  }
`;

const SmallLines = styled.div`
  border-bottom: 1px solid rgba(231, 231, 231, 0.5);
  width: 100%;
`;


const TitleText = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  padding-right: 25px;
  width: 100%;
`;

const TitleSubText = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #D3D3D3;
`;

const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ExploreMoreFooter = styled.div`
  display: flex;
  margin-top: 3em;
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


        <MainContentContainer>
          <TitleContainer>
            <TitleDiv>
              <Title>
                <TitleText>Teams</TitleText>
              </Title>
              <SmallLines></SmallLines>
            </TitleDiv>
            <TitleSubText>View all teams and their players</TitleSubText>
          </TitleContainer>

          <CardsList>
            <CardItem
              src='images/nrg.jpg'
              text='Energy Gaming'
              textClass='small__cards__item__text'
              label='NRG'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/blu.png'
              text='Buddies Like U'
              textClass='small__cards__item__text'
              label='BLU'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/c9.jpg'
              text='Cloud Gaming'
              textClass='small__cards__item__text'
              label='C9'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/TL.png'
              text='Team Liquid'
              textClass='small__cards__item__text'
              label='TL'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/faze.jpg'
              text='Faze Clan'
              textClass='small__cards__item__text'
              label='FC'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/100t.jpg'
              text='100 Thieves'
              textClass='small__cards__item__text'
              label='100t'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />


            <CardItem
              src='images/senti.jpg'
              text='Sentinals'
              textClass='small__cards__item__text'
              label='SEN'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/tsm.png'
              text='Team Solo Mid'
              textClass='small__cards__item__text'
              label='TSM'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/geng.png'
              text='GenG Legends'
              textClass='small__cards__item__text'
              label='GenG'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/g2.png'
              text='G2 Esports'
              textClass='small__cards__item__text'
              label='G2'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/envy.png'
              text='Team Envy'
              textClass='small__cards__item__text'
              label='ENVY'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/geng.png'
              text='GenG Legends'
              textClass='small__cards__item__text'
              label='GenG'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/g2.png'
              text='G2 Esports'
              textClass='small__cards__item__text'
              label='G2'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
            <CardItem
              src='images/envy.png'
              text='Team Envy'
              textClass='small__cards__item__text'
              label='ENVY'
              path='/gamelobby'
              classSize='small__cards__item__link'
            />
          </CardsList>

          <ExploreMoreFooter>
            <SmallLines></SmallLines>
            <ExploreMore>
              <ExploreMoreText>Explore More</ExploreMoreText>
            </ExploreMore>
            <SmallLines></SmallLines>
          </ExploreMoreFooter>

          <TitleContainer>
            <TitleDiv>
              <LeaderboardTitle>
                <TitleText>Leaderboards</TitleText>
              </LeaderboardTitle>
              <SmallLines></SmallLines>
            </TitleDiv>
            <TitleSubText>Explore the top 100 Valorant Teams with the highest rating </TitleSubText>
          </TitleContainer>

        </MainContentContainer>
      </div>
    </div>
  )
}

export default ExplorePage;