import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button2 } from './subComponents/index';
import './Navbar.css';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions/postActions.js';
import { bindActionCreators } from 'redux';
import { textColor, neutrals, secondaryFont, typeScale } from '../utils/index';

const Logo = styled.img`
  height: 112px;
  border-radius: 50%;
  border: 1px solid #5194fe;
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
  background: ${neutrals.dark[200]};
  position: absolute;
  right: -28px;
  width: 120px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  z-index: 10;
`;

const DropDownListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.span`
  color: ${textColor.subText[100]};
  margin-left: 10px;
  font-family: ${secondaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: ${typeScale.paragraph};
  line-height: 30px;
  cursor: pointer;
  text-decoration: none;
`;

const OverLay = styled.div`
  box-sizing: border-box;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${(props) => (props.active ? 'auto' : 'none')};
`;

const Navbar = ({ fetchCurrentUser, currentUser }) => {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMobileMenu = () => {
    setClicked(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
    fetchCurrentUser('');
  };

  const showDropDownMenu = () => {
    if (showDropDown) {
      return (
        <ProfileDropDown>
          <DropDownListContainer>
            <Link className='drop-down-list-item' to='/profile'>
              Profile
            </Link>
            <Link className='drop-down-list-item' to='/profile'>
              Friends
            </Link>
            <Link className='drop-down-list-item' to='/settings'>
              Settings
            </Link>
            <Link
              className='drop-down-list-item'
              to='/home'
              onClick={() => handleLogOut()}>
              Log Out
            </Link>
          </DropDownListContainer>
        </ProfileDropDown>
      );
    } else {
      return <></>;
    }
  };

  const buttonFunc = () => {
    if (button && currentUser === '') {
      return (
        <div>
          <Button2 location={'sign-up'} text={'Sign Up'}></Button2>
          <LengthOfButton></LengthOfButton>
        </div>
      );
    } else {
      return (
        <DropDown>
          <ProfileName
            onClick={() => {
              closeMobileMenu();
              setShowDropDown(true);
            }}>
            {currentUser}
          </ProfileName>
          {showDropDownMenu()}
        </DropDown>
      );
    }
  };

  const logInFunc = () => {
    if (button && currentUser === '') {
      return (
        <NavItem>
          <Link className='nav-links' to='/log-in' onClick={closeMobileMenu}>
            Log In
          </Link>
        </NavItem>
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            <Logo
              src='images/blulogoalone.png'
              alt='blulogo'
              className='Logo'></Logo>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <NavItem>
              <Link className='nav-links' to='/home' onClick={closeMobileMenu}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className='nav-links'
                to='/aboutus'
                onClick={closeMobileMenu}>
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className='nav-links'
                to='/exploremore'
                onClick={closeMobileMenu}>
                Explore
              </Link>
            </NavItem>
            {logInFunc()}
            <NavItem>{buttonFunc()}</NavItem>
          </ul>
        </div>
        <OverLay
          active={showDropDown}
          onClick={() => setShowDropDown(false)}></OverLay>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUserReducer.user,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchCurrentUser,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
