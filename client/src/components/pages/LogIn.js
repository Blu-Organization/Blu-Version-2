import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import { connect } from 'react-redux';

const LogIn = (props) => {
  return (
    <div>
      <h1 className='log-in'>Log In</h1>
      {/* <h1>{props.count}</h1> */}
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count.count
})

export default connect(mapStateToProps, {})(LogIn);