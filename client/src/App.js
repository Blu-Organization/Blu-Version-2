import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/pages/Landing.js';
import Home from './components/pages/Home.js';
import AboutUs from './components/pages/AboutUs.js';
import ExploreMore from './components/pages/ExploreMore.js';
import LogIn from './components/pages/LogIn.js';
import SignUp from './components/pages/SignUp.js';
import GameLobby from './components/pages/GameLobby.js';
import Profile from './components/pages/Profile.js';
import { Provider } from 'react-redux';
import store from './store.js';
import Preload from './components/Preload';


function App() {

  window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    setTimeout(() => {
      preload.classList.add('preload-finish');
    }, 2000)
  })

  return (
    <Provider store={store} >
      <Preload />
      <div className="App">
        <Router>
            <Switch>
              <Route path='/' exact component={Landing}></Route>
              <Route path='/home' component={Home}></Route>
              <Route path='/aboutus' component={AboutUs}></Route>
              <Route path='/exploremore' component={ExploreMore}></Route>
              <Route path='/log-in' component={LogIn}></Route>
              <Route path='/sign-up' component={SignUp}></Route>
              <Route path='/gamelobby' component={GameLobby}></Route>
              <Route path='/profile' component={Profile}></Route>
            </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
