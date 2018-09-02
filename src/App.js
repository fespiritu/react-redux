import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { connect } from "react-redux";

import { simpleClickAction, my_BUTTON_CLICK } from "./actions/simpleAction";
import { constants } from "./constants";
import MenuItem from "./components/common/menuItem";
import * as Icon from "react-feather";

const menus = [
  {
    dataFeather: <Icon.Home />,
    menuName: "Dashboard",
    srOnly: "sr-only",
    currentSrOnly: "(current)",
    isActiveLink: "nav-link active"
  },
  {
    dataFeather: <Icon.File />,
    menuName: "Orders",
    srOnly: "",
    currentSrOnly: "",
    isActiveLink: "nav-link"
  },
  {
    dataFeather: <Icon.ShoppingCart />,
    menuName: "Products",
    srOnly: "",
    currentSrOnly: "",
    isActiveLink: "nav-link"
  }
];

class App extends Component {
  handleClickAction = event => {
    this.props.simpleClickAction(); //this should match mapDispatchToProps and in /actions/simpleAction.js
  };

  handleSubmit = e => {
    this.props.my_BUTTON_CLICK();
  };
  render() {
    console.log("menus: ", menus);
    return (
      <div className="App">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href={constants.HREF}
          >
            {constants.COMPANY}
          </a>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          >
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href={constants.HREF}>
                Sign out
              </a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row" />
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                {menus.map(item => (
                  <li className="nav-item" key={item.menuName}>
                    <MenuItem {...item} />
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
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
