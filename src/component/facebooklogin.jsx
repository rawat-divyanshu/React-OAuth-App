import React from "react";
import FacebookLogin from "react-facebook-login";
import "./bootstrap-social.css";

const FacebookLoginButton = (props) => {
  const responseFacebook = (response) => {
    console.log(response);
    props.facebookLoginResponse(response);
  };
  return (
    <React.Fragment>
      <FacebookLogin
        appId="272446897472004"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="btn btn-sm btn-social btn-facebook"
        icon="fab fa-facebook"
      />
      {document.getElementById("demo")}
    </React.Fragment>
  );
};

export default FacebookLoginButton;
