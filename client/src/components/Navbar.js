import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button2 from './subComponents/Button2.js'
import './Navbar.css';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions/postActions.js';
import { bindActionCreators } from 'redux';

const Logo = styled.img`
  height: 140px;
  border-radius: 50%;
  @media (max-width: 960px) {
    position: absolute;
    top: 0;
    margin-left: 30px;
  }
`;

const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

const LengthOfButton = styled.div`
  width: 150px;
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileDropDown = styled.div`
  background: lightblue;
  position: absolute;
  right: -5px;
  width: 100px;
  border: 1px solid black;
  border-radius: 5px;
`;

const DropDownListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


const Navbar = ({ currentUser }) => {

  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClicked(!clicked)
  }

  const closeMobileMenu = () => {
    setClicked(false);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  const buttonFunc = () => {
    if (button && currentUser === '') {
      return (
        <div>
          <Button2 location={'sign-up'} text={'Sign Up'}></Button2>
          <LengthOfButton></LengthOfButton>
        </div>
      )
    } else {
      return (
        <DropDown>
          <span className='profile-name' onClick={closeMobileMenu}>{currentUser}</span>
          <ProfileDropDown>
            <DropDownListContainer>
              <Link to='/profile'>Profile</Link>
              <Link to='/profile'>Friends</Link>
              <Link to='/settings'>Settings</Link>
              <Link to='/settings'>Log Out</Link>
            </DropDownListContainer>
          </ProfileDropDown>
        </DropDown>
      )
    }
  }

  const logInFunc = () => {
    if (button && currentUser === '') {
      return (
        <Link className='nav-links' to='/log-in' onClick={closeMobileMenu}>Log In</Link>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);


  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}><Logo src='images/blulogoalone.png' alt='blulogo' className='Logo'></Logo></Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <NavItem>
              <Link className='nav-links' to='/home' onClick={closeMobileMenu}>Home</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-links' to='/aboutus' onClick={closeMobileMenu}>About Us</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-links' to='/exploremore' onClick={closeMobileMenu}>Explore</Link>
            </NavItem>
            <NavItem>
              {logInFunc()}
            </NavItem>
            <NavItem>
              {buttonFunc()}
            </NavItem>
          </ul>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUserReducer.user
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchCurrentUser
  }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
