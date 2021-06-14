import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import './App.css';
import Settings from './Pages/Settings';
import InfoGames from './Pages/InfoGames';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/settings" component={ Settings } />
          <Route exact path="/info-games" component={ InfoGames } />
        </Switch>
      </div>
    );
  }
}

export default App;
