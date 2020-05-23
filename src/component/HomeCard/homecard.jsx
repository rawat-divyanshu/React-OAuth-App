import React, { Component } from "react";
import "../bootstrap-social.css";
import GoogleLoginButton from "./../googlelogin";
import GithubLoginButton from "./../githublogin";
import FacebookLoginButton from "./../facebooklogin";

class HomeCard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <br></br>
        <br></br>
        <div className="card mb-5" style={{ minWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/800px-Oauth_logo.svg.png"
                className="card-img"
                alt="OAuth Image"
              />
            </div>
            <div className="card text-white bg-info mb-3 col-md-8">
              <div className="card-body">
                <h1 className="card-title text-center">
                  <u>OAuth App</u>
                </h1>
                <br></br>
                <h3 className="card-text">
                  Select any of the below given OAuth service provider to Sign
                  In:
                </h3>
                <br></br>
                <br></br>
                <div className="text-center">
                  <GoogleLoginButton
                    googleLoginResponse={this.props.googleLoginResponse}
                  />
                  <br></br>
                  <br></br>
                  {/* <a className="btn btn-sm btn-social btn-facebook">
                    <span className="fab fa-facebook"></span> Sign in with
                    Facebook
                  </a> */}
                  <FacebookLoginButton
                    facebookLoginResponse={this.props.facebookLoginResponse}
                  />
                  <br></br>
                  <br></br>
                  <a className="btn btn-sm btn-social btn-linkedin">
                    <span className="fab fa-linkedin"></span> Sign in with
                    LinkedIn
                  </a>
                  <br></br>
                  <br></br>
                  <GithubLoginButton
                    githubLoginResponse={this.props.githubLoginResponse}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCard;
