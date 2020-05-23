import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-info ">
        <a className="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/800px-Oauth_logo.svg.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />{" "}
          <b>OAuth App</b>
        </a>
      </nav>
    );
  }
}

export default NavBar;
