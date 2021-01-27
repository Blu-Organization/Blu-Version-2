const db = require('./index.js');

const radiantRank = 'https://static.wikia.nocookie.net/valorant/images/2/24/TX_CompetitiveTier_Large_24.png/revision/latest/scale-to-width-down/256?cb=20200623203621';

const immortalRank = 'https://static.wikia.nocookie.net/valorant/images/8/86/TX_CompetitiveTier_Large_21.png/revision/latest/scale-to-width-down/256?cb=20200623203613';

const d3Rank = 'https://static.wikia.nocookie.net/valorant/images/1/11/TX_CompetitiveTier_Large_20.png/revision/latest/scale-to-width-down/256?cb=20200623203611';

const d2Rank = 'https://static.wikia.nocookie.net/valorant/images/3/32/TX_CompetitiveTier_Large_19.png/revision/latest/scale-to-width-down/256?cb=20200623203610';

const d1Rank = 'https://static.wikia.nocookie.net/valorant/images/b/b7/TX_CompetitiveTier_Large_18.png/revision/latest/scale-to-width-down/256?cb=20200623203609';

const p3Rank = 'https://static.wikia.nocookie.net/valorant/images/f/f2/TX_CompetitiveTier_Large_17.png/revision/latest/scale-to-width-down/256?cb=20200623203607';

const p2Rank = 'https://static.wikia.nocookie.net/valorant/images/a/a5/TX_CompetitiveTier_Large_16.png/revision/latest/scale-to-width-down/256?cb=20200623203606';

const p1Rank = 'https://static.wikia.nocookie.net/valorant/images/d/d3/TX_CompetitiveTier_Large_15.png/revision/latest/scale-to-width-down/256?cb=20200623203419';


const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const checkRank = () => {
  const ratingNumber = randomNumberGenerator(1300, 2500);
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
    image: 'https://ih1.redbubble.net/image.605886123.3520/flat,750x1000,075,f.u2.jpg'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'Buddies Like U',
    label: 'BLU',
    image: 'images/blu.png'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'Cloud Gaming',
    label: 'C9',
    image: 'images/c9.jpg'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'Team Liquid',
    label: 'TL',
    image: 'images/TL.png'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'Faze Clan',
    label: 'FC',
    image: 'images/faze.jpg'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: '100 Thieves',
    label: '100t',
    image: 'images/100t.jpg'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'Sentinals',
    label: 'SEN',
    image: 'images/senti.jpg'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'Team Solo Mid',
    label: 'TSM',
    image: 'images/tsm.png'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'GenG Legends',
    label: 'GenG',
    image: 'images/geng.png'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'G2 Esports',
    label: 'G2',
    image: 'images/g2.png'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  },
  {
    name: 'Team Envy',
    label: 'ENVY',
    image: 'images/envy.png'
    rank: checkRank().rank,
    rating: checkRank().ratingNum,
    members: randomNumberGenerator(100),
    wins: randomNumberGenerator(200);
  }

]


const CreateRandomTeams = () => {
  const teamArr = [];
  for (let i = 0; i < 100; i++) {

  }
}