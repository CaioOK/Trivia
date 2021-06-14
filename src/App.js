import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './Pages/Login';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}
