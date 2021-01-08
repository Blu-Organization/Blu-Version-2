import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar.js';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='aboutus'>
        <div className='aboutus-container-pauls'>
          <div className='aboutus-section'>
            <h2 className='aboutus-header'>Paul Choi</h2>
            <div className='aboutus-profile-pic-paul'></div>
          </div>
          <div className='aboutus-section'>
            <h2 className='aboutus-header2'>About Me</h2>
            <p className='aboutus-text'>I'm a passionate gamer, friend, and supporter! I love to be creative and help others acheive their goals. Oh i'm also a fullstack software engineer.</p>
          </div>
          <div className='aboutus-section'>
            <h2 className='aboutus-header2'>Contact Me</h2>
            <a
              href='https://www.instagram.com/paulchoiiii/'
              rel="noreferrer"
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <a
              href='https://www.linkedin.com/in/paulsoonminchoi/'
              rel="noreferrer"
              class='social-icon-link linkedin'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/PaulSoonMinChoi'
              rel="noreferrer"
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
          </div>
        </div>




        <div className='aboutus-container-tracys'>
          <div className='aboutus-section'>
            <h2 className='aboutus-header'>Tracy Tran</h2>
            <div className='aboutus-profile-pic-tracy'></div>
          </div>
          <div className='aboutus-section'>
            <h2 className='aboutus-header2'>About Me</h2>
            <p className='aboutus-text'>A blonde ninja once told me to believe in myself and to never give up so now here I am, a software engineer! My dream is to help bring "the next big game" to life so we can all enjoy it together, as gamers.</p>
          </div>
          <div className='aboutus-section'>
            <h2 className='aboutus-header2'>Contact Me</h2>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/tracetea/'
              rel="noreferrer"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/tracythutran/'
              rel="noreferrer"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/enobot'
              rel="noreferrer"
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
          </div>
        </div>




        <div className='aboutus-container-justins'>
          <div className='aboutus-section'>
            <h2 className='aboutus-header'>Justin Murakami</h2>
            <div className='aboutus-profile-pic-justin'></div>
          </div>
          <div className='aboutus-section'>
            <h2 className='aboutus-header2'>About Me</h2>
            <p className='aboutus-text'>I’m a software engineer, living and working in Los Angeles.  I love gaming and building supportive communities, and hope you will have as much fun using BLU as we had developing it!</p>
          </div>
          <div className='aboutus-section'>
            <h2 className='aboutus-header2'>Contact Me</h2>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/justin-murakami/'
              rel="noreferrer"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/JustinMurakami'
              rel="noreferrer"
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs;
