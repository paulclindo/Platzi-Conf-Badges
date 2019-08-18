import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import "./styles/Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar_brand-logo" src={logo} alt="" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
