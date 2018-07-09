import React, { Component } from 'react';

import {connect} from 'react-redux'
import './Home.css';

class Home extends Component {
  render() {
      console.log(this.props.testing)
    return (
        
      <div className="App">
        <h1>Logged in</h1>
        {this.props.isLoading === false && 
            <h1>{this.props.testing}</h1>
        }
        
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {})(Home);