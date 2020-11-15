import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button.js'
import './Navbar.css';

const Logo = styled.img`
  height: 140px;
  @media (max-width: 960px) {
    position: absolute;
    top: 0;
  }
`;

const MenuContainer = styled.div`
  cursor: pointer;
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavMenuContainer = styled.div`
  margin-top: 4rem;
`;



const Navbar = () => {

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

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);


  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><Logo src='images/blulogoalone.png' alt='blulogo' className='Logo'></Logo></Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <NavItem>
              <Link className='nav-links' to='/' onClick={closeMobileMenu}>Home</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-links' to='/aboutus' onClick={closeMobileMenu}>About Us</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-links' to='/addfriend' onClick={closeMobileMenu}>Add Friend</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-links' to='/log-in' onClick={closeMobileMenu}>Log In</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-links-mobile' to='/sign-up' onClick={closeMobileMenu}>Sign Up</Link>
            </NavItem>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
