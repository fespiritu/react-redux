import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { connect } from "react-redux";

import { simpleClickAction, my_BUTTON_CLICK } from "./actions/simpleAction";

class App extends Component {
  handleClickAction = event => {
    this.props.simpleClickAction(); //this should match mapDispatchToProps and in /actions/simpleAction.js
  };

  handleSubmit = e => {
    this.props.my_BUTTON_CLICK();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Redux Base Application</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleClickAction}>Test redux action</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </p>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleClickAction: () => dispatch(simpleClickAction()),
  my_BUTTON_CLICK: () => dispatch(my_BUTTON_CLICK())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
