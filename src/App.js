import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login/Login'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
