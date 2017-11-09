import React, { Component } from 'react';
import { Nav } from '../config/router';

class App extends Component {ß
  render(){
    return <Nav/>
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch)
}

export default App;
