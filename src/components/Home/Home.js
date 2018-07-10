import React, { Component } from 'react';

import {connect} from 'react-redux'
import './Home.css';

import {getUser} from '../../ducks/reducer'

class Home extends Component {

  componentDidMount(){
    if(!this.props.userInfo) {
      this.props.history.push('/')
    }
  }

  render() {
    return (
        
      <div className="App">
        {this.props.userInfo &&
        <div>
          <h1>hello</h1>
          <h1>{this.props.userInfo.name}</h1>
        </div>
        }
        <h1>Logged in</h1>
        
        
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {getUser})(Home);