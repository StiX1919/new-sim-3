import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Login.css';

import {Link} from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className='login-box'>
            <img className='logo' src='https://previews.123rf.com/images/in8finity/in8finity1511/in8finity151100059/48956683-boy-baby-face-icon-logo-vector-illustration.jpg'/>
            <input></input>
            <input></input>
            <div className='login-buttons'>
                <Link to="/Home">  <button>Register</button>  </Link>
                <Link to="/Home">  <button>Login</button>  </Link>
            </div>
        </div>

      </div>
    );
  }
}

export default Login;