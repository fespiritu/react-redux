import React, { Component } from  'react';
//import logo from './logo.svg';
import './App.css';
import {connect} from  'react-redux';


import {simpleClickAction} from './actions/simpleAction'

class App extends Component {

  handleClickAction = (event) => {
  this.props.simpleClickAction();   //this should match mapDispatchToProps and in /actions/simpleAction.js
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Redux Base Application</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleClickAction}>Test redux action</button>
        </p>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleClickAction: () => dispatch(simpleClickAction())
})
export default connect(mapStateToProps, mapDispatchToProps) (App);
