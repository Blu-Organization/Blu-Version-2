import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem.js';
import axios from 'axios';
import {
  textColor,
  neutrals,
  colors,
  primaryFont,
  secondaryFont,
  typeScale,
} from '../utils/index';

const MainContentContainer = styled.div`
  margin: 0 60px;
`;

const ExploreMore = styled.div`
  color: ${textColor[100]};
  font-size: ${typeScale.helperText};
  display: block;
  justify-content: center;
`;

const ExploreInput = styled.input`
  padding: 7px 20px;
  border-radius: 3px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: ${typeScale.paragraph};
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
  color: ${colors.primary};
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
  color: ${textColor[100]};
  min-width: 190px;
  margin: 10px 0px 25px;
  letter-spacing: 2px;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px;
`;

const LeaderboardTitle = styled(Title)`
  min-width: 380px;
`;

const ExploreMoreTitle = styled.h1`
  color: ${textColor[100]};
  min-width: 400px;
  text-align: center;
  line-height: 0em;
  letter-spacing: 2px;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px;
`;

const ExploreMoreText = styled.span`
  font-family: ${secondaryFont};
  font-style: normal;
  font-weight: 500;
  font-size: ${typeScale.header5};
  padding: 15px;
  cursor: pointer;
  color: #d2ceff;

  &:hover {
    background: ${neutrals.dark[300]};
    border-radius: 6px;
  }
`;

const ExploreMoreFromTeam = styled(ExploreMoreTitle)`
  min-width: 313px;
`;

const SmallLines = styled.div`
  border-bottom: 1px solid rgba(231, 231, 231, 0.5);
  width: 100%;
`;

const TitleText = styled.span`
  font-family: ${primaryFont};
  font-style: normal;
  font-size: ${typeScale.header1};
  padding-right: 25px;
  width: 100%;
`;

const TitleSubText = styled.span`
  font-family: ${secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: ${typeScale.header3};
  line-height: 38px;
  color: #d3d3d3;
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
  background: ${neutrals.dark[400]};
  display: flex;
  margin-bottom: 50px;
`;

const LeaderboardsTitle = styled.h3`
  font-family: ${secondaryFont};
  font-style: normal;
  font-weight: 800;
  font-size: ${typeScale.header4};
  line-height: 29px;
  color: ${textColor.subText[100]};
  letter-spacing: 2px;
`;

const RatingTitle = styled(LeaderboardsTitle)`
  color: ${textColor.subText[200]};
`;

const BlueTitle = styled(LeaderboardsTitle)`
  color: ${textColor.subText[300]};
`;

const WinsTitle = styled(LeaderboardsTitle)`
  color: ${textColor.subText[400]};
`;

const RankImg = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const LeaderboardText = styled.span`
  font-family: ${secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: ${typeScale.header5};
  line-height: 29px;
  color: ${textColor[100]};
`;

const LeaderboardRankText = styled(LeaderboardText)`
  font-size: ${typeScale.header3};
  color: ${textColor.subText[100]};
`;

const LeaderboardList = styled.ul`
  width: 100%;
  list-style: none;
`;

const LeaderboardEntry = styled.li`
  display: flex;
  padding: 0 20px 0 20px;
  align-items: center;
  border-bottom: 1px solid rgba(231, 231, 231, 0.5);
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
  background: ${neutrals.dark[500]};
`;

const Div15 = styled.div`
  min-width: 15%;
  text-align: center;
`;

const ExplorePage = () => {
  const [teamData, setTeamData] = useState([]);
  const [top10Teams, setTop10Teams] = useState([]);
  const [smallTeamData, setSmallTeamData] = useState([]);

  useEffect(() => {
    // fetch('https://na.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-946cae44-0e44-4f0a-a843-3eca5a317588')
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     setTest(data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   })
    getTeamData();
    getTop10Teams();
  }, []);

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getTeamData = () => {
    axios
      .get('/api/teams')
      .then((res) => {
        let cardArr = [];
        for (let i = 0; i < 14; i++) {
          const teamCard =
            res.data.rows[randomNumberGenerator(0, res.data.rows.length - 1)];
          cardArr.push(teamCard);
        }
        setSmallTeamData(cardArr);
        setTeamData(res.data.rows);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getTop10Teams = () => {
    axios
      .get('/api/top10teams')
      .then((res) => {
        setTop10Teams(res.data.rows);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const displayTeamCards = () => {
    return smallTeamData.map((team, index) => {
      return (
        <CardItem
          key={index}
          src={team.teamimage}
          text={team.teamname}
          textClass='small__cards__item__text'
          label={team.tagname}
          path='/gamelobby'
          classSize='small__cards__item__link'
        />
      );
    });
  };

  //Add star for top 3 or for just top 1 team.

  const displayTeamLeaderboards = () => {
    return top10Teams.map((team, index) => {
      return (
        <LeaderboardEntry>
          <Div10>
            <LeaderboardRankText>{index + 1}</LeaderboardRankText>
            {/* <RankImg src={team.teamrank} alt='radiant' /> */}
          </Div10>
          <Div10>
            <LeaderboardText>{team.teamrating}</LeaderboardText>
          </Div10>
          <Div50TeamName>
            <LeaderboardText>{team.teamname}</LeaderboardText>
          </Div50TeamName>
          <Div15>
            <LeaderboardText>{team.teammembers}</LeaderboardText>
          </Div15>
          <Div15>
            <LeaderboardText>{team.teamwins}</LeaderboardText>
          </Div15>
        </LeaderboardEntry>
      );
    });
  };

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

          <CardsList>{displayTeamCards()}</CardsList>

          <ExploreMoreFooter>
            <SmallLines></SmallLines>
            <ExploreMoreFromTeam>
              <ExploreMoreText>Explore More From Teams</ExploreMoreText>
            </ExploreMoreFromTeam>
            <SmallLines></SmallLines>
          </ExploreMoreFooter>

          <TitleContainer>
            <TitleDiv>
              <LeaderboardTitle>
                <TitleText>Leaderboards</TitleText>
              </LeaderboardTitle>
              <SmallLines></SmallLines>
            </TitleDiv>
            <TitleSubText>
              Explore the top 100 Valorant Teams with the highest rating{' '}
            </TitleSubText>
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

              {displayTeamLeaderboards()}
            </LeaderboardList>
          </LeaderboardsContainer>

          <ExploreMoreFooter>
            <SmallLines></SmallLines>
            <ExploreMoreTitle>
              <ExploreMoreText>Explore More From Leaderboards</ExploreMoreText>
            </ExploreMoreTitle>
            <SmallLines></SmallLines>
          </ExploreMoreFooter>
        </MainContentContainer>
      </ExploreMore>
    </div>
  );
};

export default ExplorePage;
