import React, { Component } from 'react';

import {connect} from 'react-redux'
import axios from 'axios'
import './Login.css';

import {Link} from 'react-router-dom'

import {test} from '../../ducks/reducer'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
          testWord: 'nothing'
        }

        this.inputTest = this.inputTest.bind(this)
        this.newTest = this.newTest.bind(this)

    }
    inputTest(thing) {
        this.setState({testWord: thing.target.value})
    }

    newTest() {
        axios.get('http://localhost:3000/api/newTest/')
    }

  render() {
    return (
      <div className="App">
        <div className='login-box'>
            <img className='logo' src='https://previews.123rf.com/images/in8finity/in8finity1511/in8finity151100059/48956683-boy-baby-face-icon-logo-vector-illustration.jpg'/>
            <input onChange={e => this.inputTest(e)}></input>
            <input placeholder={this.state.testWord}></input>
            <div className='login-buttons'>
                <Link to="/Home">  <button onClick={() => this.props.test()}>Register</button>  </Link>
                <Link to="/Home">  <button>Login</button>  </Link>
                <button onClick={() => this.newTest()}>Test</button>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {test})(Login);