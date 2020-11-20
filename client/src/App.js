import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import AboutUs from './components/pages/AboutUs.js';
import ExploreMore from './components/pages/ExploreMore.js';
import LogIn from './components/pages/LogIn.js';
import SignUp from './components/pages/SignUp.js';
import NewsFeed from './components/pages/NewsFeed.js';
import { Provider } from 'react-redux';
import store from './store.js';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/aboutus' component={AboutUs}></Route>
            <Route path='/exploremore' component={ExploreMore}></Route>
            <Route path='/log-in' component={LogIn}></Route>
            <Route path='/sign-up' component={SignUp}></Route>
            <Route path='/newsfeed' component={NewsFeed}></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
