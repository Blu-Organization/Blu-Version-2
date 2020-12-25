import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import AboutUs from './components/pages/AboutUs.js';
import ExploreMore from './components/pages/ExploreMore.js';
import LogIn from './components/pages/LogIn.js';
import SignUp from './components/pages/SignUp.js';
import GameLobby from './components/pages/GameLobby.js';
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
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/aboutus' component={AboutUs}></Route>
            <Route path='/exploremore' component={ExploreMore}></Route>
            <Route path='/log-in' component={LogIn}></Route>
            <Route path='/sign-up' component={SignUp}></Route>
            <Route path='/gamelobby' component={GameLobby}></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
