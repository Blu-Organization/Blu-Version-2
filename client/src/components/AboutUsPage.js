import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className='aboutus'>
      <div className='aboutus-container-pauls'>
        <div className='aboutus-section'>
          <h2 className='aboutus-header'>Paul Choi</h2>
          <div className='aboutus-profile-pic-paul'></div>
        </div>
        <div className='aboutus-section'>
          <h2 className='aboutus-header2'>About Me</h2>
          <p className='aboutus-text'>
            I'm a passionate gamer, friend, and supporter! I love to be creative
            and help others acheive their goals. Oh i'm also a fullstack
            software engineer.
          </p>
        </div>
        <div className='aboutus-section'>
          <h2 className='aboutus-header2'>Contact Me</h2>
          <a
            href='https://www.instagram.com/paulchoiiii/'
            rel='noreferrer'
            className='social-icon-link instagram'
            target='_blank'
            aria-label='Instagram'>
            <i className='fab fa-instagram' />
          </a>
          <Link
            className='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'>
            <i className='fab fa-youtube' />
          </Link>
          <Link
            className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'>
            <i className='fab fa-twitter' />
          </Link>
          <a
            href='https://www.linkedin.com/in/paulsoonminchoi/'
            rel='noreferrer'
            className='social-icon-link linkedin'
            target='_blank'
            aria-label='LinkedIn'>
            <i className='fab fa-linkedin' />
          </a>
          <a
            className='social-icon-link github'
            href='https://github.com/PaulSoonMinChoi'
            rel='noreferrer'
            target='_blank'
            aria-label='Github'>
            <i className='fab fa-github' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
