import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import Footer from '../Footer.js';
import { connect } from 'react-redux';
import { fetchPosts, increaseCount } from '../../actions/postActions.js';
import { bindActionCreators } from 'redux';

const NewsFeed = (props) => {

  useEffect(() => {
    props.fetchPosts();
  }, [])
  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

  // render() {
    return (
      <div>
        {/* <h1 className='newsfeed'>Game Lobby</h1>
        {props.posts.map(post => {
          return (
          <div>{post.title}</div>
          )
        })} */}
        <h1>{props.count}</h1>
        <button onClick={props.increaseCount}>+CLICK ME+</button>
        <Footer />
      </div>
    )
  // }
}

NewsFeed.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    increaseCount,
    fetchPosts
  }, dispatch )
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  count: state.count.count
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
