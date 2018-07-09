import React, { Component } from 'react';

import {connect} from 'react-redux'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.test}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {})(Home);