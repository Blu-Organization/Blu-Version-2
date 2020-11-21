import React, { useEffect } from 'react';
import Footer from '../Footer.js';
import { connect } from 'react-redux';
import { fetchCurrentGame } from '../../actions/postActions.js';
import { bindActionCreators } from 'redux';
import GamePage from '../GamePage.js';

const NewsFeed = (props) => {

  useEffect(() => {

  }, [])

  return (
    <div>
      <GamePage currentGame={props.currentGame}/>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCurrentGame
  }, dispatch )
}

const mapStateToProps = (state) => ({
  currentGame: state.currentGameReducer.game
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
