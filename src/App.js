import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Game from './Pages/Game';
import Login from './Pages/Login';
import './App.css';
import Settings from './Pages/Settings';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/info-games" component={ Game } />
      </Switch>
    );
  }
}

export default App;
