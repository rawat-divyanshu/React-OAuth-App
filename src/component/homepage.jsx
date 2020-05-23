import React, { Component } from "react";
import NavBar from "./NavBar/navbar";
import HomeCard from "./HomeCard/homecard";

class HomePage extends Component {
  constructor() {
    super();
    this.state = { id: "", name: "", emailId: "", imageUrl: "" };
  }

  githubLoginresponse = (response) => {};

  googleLoginResponse = (response) => {
    const _id = response.profileObj.googleId;
    const _name = response.profileObj.name;
    const _emailId = response.profileObj.email;
    const _imageUrl = response.profileObj.imageUrl;
    this.setState({
      id: _id,
      name: _name,
      emailId: _emailId,
      imageUrl: _imageUrl,
    });
  };

  facebookLoginResponse = (response) => {
    const _id = response.id;
    const _name = response.name;
    const _emailId = response.email;
    const _imageUrl = response.picture.data.url;
    this.setState({
      id: _id,
      name: _name,
      emailId: _emailId,
      imageUrl: _imageUrl,
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <HomeCard
          googleLoginResponse={this.googleLoginResponse}
          facebookLoginResponse={this.facebookLoginResponse}
        />
        <h1>UserId : {this.state.id}</h1>
        <h1>UserName : {this.state.name}</h1>
        <h1>EmailID : {this.state.emailId}</h1>
        <h1>ImageURL : {this.state.imageUrl}</h1>
      </React.Fragment>
    );
  }
}

export default HomePage;
