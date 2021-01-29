const db = require('./index.js');

const radiantRank = 'images/radiant.png';

const immortalRank = 'images/immortal.png';

const d3Rank = 'images/d3rank.png';

const d2Rank = 'images/d2rank.png';

const d1Rank = 'images/d1rank.png';

const p3Rank = 'images/p3rank.png';

const p2Rank = 'images/p2rank.png';

const p1Rank = 'images/p1rank.png';


const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const checkRankAndRating = () => {
  const ratingNumber = randomNumberGenerator(1300, 2200);
  if (ratingNumber >= 2000) {
    return { rank: radiantRank, ratingNum: ratingNumber};
  } else if (ratingNumber < 2000 && ratingNumber >= 1900) {
    return { rank: immortalRank, ratingNum: ratingNumber};
  } else if (ratingNumber < 1900 && ratingNumber >= 1800) {
    return { rank: d3Rank, ratingNum: ratingNumber};
  } else if (ratingNumber < 1800 && ratingNumber >= 1700) {
    return { rank: d2Rank, ratingNum: ratingNumber};
  } else if (ratingNumber < 1700 && ratingNumber >= 1600) {
    return { rank: d1Rank, ratingNum: ratingNumber};
  } else if (ratingNumber < 1600 && ratingNumber >= 1500) {
    return { rank: p3Rank, ratingNum: ratingNumber};
  } else if (ratingNumber < 1500 && ratingNumber >= 1400) {
    return { rank: p2Rank, ratingNum: ratingNumber};
  } else if (ratingNumber < 1400 && ratingNumber >= 1300) {
    return { rank: p1Rank, ratingNum: ratingNumber};
  }
}


const teams = [
  {
    name: 'Energy Gaming',
    label: 'NRG',
    image: 'https://ih1.redbubble.net/image.605886123.3520/flat,750x1000,075,f.u2.jpg',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'Buddies Like U',
    label: 'BLU',
    image: 'images/blu.png',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'Cloud Gaming',
    label: 'C9',
    image: 'images/c9.jpg',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'Team Liquid',
    label: 'TL',
    image: 'images/TL.png',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'Faze Clan',
    label: 'FC',
    image: 'images/faze.jpg',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: '100 Thieves',
    label: '100t',
    image: 'images/100t.jpg',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'Sentinals',
    label: 'SEN',
    image: 'images/senti.jpg',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'Team Solo Mid',
    label: 'TSM',
    image: 'images/tsm.png',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'GenG Legends',
    label: 'GenG',
    image: 'images/geng.png',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'G2 Esports',
    label: 'G2',
    image: 'images/g2.png',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  },
  {
    name: 'Team Envy',
    label: 'ENVY',
    image: 'images/envy.png',
    rankAndRating: checkRankAndRating(),
    members: randomNumberGenerator(0, 100),
    wins: randomNumberGenerator(0, 200)
  }

]


const createRandomTeams = () => {
  const teamArr = [];

  for (let i = 0; i < 100; i++) {
    teamArr.push(teams[randomNumberGenerator(0, 10)])
  }

  return teamArr;
}

const insertTeamsData = () => {
  const teamData = createRandomTeams();

  teamData.forEach((team) => {
    db.query(`INSERT INTO teams(
      teamname,
      teamimage,
      tagname,
      teammembers,
      teamrating,
      teamrank,
      teamwins
      )
    VALUES(
      '${team.name}',
      '${team.image}',
      '${team.label}',
      ${team.members},
      ${team.rankAndRating.ratingNum},
      '${team.rankAndRating.rank}',
      ${team.wins}
    )`,  (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('TEAM SEED SUCCESS!');
      }
    });
  })
}


insertTeamsData();