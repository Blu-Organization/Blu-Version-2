import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem.js';

const MainContentContainer = styled.div`
  margin: 0 60px;
`;

const ExploreMore = styled.div`
  color: #fff;
  font-size: 12px;
  display: block;
  justify-content: center;
`;

const ExploreInput = styled.input`
  padding: 7px 20px;
  border-radius: 3px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  border: 1px solid #fff;
  vertical-align: middle;
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

const ExploreMoreTitle = styled.h1`
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
  color: #D2CEFF;

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
  margin-top: 5em;
  margin-bottom: 3em;
`;

const LeaderboardsContainer = styled.div`
  width: 100%;
  background: #1D1F22;
  display: flex;
  margin-bottom: 50px;
`;

const LeaderboardsTitle = styled.h3`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: #CE1155;
  letter-spacing: 2px;
`;

const RatingTitle = styled(LeaderboardsTitle)`
  color: #0fe77f;
`;

const BlueTitle = styled(LeaderboardsTitle)`
  color: #8AD5FF;
`;

const WinsTitle = styled(LeaderboardsTitle)`
  color: #FFD600;
`;

const RankImg = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const LeaderboardText = styled.span`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  color: #F0F0F0;
`;

const LeaderboardList = styled.ul`
  width: 100%;
  list-style: none;
`;

const LeaderboardEntry = styled.li`
  display: flex;
  padding: 0 20px 0 20px;
  align-items: center;
  border-bottom: 1px solid rgba(231,231,231,0.5);
`;

const TitleListEntry = styled(LeaderboardEntry)`
  padding: 20px;
`;

const Div10 = styled.div`
  min-width: 10%;
  text-align: center;
`;

const Div50 = styled.div`
  min-width: 50%;
  text-align: center;
`;

const Div50TeamName = styled(Div50)`
  min-height: 100px;
  padding-top: 34px;
  background: #232323;
`;

const Div15 = styled.div`
  min-width: 15%;
  text-align: center;
`;

const ExplorePage = () => {
  return (
    <div>
      <ExploreMore>
        <SearchForm>
          <ExploreInput
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
            <ExploreMoreTitle>
              <ExploreMoreText>Explore More</ExploreMoreText>
            </ExploreMoreTitle>
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

          <LeaderboardsContainer>
              <LeaderboardList>

                <TitleListEntry>
                  <Div10>
                    <LeaderboardsTitle>Rank</LeaderboardsTitle>
                  </Div10>
                  <Div10>
                    <RatingTitle>Rating</RatingTitle>
                  </Div10>
                  <Div50>
                    <BlueTitle>Team Name</BlueTitle>
                  </Div50>
                  <Div15>
                    <BlueTitle>Members</BlueTitle>
                  </Div15>
                  <Div15>
                    <WinsTitle>Wins</WinsTitle>
                  </Div15>
                </TitleListEntry>

                <LeaderboardEntry>
                  <Div10>
                    <RankImg src='images/radiant.png' alt='radiant' />
                  </Div10>
                  <Div10>
                    <LeaderboardText>736</LeaderboardText>
                  </Div10>
                  <Div50TeamName>
                    <LeaderboardText>Blu Gaming</LeaderboardText>
                  </Div50TeamName>
                  <Div15>
                    <LeaderboardText>28</LeaderboardText>
                  </Div15>
                  <Div15>
                    <LeaderboardText>100</LeaderboardText>
                  </Div15>
                </LeaderboardEntry>

                <LeaderboardEntry>
                  <Div10>
                    <RankImg src='images/radiant.png' alt='radiant' />
                  </Div10>
                  <Div10>
                    <LeaderboardText>712</LeaderboardText>
                  </Div10>
                  <Div50TeamName>
                    <LeaderboardText>100 Theives</LeaderboardText>
                  </Div50TeamName>
                  <Div15>
                    <LeaderboardText>120</LeaderboardText>
                  </Div15>
                  <Div15>
                    <LeaderboardText>90</LeaderboardText>
                  </Div15>
                </LeaderboardEntry>

                <LeaderboardEntry>
                  <Div10>
                    <RankImg src='images/radiant.png' alt='radiant' />
                  </Div10>
                  <Div10>
                    <LeaderboardText>680</LeaderboardText>
                  </Div10>
                  <Div50TeamName>
                    <LeaderboardText>Team Solo Mid</LeaderboardText>
                  </Div50TeamName>
                  <Div15>
                    <LeaderboardText>89</LeaderboardText>
                  </Div15>
                  <Div15>
                    <LeaderboardText>85</LeaderboardText>
                  </Div15>
                </LeaderboardEntry>

                <LeaderboardEntry>
                  <Div10>
                    <RankImg src='images/radiant.png' alt='radiant' />
                  </Div10>
                  <Div10>
                    <LeaderboardText>610</LeaderboardText>
                  </Div10>
                  <Div50TeamName>
                    <LeaderboardText>Team Envy</LeaderboardText>
                  </Div50TeamName>
                  <Div15>
                    <LeaderboardText>140</LeaderboardText>
                  </Div15>
                  <Div15>
                    <LeaderboardText>79</LeaderboardText>
                  </Div15>
                </LeaderboardEntry>

                <LeaderboardEntry>
                  <Div10>
                    <RankImg src='images/immortal.png' alt='immortal' />
                  </Div10>
                  <Div10>
                    <LeaderboardText>510</LeaderboardText>
                  </Div10>
                  <Div50TeamName>
                    <LeaderboardText>Team Liquid</LeaderboardText>
                  </Div50TeamName>
                  <Div15>
                    <LeaderboardText>92</LeaderboardText>
                  </Div15>
                  <Div15>
                    <LeaderboardText>59</LeaderboardText>
                  </Div15>
                </LeaderboardEntry>

                <LeaderboardEntry>
                  <Div10>
                    <RankImg src='images/immortal.png' alt='immortal' />
                  </Div10>
                  <Div10>
                    <LeaderboardText>480</LeaderboardText>
                  </Div10>
                  <Div50TeamName>
                    <LeaderboardText>Faze Clan</LeaderboardText>
                  </Div50TeamName>
                  <Div15>
                    <LeaderboardText>20</LeaderboardText>
                  </Div15>
                  <Div15>
                    <LeaderboardText>51</LeaderboardText>
                  </Div15>
                </LeaderboardEntry>

                <LeaderboardEntry>
                  <Div10>
                    <RankImg src='images/immortal.png' alt='immortal' />
                  </Div10>
                  <Div10>
                    <LeaderboardText>460</LeaderboardText>
                  </Div10>
                  <Div50TeamName>
                    <LeaderboardText>Sentinals</LeaderboardText>
                  </Div50TeamName>
                  <Div15>
                    <LeaderboardText>30</LeaderboardText>
                  </Div15>
                  <Div15>
                    <LeaderboardText>102</LeaderboardText>
                  </Div15>
                </LeaderboardEntry>

                <LeaderboardEntry>
                  <Div10>
                    <RankImg src='images/immortal.png' alt='immortal' />
                  </Div10>
                  <Div10>
                    <LeaderboardText>442</LeaderboardText>
                  </Div10>
                  <Div50TeamName>
                    <LeaderboardText>G2 Esports</LeaderboardText>
                  </Div50TeamName>
                  <Div15>
                    <LeaderboardText>59</LeaderboardText>
                  </Div15>
                  <Div15>
                    <LeaderboardText>23</LeaderboardText>
                  </Div15>
                </LeaderboardEntry>

              </LeaderboardList>

          </LeaderboardsContainer>

        </MainContentContainer>
      </ExploreMore>
    </div>
  )
}

export default ExplorePage;