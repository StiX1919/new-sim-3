import React, { Component } from 'react';

import {connect} from 'react-redux'
import axios from 'axios'
import './Login.css';

import {Link} from 'react-router-dom'

import { loginInfo,
        getUser } from '../../ducks/reducer'
import { setTimeout } from 'timers';

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
          testWord: 'nothing',
          testPass: 'nothing',
          user: 'none',
          invalidLogin: false
        }

        this.inputTest = this.inputTest.bind(this)
        this.inputPass = this.inputPass.bind(this)

        this.goHome = this.goHome.bind(this)

    }
    inputTest(thing) {
        this.setState({testWord: thing.target.value})
    }
    inputPass(thing) {
        this.setState({testPass: thing.target.value})
    }
    goHome() {
        console.log('hit', this.props.userInfo)
        if(this.props.userInfo === false){
            this.setState({invalidLogin: true})
            return 
        }
        else if(this.props.userInfo && this.props.userInfo !== false ){
            console.log('hitter', this.props.userInfo)
            this.props.history.push('/Home')
        } else setTimeout( this.goHome, 1000 )
    }

    login(name, pass, callback) {
        this.setState({invalidLogin: false})
        this.props.getUser(name, pass)
        callback()
    }
    

  render() {
    return (
      <div className="App">
        <div className='login-box'>
            <img className='logo' src='https://previews.123rf.com/images/in8finity/in8finity1511/in8finity151100059/48956683-boy-baby-face-icon-logo-vector-illustration.jpg'/>
            <input onChange={e => this.inputTest(e)}></input>
            <input onChange={e => this.inputPass(e)}></input>
            <div className='login-buttons'>
                <Link to="/Home">  <button>Register</button>  </Link>
                <button onClick={() => this.login(this.state.testWord, this.state.testPass, this.goHome)}>Login</button>
            </div>
            {this.state.invalidLogin === true &&
            <h1>Invalid Username/password</h1>
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { loginInfo, getUser })(Login);